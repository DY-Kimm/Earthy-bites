import { useMemo } from "react";
import { useLocation, Link, useSearchParams, Navigate } from "react-router-dom";
import { DISHES, FLAGS } from "../data/data";
import DishCard from "../components/DishCard";

function useQuery() {
  const [sp] = useSearchParams();
  return (sp.get("q") || "").trim();
}

export default function SearchPage() {
  const q = useQuery();
  const qLower = q.toLowerCase();

  // 1) 나라 이름(중복제거)
  const countries = useMemo(() => {
    const fromFlags = FLAGS.map((f) => f.name);
    const fromDishes = [...new Set(DISHES.map((d) => d.country))];
    return Array.from(new Set([...fromFlags, ...fromDishes])).sort();
  }, []);

  // 2) "정확히 나라 이름과 일치" → 바로 해당 나라 페이지로 리다이렉트
  const exactCountry = countries.find(
    (c) => c.toLowerCase() === qLower && qLower.length > 0
  );
  if (exactCountry) return <Navigate to={`/country/${encodeURIComponent(exactCountry)}`} replace />;

  // 3) 부분일치 결과
  const countryMatches = countries.filter((c) =>
    c.toLowerCase().includes(qLower)
  );

  const dishMatches = DISHES.filter((d) => {
    const name = d.name?.toLowerCase() || "";
    const country = d.country?.toLowerCase() || "";
    const type = Array.isArray(d.type) ? d.type.join(" ").toLowerCase() : (d.type || "").toLowerCase();
    return (
      name.includes(qLower) ||
      country.includes(qLower) ||
      type.includes(qLower)
    );
  });

  return (
    <div className="container" style={{ paddingTop: 90 }}>
      <h2 className="title" style={{ marginBottom: 12 }}>
        Search results for “{q}”
      </h2>

      {/* 나라 결과 */}
      <section style={{ marginBottom: 24 }}>
        <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Countries</h3>
        {countryMatches.length === 0 ? (
          <p style={{ color: "#888" }}>No matching countries.</p>
        ) : (
          <div className="search-country-grid">
            {countryMatches.map((c) => (
              <Link key={c} to={`/country/${encodeURIComponent(c)}`} className="search-country-chip">
                {c}
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* 음식 결과 */}
      <section>
        <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Dishes</h3>
        {dishMatches.length === 0 ? (
          <p style={{ color: "#888" }}>No matching dishes.</p>
        ) : (
          <div className="grid">
            {dishMatches.map((d) => (
              <DishCard key={d.id} dish={d} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
