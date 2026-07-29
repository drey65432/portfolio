import { useState, useEffect, useCallback } from 'react';

export default function BootSequence({ onComplete }) {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const stableOnComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    // Fade in
    const showTimer = setTimeout(() => setShow(true), 100);

    // Start fade out after 1.8s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);

    // Done after fade out
    const doneTimer = setTimeout(() => stableOnComplete(), 2300);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [stableOnComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-graphite transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: fadeOut ? 'none' : 'auto' }}
    >
      {/* Content */}
      <div
        className={`flex flex-col items-center gap-4 transition-all duration-700 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Thin decorative line */}
        <div className="w-12 h-px bg-amber" />

        {/* Welcome text */}
        <p className="font-mono text-xs text-amber tracking-[0.3em] uppercase">
          Welcome to
        </p>

        {/* Main title */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
          My Portfolio
        </h1>

        {/* Name */}
        <p className="font-mono text-sm text-text-secondary tracking-widest">
          Sby Sepdianto Manalu
        </p>

        {/* Thin decorative line */}
        <div className="w-12 h-px bg-amber" />
      </div>
    </div>
  );
}
