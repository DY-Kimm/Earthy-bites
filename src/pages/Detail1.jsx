import LikeButton from "../components/LikeButton";

const foods = [
  { id: 1, name: "김치찌개", image: "/img/kimchi.jpg" },
  { id: 2, name: "김밥", image: "/img/kimbap.jpg" },
  { id: 3, name: "비빔밥", image: "/img/bibimbap.jpg" },
  { id: 4, name: "잡채", image: "/img/japchae.jpg" },
];

export default function Detail1() {
  return (
    <main className="detail">
      <h2>KOREA</h2>
      <div className="food-grid">
        {foods.map((food) => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.name} />
            <div className="food-info">
              <p>{food.name}</p>
              <LikeButton foodId={food.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
