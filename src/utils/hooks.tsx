import { RefObject, useEffect, useRef, useState } from "react";

export const useScrollToTop = (showPos: number) => {
  const [isShowScrollToTopBtn, setIsShowScrollToTopBtn] =
    useState<boolean>(false);

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScrollToTopHandler = () => {
      setIsShowScrollToTopBtn(window.scrollY > showPos);
    };
    window.addEventListener("scroll", onScrollToTopHandler);
    return () => window.removeEventListener("scroll", onScrollToTopHandler);
  }, [showPos]);

  return {
    isShowScrollToTopBtn,
    scrollToTopHandler,
  };
};

export const useClickOutSide = (
  callback: () => void,
  outerRef?: RefObject<HTMLElement>
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickOutSideHandler = (e: Event) => {
      if (
        ref?.current &&
        !ref.current?.contains(e.target as Node) &&
        outerRef?.current &&
        outerRef.current !== e.target &&
        !outerRef.current.contains(e.target as Node)
      ) {
        callback();
      }
    };

    window.addEventListener("click", clickOutSideHandler);
    return () => {
      window.removeEventListener("click", clickOutSideHandler);
    };
  }, [callback, outerRef]);

  return ref;
};
