import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isMobile = className.includes("theme-toggle-mobile");
  const nextLabel = theme === "light" ? "Dark Mode" : "Light Mode";

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      {isMobile && <span>{nextLabel}</span>}
    </button>
  );
}
