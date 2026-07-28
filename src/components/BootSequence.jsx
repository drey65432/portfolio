import { useState, useEffect, useCallback } from 'react';
import { bootMessages } from '../data';

export default function BootSequence({ onComplete }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const stableOnComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    const timers = bootMessages.map((msg, i) =>
      setTimeout(() => setVisibleCount(i + 1), msg.delay)
    );

    const lastDelay = bootMessages[bootMessages.length - 1].delay;

    const completeTimer = setTimeout(() => {
      setFadeOut(true);
    }, lastDelay + 700);

    const doneTimer = setTimeout(() => {
      stableOnComplete();
    }, lastDelay + 1200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
      clearTimeout(doneTimer);
    };
  }, [stableOnComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-graphite transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: fadeOut ? 'none' : 'auto' }}
    >
      <div className="w-full max-w-xl px-6">
        {bootMessages.slice(0, visibleCount).map((msg, i) => (
          <div
            key={i}
            className={`font-mono text-sm md:text-base mb-1.5 ${
              i === visibleCount - 1 && !fadeOut ? 'cursor-blink' : ''
            }`}
          >
            <span className="text-text-secondary">[</span>
            <span className="text-amber font-bold">{msg.tag}</span>
            <span className="text-text-secondary">]</span>
            <span className="text-text-secondary"> {msg.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
