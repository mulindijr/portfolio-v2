import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [commandOpen, setCommandOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const addToast = useCallback((message, type = 'success') => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3200);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const copyText = useCallback(
    async (value, successMessage = 'Copied to clipboard') => {
      try {
        await navigator.clipboard.writeText(value);
        addToast(successMessage);
      } catch {
        addToast('Could not copy to clipboard', 'error');
      }
    },
    [addToast]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      toggleTheme,
      commandOpen,
      setCommandOpen,
      toasts,
      addToast,
      dismissToast,
      copyText,
    }),
    [
      darkMode,
      toggleTheme,
      commandOpen,
      toasts,
      addToast,
      dismissToast,
      copyText,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext };
