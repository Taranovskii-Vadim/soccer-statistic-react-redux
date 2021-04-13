import { useCallback, useRef } from "react";

export const useDebounce = (
  callback: (...rest: any) => void,
  delay: number
) => {
  const timer = useRef<number>();

  const debouncedCallback = useCallback(
    (...rest: any) => {
      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        callback(...rest);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
