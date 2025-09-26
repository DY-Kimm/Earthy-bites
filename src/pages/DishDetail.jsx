import { Link, useNavigate, useParams } from "react-router-dom";
import { DISHES } from "../data/data";
import LikeButton from "../components/LikeButton";
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";

export default function DishDetail(){
  const { id } = useParams();
  const nav = useNavigate();
  const list = DISHES;
  const idx = list.findIndex(d=> d.id === id);
  const dish = list[idx];

  const prev = idx>0 ? list[idx-1].id : null;
  const next = idx<list.length-1 ? list[idx+1].id : null;

  if(!dish) return <div className="container" style={{paddingTop:100}}>Not Found</div>;

  return (
    <div className="container detail" style={{paddingTop:86}}>
      <button className="back" onClick={()=>nav(-1)}><FaArrowLeft/> 뒤로가기</button>

      <div className="media">
        {/* 영상 */}
        <div style={{aspectRatio:"16/9", background:"#f7f7f7", borderRadius:12, overflow:"hidden"}}>
          <iframe width="100%" height="100%" src={dish.video} title={dish.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
      </div>

      <div style={{maxWidth:840, margin:"0 auto"}}>
        <h2 className="title" style={{fontSize:36, marginBottom:10}}>{dish.name}</h2>
        <p style={{color:"#666", marginBottom:14}}>{dish.desc}</p>
        <LikeButton dishId={dish.id} className="like-btn--detail"/>

        <hr style={{margin:"24px 0"}}/>
        <h3 style={{marginBottom:8}}>레시피</h3>
        <ol style={{paddingLeft:18, lineHeight:1.9}}>
          {dish.recipe?.map((r,i)=><li key={i}>{r}</li>)}
        </ol>
      </div>

      <div style={{display:"flex", justifyContent:"space-between", maxWidth:840, margin:"24px auto 0"}}>
        <div>{prev && <Link className="badge" to={`/dish/${prev}`}><FaChevronLeft/> 이전</Link>}</div>
        <div>{next && <Link className="badge" to={`/dish/${next}`}>다음 <FaChevronRight/></Link>}</div>
      </div>
    </div>
  )
}
