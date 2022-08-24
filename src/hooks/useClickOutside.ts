import { useEffect } from "react";

const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
