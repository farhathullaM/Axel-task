import React, { useState, useEffect, useRef, type ReactNode } from "react";
import "./Popup.scss";

type PopupProps = {
  trigger: ReactNode;
  children: ReactNode;
};

const Popup: React.FC<PopupProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const togglePopup = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setIsOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    if (isOpen && triggerRef.current && popupRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }
  }, [isOpen]);

  const popupStyles: React.CSSProperties = (() => {
    if (!triggerRef.current || !popupRef.current) return {};

    const rect = triggerRef.current.getBoundingClientRect();
    const popupHeight = popupRef.current.offsetHeight;

    return {
      top:
        position === "bottom"
          ? rect.bottom + window.scrollY + 8
          : rect.top + window.scrollY - popupHeight - 8,
      left: rect.left + window.scrollX,
    };
  })();

  return (
    <div className="popup-wrapper">
      <div
        ref={triggerRef}
        onClick={togglePopup}
        style={{ display: "inline-block" }}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={popupRef}
          className={`popup-content ${position}`}
          style={popupStyles}
        >
          <div className={`popup-arrow ${position}`} />
          {children}
        </div>
      )}
    </div>
  );
};

export default Popup;
