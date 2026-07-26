import { useEffect, type ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SeoManager from "./SeoManager";

const ELFSIGHT_SCRIPT_ID = "elfsight-platform-script";
const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (document.getElementById(ELFSIGHT_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = ELFSIGHT_SCRIPT_ID;
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
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
