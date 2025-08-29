// 대륙 → 나라
export const CATEGORIES = {
  ASIA: ["Korea", "Japan", "Vietnam", "Singapore"],
  Europe: ["Italy", "France", "UK"],
  Africa: ["Nigeria", "Egypt", "Morocco", "Kenya"],
  Oceania: ["Australia", "New Zealand"],
  NA: ["America", "Canada", "Mexico"],
  SA: ["Chile", "Brazil", "Peru"],
};

// 스와이퍼용 국기 (대표국가 19개)
export const FLAGS = [
  { code: "kr", name: "Korea",        img: "https://flagcdn.com/w320/kr.png" },
  { code: "jp", name: "Japan",        img: "https://flagcdn.com/w320/jp.png" },
  { code: "vn", name: "Vietnam",      img: "https://flagcdn.com/w320/vn.png" },
  { code: "sg", name: "Singapore",    img: "https://flagcdn.com/w320/sg.png" },
  { code: "it", name: "Italy",        img: "https://flagcdn.com/w320/it.png" },
  { code: "fr", name: "France",       img: "https://flagcdn.com/w320/fr.png" },
  { code: "gb", name: "UK",           img: "https://flagcdn.com/w320/gb.png" },
  { code: "ng", name: "Nigeria",      img: "https://flagcdn.com/w320/ng.png" },
  { code: "eg", name: "Egypt",        img: "https://flagcdn.com/w320/eg.png" },
  { code: "ma", name: "Morocco",      img: "https://flagcdn.com/w320/ma.png" },
  { code: "ke", name: "Kenya",        img: "https://flagcdn.com/w320/ke.png" },
  { code: "au", name: "Australia",    img: "https://flagcdn.com/w320/au.png" },
  { code: "nz", name: "New Zealand",  img: "https://flagcdn.com/w320/nz.png" },
  { code: "us", name: "America",      img: "https://flagcdn.com/w320/us.png" },
  { code: "ca", name: "Canada",       img: "https://flagcdn.com/w320/ca.png" },
  { code: "mx", name: "Mexico",       img: "https://flagcdn.com/w320/mx.png" },
  { code: "cl", name: "Chile",        img: "https://flagcdn.com/w320/cl.png" },
  { code: "br", name: "Brazil",       img: "https://flagcdn.com/w320/br.png" },
  { code: "pe", name: "Peru",         img: "https://flagcdn.com/w320/pe.png" },
];


// 나라별 음식(간단 예시)
export const DISHES = [
  {
    id:"kr-ttukbokki",
    country:"Korea",
    name:"Tteokbokki",
    type:["Rice","Spicy"],
    image:"https://images.unsplash.com/photo-1599084993091-1cb5d4ab0a3a?q=80&w=1400&auto=format&fit=crop",
    video:"https://www.youtube.com/embed/2zO1k9mE-eY",
    desc:"쫄깃한 떡과 매콤달콤 소스의 조합.",
    recipe:[
      "떡을 물에 살짝 불린다",
      "고추장+고춧가루+간장+설탕+물 섞기",
      "어묵, 대파와 함께 끓이면 끝"
    ]
  },
  {
    id:"kr-bibimbap",
    country:"Korea",
    name:"Bibimbap",
    type:["Rice"],
    image:"https://images.unsplash.com/photo-1625944528486-68de0d7f4b20?q=80&w=1400&auto=format&fit=crop",
    video:"https://www.youtube.com/embed/3Rzqgq1wOaE",
    desc:"다양한 나물과 고추장을 비벼 먹는 한국 대표 혼합 요리.",
    recipe:["밥 위에 나물·고기 올리기","고추장·참기름 넣고 비비기"]
  },
  {
    id:"jp-ramen",
    country:"Japan",
    name:"Ramen",
    type:["Noodle"],
    image:"https://images.unsplash.com/photo-1557872943-16a5ac26437b?q=80&w=1400&auto=format&fit=crop",
    video:"https://www.youtube.com/embed/H8Kc1YpVXv0",
    desc:"진한 육수와 면이 핵심인 일본의 대표 면 요리.",
    recipe:["육수 준비","면 삶기","차슈·계란 토핑"]
  },
  {
    id:"fr-baguette",
    country:"France",
    name:"Baguette Sandwich",
    type:["Bread"],
    image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1400&auto=format&fit=crop",
    video:"https://www.youtube.com/embed/7vok0t2e0yM",
    desc:"겉바속촉 바게트에 햄·치즈·야채를 넣은 간단 히트 메뉴.",
    recipe:["바게트 절반 가르기","버터 바르고 채소·햄·치즈"]
  },
];
