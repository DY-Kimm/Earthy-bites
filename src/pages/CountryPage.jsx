import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { DISHES } from "../data/data";
import DishCard from "../components/DishCard";
import FilterSelect from "../components/FilterSelect";
import LikeButton from "../components/LikeButton";

const TYPES = ["전체", "Rice", "Bread", "Noodle","Soup","Dessert"]; // 첫 항목은 '전체'

export default function CountryPage(){
  const { name } = useParams();
  const [type, setType] = useState(null); // null = 전체

  const dishes = useMemo(()=>{
    let list = DISHES.filter(d =>
      d.country.toLowerCase() === decodeURIComponent(name).toLowerCase()
    );
    if (type) list = list.filter(d => d.type?.includes(type));
    return list;
  },[name, type]);

  return (
    <div className="container" style={{paddingTop:90}}>
      <div className="country-top">
        <h1 className="title country-title">{decodeURIComponent(name).toUpperCase()}</h1>

        {/* 1번 스샷 느낌 드롭다운 필터 */}
        <FilterSelect
          value={type}
          options={TYPES}
          onChange={setType}
          placeholder="조회 순"  /* 버튼 상단 텍스트 느낌 (원하면 'Rice'로 바꿔도 됨) */
        />
      </div>

      <div className="grid">
        {dishes.map(d => <DishCard key={d.id} dish={d}/>)}
        {dishes.length === 0 && <p style={{color:"#777"}}>조건에 맞는 음식이 없어요.</p>}
      </div>

      {/* <div className="foods">
      {foods.map((food) => (
        <div className="card" key={food.id}>
          <h3>{food.name}</h3>
         
          <LikeButton uid={user?.id} id={food?.id} />
        </div>
      ))}
    </div> */}
    </div>
  );
}
