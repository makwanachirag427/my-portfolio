import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleToggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
    }
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="transition-colors duration-300 cursor-pointer"
    >
      {isDarkMode ? (
        <Sun className="text-yellow-200 size-6" />
      ) : (
        <Moon className="text-blue-600 size-6" />
      )}
    </button>
  );
};
export default ThemeToggle;
