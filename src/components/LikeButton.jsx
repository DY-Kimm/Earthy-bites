// src/components/LikeButton.jsx
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isLiked, toggleLiked } from "../utils/likes";

export default function LikeButton({
  id, size = 16, className = "", onToggle, requireLogin = true
}) {
  const { user, isLoggedIn } = useAuth();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // 현재 페이지로 돌아오기 위함

  useEffect(() => {
    setLiked(isLoggedIn ? isLiked(user?.id, id) : false);
  }, [isLoggedIn, user?.id, id]);

  const handleClick = (e) => {
    // 카드 <Link> 네비게이션 방지
    e.preventDefault();
    e.stopPropagation();

    if (requireLogin && !isLoggedIn) {
      // ✅ 확인 누르면 로그인 페이지로 이동
      const ok = window.confirm("로그인이 필요합니다 🙂\n로그인 화면으로 이동할까요?");
      if (ok) {
        navigate("/login", {
          replace: false,
          state: { redirectTo: location.pathname + location.search } // 돌아올 위치 전달
        });
      }
      return;
    }

    const next = toggleLiked(user.id, id);
    setLiked(next);
    onToggle?.(next);
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
