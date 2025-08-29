import { FaHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LikeButton({dishId}){
  const { user, likes, toggleLike } = useAuth();
  const nav = useNavigate();
  const active = !!likes[dishId];

  const handle = ()=>{
    const ok = toggleLike(dishId);
    if(!ok) nav("/login");
  };

  return (
    <button className={`like ${active ? "active":""}`} onClick={handle}>
      <FaHeart/>{active ? "Liked":"Like"}
    </button>
  );
}
