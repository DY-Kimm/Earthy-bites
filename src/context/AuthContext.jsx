// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;  // {id:"demo-user", name:"DaYeon"} 같은 객체
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = (u) => setUser(u);    // 실제 로그인 로직 대신 더미/연동 지점
  const logout = () => setUser(null);

  return (
    <AuthCtx.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
