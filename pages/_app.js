import { useState, useEffect } from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
      >
        Изменить тему
      </button>
      <Component {...pageProps} theme={theme} />
    </div>
  );
}