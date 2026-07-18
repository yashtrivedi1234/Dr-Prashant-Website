import { motion } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
      setIsScrollingUp(scrollTop > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // WhatsAppIcon component moved outside return
  const WhatsAppIcon = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="white"
    >
      <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.88 1.885 6.99L2 30l7.232-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.527a11.49 11.49 0 0 1-5.89-1.617l-.422-.25-4.294 1.103 1.136-4.16-.276-.436A11.473 11.473 0 0 1 4.527 16c0-6.33 5.146-11.473 11.476-11.473S27.473 9.67 27.473 16c0 6.33-5.146 11.527-11.47 11.527zm6.29-8.61c-.344-.172-2.04-1.006-2.356-1.12-.315-.115-.545-.172-.775.172-.23.344-.888 1.12-1.09 1.35-.2.23-.4.258-.745.086-.344-.172-1.452-.536-2.765-1.707-1.022-.912-1.713-2.04-1.913-2.385-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.602.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.602-.086-.172-.775-1.87-1.062-2.56-.28-.672-.564-.58-.775-.59-.2-.01-.43-.013-.66-.013-.23 0-.602.086-.917.43-.315.344-1.204 1.177-1.204 2.87s1.233 3.33 1.405 3.56c.172.23 2.427 3.707 5.88 5.198.823.355 1.464.567 1.964.725.825.263 1.576.226 2.17.137.662-.1 2.04-.833 2.327-1.637.287-.803.287-1.492.2-1.637-.085-.143-.315-.23-.66-.4z" />
    </svg>
  );

  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <motion.a
        href="https://wa.me/918081773201"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 sm:bottom-8 left-4 sm:left-6 z-40
  bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4
  shadow-lg hover:shadow-xl transition-all duration-300
  flex items-center justify-center group"
      >
        {/* Use Component Here */}
        <WhatsAppIcon size={28} />

        <div className="absolute left-full ml-2 sm:ml-3 bg-foreground text-primary-foreground px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </div>
      </motion.a>

      {/* Scroll to Top Button - Bottom Right */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 sm:bottom-8 right-4 sm:right-6 z-40
          bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 sm:p-4
          shadow-lg hover:shadow-xl transition-all duration-300
          flex items-center justify-center group
          ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* ...existing code... */}

        {/* Icon */}
        <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />

        {/* Tooltip */}
        <div className="absolute right-full mr-2 sm:mr-3 bg-foreground text-primary-foreground px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Back to Top
        </div>
      </motion.button>
    </>
  );
};

export default FloatingButtons;
