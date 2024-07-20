/**
 * Create a hook to tell if it is the first render.
 * return only true for the first render
 */

import { useRef } from "react";

export function useIsFirstRender(): boolean {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }

  return false;
}
