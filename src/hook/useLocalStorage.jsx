import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue = []) {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(key);
    // Merge existing localStorage data with the initialValue if necessary
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : initialValue;
      } catch {
        return initialValue;
      }
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
