import { useState, useEffect } from 'react';

export function useLoading(initialDelay = 1000) {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  };

  // Auto parar o loading após o tempo determinado
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, initialDelay);

      return () => clearTimeout(timer);
    }
  }, [isLoading, initialDelay]);

  return { isLoading, startLoading, stopLoading };
}
