import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    // Use system preference as fallback if theme not set
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 text-2xl transition hover:scale-110"
      aria-label="Toggle Dark Mode"
      title="Toggle dark mode"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;
