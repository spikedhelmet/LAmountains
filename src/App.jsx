import { useState, useEffect, useRef } from "react";
import "./App.css";
import MobileContent from "./components/MobileContent";
import DesktopContent from "./components/DesktopContent";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { rootMargin: "450px 0px 0px 0px" }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  // to dynamically change mobile state reacting to window size threshold
  useEffect(() => {
    const checkMobile = () => {
      if (window.matchMedia("(max-width: 768px)").matches) setIsMobile(true);
      else setIsMobile(false);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="main_container">
      <div ref={sentinelRef}></div> {/* for observer */}
      {isMobile ? <MobileContent /> : <DesktopContent isSticky={isSticky} />}
    </main>
  );
};

export default App;
