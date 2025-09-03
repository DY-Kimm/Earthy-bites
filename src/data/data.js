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
    image:"/img/korea/ttukbokki.jpg",
    video:"https://www.youtube.com/embed/meZTNU9Q7NY?si=0ZN0ACYYhpFSUdyF" ,
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
    image:"/img/korea/bibimbap.jpg",
    video:"https://www.youtube.com/embed/_wdyeAA1Wqc?si=481IjUHUBbKTmyst",
    desc:"다양한 나물과 고추장을 비벼 먹는 한국 대표 혼합 요리.",
    recipe:["밥 위에 나물·고기 올리기","고추장·참기름 넣고 비비기"]
  },
    {
    id:"kr-kimchi",
    country:"Korea",
    name:"Kimchi",
    type:["Fermented","Vegetable","Side"],
    image:"/img/korea/Kimchi.jpg",
    video:"https://www.youtube.com/embed/JTuLYuIG06M?si=2-uMbJbZkoZVD6xG",
    desc:"배추에 양념을 버무려 숙성시키는 한국 대표 발효 음식.",
    recipe:[
      "배추를 소금에 절여 물기 제거",
      "고춧가루·마늘·생강·젓갈·찹쌀풀로 양념 만들기",
      "배추에 양념 버무려 숙성"
    ]
  },
  {
    id:"kr-bulgogi",
    country:"Korea",
    name:"Bulgogi",
    type:["Meat","Grill"],
    image:"/img/korea/Bulgogi.png",
    video:"https://www.youtube.com/embed/GBTXOT256t4?si=vbOyE55PVYzjGHzg",
    desc:"얇게 썬 소고기를 달콤짭짤한 양념에 재워 구워 먹는 요리.",
    recipe:[
      "소고기를 간장·설탕·배즙·마늘·참기름에 재운다",
      "양파·파·버섯과 함께 볶거나 굽는다",
      "깨 뿌려 마무리"
    ]
  },
  {
    id:"kr-samgyetang",
    country:"Korea",
    name:"Samgyetang",
    type:["Soup","Chicken"],
    image:"/img/korea/Samgyetang.jpg",
    video:"https://www.youtube.com/embed/cmoUMm_WkGY?si=VnPO7MA8TKPpAYzo",
    desc:"통닭에 찹쌀·인삼·대추·마늘을 넣고 끓인 보양식.",
    recipe:[
      "손질한 영계에 찹쌀·대추·마늘·인삼 넣기",
      "냄비에 넣고 물 붓고 끓이기",
      "소금·후추로 간해 완성"
    ]
  },
  {
    id:"kr-galbijjim",
    country:"Korea",
    name:"Galbijjim",
    type:["Meat","Braised"],
    image:"/img/korea/Galbijjim.jpg",
    video:"https://www.youtube.com/embed/lK68IL48o28?si=zgAyS_keKXFoKsDo" ,
    desc:"소갈비를 간장 양념과 채소와 함께 부드럽게 졸인 명절 요리.",
    recipe:[
      "갈비를 데쳐 불순물 제거",
      "간장·설탕·마늘·배즙·후추로 양념",
      "무·당근·표고와 함께 약불로 졸이기"
    ]
  },
  {
    id:"kr-japchae",
    country:"Korea",
    name:"Japchae",
    type:["Noodle","Stir-fry","Vegetable"],
    image:"/img/korea/Japchae.png",
    video:"https://www.youtube.com/embed/qmC28-Omv_0?si=c-LMUVi11QkYv3fa",
    desc:"당면에 각종 채소와 고기를 넣어 간장 베이스로 볶은 요리.",
    recipe:[
      "당면을 불려 삶아 물기 제거",
      "채소·고기를 각각 볶기",
      "간장·설탕·참기름·후추로 간해 모두 섞기"
    ]
  },
  {
    id:"kr-gimbap",
    country:"Korea",
    name:"Gimbap",
    type:["Rice","Street","Snack"],
    image:"/img/korea/Gimbap.jpg",
    video:"https://www.youtube.com/embed/9HDQ84KksLU?si=qMcIF7jQcrf6Vy4f",
    desc:"김 위에 밥과 속재료를 올려 돌돌 만 간편식.",
    recipe:[
      "밥에 소금·참기름으로 간하기",
      "김 위에 밥 펴고 단무지·시금치·당근·어묵·계란 올리기",
      "단단히 말아 먹기 좋게 썬다"
    ]
  },
  {
    id:"kr-doenjangjjigae",
    country:"Korea",
    name:"Doenjang Jjigae",
    type:["Soup","Fermented"],
    image:"/img/korea/Doenjang Jjigae.jpg",
    video:"https://www.youtube.com/embed/ffuakdFmuh4?si=LSyRRYa3T1oJs6mk",
    desc:"된장에 채소·두부·해물을 넣고 끓인 구수한 찌개.",
    recipe:[
      "멸치·다시마로 육수 내기",
      "된장 풀고 감자·애호박·양파 넣기",
      "두부·고추 넣어 한소끔 더 끓이기"
    ]
  },
  {
    id:"kr-tteokguk",
    country:"Korea",
    name:"Tteokguk",
    type:["Soup","Rice"],
    image:"/img/korea/Tteokguk.jpg",
    video:"https://www.youtube.com/embed/_MhD25Ip3bc?si=-pJb7H55lepWZK3z",
    desc:"얇게 썬 가래떡을 맑은 국물에 끓여 먹는 설 명절 음식.",
    recipe:[
      "사골 또는 육수 준비",
      "떡국떡을 넣고 끓이기",
      "간장·소금으로 간하고 계란지단·김가루 올리기"
    ]
  },
  {
    id:"kr-jeon",
    country:"Korea",
    name:"Jeon",
    type:["Pan-fry","Snack","Side"],
    image:"/img/korea/Jeon.jpg",
    video:"https://www.youtube.com/embed/GSq_QbHyYMI?si=DTTlSM0NAtGE6TEz",
    desc:"부침가루(또는 밀가루) 반죽에 재료를 섞어 부쳐내는 전 요리.",
    recipe:[
      "부침가루·물로 반죽 만들기",
      "해물·부추·김치 등 재료 섞기",
      "기름 두른 팬에 앞뒤로 노릇하게 부치기"
    ]
  },
  {
    id:"jp-ramen",
    country:"Japan",
    name:"Ramen",
    type:["Noodle"],
    image:"/img/japan/Ramen.jpg",
    video:"https://www.youtube.com/embed/ijl0WWry0l4?si=YypXNGdN4OrKGcUQ",
    desc:"진한 육수와 면이 핵심인 일본의 대표 면 요리.",
    recipe:["육수 준비","면 삶기","차슈·계란 토핑"]
  },
  {
  id:"jp-takoyaki",
  country:"Japan",
  name:"Takoyaki",
  type:["Street","Snack","Pan-fry"],
  image:"/img/japan/Takoyaki.png",
  video:"https://www.youtube.com/embed/NauEeQg0j0A?si=AqFhty05sc5plsb0",
  desc:"밀가루 반죽에 문어를 넣어 구운 오사카식 간식.",
  recipe:["반죽 만들기","문어·파·텐카스 넣기","타코야키팬에서 굴려가며 굽기"]
  },
  {
    id:"jp-okonomiyaki",
    country:"Japan",
    name:"Okonomiyaki",
    type:["Pan-fry"],
    image:"/img/japan/Okonomiyaki.jpg",
    video:"https://www.youtube.com/embed/RhSfA2KRPWs?si=_hON_gGfiflWa-PL",
    desc:"양배추 가득한 부침에 소스·마요를 올려 먹는 일본식 전.",
    recipe:["반죽에 양배추·돼지고기 섞기","팬에 두껍게 부치기","소스·마요·가쓰오부시 토핑"]
  },
  {
    id:"jp-sukiyaki",
    country:"Japan",
    name:"Sukiyaki",
    type:["Hotpot","Beef"],
    image:"/img/japan/Sukiyaki.jpg",
    video:"https://www.youtube.com/embed/AwM3k4xrrug?si=7eN2t41dn_A4OglE",
    desc:"간장·설탕 베이스 육수에 소고기와 채소를 끓여 먹는 전골.",
    recipe:["냄비에 소스(간장·설탕·미림) 끓이기","소고기·두부·야채 넣기","날달걀에 찍어 먹기"]
  },
  {
    id:"jp-sushi",
    country:"Japan",
    name:"Sushi",
    type:["Rice","Seafood"],
    image:"/img/japan/Sushi.jpg",
    video:"https://www.youtube.com/embed/m-A3-YWkQxY?si=C-yMiwA8GA7fEhdo",
    desc:"식초밥 위에 생선이나 재료를 올린 일본 대표 음식.",
    recipe:["식초밥 만들기","네타(생선) 손질","쥐거나 말아 모양 내기"]
  },
  {
    id:"jp-tempura",
    country:"Japan",
    name:"Tempura",
    type:["Fry","Seafood","Vegetable"],
    image:"/img/japan/Tempura.jpg",
    video:"https://www.youtube.com/embed/k7jAwEe-O7Y?si=khIWcZJYsvW1WTrl",
    desc:"재료에 반죽을 입혀 바삭하게 튀긴 요리.",
    recipe:["반죽(차가운 물+가루) 준비","새우·야채에 반죽 입히기","180℃에서 바삭하게 튀기기"]
  },
  {
    id:"jp-yakiniku",
    country:"Japan",
    name:"Yakiniku",
    type:["BBQ","Meat","Grill"],
    image:"/img/japan/Yakiniku.jpg",
    video:"https://www.youtube.com/embed/BUWz22XWiX4?si=zWpyNUpkplp3G9F-",
    desc:"얇게 썬 소고기를 직접 구워 다양한 소스에 찍어 먹는 구이.",
    recipe:["고기 손질","그릴이나 팬에 굽기","타레·소금으로 곁들임"]
  },
  {
    id:"jp-monjayaki",
    country:"Japan",
    name:"Monjayaki",
    type:["Pan-fry","Street"],
    image:"/img/japan/Monjayaki.jpg",
    video:"https://www.youtube.com/embed/qc9TMFX9G2Y?si=ZwXiLXfRUjGE52cA",
    desc:"묽은 반죽을 철판에 얇게 펼쳐 긁어 먹는 도쿄식 철판 요리.",
    recipe:["재료 다지기","묽은 반죽 만들어 철판에 붓기","주걱으로 긁어가며 먹기"]
  },
  {
    id:"jp-unagi",
    country:"Japan",
    name:"Unagi (Kabayaki)",
    type:["Grill","Seafood","Rice"],
    image:"/img/japan/Unagi.jpg",
    video:"https://www.youtube.com/embed/lXGmgCbdm9c?si=fOxt7PXkeh5H0rrn",
    desc:"장어를 달짝지근한 소스로 구워 밥과 먹는 요리.",
    recipe:["장어 손질","간장·설탕·미림 소스로 구워내기","밥 위에 올려 덮밥으로"]
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
  // --- Vietnam (10)
{
  id:"vn-pho",
  country:"Vietnam",
  name:"Pho",
  type:["Noodle","Soup","Beef"],
  image:"/img/vietnam/Pho.jpg",
  video:"https://www.youtube.com/embed/VnkFoQP0aGQ?si=NKkFOBCOkAmbtUDK",
  desc:"향신료를 우린 육수에 쌀국수와 허브를 더한 베트남 대표 국수.",
  recipe:["소뼈·향신료로 육수 끓이기","쌀국수 삶기","고기·허브·라임과 함께 담기"]
},
{
  id:"vn-buncha",
  country:"Vietnam",
  name:"Bun Cha",
  type:["Noodle","Pork","Grill","Herb"],
  image:"/img/vietnam/Bun Cha.jpg",
  video:"",
  desc:"숯불에 구운 돼지고기를 분(가는 쌀국수)·허브·느억찜과 함께 먹는 하노이식 요리.",
  recipe:["돼지고기 양념해 굽기","분·허브 준비","느억찜에 찍어 먹기"]
},
{
  id:"vn-banhxeo",
  country:"Vietnam",
  name:"Banh Xeo",
  type:["Pan-fry","Shrimp","Pork"],
  image:"/img/vietnam/Banh Xeo.jpg",
  video:"https://www.youtube.com/embed/xiQ5m_UKIBo?si=m5m13Z_f_1N73b5W",
  desc:"강황 든 바삭한 반죽에 새우·돼지고기·숙주를 넣어 반달로 접어 먹는 전.",
  recipe:["반죽 만들어 팬에 얇게 굽기","속재료 넣고 접기","허브·소스와 곁들이기"]
},
{
  id:"vn-banhmi",
  country:"Vietnam",
  name:"Banh Mi",
  type:["Bread","Street"],
  image:"/img/vietnam/Banh Mi.jfif",
  video:"https://www.youtube.com/embed/vNxQU8AdqzE?si=0PVjubMzI1UTlW2B",
  desc:"겉바속촉 바게트에 파테·고기·피클·고수 등을 채운 스트리트 샌드위치.",
  recipe:["바게트 준비","파테·고기·피클·고수 채우기","소스 뿌려 완성"]
},
{
  id:"vn-goicuon",
  country:"Vietnam",
  name:"Goi Cuon (Fresh Rolls)",
  type:["Wrap","Shrimp","Herb","Cold"],
  image:"/img/vietnam/Goi Cuon.jpg",
  video:"https://www.youtube.com/embed/noVUkFAu9IM?si=DJO4g06VWTh_VAxW",
  desc:"라이스페이퍼에 새우·분·허브를 말아 땅콩 소스나 느억찜에 찍어 먹는 생롤.",
  recipe:["라이스페이퍼 적시기","분·새우·허브 올려 말기","소스와 함께 제공"]
},
{
  id:"vn-caolau",
  country:"Vietnam",
  name:"Cao Lau",
  type:["Noodle","Pork"],
  image:"/img/vietnam/Cao Lau.jpg",
  video:"https://www.youtube.com/embed/izp5XOUWePk?si=49XaNn40C6yT_5wY",
  desc:"호이안 지역의 쫄깃한 면에 돼지고기·허브·튀김크래커를 올린 건면 요리.",
  recipe:["면 삶기","차슈 스타일 돼지고기 준비","허브·소스와 함께 비벼 먹기"]
},
{
  id:"vn-comtam",
  country:"Vietnam",
  name:"Com Tam (Broken Rice)",
  type:["Rice","Pork","Grill"],
  image:"/img/vietnam/Com Tam.jpg",
  video:"https://www.youtube.com/embed/h__kLq8NG2I?si=WbAw2fGzNRVB1Lwu",
  desc:"부순 쌀밥 위에 그릴 돼지갈비·계란·피클을 올려 느억찜과 먹는 남부식 한 접시.",
  recipe:["갈비 양념해 굽기","부순 쌀밥 짓기","느억찜·파기름 얹어 완성"]
},
{
  id:"vn-bundaumamtom",
  country:"Vietnam",
  name:"Bun Dau Mam Tom",
  type:["Noodle","Tofu","Fermented","Street"],
  image:"/img/vietnam/Bun Dau Mam Tom.jpg",
  video:"https://www.youtube.com/embed/jPQ4uHnQUzA?si=dTSk2Re9f4vE74QB",
  desc:"바삭하게 튀긴 두부와 분, 각종 고기를 새우젓 발효소스(맘톰)에 찍어 먹는 요리.",
  recipe:["두부 바삭하게 튀기기","분·허브·고기 준비","맘톰에 찍어 먹기"]
},
{
  id:"vn-bunbohue",
  country:"Vietnam",
  name:"Bun Bo Hue",
  type:["Noodle","Soup","Spicy","Beef"],
  image:"/img/vietnam/Bun Bo Hue.jpeg",
  video:"https://www.youtube.com/embed/A_o2qfaTgKs?si=oAIIMOsQi2OVbqpb",
  desc:"레몬그라스 향이 진한 매콤한 국물에 굵은 면과 소고기를 넣어 먹는 후에 지역 국수.",
  recipe:["레몬그라스·사골로 육수 끓이기","면 삶기","고기·허브·라임 곁들임"]
},
{
  id:"vn-chagio",
  country:"Vietnam",
  name:"Cha Gio (Fried Spring Rolls)",
  type:["Fry","Snack","Street","Pork","Shrimp"],
  image:"/img/vietnam/Cha Gio.jpg",
  video:"https://www.youtube.com/embed/LGmzt39Uwts?si=tXi7Ta6JwSHqJYo2",
  desc:"다진 돼지고기·새우·야채를 라이스페이퍼에 말아 바삭하게 튀긴 베트남식 춘권(북부: 넴 란).",
  recipe:[
    "당면 불리고 당근·목이버섯·양파 다지기",
    "돼지고기·새우·야채·당면에 느억맘·후추로 간해 속 만들기",
    "라이스페이퍼 적셔 속을 넣고 단단히 말기",
    "170~180℃에서 노릇해질 때까지 두 번 튀기기(예열→재튀김)",
    "상추·허브와 함께 느억찜에 찍어 먹기"
  ]
},
// --- Singapore (10)
{
  id:"sg-chilicrab",
  country:"Singapore",
  name:"Chili Crab",
  type:["Seafood","Spicy","Stir-fry"],
  image:"/img/singapore/Chili Crab.jpg",
  video:"https://www.youtube.com/embed/-y71mrWCA4g?si=3q9wv2GM3wFHgWwV",
  desc:"달콤·매콤·새콤한 소스에 통게를 볶아 알싸하게 즐기는 싱가포르 대표 요리.",
  recipe:[
    "게 손질: 껍데기에 칼집을 내고 집게발을 살짝 부수어 소스가 스며들게 한 뒤 물기 제거",
    "소스 베이스: 케첩 4, 칠리소스 2, 두반장/발효콩장 1, 설탕 1, 식초 1, 물/육수 6, 간장 약간 섞기",
    "향내기: 웍에 기름 두르고 다진 샬롯·마늘·생강·레몬그라스(선택)를 약불에서 볶아 향을 낸다",
    "게 넣고 센불로 겉면이 붉어질 때까지 볶은 뒤, 소스와 함께 5–7분 끓이며 뚜껑으로 살짝 찐다",
    "농도/마무리: 전분물로 농도 맞추고 불을 낮춘 뒤, 풀어둔 달걀을 원을 그리며 넣어 부드럽게 섞는다",
    "간 맞추기: 라임즙 또는 식초로 산미 조절, 설탕·소금으로 밸런스 후 만토우(튀긴 찐빵)와 곁들임"
  ]
},
{
  id:"sg-laksa",
  country:"Singapore",
  name:"Laksa",
  type:["Noodle","Soup","Coconut","Seafood"],
  image:"/img/singapore/Laksa.jpg",
  video:"https://www.youtube.com/embed/hqJ0nI_XW4c?si=SqvOE8uHMMtcLTNn",
  desc:"향신 페이스트(렘파)와 코코넛밀크가 조화된 진한 카레풍 국수.",
  recipe:[
    "렘파 만들기: 샬롯·마늘·생강·갈랑갈·레몬그라스·건고추·새우젓/건새우·강황을 블렌더에 갈아 페이스트로",
    "기름 넉넉히 두른 웍에 렘파를 약불~중불에서 8–10분 볶아 붉은 향유가 올라오게 한다",
    "냄비에 닭/멸치 육수와 코코넛밀크를 넣고 볶은 렘파를 풀어 5분 끓인다",
    "두부퍼프·피시케이크·새우(또는 바지락)를 넣어 익힌다",
    "굵은 쌀국수/라크사 누들을 삶아 찬물에 헹궈 그릇에 담는다",
    "국물을 붓고 숙주·삶은 달걀·라임·라크사 잎(대체: 깻잎+고수 살짝)·삼발 칠리로 마무리"
  ]
},
{
  id:"sg-chickenrice",
  country:"Singapore",
  name:"Hainanese Chicken Rice",
  type:["Rice","Chicken","Poached"],
  image:"/img/singapore/Hainanese Chicken Rice.jpg",
  video:"https://www.youtube.com/embed/THRhrh-ChBE?si=nVEh04UxA6PkRZoW",
  desc:"부드럽게 포칭한 닭고기와 향긋한 밥, 3종 소스를 곁들이는 국민 음식.",
  recipe:[
    "닭 손질: 껍질에 굵은소금을 문질러 씻고 내장을 제거",
    "포칭수: 큰 냄비에 물+파뿌리/대파+생강+소금, 끓으면 닭을 넣고 약불로 35–45분 포칭",
    "아이스 배스: 닭을 즉시 차가운 물에 5분 담가 육즙을 잡고, 껍질에 참기름을 발라 광택",
    "치킨라이스: 냄비에 닭기름(또는 식용유) 두르고 다진 마늘·생강을 볶아 씻은 쌀을 살짝 볶은 뒤, 닭육수+판다잎 넣고 밥짓기",
    "칠리 소스: 생강·마늘·홍고추·라임즙·설탕·소금+닭육수 약간을 갈아 만든다",
    "간장 소스: 간장·설탕·닭기름을 살짝 데워 준비, 함께 오이·고수·맑은 수프를 곁들여 낸다"
  ]
},
{
  id:"sg-kayatoast",
  country:"Singapore",
  name:"Kaya Toast",
  type:["Bread","Sweet","Snack"],
  image:"/img/singapore/Kaya Toast.jpg",
  video:"https://www.youtube.com/embed/rxit7rDeveY?si=f4xhuGqXlMzlYblk",
  desc:"코코넛·달걀로 만든 카야잼과 두툼한 버터를 끼운 클래식 모닝 세트.",
  recipe:[
    "카야잼: 볼에 달걀+설탕를 풀고 코코넛밀크와 판다잎을 넣어 중탕",
    "약불로 15–20분 저어가며 걸쭉해지면 판다잎을 제거하고 체에 한 번 내려 매끈하게",
    "식빵은 얇게 슬라이스하여 바삭하게 토스트",
    "버터는 차갑게 두툼하게 썰어 준비",
    "토스트 한 면에 카야 듬뿍 바르고 반대 면에 버터를 얹어 샌드",
    "곁들임: 반숙 달걀(6–7분) + 다크간장·흰후추 톡톡, 코피/테(커피/차)와 함께"
  ]
},
{
  id:"sg-nasilemak",
  country:"Singapore",
  name:"Nasi Lemak",
  type:["Rice","Coconut","Set","Fry"],
  image:"/img/singapore/Nasi Lemak.jpg",
  video:"https://www.youtube.com/embed/VbTle9T6fDk?si=nQWvE16cT1IjZKpD",
  desc:"코코넛 라이스와 삼발, 멸치·땅콩·달걀·치킨 등을 한 접시에 올리 음식",
  recipe:[
    "코코넛 라이스: 쌀+코코넛밀크+물+판다잎+레몬그라스+소금 넣고 고슬하게 밥짓기",
    "삼발: 샬롯·마늘·말린고추를 갈아 기름에 볶고, 멸치 갈은 것·팜슈가·탐린드로 졸여 단짠매콤 완성",
    "토핑: 멸치는 바삭하게 튀기고, 땅콩은 볶아 소금 약간",
    "달걀 반숙 프라이, 오이 슬라이스 준비",
    "치킨(혹은 렌당/오타): 치킨은 간장·커리파우더·마늘로 밑간 후 튀기거나 에어프라이",
    "플레이팅: 밥을 중심에 두고 삼발·멸치·땅콩·오이·달걀·치킨을 곁들임"
  ]
},
{
  id:"sg-rojak",
  country:"Singapore",
  name:"Rojak",
  type:["Salad","Street","Sweet-Savory"],
  image:"https://source.unsplash.com/1400x900/?rojak,singapore",
  video:"",
  desc:"과일·채소·유부퍼프·튀긴빵을 새우젓 농축 소스에 버무린 믹스 샐러드.",
  recipe:[
    "소스: 농축 새우페이스트(hae ko) 2, 팜슈가 1, 탐린드/라임즙 1, 다진 고추·간장 약간 섞기",
    "재료 손질: 파인애플·오이·사과 큼직하게, 유부퍼프와 유티아오(튀긴빵)는 한입 크기로",
    "큰 볼에서 소스와 재료를 살살 섞어 코팅한다",
    "볶은 땅콩가루와 참깨를 듬뿍 뿌린다",
    "간 조절: 더 새콤하게 원하면 라임즙 추가, 단짠은 소스 비율로 맞춤"
  ]
},
{
  id:"sg-satay",
  country:"Singapore",
  name:"Satay",
  type:["Skewer","Grill","Street"],
  image:"https://source.unsplash.com/1400x900/?satay,singapore",
  video:"",
  desc:"강황·레몬그라스 향이 나는 꼬치구이. 땅콩소스에 찍어 먹는다.",
  recipe:[
    "마리네이드: 간 레몬그라스·샬롯·마늘·강황·커리파우더·설탕·소금·식용유를 섞어 돼지/닭/양고기에 2시간 이상 재운다",
    "꼬치에 고기를 꽂고 실온에 15분 둬 차가움을 뺀다",
    "강한 직화(숯불이면 최고)에서 앞뒤로 굽고, 남은 마리네이드를 살짝 발라 풍미 강화",
    "땅콩소스: 다진 땅콩을 기름에 볶아 향을 내고, 물+코코넛밀크+팜슈가+탐린드+칠리 파우더를 넣어 걸쭉하게",
    "케톤 피스(밥케이크)·오이·양파와 함께 제공"
  ]
},
{
  id:"sg-hokkienprawnmee",
  country:"Singapore",
  name:"Hokkien Prawn Mee",
  type:["Noodle","Stir-fry","Seafood"],
  image:"https://source.unsplash.com/1400x900/?hokkien%20prawn%20mee,singapore",
  video:"",
  desc:"새우머리 육수를 흡수시켜 볶아낸 촉촉한 해산물 볶음면.",
  recipe:[
    "육수: 새우머리·껍질을 기름에 충분히 볶아 향을 낸 뒤 물+돼지뼈(선택)를 넣어 30분 끓이고 체에 거른다",
    "면: 노란 달걀면과 쌀국수를 1:1로 삶아 헹군다",
    "웍에 라드/기름을 두르고 마늘·새우·오징어를 볶는다",
    "면을 넣고 육수를 국자 단위로 부어 흡수시키며 볶는다(촉촉하게 유지)",
    "계란을 가장자리에 풀어 스크램블, 숙주·부추로 마무리",
    "칼라만시/라임과 삼발 칠리를 곁들임"
  ]
},
{
  id:"sg-fishheadcurry",
  country:"Singapore",
  name:"Fish Head Curry",
  type:["Curry","Seafood","Spicy"],
  image:"https://source.unsplash.com/1400x900/?fish%20head%20curry,singapore",
  video:"",
  desc:"레드 스내퍼 머리를 통째로 넣어 끓이는 인도-말레이 퓨전 카레.",
  recipe:[
    "카레 페이스트: 커리파우더·칠리파우더·강황·코리앤더·커민에 다진 마늘·생강·샬롯·레몬그라스를 섞어 반죽",
    "냄비에 기름을 두르고 페이스트를 5분 볶아 향을 낸다",
    "물/생선육수+코코넛밀크를 넣고 끓인 뒤 탐린드 물로 새콤함 조절",
    "손질한 생선머리를 넣고 약불로 10–12분 익힌다",
    "오크라·가지·토마토를 넣어 살짝 더 끓인다",
    "소금·설탕·라임으로 간 맞추고 고수로 마무리"
  ]
},
{
  id:"sg-friedcarrotcake",
  country:"Singapore",
  name:"Fried Carrot Cake (Chai Tow Kway)",
  type:["Stir-fry","Egg","Street"],
  image:"https://source.unsplash.com/1400x900/?chai%20tow%20kway,singapore",
  video:"",
  desc:"무떡(흰 무와 쌀가루로 만든 케이크)을 웍에서 바삭하게 볶아낸 ‘블랙/화이트’ 두 가지 스타일.",
  recipe:[
    "무떡 준비: 시판 무떡을 큐브로 자르거나, 직접 만들 경우 쌀가루 반죽에 강판에 간 무를 섞어 찜틀에서 굳힌다",
    "웍에 기름 넉넉히 두르고 마늘을 볶아 향을 낸다",
    "무떡을 넣고 겉면이 바삭해질 때까지 누르듯이 볶는다",
    "계란을 풀어 가장자리에서 스크램블 후 섞고, 숙주·쪽파를 더한다",
    "화이트: 간장 최소, 후추와 삼발로 담백하게 / 블랙: 다크간장·팜슈가를 넣어 달콤짭짤하게",
    "취향에 따라 라임을 곁들여 마무리"
  ]
}


];
