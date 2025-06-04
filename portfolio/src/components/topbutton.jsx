import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if not at top of the hero section
      const scrollY = window.scrollY;
      const heroHeight = document.getElementById("hero")?.offsetHeight || 400;

      setIsVisible(scrollY > heroHeight / 2); // adjust this threshold if needed
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r
        from-blue-600 to-cyan-500 text-white rounded-full shadow-lg
        shadow-blue-500/30 hover:shadow-blue-500/50 transform transition-all
        duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        className="mx-auto text-sm"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4
         24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25
          9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2
           289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
