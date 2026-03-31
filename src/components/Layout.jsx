import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    const enter = () => cursor.classList.add("hover");
    const leave = () => cursor.classList.remove("hover");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <Navbar />
      <main className="pt-[60px] min-h-screen animate-[fadeUp_0.5s_ease_forwards]">
        {children}
      </main>
      <Footer />
    </>
  );
}
