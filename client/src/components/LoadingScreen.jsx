import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/gsklogonobg.png";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const loaderLogo = logoRef.current;
    const navLogo = document.getElementById("nav-logo");

    if (!loaderLogo || !navLogo) return;

    gsap.set(loaderLogo, {
      transformOrigin: "center center",
    });

    const navRect = navLogo.getBoundingClientRect();
    const loaderRect = loaderLogo.getBoundingClientRect();

    const deltaX =
      navRect.left + navRect.width / 2 -
      (loaderRect.left + loaderRect.width / 2);

    const deltaY =
      navRect.top + navRect.height / 2 -
      (loaderRect.top + loaderRect.height / 2);

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });

    tl

      .to(loaderLogo, {
        scale: 1.08,
        opacity: 1,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
      })

      .to(loaderLogo, {
        x: deltaX,
        y: deltaY,
        scale: 0.3,
        duration: 1.1,
      })


      .to(
        navLogo,
        {
          opacity: 1,
          duration: 0.2,
        },
        "-=0.15"
      )

    
      .to(
        ".loading-screen",
        {
          opacity: 0,
          duration: 0.4,
          onComplete: onFinish,
        },
        "-=0.1"
      );
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <img
        ref={logoRef}
        src={logo}
        alt="GSK World"
        className="loading-logo"
      />
    </div>
  );
};

export default LoadingScreen;
