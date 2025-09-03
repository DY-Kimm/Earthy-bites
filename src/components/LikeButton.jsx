import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isLiked, setLiked as saveLiked } from "../utils/likes";

export default function LikeButton({
  id, size = 16, className = "", onToggle, requireLogin = true
}) {
  const { user, isLoggedIn } = useAuth();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const uid = user?.id ? String(user.id) : null;
  const targetId = String(id ?? "");

  useEffect(() => {
    if (!isLoggedIn || !uid || !targetId) { setLiked(false); return; }
    setLiked(isLiked(uid, targetId));
  }, [isLoggedIn, uid, targetId]);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (requireLogin && !isLoggedIn) {
      const ok = window.confirm("로그인이 필요합니다 🙂\n로그인 화면으로 이동할까요?");
      if (ok) {
        navigate("/login", { state: { redirectTo: location.pathname + location.search } });
      }
      return;
    }
    if (!uid || !targetId) return; // 로그인 직후 보호

    // UI 먼저 반영 → 저장소 기록
    setLiked((prev) => {
      const next = !prev;
      saveLiked(uid, targetId, next);
      onToggle?.(next);
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`like-btn ${liked ? "is-liked" : ""} ${className}`}
      aria-pressed={liked}
      aria-label={liked ? "Unlike" : "Like"}
    >
      {liked ? <AiFillHeart size={size}/> : <AiOutlineHeart size={size}/>}
      <span className="sr-only">{liked ? "좋아요 해제" : "좋아요"}</span>
    </button>
  );
}
