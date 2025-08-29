import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaUser, FaSearch } from "react-icons/fa";
import HoverMenu from "./HoverMenu";
import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";


export default function Header(){
  const [hoverKey, setHoverKey] = useState(null);

  const menu = [
    { key:"ASIA", label:"ASIA" },
    { key:"Europe", label:"Europe" },
    { key:"Africa", label:"Africa" },
    { key:"Oceania", label:"Oceania" },
    { key:"NA", label:"NA" },
    { key:"SA", label:"SA" },
  ];

  return (
    <header className="site-header">
      <div className="container" style={{display:"flex",alignItems:"center",gap:20}}>
        <Link to="/" className="brand">
          <img src="../img/logo.png" alt="메인로고"/>
          <span className="title">EARTHY BITES</span>
        </Link>

        <div className="search">
          <SearchBar />
        </div>

        <Navbar />

        <div className="icon-actions">
          <Link to="/likes" title="Likes"><FaHeart/></Link>
          <Link to="/login" title="Login"><FaUser/></Link>
        </div>
      </div>

      <HoverMenu activeKey={hoverKey}/>
    </header>
  );
}
