import { useEffect, type ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SeoManager from "./SeoManager";

const ELFSIGHT_SCRIPT_ID = "elfsight-platform-script";
const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (document.getElementById(ELFSIGHT_SCRIPT_ID)) return;

    let loaded = false;
    let idleId: number | undefined;
    let fallbackId: number | undefined;

    const loadScript = () => {
      if (loaded || document.getElementById(ELFSIGHT_SCRIPT_ID)) return;

      loaded = true;
      const script = document.createElement("script");
      script.id = ELFSIGHT_SCRIPT_ID;
      script.src = ELFSIGHT_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    const win = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const scheduleLoad = () => {
      if (win.requestIdleCallback) {
        idleId = win.requestIdleCallback(loadScript, { timeout: 6000 });
        return;
      }

      fallbackId = window.setTimeout(loadScript, 6000);
    };

    const interactionEvents = ["pointerdown", "keydown", "scroll", "touchstart"];

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, loadScript, { once: true, passive: true });
    });

    scheduleLoad();

    return () => {
      if (idleId && win.cancelIdleCallback) win.cancelIdleCallback(idleId);
      if (fallbackId) window.clearTimeout(fallbackId);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, loadScript);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <SeoManager />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <div
        className="elfsight-app-cf2abe93-ae78-4fc8-956e-c1eb1591d977"
        data-elfsight-app-lazy
      />
    </div>
  );
}
