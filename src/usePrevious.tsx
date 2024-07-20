/**
 *
 * usePrevious() to return the previous value,
 * with initial value of `undefined.
 *
 */

import { useRef, useEffect } from "react";

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef();

  useEffect(() => {
    // @ts-ignore
    ref.current = value;
  }, [value]);

  return ref.current;
}
