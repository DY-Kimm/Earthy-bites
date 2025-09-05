import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLikedItems, setLiked } from "../utils/likes";

export default function LikesPage({ uid }) {
  const nav = useNavigate();
  const loc = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!uid) {
      // 미로그인 → 로그인 페이지로
      nav(`/login?next=${encodeURIComponent(loc.pathname + loc.search)}`);
      return;
    }
    setItems(getLikedItems(uid));
  }, [uid, nav, loc]);

  const remove = (id) => {
    const it = items.find(v => v.id === id);
    setLiked(uid, it, false);
    setItems(prev => prev.filter(v => v.id !== id));
  };

  if (!uid) return null;

  return (
    <main className="likes-page">
      <div className="likes-hero">
        <h1>MY SCRAP <span className="heart">❤️</span></h1>
        <hr />
      </div>

      {items.length === 0 ? (
        <div className="empty">
          아직 스크랩한 음식이 없어요. 카드의 “좋아요”를 눌러 저장해 보세요!
        </div>
      ) : (
        <section className="grid">
          {items.map(it => (
            <article key={it.id} className="tile">
              <div className="thumb">
                {it.image ? <img src={it.image} alt={it.name} /> : <div className="ph" />}
                <button className="mini-like" onClick={() => remove(it.id)} title="스크랩 해제">❤️</button>
              </div>
              <div className="meta">
                <div className="name">{it.name || it.id}</div>
                {it.country && <div className="country">{it.country}</div>}
                {Array.isArray(it.tags) && it.tags.length > 0 && (
                  <div className="tags">
                    {it.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
