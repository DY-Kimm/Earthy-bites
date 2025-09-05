import { useNavigate, useLocation, Link } from "react-router-dom"; // ★ useLocation 추가
import { useAuth } from "../context/AuthContext";
import { FiArrowLeft } from "react-icons/fi";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();                                   // ★ 현재 위치/넘겨받은 state
  const redirectTo = loc.state?.redirectTo || "/";             // ★ 없으면 홈으로(원하면 "/likes")

  function onSubmit(e) {
    e.preventDefault();
    const id = new FormData(e.currentTarget).get("id");
    login(id || "guest");
    nav(redirectTo, { replace: true });                        // ★ 원래 가려던 곳으로
  }

  return (
    <div className="auth-page container">
      <button className="auth-back" onClick={() => nav(-1)}>
        <FiArrowLeft size={24} />
      </button>

      <div className="auth-wrap">
        <div className="auth-avatar" aria-hidden>
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#BDBDBD" strokeWidth="1.7">
            <circle cx="12" cy="8" r="3.8" />
            <path d="M4 20c1.6-3.3 4.4-5 8-5s6.4 1.7 8 5" strokeLinecap="round"/>
          </svg>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          <label className="auth-label">아이디</label>
          <input className="auth-input" name="id" placeholder="아이디" />

          <label className="auth-label">비밀번호</label>
          <input className="auth-input" type="password" name="pw" placeholder="비밀번호" />

          <div className="auth-actions">
            <button className="auth-btn" type="submit">로그인</button>
          </div>
        </form>

        <div className="auth-sub">
          <div className="auth-link muted">
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
