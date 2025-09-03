// src/components/FilterSelect.jsx
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FilterSelect({
  value,                // string | null
  options,              // string[]
  onChange,             // (val|null)=>void
  placeholder = "필터",
  variant = "dropdown", // ✅ 기본을 드롭다운으로
  menuWidth = 168,      // ✅ 드롭다운 박스 폭(px)
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setOpen(false);
      setActive(-1);
    };
    window.addEventListener("pointerdown", close);
    return () => window.removeEventListener("pointerdown", close);
  }, []);

  useEffect(() => {
    if (open) setActive(Math.max(0, options.findIndex((o) => o === value)));
  }, [open, options, value]);

  const current = value ?? placeholder;

  const Item = ({ opt, idx }) => {
    const selected = value === opt || (!value && opt === "전체");
    return (
      <button
        role="option"
        aria-selected={selected}
        className={`fsx-item ${selected ? "is-selected" : ""} ${idx === active ? "is-active" : ""}`}
        onMouseEnter={() => setActive(idx)}
        onClick={() => { onChange(opt === "전체" ? null : opt); setOpen(false); }}
      >
        {opt}
      </button>
    );
  };

  return (
    <div className="fsx" ref={ref}>
      <button
        type="button"
        className={`fsx-btn ${open ? "is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span>{current}</span>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {open && variant === "dropdown" && (
        <div className="fsx-menu" role="listbox" style={{ width: menuWidth }}>
          {!options.includes("전체") && <Item opt="전체" idx={-1} />}
          {options.map((opt, i) => <Item key={opt} opt={opt} idx={i} />)}
        </div>
      )}
    </div>
  );
}
