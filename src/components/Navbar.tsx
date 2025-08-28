import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "../lib/utils";
import { navItems } from "../lib/constants";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn } from "../lib/variants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay: 0.6 }}
      className={cn(
        "fixed  w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* logo  */}
        <a
          className="text-xl  md:text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground ">&lt; </span>
            Chirag
          </span>
          &nbsp;
          <span className="text-glow text-foreground ">Makwana&nbsp;/&gt;</span>
        </a>
        {/* nav  */}

        <div className="flex gap-4 md:gap-8 items-center  justify-center">
          {/* desktop nav  */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="text-foreground font-semibold hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile nav  */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-foreground cursor-pointer z-50"
            aria-label={isMenuOpen ? "Close Menu" : "OpenMenu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={cn(
              "fixed inset-0 top-0 left-0 w-screen h-screen bg-background z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex text-xl flex-col space-y-8 ">
              {navItems.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* ThemeToggler  */}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
