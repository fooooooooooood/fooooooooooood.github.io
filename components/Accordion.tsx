"use client"
import { useEffect, useRef, useState } from "react";

import styles from "./accordion.module.css";

export default function Accordion({
  title,
  children
}: {
  title: string,
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<Boolean>(false);
  const [isLast, setIsLast] = useState<Boolean>(false);

  const [bottomBorderRadius, setBottomBorderRadius] = useState("");

  const clickHandler = () => {
    setShow(!show);
  }

  useEffect(() => {
    if (ref === null || ref.current === null) return;

    const bblr = window.getComputedStyle(ref.current).getPropertyValue('border-bottom-left-radius');
    if (bblr !== "0px") setIsLast(true);
  }, [ref]);

  useEffect(() => {
    if (!isLast) return;

    if (show) {
      setBottomBorderRadius(styles.radiusGone);
    } else {
      setBottomBorderRadius("");
    }

  }, [show])

  return (
    <div onClick={clickHandler} className={styles.accordion + ``}>
      <h3 ref={ref} className={`cursor-pointer px-3 py-1 flex items-center justify-between w-full border border-gray-400 bg-gray-200 hover:bg-gray-100 ${bottomBorderRadius}`}>
        <div>{title}</div>
        {
          show ? (
            <svg data-accordion-icon="" className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"></path>
            </svg>
          ) : (
            <svg data-accordion-icon="" className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"></path>
            </svg>
          )
        }
      </h3>
      {
        show ?
          <div className="p-5 border border-t-0 border-gray-400">
            {children}
          </div>
          : null
      }
    </div>
  );
};
