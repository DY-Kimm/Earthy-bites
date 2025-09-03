import CountryCarousel from "../components/CountryCarousel";
import WorldMapPins from "../components/WorldMapPins";

export default function Home(){
  return (
    <>
      <div className="header-space"/>
      <section className="hero">
        <div className="container">
          <img src="../img/main_banner.png" alt="메인지도" />
          <WorldMapPins/>
        </div>
      </section>

      {/* 스크롤 내려오면 보이도록 배치 */}
      <CountryCarousel/>
    </>
  );
}
