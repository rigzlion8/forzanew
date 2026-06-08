import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";

const MIN_TRANSITION_MS = 1500;

export function PageLoader() {
  const [splashVisible, setSplashVisible] = useState(false);
  const [splashFading, setSplashFading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const [transitionVisible, setTransitionVisible] = useState(false);
  const [transitionFading, setTransitionFading] = useState(false);

  const router = useRouter();
  const transitionStartRef = useRef<number>(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>();

  // Initial splash on page load / refresh
  useEffect(() => {
    setShowSplash(true);
    setSplashVisible(true);

    const fadeTimer = setTimeout(() => setSplashFading(true), 4200);
    const hideTimer = setTimeout(() => {
      setSplashVisible(false);
      setShowSplash(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Show splash on every navigation
  useEffect(() => {
    const unsubBefore = router.subscribe("onBeforeNavigate", () => {
      if (showSplash) return;
      clearTimeout(hideTimerRef.current);
      transitionStartRef.current = Date.now();
      setTransitionVisible(true);
      setTransitionFading(false);
    });

    const unsubAfter = router.subscribe("onResolved", () => {
      if (showSplash) return;
      const elapsed = Date.now() - transitionStartRef.current;
      const remaining = Math.max(0, MIN_TRANSITION_MS - elapsed);

      hideTimerRef.current = setTimeout(() => {
        setTransitionFading(true);
        setTimeout(() => {
          setTransitionVisible(false);
          setTransitionFading(false);
        }, 600);
      }, remaining);
    });

    return () => {
      unsubBefore();
      unsubAfter();
    };
  }, [router, showSplash]);

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
      <div className="mt-10 relative flex items-center justify-center h-6">
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-gold opacity-75 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
      </div>
    </div>
  );
}
