import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function PageLoader() {
  const [showSplash, setShowSplash] = useState(false);
  const [splashFading, setSplashFading] = useState(false);
  const [splashVisible, setSplashVisible] = useState(false);
  const [transitionVisible, setTransitionVisible] = useState(false);
  const [transitionFading, setTransitionFading] = useState(false);

  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const [wasLoading, setWasLoading] = useState(false);

  // Show splash on every page load / refresh
  useEffect(() => {
    setShowSplash(true);
    setSplashVisible(true);

    const fadeTimer = setTimeout(() => {
      setSplashFading(true);
    }, 3200);

    const hideTimer = setTimeout(() => {
      setSplashVisible(false);
      setShowSplash(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Page transition loading
  useEffect(() => {
    if (!showSplash) {
      if (isLoading && !wasLoading) {
        setTransitionVisible(true);
        setTransitionFading(false);
      }
      if (!isLoading && wasLoading) {
        setTransitionFading(true);
        const timer = setTimeout(() => {
          setTransitionVisible(false);
          setTransitionFading(false);
        }, 400);
        return () => clearTimeout(timer);
      }
    }
    setWasLoading(isLoading);
  }, [isLoading, wasLoading, showSplash]);

  if (!splashVisible && !transitionVisible) return null;

  const isFading = splashVisible ? splashFading : transitionFading;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink transition-opacity duration-600 ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      <h1
        className="font-display text-4xl md:text-6xl font-bold tracking-tight"
        style={{ color: "var(--gold)" }}
      >
        Forza Security
      </h1>
      <p className="mt-3 text-white/40 text-sm tracking-[0.3em] uppercase">
        Premium Security Solutions for Kenya
      </p>
      <div className="mt-10 relative flex items-center justify-center h-6">
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-gold opacity-75 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
      </div>
    </div>
  );
}
