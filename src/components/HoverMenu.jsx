import { CATEGORIES } from "../data/data";
import { Link } from "react-router-dom";

export default function HoverMenu({activeKey}){
  if(!activeKey) return null;
  const items = CATEGORIES[activeKey] || [];
  // 카드 여러 개로 보여주는 연출
  const columns = items.map((name,i)=>(
    <div className={"hover-card show"} key={i}>
      <h5>{activeKey}</h5>
      <ul>
        <li>
          <Link to={`/country/${encodeURIComponent(name)}`}>{name}</Link>
        </li>
      </ul>
    </div>
  ));

  return (
    <div className="hover-tray">
      {columns}
    </div>
  );
}
