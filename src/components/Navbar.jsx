import { Link } from "react-router-dom";

const MENUS = [
  { key: "ASIA",    label: "ASIA",    countries: ["Korea","Japan","Vietnam","Singapore"] },
  { key: "Europe",  label: "Europe",  countries: ["Italy","France","UK"] },
  { key: "Africa",  label: "Africa",  countries: ["Nigeria","Egypt","Morocco","Kenya"] },
  { key: "Oceania", label: "Oceania", countries: ["Australia","New Zealand"] },
  { key: "NA",      label: "NA",      countries: ["America","Canada","Mexico"] },
  { key: "SA",      label: "SA",      countries: ["Chile","Brazil","Peru"] },
];

export default function Navbar(){
  return (
    <nav className="eb-nav">
      {MENUS.map(m => (
        <div key={m.key} className="eb-nav-item">
          <span className="eb-nav-link">{m.label}</span>

          {/* Dropdown card */}
          <div className="eb-dd">
            <div className="eb-dd-dot" aria-hidden />
            <ul className="eb-dd-list">
              {m.countries.map((c, i) => (
                <li key={c} className="eb-dd-row">
                  <Link to={`/country/${encodeURIComponent(c)}`}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </nav>
  );
}
