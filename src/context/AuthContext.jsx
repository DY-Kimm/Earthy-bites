import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { normalizeLikesForUser } from "../utils/likes";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  // 초기 로드: 문자열로 저장돼 있던 과거 값까지 보정
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed === "string") return { id: parsed, name: parsed };
      if (parsed && parsed.id) return parsed;
      return null;
    } catch {
      return null;
    }
  });

  // "id가 있는 객체"만 로그인으로 인정
  const isLoggedIn = !!(user && user.id);

  // 문자열이 와도 객체로 보정
  const login = (u) => {
    const obj = typeof u === "string" ? { id: u, name: u } : u;
    setUser(obj);
  };
  const logout = () => setUser(null);

  // 스토리지 동기화 + 예전 likes 포맷 정리
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
      normalizeLikesForUser(user.id);
    } else {
      localStorage.removeItem("user");
    }
  }, [isLoggedIn, user]);

  const value = useMemo(() => ({ user, isLoggedIn, login, logout }), [user, isLoggedIn]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
