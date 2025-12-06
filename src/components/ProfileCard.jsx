import React, { useEffect, useRef, useCallback, useMemo, useState } from "react";
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
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
  linkedin = "",
  github = "",
  phone = "",
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const contactMenuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    if (!showContactMenu) return;
    function handleClick(e) {
      if (contactMenuRef.current && !contactMenuRef.current.contains(e.target)) {
        setShowContactMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showContactMenu]);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

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
  }, [enableTilt]);

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
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
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
    enableTilt,
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
    e.stopPropagation(); // Prevent event bubbling
    setShowContactMenu((v) => !v);
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
                    className="pc-contact-btn"
                    onClick={handleContactClick}
                    type="button"
                    aria-label={`Contact ${name || "user"}`}
                    style={{ 
                      position: "relative",
                      zIndex: 10,
                      pointerEvents: "auto"
                    }}
                  >
                    {contactText}
                  </button>
                  {showContactMenu && (
                    <div
                      ref={contactMenuRef}
                      style={{
                        position: "fixed", // Changed from absolute to fixed
                        bottom: "auto",
                        top: "auto",
                        left: "auto",
                        right: "auto",
                        transform: "translate(-50%, calc(-100% - 10px))",
                        background: "rgba(24, 24, 27, 0.95)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid #4cdef5",
                        borderRadius: 8,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                        padding: 12,
                        zIndex: 9999,
                        pointerEvents: "auto",
                        minWidth: 140,
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
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;