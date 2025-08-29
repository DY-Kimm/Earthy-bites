import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState({}); // { dishId: true }

  // 로컬 스토리지 동기화
  useEffect(()=>{
    const u = localStorage.getItem("eb_user");
    const l = localStorage.getItem("eb_likes");
    if(u) setUser(JSON.parse(u));
    if(l) setLikes(JSON.parse(l));
  },[]);
  useEffect(()=>{
    localStorage.setItem("eb_user", JSON.stringify(user));
  },[user]);
  useEffect(()=>{
    localStorage.setItem("eb_likes", JSON.stringify(likes));
  },[likes]);

  const login = (id)=> setUser({ id });
  const logout = ()=> setUser(null);
  const toggleLike = (dishId)=>{
    if(!user) return false; // 로그인 필요
    setLikes(prev => ({...prev, [dishId]: !prev[dishId]}));
    return true;
  };

  const value = useMemo(()=>({user, login, logout, likes, toggleLike}),[user, likes]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
