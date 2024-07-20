/**
 * Create a hook to easily use setTimeout(callback, delay).
 *  reset the timer if delay changes
 *  DO NOT reset the timer if only callback changes
 */

import { useEffect, useState } from "react";

export function useTimeout(fn: () => void, delay: number) {
  const [funcId, setFuncId] = useState(null);
  useEffect(() => {
    if (funcId) {
      clearTimeout(funcId);
    }
    if (fn && delay !== null) {
      // @ts-ignore
      setFuncId(setTimeout(fn, delay));
    }
    return () => {
      if (funcId) {
        clearTimeout(funcId);
      }
    };
  }, []);
  return funcId;
}
