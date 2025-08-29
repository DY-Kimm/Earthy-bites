import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiArrowLeft } from "react-icons/fi";

export default function Signup() {
  const { login } = useAuth();
  const nav = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const id = fd.get("id") || "newbie";
    // 실제 검증/회원가입 로직은 추후 연동
    login(id);
    nav("/");
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
          <input className="auth-input" name="id" placeholder="아이디" />
          <input className="auth-input" name="email" placeholder="이메일" />
          <input className="auth-input" type="password" name="pw" placeholder="비밀번호" />
          <input className="auth-input" type="password" name="pw2" placeholder="비밀번호 확인" />

          <div className="auth-actions">
            <button className="auth-btn" type="submit">회원가입</button>
          </div>
        </form>

        <div className="auth-sub">
          <div className="auth-link muted">
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
