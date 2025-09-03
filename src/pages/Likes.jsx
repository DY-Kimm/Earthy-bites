// pages/Likes.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getLikedIds } from "../utils/likes";
import { DISHES } from "../data/dishes"; // 전체 모음 (여기 경로는 네 프로젝트에 맞게)

export default function Likes() {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return (
      <main className="page likes">
        <h1>LIKES</h1>
        <p style={{marginTop: 16}}>로그인 후 좋아요한 음식들을 볼 수 있어요.</p>
      </main>
    );
  }

  const ids = getLikedIds(user.id);
  const map = new Map(DISHES.map(d => [String(d.id), d])); // 빠른 매칭
  const items = ids.map(id => map.get(String(id))).filter(Boolean);

  return (
    <main className="page likes">
      <h1>LIKES</h1>
      {items.length === 0 ? (
        <p style={{marginTop: 16}}>아직 좋아요한 음식이 없어요.</p>
      ) : (
        <div className="grid">
          {items.map(d => (
            <Link key={d.id} to={`/dish/${d.id}`} className="card">
              <img src={d.image} alt={d.name} />
              <div className="card-body">
                <strong>{d.name}</strong>
                {/* 필요하면 태그/국가 표시 */}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
