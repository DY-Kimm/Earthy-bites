import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import markers from "../data/mapMarkers";

// 코드 -> 나라 슬러그(네 라우트가 쓰는 형태) 매핑
const CODE_TO_SLUG = {
  kr: "Korea",
  jp: "Japan",
  vn: "Vietnam",
  sg: "Singapore",
  it: "Italy",
  fr: "France",
  gb: "UK", 
  ng: "Nigeria",
  eg: "Egypt",
  ma: "Morocco",
  ke: "Kenya",
  au: "Australia",
  nz: "New Zealand",
  us: "America",
  ca: "Canada",
  mx: "Mexico",
  cl: "Chile",
  br: "Brazil",
  pe: "Peru",
};

export default function WorldMapPins({ showLabels = true }) {
  const layerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const parent = layer.parentElement; // Home.jsx의 .container
    const img =
      layer.previousElementSibling &&
      layer.previousElementSibling.tagName === "IMG"
        ? layer.previousElementSibling
        : parent.querySelector("img");

    if (!img) return;

    const ensureParentRelative = () => {
      const cs = window.getComputedStyle(parent);
      if (cs.position === "static") parent.style.position = "relative";
    };

    const positionOverlay = () => {
      const imgRect = img.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      const left = imgRect.left - parentRect.left + parent.scrollLeft;
      const top = imgRect.top - parentRect.top + parent.scrollTop;

      Object.assign(layer.style, {
        position: "absolute",
        left: `${left}px`,
        top: `${top}px`,
        width: `${imgRect.width}px`,
        height: `${imgRect.height}px`,
        zIndex: 2,
        pointerEvents: "auto",
      });

      setReady(true);
    };

    ensureParentRelative();

    if (img.complete) positionOverlay();
    else img.addEventListener("load", positionOverlay, { once: true });

    const ro = new ResizeObserver(positionOverlay);
    ro.observe(img);

    window.addEventListener("resize", positionOverlay);
    window.addEventListener("scroll", positionOverlay, true);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", positionOverlay);
      window.removeEventListener("scroll", positionOverlay, true);
    };
  }, []);

  // ✅ 클릭 시 코드(/kr) → 네가 쓰는 슬러그(/Korea)로 변환해서 이동
  const handleClick = (e, m) => {
    e.preventDefault();
    const code = String(m.code || "").toLowerCase();
    const slug = CODE_TO_SLUG[code] || m.name || code;
    navigate(`/country/${encodeURIComponent(slug)}`);
  };

  const pinBase = {
    position: "absolute",
    transform: "translate(-50%, -100%)",
    color: "#fff",
    textDecoration: "none",
    lineHeight: 1,
    filter:
      "drop-shadow(0 1px 2px rgba(0,0,0,.35)) drop-shadow(0 6px 10px rgba(0,0,0,.25))",
    display: "inline-flex",
    alignItems: "center",
  };

  const labelStyle = {
    marginLeft: 2,
    fontSize: 14,
    fontWeight: 800,
    color: "#fff",
    textShadow: "0 1px 3px rgba(0,0,0,.6)",
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  return (
    <div ref={layerRef} aria-label="map pins">
      {ready &&
        markers.map((m) => (
          <Link
            key={m.code}
            to={m.to || "#"}
            onClick={(e) => handleClick(e, m)}
            title={m.name}
            aria-label={m.name}
            style={{ ...pinBase, left: `${m.x}%`, top: `${m.y}%` }}
          >
            <MdLocationOn size={24} aria-hidden="true" />
            {showLabels && <span style={labelStyle}>{m.name}</span>}
          </Link>
        ))}
    </div>
  );
}
