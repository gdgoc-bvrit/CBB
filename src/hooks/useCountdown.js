import { useEffect, useRef, useState } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function computeParts(target) {
  const diff = new Date(target).getTime() - Date.now();
  if (!Number.isFinite(diff) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, diff: Math.max(diff, 0), isComplete: true };
  }
  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff / HOUR) % 24),
    minutes: Math.floor((diff / MINUTE) % 60),
    seconds: Math.floor((diff / SECOND) % 60),
    diff,
    isComplete: false,
  };
}

/**
 * Ticks once per second toward `targetDate`.
 *
 * @param {string|number|Date} targetDate
 * @returns {{days:number,hours:number,minutes:number,seconds:number,diff:number,
 *            isComplete:boolean,formatted:string}}
 */
export function useCountdown(targetDate) {
  const [parts, setParts] = useState(() => computeParts(targetDate));
  const savedTarget = useRef(targetDate);
  savedTarget.current = targetDate;

  useEffect(() => {
    if (targetDate == null || targetDate === '') return undefined;
    setParts(computeParts(targetDate));
    const id = setInterval(() => {
      const next = computeParts(savedTarget.current);
      setParts(next);
      if (next.isComplete) clearInterval(id);
    }, SECOND);
    return () => clearInterval(id);
  }, [targetDate]);

  const formatted = `${parts.days}d ${parts.hours}h ${parts.minutes}m ${parts.seconds}s`;
  return { ...parts, formatted };
}
