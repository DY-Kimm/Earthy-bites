import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FilterSelect({
  value,                 // string | null
  options,               // string[]
  onChange,              // (val|null)=>void
  placeholder = "필터",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const close = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setOpen(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const current = value ?? placeholder;

  return (
    <div className="fsx" ref={ref}>
      <button
        type="button"
        className="fsx-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{current}</span>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {open && (
        <div className="fsx-menu" role="listbox">
          {options.map((opt) => {
            const selected = value === opt || (!value && opt === placeholder);
            return (
              <button
                key={opt}
                role="option"
                aria-selected={selected}
                className={`fsx-item ${selected ? "is-selected" : ""}`}
                onClick={() => {
                  onChange(opt === "전체" ? null : opt); // "전체" 선택 시 전체보기
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
