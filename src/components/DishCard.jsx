import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

export default function DishCard({dish, showLike=true}){
  return (
    <div className="card">
      <div className="thumb">
        <img src={dish.image} alt={dish.name}/>
      </div>
      <div className="meta">
        <div className="badges">
          {dish.type?.map(t=> <span key={t} className="badge">{t}</span>)}
        </div>
        <h4>{dish.name}</h4>
      </div>
      {showLike && <LikeButton dishId={dish.id}/>}
      <Link to={`/dish/${dish.id}`} style={{position:"absolute", inset:0}} aria-label={dish.name}/>
      
    </div>
  )
}
