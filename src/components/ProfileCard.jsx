import React, { useEffect, useRef, useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import "./ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),rgba(76,222,245,var(--card-opacity)) 4%,rgba(27,123,179,calc(var(--card-opacity)*0.75)) 10%,rgba(30,58,138,calc(var(--card-opacity)*0.5)) 50%,rgba(30,58,138,0) 100%),radial-gradient(35% 52% at 55% 20%,rgba(76,222,245,0.8) 0%,rgba(27,123,179,0) 100%),radial-gradient(100% 100% at 50% 50%,rgba(76,222,245,0.3) 1%,rgba(27,123,179,0) 76%),conic-gradient(from 124deg at 50% 50%,#4cdef5 0%,#1b7bb3 40%,#1b7bb3 60%,#4cdef5 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,rgba(0,0,0,0.9) 0%,rgba(76,222,245,0.1) 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
};

const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const round = (value, precision = 3) =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value,
  fromMin,
  fromMax,
  toMin,
  toMax
) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = false,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  contactText = "Contact",
  showUserInfo = true,
  linkedin = "",
  github = "",
  phone = "",
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const contactBtnRef = useRef(null);
  const contactMenuRef = useRef(null);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  // The 3D tilt only makes sense with a real pointer — skip it on touch,
  // which also removes 18 idle rAF loops on the Team page.
  const [canTilt] = useState(
    () =>
      enableTilt &&
      typeof window !== "undefined" &&
      window.matchMedia?.("(hover: hover) and (pointer: fine)").matches
  );

  // Close the menu on outside click, Escape, scroll or resize.
  useEffect(() => {
    if (!showContactMenu) return undefined;
    const close = () => setShowContactMenu(false);
    const onClick = (e) => {
      if (
        contactMenuRef.current &&
        !contactMenuRef.current.contains(e.target) &&
        !contactBtnRef.current?.contains(e.target)
      ) {
        close();
      }
    };
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [showContactMenu]);

  const animationHandlers = useMemo(() => {
    if (!canTilt) return null;

    let rafId = null;

    const updateCardTransform = (
      offsetX,
      offsetY,
      card,
      wrap
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration,
      startX,
      startY,
      card,
      wrap
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [canTilt]);

  const handlePointerMove = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      // Check if the pointer is over the contact menu
      if (showContactMenu && contactMenuRef.current) {
        const menuRect = contactMenuRef.current.getBoundingClientRect();
        const isOverMenu = (
          event.clientX >= menuRect.left &&
          event.clientX <= menuRect.right &&
          event.clientY >= menuRect.top &&
          event.clientY <= menuRect.bottom
        );
        if (isOverMenu) return; // Don't update transform when over menu
      }

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers, showContactMenu]
  );

  const handlePointerEnter = useCallback((event) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    // Don't activate tilt if entering via contact menu
    if (showContactMenu && contactMenuRef.current) {
      const menuRect = contactMenuRef.current.getBoundingClientRect();
      const isFromMenu = (
        event.clientX >= menuRect.left &&
        event.clientX <= menuRect.right &&
        event.clientY >= menuRect.top &&
        event.clientY <= menuRect.bottom
      );
      if (isFromMenu) return;
    }

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers, showContactMenu]);

  const handlePointerLeave = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      // Don't deactivate if leaving to contact menu
      if (showContactMenu && contactMenuRef.current) {
        const menuRect = contactMenuRef.current.getBoundingClientRect();
        const isToMenu = (
          event.clientX >= menuRect.left &&
          event.clientX <= menuRect.right &&
          event.clientY >= menuRect.top &&
          event.clientY <= menuRect.bottom
        );
        if (isToMenu) return;
      }

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers, showContactMenu]
  );

  useEffect(() => {
    if (!canTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);

    // Rest the card in a subtle static pose. (The old intro "sweep" ran a
    // 1.5s rAF loop per card — 18 at once on the Team page — for a flourish
    // most users never saw.)
    animationHandlers.updateCardTransform(
      wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET,
      ANIMATION_CONFIG.INITIAL_Y_OFFSET,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    canTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
  ]);

  const cardStyle = useMemo(
    () =>
    ({
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--behind-gradient": showBehindGradient
        ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback((e) => {
    e.stopPropagation();
    setShowContactMenu((v) => {
      if (!v && contactBtnRef.current) {
        const r = contactBtnRef.current.getBoundingClientRect();
        setMenuPos({ top: r.top - 10, left: r.left + r.width / 2 });
      }
      return !v;
    });
  }, []);

  const handleLinkClick = useCallback((e) => {
    e.stopPropagation(); // Prevent event bubbling
    // Link will handle its own navigation
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              onError={(e) => {
                const target = e.target;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <button
                    ref={contactBtnRef}
                    className="pc-contact-btn"
                    onClick={handleContactClick}
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={showContactMenu}
                    aria-label={`Contact ${name || "user"}`}
                    style={{ position: "relative", zIndex: 10, pointerEvents: "auto" }}
                  >
                    {contactText}
                  </button>
                  {showContactMenu &&
                    createPortal(
                    <div
                      ref={contactMenuRef}
                      role="menu"
                      style={{
                        position: "fixed",
                        top: menuPos.top,
                        left: menuPos.left,
                        transform: "translate(-50%, -100%)",
                        background: "rgba(18, 18, 21, 0.98)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid #4cdef5",
                        borderRadius: 8,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                        padding: 12,
                        zIndex: 120,
                        pointerEvents: "auto",
                        minWidth: 150,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        alignItems: "stretch",
                      }}
                      onMouseEnter={(e) => e.stopPropagation()}
                      onMouseLeave={(e) => e.stopPropagation()}
                    >
                      {linkedin && (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          style={{ 
                            color: '#4cdef5', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 8, 
                            textDecoration: 'none', 
                            fontWeight: 500,
                            padding: '6px 8px',
                            borderRadius: 4,
                            transition: 'background-color 0.2s',
                            cursor: 'pointer',
                            pointerEvents: 'auto'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(76, 222, 245, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          <FaLinkedin size={16} /> LinkedIn
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          style={{ 
                            color: '#4cdef5', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 8, 
                            textDecoration: 'none', 
                            fontWeight: 500,
                            padding: '6px 8px',
                            borderRadius: 4,
                            transition: 'background-color 0.2s',
                            cursor: 'pointer',
                            pointerEvents: 'auto'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(76, 222, 245, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          <FaGithub size={16} /> GitHub
                        </a>
                      )}
                      {phone && (
                        <a
                          href={`tel:${phone}`}
                          onClick={handleLinkClick}
                          style={{ 
                            color: '#4cdef5', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 8, 
                            textDecoration: 'none', 
                            fontWeight: 500,
                            padding: '6px 8px',
                            borderRadius: 4,
                            transition: 'background-color 0.2s',
                            cursor: 'pointer',
                            pointerEvents: 'auto'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(76, 222, 245, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          <FaPhone size={16} /> {phone}
                        </a>
                      )}
                    </div>,
                    document.body
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p className="break-words whitespace-normal text-center leading-tight p-1">
                {title.includes("(")
                  ? (
                    <>
                      {title.split("(")[0].trim()}
                      <br />
                      ({title.split("(")[1]}
                    </>
                  )
                  : title
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;