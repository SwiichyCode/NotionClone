import { useEffect, useRef, RefObject } from "react";

type ClickOutsideCallback = (event: MouseEvent) => void;

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: ClickOutsideCallback
): void => {
  const callbackRef = useRef<ClickOutsideCallback>();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackRef.current?.(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
