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
    image:"/img/singapore/Rojak.jpg",
    video:"https://www.youtube.com/embed/03KLqayVtlc?si=iI57sLgxcp7kyEZK",
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
    image:"/img/singapore/Satay.jpg",
    video:"https://www.youtube.com/embed/84HePUEX75c?si=RNPnRwZNw54GN3oB",
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
    image:"/img/singapore/Hokkien Prawn Mee.jpg",
    video:"https://www.youtube.com/embed/VoVCvGRGGgc?si=-f4AkO_4hDpvIcOX",
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
    image:"/img/singapore/Fish Head Curry.jpg",
    video:"https://www.youtube.com/embed/fv7huAbZDVs?si=fTDzCvIjest27S-0",
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
    image:"/img/singapore/Chai Tow Kway.jpg",
    video:"https://www.youtube.com/embed/9lafRsGXio0?si=e_l5578f9rlB0lTh",
    desc:"무떡(흰 무와 쌀가루로 만든 케이크)을 웍에서 바삭하게 볶아낸 ‘블랙/화이트’ 두 가지 스타일.",
    recipe:[
      "무떡 준비: 시판 무떡을 큐브로 자르거나, 직접 만들 경우 쌀가루 반죽에 강판에 간 무를 섞어 찜틀에서 굳힌다",
      "웍에 기름 넉넉히 두르고 마늘을 볶아 향을 낸다",
      "무떡을 넣고 겉면이 바삭해질 때까지 누르듯이 볶는다",
      "계란을 풀어 가장자리에서 스크램블 후 섞고, 숙주·쪽파를 더한다",
      "화이트: 간장 최소, 후추와 삼발로 담백하게 / 블랙: 다크간장·팜슈가를 넣어 달콤짭짤하게",
      "취향에 따라 라임을 곁들여 마무리"
    ]
  },
  // --- Italy (11)
  {
    id:"it-pizza",
    country:"Italy",
    name:"Pizza",
    type:["Bread","Baked","Cheese"],
    image:"/img/italy/Pizza.jpg",
    video:"https://www.youtube.com/embed/VZU-EyQfUXQ?si=28NYsU2BymzhhrzM",
    desc:"얇은 도우에 토마토 소스와 모차렐라를 올려 구워낸 나폴리 스타일이 대표적.",
    recipe:[
      "도우: 강력분·이스트·소금·물·올리브오일을 섞어 반죽, 1차 발효 60–90분",
      "소스: 으깬 산마르차노 토마토에 소금·올리브오일·바질만 간단히",
      "반죽을 220–260℃로 예열한 오븐/스톤에 맞게 얇게 핀다",
      "소스→모차렐라→바질·올리브오일 순으로 올린다",
      "높은 온도에서 6–10분 구워 가장자리 콘치오네가 살짝 그을리게",
      "올리브오일 한 바퀴, 소금 한 꼬집으로 마무리"
    ]
  },
  {
    id:"it-pasta",
    country:"Italy",
    name:"Pasta",
    type:["Pasta","Main", "Noodle"],
    image:"/img/italy/Pasta.png",
    video:"https://www.youtube.com/embed/bhbf8-kFEQU?si=f1JaX9l6-Z9HMnJp",
    desc:"토마토·알리오 올리오·카르보나라 등 소스로 즐기는 이탈리아 대표 면.",
    recipe:[
      "소금물에 스파게티를 표시시간-1분으로 삶는다",
      "팬에 올리브오일과 마늘을 약불에 천천히 향내고 페페론치노(선택) 추가",
      "토마토 소스(또는 파스타수+파르미지아노)로 베이스 만들기",
      "면을 팬에 넣고 파스타수로 엉김을 풀며 1분 추가 조리",
      "소금·후추·치즈로 간, 올리브오일로 윤기",
      "바질·파르미지아노로 마무리"
    ]
  },
  {
    id:"it-gelato",
    country:"Italy",
    name:"Gelato",
    type:["Dessert","Frozen","Sweet"],
    image:"/img/italy/Gelato.jpg",
    video:"https://www.youtube.com/embed/NdhC_Dai64g?si=J_1tfdbdUU7DTnR3",
    desc:"우유와 설탕, 천연 재료로 만든 진하고 쫀득한 이탈리아 아이스크림.",
    recipe:[
      "베이스: 우유·생크림·설탕·탈지분유를 85℃까지 데워 저온살균",
      "바닐라빈(또는 과일퓨레·코코아)로 풍미를 더함",
      "완전히 식힌 뒤 4℃에서 숙성 4시간",
      "아이스크림 메이커로 저속 공기 주입하며 천천히 냉동",
      "파니니나 콘에 담고 피스타치오·초콜라토 등 토핑",
      "서빙 전 2–3분 실온 두어 가장 좋은 질감으로"
    ]
  },
  {
    id:"it-arancini",
    country:"Italy",
    name:"Arancini",
    type:["Rice","Fry","Snack"],
    image:"/img/italy/Arancini.jpg",
    video:"https://www.youtube.com/embed/HY8HQUlepE0?si=2EffczeIbGjisAr4",
    desc:"리소토를 동그랗게 뭉쳐 속을 넣고 빵가루를 입혀 튀긴 시칠리아 간식.",
    recipe:[
      "리소토(사프란/토마토 베이스)를 되직하게 만들어 식힌다",
      "속재료(라구·모차렐라·완두) 준비",
      "리소토를 펼쳐 속을 넣고 단단히 볼/콘 형태로 성형",
      "밀가루→달걀→빵가루 순으로 옷 입히기",
      "170–175℃에서 황금빛이 돌 때까지 튀김",
      "소금 한 꼬집, 따뜻할 때 제공"
    ]
  },
  {
    id:"it-ossobuco",
    country:"Italy",
    name:"Osso Buco",
    type:["Stew","Veal","Slow-cook"],
    image:"/img/italy/Osso Buco.jpg",
    video:"https://www.youtube.com/embed/T1vQXoLjUIM?si=oIIQnMfI4i2Wg1p-",
    desc:"송아지 사태를 화이트 와인과 채소와 함께 부드럽게 졸인 밀라노식 스튜.",
    recipe:[
      "사태에 소금·후추 후 밀가루 얇게 묻힘",
      "두꺼운 냄비에 올리브오일·버터를 녹여 고기를 노릇하게 시어",
      "양파·셀러리·당근(소프리토)을 넣고 향을 낸 뒤 화이트와인으로 디글레이즈",
      "육수·토마토 약간을 넣고 뚜껑 덮어 약불 1.5–2시간",
      "고기가 부드러워지면 그레몰라타(레몬제스트·파슬리·마늘)로 상큼함",
      "리소토 알라 밀라네제 또는 폴렌타와 곁들임"
    ]
  },
  {
    id:"it-tiramisu",
    country:"Italy",
    name:"Tiramisu",
    type:["Dessert","No-bake","Sweet"],
    image:"/img/italy/Tiramisu.jpg",
    video:"https://www.youtube.com/embed/2FsHfvXrx4g?si=H__MALv_ThZ9_q85",
    desc:"에스프레소에 적신 사보야르디와 마스카르포네 크림을 겹겹이 쌓은 디저트.",
    recipe:[
      "크림: 달걀노른자+설탕을 흰색이 될 때까지 거품, 마스카르포네를 부드럽게 섞기",
      "다른 볼에서 생크림을 70–80% 휘핑해 접는다",
      "사보야르디를 에스프레소+마르살라에 살짝 적신다",
      "용기에 비스킷→크림→코코아파우더 순으로 2–3층",
      "냉장 4시간 이상 굳힌 뒤 카카오 추가",
      "차갑게 썰어 제공"
    ]
  },
  {
    id:"it-risotto",
    country:"Italy",
    name:"Risotto",
    type:["Rice","Creamy","Main"],
    image:"/img/italy/Risotto.jpg",
    video:"https://www.youtube.com/embed/NKtR3KpS83w?si=BFI_zVNtJMb3chs0",
    desc:"아르보리오/카르나롤리 쌀을 육수로 저어가며 크리미하게 만든 쌀요리.",
    recipe:[
      "팬에 버터·올리브오일, 샬롯을 투명해질 때까지 볶기",
      "쌀을 넣어 1–2분 토스트하여 가장자리를 반투명하게",
      "화이트와인으로 디글레이즈 후 따뜻한 육수를 조금씩 보충하며 저어가며 흡수",
      "원하는 해산물이나 토핑 넣기",
      "약 15–18분 후 알단테가 되면 불을 끄고 버터·파르미지아노로 만테카투라",
      "소금·후추로 간, 올리브오일 몇 방울",
      "레몬제스트·허브(선택)로 마무리"
    ]
  },
  {
    id:"it-lasagna",
    country:"Italy",
    name:"Lasagna",
    type:["Baked","Pasta","Cheese"],
    image:"/img/italy/Lasagna.jpg",
    video:"https://www.youtube.com/embed/VkQajdYciW0?si=q9CrUSsxuiCXSZJR",
    desc:"라구 볼로네제와 베샤멜, 라자냐 시트를 겹겹이 쌓아 구운 오븐 파스타.",
    recipe:[
      "라구: 올리브오일에 소프리토→소고기·돼지고기 볶기→토마토·와인·허브로 1시간 이상 조림",
      "베샤멜: 버터+밀가루를 루로 만들고 우유를 나눠 넣어 소금·넛메그로 간",
      "오븐 180–190℃ 예열, 라자냐 시트는 생면/반조리 시 사용법에 맞게 준비",
      "틀에 라구→시트→베샤멜→치즈(모차렐라+파르미지아노) 순으로 4–5층",
      "호일 덮어 25–30분 굽고, 호일 제거 후 윗면 노릇하게 10분 추가",
      "10분 레스팅 후 컷팅"
    ]
  },
  {
    id:"it-ribollita",
    country:"Italy",
    name:"Ribollita",
    type:["Soup","Vegetable","Tuscan"],
    image:"/img/italy/Ribollita.png",
    video:"https://www.youtube.com/embed/myg-y7cHnag?si=irmETTJIkxXgjEe3",
    desc:"콩·토스카나 케일·채소에 빵을 넣어 다시 끓여 만드는 토스카나의 푸짐한 수프.",
    recipe:[
      "양파·셀러리·당근을 올리브오일에 볶아 단맛을 끌어낸다",
      "다진 토마토·콩(카넬리니)·케일·감자를 넣고 육수로 자작하게",
      "빵(하루 지난 통밀/차바타)을 큼직하게 뜯어 넣기",
      "약불로 30–40분 끓여 재료를 충분히 섞이게",
      "소금·후추 간, 올리브오일과 파르미지아노 살짝",
      "다음 날 데워 먹으면 더 풍미가 깊다"
    ]
  },
  {
    id:"it-saltimbocca",
    country:"Italy",
    name:"Saltimbocca",
    type:["Veal","Pan-fry","Herb"],
    image:"/img/italy/Saltimbocca.jpg",
    video:"https://source.unsplash.com/1400x900/?saltimbocca,italy",
    desc:["얇은 송아지 고기에 세이지와 프로슈토를 얹어 버터에 굽는 로마 요리.",
          "(돼지고기, 닭고기 등으로도 가능)"],
    recipe:[
      "비엘레(송아지) 슬라이스를 얇게 두드려 소금 아주 살짝",
      "세이지 잎과 프로슈토를 얹어 이쑤시개로 고정",
      "버터+올리브오일을 달군 팬에 앞뒤로 빠르게 굽기",
      "팬에 화이트와인을 넣어 소스를 간단히 만들어 고기에 끼얹기",
      "후추와 레몬으로 상큼하게",
      "루콜라와 함께 제공"
    ]
  },
  {
    id:"it-torrone",
    country:"Italy",
    name:"Torrone (Nougat)",
    type:["Dessert","Sweet","Confection"],
    image:"/img/italy/Torrone.jpg",
    video:"https://www.youtube.com/embed/xpB_9NRS7Fk?si=lj1M0zVoW36gPrJI",
    desc:"꿀·설탕·달걀흰자에 견과류를 듬뿍 넣어 굳힌 전통 누가.",
    recipe:[
      "설탕·꿀을 낮은 불에서 120–140℃ 사이로 끓여 시럽 만들기",
      "달걀흰자를 단단히 머랭 내고 뜨거운 시럽을 실처럼 부으며 휘핑",
      "따뜻할 때 볶은 아몬드·피스타치오를 섞는다",
      "호지지 않은 웨이퍼지(옵션) 사이에 반죽을 펼쳐 눌러 평평하게",
      "실온에서 완전히 굳힌 뒤 막대/사각으로 절단",
      "가볍게 슈거파우더를 뿌려 보관"
    ]
  },
  // --- France (10)
  {
    id:"fr-foiegras",
    country:"France",
    name:"Foie Gras",
    type:["Appetizer","Liver","Gourmet"],
    image:"/img/france/Foie Gras.jpg",
    video:"https://www.youtube.com/embed/IeVY8u6Y-z4?si=rDhGHieh5OsuM9fZ",
    desc:"거위·오리 간을 저온으로 익혀 버터처럼 부드럽게 즐기는 프랑스 정찬 전채.",
    recipe:[
      "간 손질: 핏줄(베인)을 제거하고 소금·후추·코냑/아르마냑으로 마리네이드(하룻밤)",
      "테린: 틀에 단단히 눌러 담고 뚜껑을 덮어 90–100℃ 오븐에서 내부 55–58℃가 될 때까지 베인마리",
      "프레싱: 윗면을 눌러 기포 제거 후 냉장 숙성 1–2일",
      "서빙: 얇게 슬라이스하여 브리오슈·푸룬/무화과 콩피와 곁들임"
    ]
  },
  {
    id:"fr-escargot",
    country:"France",
    name:"Escargots de Bourgogne",
    type:["Appetizer","Snail","Garlic-Butter"],
    image:"/img/france/Escargots.jpg",
    video:"https://www.youtube.com/embed/pEQ7_6ZE_Yw?si=piqd8tP-5DrtDHK_",
    desc:"달걀버터·마늘·파슬리를 채운 달팽이를 껍질째 구워 먹는 부르고뉴 스타일.",
    recipe:[
      "허브버터: 말랑한 버터+마늘 다짐+파슬리+소금·후추를 섞는다",
      "껍질에 달팽이 살을 넣고 허브버터를 듬뿍 채운다",
      "220℃ 예열 오븐에서 버터가 끓어오를 때까지 7–10분 굽기",
      "바게트와 함께 따끈할 때 제공"
    ]
  },
  {
    id:"fr-coqauvin",
    country:"France",
    name:"Coq au Vin",
    type:["Stew","Chicken","Wine"],
    image:"/img/france/Coq au Vin.jpg",
    video:"https://www.youtube.com/embed/hJswLfXL_GA?si=hWvTCwchvuywTdQv",
    desc:"레드와인에 닭과 베이컨·버섯·진주양파를 넣어 천천히 졸인 전통 스튜.",
    recipe:[
      "닭을 소금·후추로 간하고 베이컨 기름에서 겉면을 시어한다",
      "마늘·양파·당근을 볶아 향을 내고 토마토페이스트 살짝",
      "레드와인+치킨스톡을 부어 데글레이즈, 부케가르니 추가",
      "뚜껑 덮고 약불 45–60분, 마지막에 버터에 볶은 버섯·진주양파 넣고 간 맞춤"
    ]
  },
  {
    id:"fr-cremebrulee",
    country:"France",
    name:"Crème Brûlée",
    type:["Dessert","Custard","Baked"],
    image:"/img/france/Creme Brulee.jpg",
    video:"https://www.youtube.com/embed/ZPz7FP15OCs?si=NZuS8_ntJgDn0YIg",
    desc:"바닐라 커스터드를 굽고 윗면을 설탕으로 캐러멜라이즈한 디저트.",
    recipe:[
      "크림+우유를 바닐라빈과 데워 향 추출, 달걀노른자+설탕을 섞는다",
      "따뜻한 크림을 서서히 부어 템퍼링 후 체에 걸러 램킨에 담기",
      "베인마리로 150℃에서 30–40분 굽고 젤리처럼 떨림이 남을 때 꺼내 냉장",
      "설탕을 뿌려 토치로 캐러멜층을 만들어 즉시 제공"
    ]
  },
  {
    id:"fr-bouillabaisse",
    country:"France",
    name:"Bouillabaisse",
    type:["Soup","Seafood","Provence"],
    image:"/img/france/Bouillabaisse.jpg",
    video:"https://www.youtube.com/embed/d7yDx8WM2Q8?si=aujH2TQY0xtFCeTR",
    desc:"마르세유식 생선·갑각류 수프로, 사프란 향과 루이유 소스가 특징.",
    recipe:[
      "생선머리·뼈를 올리브오일에 볶아 향 내고 펜넬·양파·토마토·사프란 추가",
      "화이트와인·물을 부어 30분 끓여 체에 걸러 베이스 완성",
      "살점 좋은 생선·홍합·새우를 순서대로 넣어 살짝만 익힌다",
      "구운 바게트에 루이유(마늘·고추·달걀노른자·올리브오일) 발라 곁들임"
    ]
  },
  {
    id:"fr-quichelorraine",
    country:"France",
    name:"Quiche Lorraine",
    type:["Baked","Egg","Pork"],
    image:"/img/france/Quiche Lorraine.jpg",
    video:"https://www.youtube.com/embed/naZgw-QJHMs?si=D0MBIC_kHeQ2fF75",
    desc:"베이컨과 크림·계란을 넣은 로렌 지방의 클래식 키슈.",
    recipe:[
      "파트 브리제(타르트 반죽)를 1차 블라인드 베이크",
      "베이컨을 볶아 기름을 제거하고 식힌다",
      "계란+생크림+우유+넛메그+소금·후추를 섞고 치즈(선택) 추가",
      "껍질에 베이컨과 커스터드를 부어 180℃에서 30–35분 구움"
    ]
  },
  {
    id:"fr-galette",
    country:"France",
    name:"Galette Complète",
    type:["Crepe","Savory","Buckwheat"],
    image:"/img/france/Galette Complete.png",
    video:"https://www.youtube.com/embed/mADGZWN72og?si=Re31UsvEN7W5-JDw",
    desc:"메밀 크레페에 햄·치즈·계란을 올려 접어 굽는 브르타뉴식 갈레트.",
    recipe:[
      "반죽: 메밀가루·물·소금을 섞어 1시간 휴지",
      "팬에 얇게 부쳐 치즈→햄→계란을 올린다",
      "가장자리가 바삭해지면 네 모서리를 접어 사각형으로 마감",
      "버터 한 조각과 후추로 마무리"
    ]
  },
  {
    id:"fr-croissant",
    country:"France",
    name:"Croissant",
    type:["Pastry","Breakfast","Baked"],
    image:"/img/france/Croissant.jpg",
    video:"https://www.youtube.com/embed/VwEdV6WqdL0?si=6ugKq9O517qzHgcZ",
    desc:"버터층을 접어 올린 라미네이티드 도우로 만든 바삭한 크루아상.",
    recipe:[
      "도우를 치대고 냉장 휴지, 버터 블록을 감싸 3회 접기(삼절접기)",
      "0.3–0.4cm 두께로 밀어 삼각형을 말아 성형",
      "27–28℃에서 2차 발효(바람 약하게) 후 달걀물",
      "200→180℃로 떨어뜨리며 15–20분 구움"
    ]
  },
  {
    id:"fr-macaron",
    country:"France",
    name:"Macaron",
    type:["Dessert","Confection","Baked"],
    image:"/img/france/Macaron.jpg",
    video:"https://www.youtube.com/embed/dGs-7IYH9Lw?si=eA9fjP4Nqpo21PKl",
    desc:"아몬드 파우더 머랭 과자 사이에 가나슈/버터크림을 끼운 섬세한 디저트.",
    recipe:[
      "이탈리안 머랭: 시럽 118℃를 흰자에 실처럼 부어 단단히 휘핑",
      "탄탈라이즈: 아몬드가루+슈거파우더+흰자에 머랭을 나눠 넣고 마카로나주",
      "팬닝 후 표면 건조 20–40분(손에 안 묻을 정도)",
      "150–160℃에서 12–15분 굽고 완전히 식힌 뒤 필링 샌딩, 숙성"
    ]
  },
  {
    id:"fr-croquemonsieur",
    country:"France",
    name:"Croque-Monsieur",
    type:["Sandwich","Cheese","Baked"],
    image:"/img/france/Croque Monsieur.png",
    video:"https://www.youtube.com/embed/S8lINFyPPBM?si=oXizRssG7ELjPtqn",
    desc:"하몽·그뤼예르·베샤멜을 넣고 구워낸 프렌치 핫샌드위치.",
    recipe:[
      "베샤멜: 버터+밀가루 루에 우유를 나눠 넣어 농도 맞추고 소금·후추·넛메그",
      "식빵 한 면에 베샤멜→하몽/햄→치즈를 올려 샌드",
      "윗면에도 얇게 베샤멜·치즈를 더해 오븐/에어프라이어로 노릇하게",
      "선택: 계란을 올리면 크로크 마담"
    ]
  },
  // --- UK (8)
  {
    id:"gb-fishandchips",
    country:"UK",
    name:"Fish and Chips",
    type:["Seafood","Fry","Potato","Street"],
    image:"https://source.unsplash.com/1400x900/?fish%20and%20chips,uk",
    video:"",
    desc:"바삭한 생선 튀김과 두 번 튀긴 두툼한 칩스를 함께 먹는 영국 대표 스트리트 푸드.",
    recipe:[
      "칩스: 감자를 두껍게 썰어 20분 찬물에 담근 뒤 물기를 완전히 제거",
      "1차 튀김: 160℃ 기름에서 3–4분 튀겨 속만 익히고 건져 식힘",
      "생선 반죽: 박력분+베이킹파우더+소금에 아주 차가운 맥주/탄산수로 되직하게 섞어 10분 휴지",
      "생선(대구/해덕)을 소금·후추하고 얇게 밀가루 → 반죽 입혀 180℃에서 황금빛까지 튀기기",
      "칩스 2차 튀김: 190℃에서 겉을 바삭하게 재튀김",
      "말트식초·타르타르소스·무쉬피(선택)와 곁들임"
    ]
  },
  {
    id:"gb-sundayroast",
    country:"UK",
    name:"Sunday Roast",
    type:["Roast","Beef","Set"],
    image:"https://source.unsplash.com/1400x900/?sunday%20roast,uk",
    video:"",
    desc:"일요일에 가족과 즐기는 정통 로스트 세트(고기·로스트 포테이토·요크셔푸딩·그래비).",
    recipe:[
      "고기 준비: 소등심/닭/양다리 중 선택, 소금·후추·허브로 마리네이드",
      "오븐 200℃ 예열, 고기를 10–15분 시어링 후 160–180℃로 낮춰 내부 원하는 굽기까지",
      "로스트 포테이토: 감자를 반쯤 삶아 가장자리를 거칠게 한 뒤, 거위지/기름에 200℃에서 바삭하게",
      "팬 드리핑으로 루를 만들고 스톡을 넣어 그래비 완성",
      "요크셔푸딩과 구운 당근·파스닙·완두와 함께 플레이팅",
      "썰기 전 고기는 10분 레스팅"
    ]
  },
  {
    id:"gb-fullenglish",
    country:"UK",
    name:"Full English Breakfast",
    type:["Breakfast","Pan-fry","Egg"],
    image:"https://source.unsplash.com/1400x900/?english%20breakfast,uk",
    video:"",
    desc:"소시지·베이컨·계란·버섯·토마토·베이크드빈·토스트가 한 접시에 담긴 영국식 아침.",
    recipe:[
      "팬에서 소시지와 베이컨을 먼저 노릇하게 굽기",
      "버섯·토마토를 같은 팬에서 소금·후추로 간해 굽기",
      "작은 소스팬에 베이크드빈을 데움",
      "달걀 프라이는 반숙/완숙 취향대로",
      "토스트에 버터 바르고 모든 구성 요소를 따뜻하게 담아낸다",
      "옵션: 해시브라운·블랙푸딩 추가"
    ]
  },
  {
    id:"gb-yorkshirepudding",
    country:"UK",
    name:"Yorkshire Pudding",
    type:["Baked","Side"],
    image:"https://source.unsplash.com/1400x900/?yorkshire%20pudding,uk",
    video:"",
    desc:"뜨겁게 달군 틀에 반죽을 부어 번쩍 솟게 구워내는 바삭·비어있는 사이드.",
    recipe:[
      "반죽: 달걀·우유·밀가루를 동량 비율(부피)로 섞고 소금 한 꼬집, 30분 휴지",
      "머핀 틀에 드리핑/기름을 넣어 220℃에서 연기날 때까지 예열",
      "반죽을 빠르게 붓고 20–25분 열지 말고 굽기",
      "즉시 꺼내 바삭함 유지, 그래비와 함께"
    ]
  },
  {
    id:"gb-scones",
    country:"UK",
    name:"Scones",
    type:["Baked","Tea","Sweet"],
    image:"https://source.unsplash.com/1400x900/?scones,uk",
    video:"",
    desc:"애프터눈 티의 필수 아이템. 클로티드 크림과 잼과 함께.",
    recipe:[
      "박력분·베이킹파우더·설탕·소금을 섞고 차가운 버터를 손끝으로 모래상태가 되도록 섞기",
      "우유/크림을 넣어 최소한으로 섞어 한 덩어리로 만든 뒤 2cm 두께로 펼치기",
      "커터로 찍어 올리고 표면에 우유/계란물",
      "200℃에서 12–15분 구워 살짝 색이 나면 꺼내 식힘",
      "따뜻할 때 크림과 잼을 곁들여 제공"
    ]
  },
  {
    id:"gb-cottagepie",
    country:"UK",
    name:"Cottage Pie",
    type:["Pie","Beef","Baked"],
    image:"https://source.unsplash.com/1400x900/?cottage%20pie,uk",
    video:"",
    desc:"다진 소고기 스튜 위에 매시드 포테이토를 덮어 구운 가정식 파이.",
    recipe:[
      "소고기 다짐육을 갈색이 날 때까지 볶고, 양파·당근·셀러리를 더해 볶기",
      "토마토페이스트·우스터소스·타임·스톡을 넣고 자작하게 15분 끓이기",
      "매시드 포테이토: 버터·우유로 크리미하게 준비",
      "베이킹 틀에 고기→매시를 얹고 포크로 표면을 거칠게",
      "200℃에서 윗면이 노릇해질 때까지 20–25분 굽기",
      "잠시 식힌 후 컷팅"
    ]
  },
  {
    id:"gb-beefwellington",
    country:"UK",
    name:"Beef Wellington",
    type:["Beef","Baked","Pastry"],
    image:"https://source.unsplash.com/1400x900/?beef%20wellington,uk",
    video:"",
    desc:"안심·머스터드·버섯 득셀·프로슈토를 퍼프 페이스트리에 감싸 구운 클래식.",
    recipe:[
      "소고기 안심을 두면 시어링 후 머스터드를 바르고 식힘",
      "버섯 득셀(버섯·샬롯·타임을 물기 없어질 때까지 볶음) 준비",
      "랩 위에 프로슈토를 펼쳐 득셀을 바르고 고기를 올려 단단히 말아 냉장",
      "퍼프 페이스트리에 감싸 가장자리를 봉하고 달걀물",
      "200℃에서 내부 52–55℃(미디엄 레어)까지 구움, 10분 레스팅",
      "슬라이스하여 레드와인 소스와 제공"
    ]
  },
  {
    id:"gb-haggis",
    country:"UK",
    name:"Haggis",
    type:["Offal","Boil","Traditional"],
    image:"https://source.unsplash.com/1400x900/?haggis,scotland",
    video:"",
    desc:"양 내장·귀리·향신료를 섞어 케이싱에 채워 삶아 먹는 스코틀랜드 전통 요리.",
    recipe:[
      "베이스: 간 양간·심장·허파(또는 대체 간고기)를 잘게 다지고 양파 볶은 것·귀리(Oatmeal)·수지·향신료를 섞기",
      "소금·후추·올스파이스·넛메그로 간하고 약간의 육수를 넣어 질감 조절",
      "케이싱/호그캐싱에 70–80%만 채워 실로 묶기(팽창 여유)",
      "끓지 않는 온수(약 90–95℃)에서 2–3시간 천천히 삶기",
      "꺼내 10분 레스팅 후 절단",
      "니프스&태티스(순무·감자 매시)와 위스키 소스와 함께"
    ]
  },
    // --- Nigeria (9)
  {
    id:"ng-jollof",
    country:"Nigeria",
    name:"Jollof Rice",
    type:["Rice","One-pot","Spicy"],
    image:"/img/nigeria/Jollof Rice.jpg",
    video:"https://www.youtube.com/embed/EfZEArZcfAY?si=33bE1es9Ot4Vbykg",
    desc:"토마토·고추 베이스 소스로 볶아 지은 서아프리카식 매콤한 볶음밥.",
    recipe:[
      "블렌더에 토마토·홍고추·양파·토마토페이스트를 갈아 소스 준비",
      "냄비에 기름 두르고 양파·향신료(카레파우더·타임·베이리프)를 볶아 향내기",
      "토마토 소스를 넣고 걸쭉해질 때까지 8–10분 졸이기",
      "세척한 장립종 쌀을 넣어 소스에 코팅하고 치킨스톡/물 부어 섞기",
      "약불에서 뚜껑 덮고 뜸 들이기(중간중간 파프리카·완두·당근 추가 가능)",
      "버터 한 조각과 소금으로 간 맞추고 부드럽게 섞어 마무리"
    ]
  },
  {
    id:"ng-egusi",
    country:"Nigeria",
    name:"Egusi Soup",
    type:["Soup","Stew","Seeds"],
    image:"/img/nigeria/Egusi Soup.jpg",
    video:"https://www.youtube.com/embed/SLxSksjC_0g?si=tCxBcz5jw1_S8ej5",
    desc:"멜론씨를 갈아 걸쭉하게 끓인 진한 스튜. (각종 고기·잎채소를 더해 먹는다)",
    recipe:[
      "멜론씨(egusi)를 곱게 갈아 약간의 물/육수와 반죽처럼 섞어 둔다",
      "팜오일에 양파·고추(스카치보넷)·토마토를 볶고 토마토페이스트 약간",
      "고기(소고기·트라이프·스톡피시 등)와 육수를 넣어 끓인다",
      "egusi 반죽을 숟가락으로 떠 넣어 덩어리 형태로 익힌다",
      "우구잎(또는 시금치)을 넣고 소금·부이옹으로 간해 한소끔"
    ]
  },
  {
    id:"ng-iyan",
    country:"Nigeria",
    name:"Iyán (Pounded Yam, Yoruba)",
    type:["Staple","Swallow","Yam"],
    image:"/img/nigeria/Pounded Yam.jpg",
    video:"https://www.youtube.com/embed/9ghB5S3IQWc?si=50vHoOSefrr37plh",
    desc:"삶은 얌을 찧어 매끈하고 쫀득하게 만든 요루바 스타일 스테이플.",
    recipe:[
      "얌을 두껍게 깎아 큼직하게 썰고 소금 약간 넣어 삶아 익힌다",
      "물기를 빼고 따뜻할 때 절구/믹서로 고루 찧어 덩어리 제거",
      "점성이 생기고 매끈해지면 공 모양으로 성형",
      "에구시/오그보노/오크로 같은 수프와 함께 손으로 떼어 찍어 먹기"
    ]
  },
  {
    id:"ng-suya",
    country:"Nigeria",
    name:"Suya",
    type:["Skewer","Grill","Street","Spicy"],
    image:"/img/nigeria/Suya.jpg",
    video:"https://www.youtube.com/embed/c27vMVHEJJ4?si=yyhN_TUmfb9jmBJb",
    desc:"땅콩가루·칠리·향신료로 맛낸 매콤고소한 꼬치구이.",
    recipe:[
      "수야 스파이스: 로스티드 땅콩가루+kuli-kuli(대체: 땅콩가루)+파프리카·카옌·생강·마늘·소금을 섞기",
      "소고기를 얇게 저며 스파이스·기름에 버무려 최소 1시간 재운다",
      "꼬치에 꿰어 강한 불에서 앞뒤로 굽기",
      "추가 스파이스를 살짝 뿌리고 양파 슬라이스·토마토와 곁들임"
    ]
  },
  {
    id:"ng-tuwo",
    country:"Nigeria",
    name:"Tuwo Shinkafa",
    type:["Staple","Swallow","Rice"],
    image:"/img/nigeria/Tuwo Shinkafa.jpg",
    video:"https://www.youtube.com/embed/BKUgOBK_ii8?si=4DTMktDE2IgFnub2",
    desc:"잘 익혀 뭉친 쌀 스왈로로, 북부 지역에서 즐기는 부드러운 주식.",
    recipe:[
      "짧은 알 쌀을 물 넉넉히 넣어 매우 부드럽게 될 때까지 끓인다",
      "주걱으로 강하게 치대며 전분을 풀어 점도를 만든다",
      "물 조금씩 조절해 떡같이 뭉치면 공 모양으로 성형",
      "마이마사/미얌마사·마페 수프 등과 함께 곁들임"
    ]
  },
  {
    id:"ng-isiewu",
    country:"Nigeria",
    name:"Isi Ewu",
    type:["Offal","Spicy","Delicacy"],
    image:"/img/nigeria/Isi Ewu.jpg",
    video:"https://www.youtube.com/embed/LW08cOSntw4?si=po9-3Pg3CtfCK6Iu",
    desc:"염소 머리를 푹 삶아 향신료와 팜오일 소스에 버무린 매콤한 이그부 지역 별미.",
    recipe:[
      "염소 머리를 깨끗이 손질해 소금·향신료와 함께 부드러워질 때까지 삶기",
      "냄비에 팜오일을 덥히고 potash 물(선택)을 약간 섞어 농도/색을 낸다",
      "양념: 어니언 파우더·크레이피시·칠리·시즈닝 큐브를 넣어 섞는다",
      "삶은 고기를 큼직하게 썰어 양념에 버무리고 향이 배도록 한소끔",
      "향용 잎(utazi)과 양파 슬라이스로 마무리"
    ]
  },
  {
    id:"ng-moinmoin",
    country:"Nigeria",
    name:"Moin Moin",
    type:["Bean","Steam","Snack"],
    image:"/img/nigeria/Moin Moin.jpg",
    video:"https://www.youtube.com/embed/7lOH8iJlVQE?si=zSDul_KK_CH1GK55",
    desc:"껍질 벗긴 블랙아이빈을 갈아 찜기에 쪄낸 부드러운 콩 푸딩.",
    recipe:[
      "블랙아이빈을 물에 불려 껍질을 비벼 제거하고 헹군다",
      "콩·양파·고추·기름·시즈닝을 블렌더에 곱게 간다",
      "참치·삶은 달걀·새우(선택)를 섞고 점도를 조절",
      "컵/바나나잎/호일에 담아 찜솥에서 40–60분 쪄 굳히기",
      "식혀서 꺼내면 매끈한 콩 케이크 완성"
    ]
  },
  {
    id:"ng-akara",
    country:"Nigeria",
    name:"Akara",
    type:["Bean","Fry","Street","Breakfast"],
    image:"/img/nigeria/Akara.jpg",
    video:"https://www.youtube.com/embed/r2hVi_f4M6g?si=oRccxu8xWH655XV3",
    desc:"껍질 벗긴 콩 반죽을 노릇하게 튀긴 바삭한 빈 프리터.",
    recipe:[
      "블랙아이빈을 불려 껍질 제거 후 물 적게 넣고 곱게 간다",
      "소금·양파·고추를 섞고 반죽을 공기감 있게 휘핑",
      "175–180℃ 기름에 숟가락으로 떠 넣어 겉이 바삭할 때까지 튀기기",
      "키친타월에 눌러 기름 제거, 핫소스/빵과 함께"
    ]
  },
    // --- Egypt (10)
  {
    id:"eg-koshari",
    country:"Egypt",
    name:"Koshari",
    type:["Rice","Pasta","Vegan","Street"],
    image:"/img/egypt/Koshari.jpg",
    video:"https://www.youtube.com/embed/h2EUaWt8YVw?si=oSDtW8dIQ7EDg0ZF",
    desc:"밥·렌틸·마카로니에 매콤한 토마토소스와 바삭한 어니언을 올린 이집트 국민 음식.",
    recipe:[
      "렌틸은 물에 삶아 소금 살짝 간한다",
      "쌀은 양파기름/식용유로 살짝 볶아 물 넣고 고슬하게 짓는다",
      "마카로니를 따로 삶아 체에 밭친다",
      "소스: 올리브오일에 마늘·고춧가루 볶고 토마토퓨레·식초·소금·설탕으로 졸인다",
      "토핑: 양파를 길게 썰어 밀가루 살짝 묻혀 바삭하게 튀긴다",
      "그릇에 밥→렌틸→파스타→소스→튀긴 양파 순으로 담고, 두카/식초 칠리(샤타) 곁들임"
    ]
  },
  {
    id:"eg-falafel",
    country:"Egypt",
    name:"Ta'amiya (Falafel)",
    type:["Bean","Fry","Vegan","Street"],
    image:"/img/egypt/Falafel.jpg",
    video:"https://www.youtube.com/embed/5OiCGPqu9TE?si=AGmdGoiTgqvLLgs-",
    desc:"건치커피 대신 주로 **잠팖콩(말린 강낭콩 X)**이 아닌 **말린 잠두콩(팔라펠용 콩=퓔/파바빈)**으로 만드는 이집트식 팔라펠.",
    recipe:[
      "불린 말린 잠두콩(또는 반반 병행)과 파슬리·고수·양파·마늘·커민·코리앤더를 곱게 간다",
      "베이킹파우더·소금을 섞어 점도를 맞추고 30분 휴지",
      "손/스쿱으로 성형해 통깨를 묻힌다(선택)",
      "170–175℃ 기름에서 겉바속촉이 되도록 튀긴다",
      "에이쉬에 샐러드·타히니소스와 함께 샌드"
    ]
  },
  {
    id:"eg-ful",
    country:"Egypt",
    name:"Ful Medames",
    type:["Bean","Stew","Vegan","Breakfast"],
    image:"/img/egypt/Ful Medames.jpg",
    video:"https://www.youtube.com/embed/N8eMVqyR1l0?si=kTdJxy7t1VHXtTrW",
    desc:"잠두콩을 오래 끓여 올리브오일·레몬·마늘로 간한 이집트식 콩 스튜.",
    recipe:[
      "말린 잠두콩을 하룻밤 불린 뒤 약불에서 푹 삶아 으깨기",
      "다진 마늘·레몬즙·올리브오일·소금·커민으로 간",
      "토핑: 다진 토마토·양파·고수·칠리, 삶은 달걀(선택)",
      "에이쉬와 곁들여 덜어 먹기"
    ]
  },
  {
    id:"eg-moussaka",
    country:"Egypt",
    name:"Moussaka (Egyptian)",
    type:["Eggplant","Bake","Main"],
    image:"/img/egypt/Egyptian-Moussaka.jpg",
    video:"https://www.youtube.com/embed/HeM0oV524Uk?si=HF-8Z6YZMqlImmdE",
    desc:"기름에 지진 가지와 토마토 고기소스를 겹겹이 담아 구운 이집트식 무사카.",
    recipe:[
      "가지 슬라이스에 소금 뿌려 수분 제거 후 살짝 튀기거나 오븐에 굽는다",
      "양고기/소고기 다짐육을 양파·마늘과 볶고 토마토소스·계피 한 꼬집·소금·후추로 졸인다",
      "그릇에 가지→소스→가지→소스 순으로 채우고 윗면에 토마토 슬라이스",
      "180℃ 오븐에서 20–25분 구워 휴지 후 서빙"
    ]
  },
  {
    id:"eg-kofta",
    country:"Egypt",
    name:"Kofta",
    type:["Meat","Skewer","Grill"],
    image:"/img/egypt/Kofta.jpg",
    video:"https://www.youtube.com/embed/fl96UDyIwig?si=-cBFCupKTzYwwlWe",
    desc:"양고기/소고기에 향신료와 허브를 넣어 꼬치로 구운 중동식 미트 스큐어.",
    recipe:[
      "다진 고기에 다진 양파·파슬리·마늘·커민·코리앤더·소금·후추를 섞는다",
      "손에 물을 묻혀 꼬치에 길쭉하게 성형",
      "강한 불/그릴에서 겉을 바삭하게 굽고 속은 촉촉하게",
      "타히니 소스·샐러드·에이쉬와 함께"
    ]
  },
  {
    id:"eg-aish",
    country:"Egypt",
    name:"Aish Baladi (Egyptian Flatbread)",
    type:["Bread","Baked","Staple"],
    image:"/img/egypt/Aish Baladi.jpg",
    video:"https://www.youtube.com/embed/d-sFn81WzWo?si=Aemj6FIg4xYxEN8n",
    desc:"통밀가루에 겨가 살아있는 납작빵. 높은 열에서 순간 팽창시켜 속이 빈다.",
    recipe:[
      "통밀가루·이스트·소금·물로 반죽해 매끈해질 때까지 치대고 1차 발효",
      "작게 분할해 동그랗게 밀어 10분 휴지",
      "고온(250–300℃)의 돌판/스톤에서 1–2분 구워 풍선처럼 부풀리기",
      "식힘망에서 식혀 주머니처럼 사용"
    ]
  },
  {
    id:"eg-shakshuka",
    country:"Egypt",
    name:"Shakshuka",
    type:["Egg","Skillet","Breakfast"],
    image:"/img/egypt/Shakshuka.jpg",
    video:"https://www.youtube.com/embed/TZcaNhgKF-s?si=Q85B3ynJr6fGWu0-",
    desc:"토마토·피망 소스에 달걀을 톡 떨어뜨려 반숙으로 익힌 팬 요리.",
    recipe:[
      "올리브오일에 양파·피망·마늘을 볶고 커민·파프리카로 향을 낸다",
      "으깬 토마토를 넣어 자작하게 졸인다",
      "달걀을 떨어뜨려 뚜껑 덮고 흰자만 굳을 때까지 익힌다",
      "고수/파슬리·페타치즈(선택)를 올리고 에이쉬와 곁들임"
    ]
  },
  {
    id:"eg-hummus",
    country:"Egypt",
    name:"Hummus",
    type:["Dip","Vegan","Appetizer"],
    image:"/img/egypt/Hummus.jpg",
    video:"https://www.youtube.com/embed/lr-I2-nPQMY?si=JkEAehjSZzrMrOMV",
    desc:"병아리콩을 타히니·레몬·마늘과 갈아 만든 부드러운 중동식 딥.",
    recipe:[
      "불린 병아리콩을 부드럽게 삶아 껍질을 벗기면 더 크리미",
      "타히니·레몬즙·마늘·소금·올리브오일과 함께 갈아 점도 조절",
      "접시에 펼쳐 올리브오일·파프리카·파슬리로 마무리",
      "에이쉬/채소와 함께 딥으로"
    ]
  },
  {
    id:"eg-rozbellaban",
    country:"Egypt",
    name:"Roz Bel Laban (Rice Pudding)",
    type:["Dessert","Sweet","Pudding"],
    image:"/img/egypt/Roz Bel Laban.png",
    video:"https://www.youtube.com/embed/FmnWysRKzyw?si=Tf46AutzU4F1G8C6",
    desc:"우유와 설탕에 쌀을 천천히 끓여 만든 이집트식 라이스 푸딩.",
    recipe:[
      "쌀을 씻어 우유와 함께 약불에서 저어가며 끓인다",
      "설탕·바닐라/오렌지블로섬워터로 향을 더한다",
      "걸쭉해지면 불을 끄고 크림/버터 약간(선택)을 섞는다",
      "그릇에 담아 계피·견과로 장식 후 차갑게/따뜻하게 제공"
    ]
  },
  {
    id:"eg-kunafa",
    country:"Egypt",
    name:"Kunafa (Knafeh)",
    type:["Dessert","Sweet","Baked"],
    image:"/img/egypt/Kunafa.jpg",
    video:"https://www.youtube.com/embed/bhnJhv09xcA?si=ukUgKFnlJNRcOLrK",
    desc:"실처럼 가는 카다이프 반죽을 버터에 적셔 구운 뒤 시럽을 부어 먹는 디저트.",
    recipe:[
      "카다이프(슈레디드 필로)를 녹인 버터에 고루 섞어 반쯤 찢어 준다",
      "틀에 절반을 눌러 깔고 치즈/커스터드/견과 필링을 올린 뒤 나머지 반죽 덮기",
      "180–190℃에서 황금빛이 날 때까지 구운다",
      "시럽(설탕·물·레몬즙·장미/오렌지블로섬워터)을 뜨거울 때 부어 스며들게",
      "피스타치오를 뿌려 따뜻할 때 커트"
    ]
  },
    // --- Morocco (9)
  {
    id:"ma-couscous",
    country:"Morocco",
    name:"Couscous",
    type:["Grain","Stew","Set"],
    image:"",
    video:"",
    desc:"세몰리나 쿠스쿠스를 찜기에 쪄서 채소·고기 스튜와 함께 먹는 모로코 대표 한 상.",
    recipe:[
      "스튜: 냄비에 올리브오일을 두르고 양파·마늘을 볶은 뒤, 양고기/닭고기와 강황·생강·후추·라스엘 하나우트·사프란을 넣어 시어",
      "물/스톡을 붓고 당근·순무·호박·주키니·병아리콩을 넣어 중약불로 끓인다",
      "쿠스쿠스: 세몰리나에 소금·올리브오일을 섞고 미지근한 물을 뿌려 알갱이를 고루 적신다",
      "쿠스쿠시어(찜기) 윗칸에 펼쳐 10분 찌고 내려서 알을 풀어 다시 물 뿌려 2차 찜(총 2~3회 반복하면 폭신)",
      "플레이팅: 큰 접시에 쿠스쿠스를 돔처럼 담고 가운데 홈을 내서 스튜와 채소를 붓고, 캐러멜 양파·건포도(선택)로 마무리"
    ]
  },
  {
    id:"ma-pastilla",
    country:"Morocco",
    name:"Pastilla (Bastilla)",
    type:["Pastry","Baked","Sweet-Savory"],
    image:"",
    video:"",
    desc:"닭/비둘기 고기, 아몬드와 계피를 넣은 달짝지근·짭짤한 파이. 설탕가루와 계피로 마무리.",
    recipe:[
      "필링1(고기): 냄비에 양파·마늘·사프란·계피·생강·버터를 넣고 닭을 조려 익힌 뒤 살을 찢는다",
      "필링2(계란): 조림 국물에 달걀을 풀고 천천히 저어 스크램블처럼 되직하게 만든다",
      "필링3(아몬드): 아몬드를 볶아 갈고 설탕·계피·오렌지플라워워터 소량과 섞는다",
      "조립: 녹인 버터를 바른 와르까/필로를 겹겹이 깔고 고기→계란→아몬드 순으로 채운 뒤 덮어 가장자리를 봉한다",
      "굽기: 190℃ 오븐에서 황금빛이 날 때까지 굽고, 슈거파우더와 계피가루를 체쳐 장식"
    ]
  },
  {
    id:"ma-tagine",
    country:"Morocco",
    name:"Chicken Tagine with Preserved Lemon & Olives",
    type:["Stew","Slow-cook","Chicken"],
    image:"",
    video:"",
    desc:"타지냄비에 보존 레몬과 올리브를 넣고 천천히 졸인 대표 타지네.",
    recipe:[
      "마리네이드: 마늘·생강·강황·커민·후추·파프리카·레몬즙·올리브오일을 섞어 닭에 문질러 30분",
      "타진 바닥에 양파를 깔고 닭을 올린 뒤, 물 약간과 보존 레몬 조각·그린 올리브를 더한다",
      "약불에서 뚜껑 닫고 40–60분, 중간에 소스를 끼얹어가며 익힌다",
      "소스가 윤기 나게 줄어들면 고수·파슬리로 마무리, 뜨거울 때 빵/쿠스쿠스와"
    ]
  },
  {
    id:"ma-tanjia",
    country:"Morocco",
    name:"Tanjia Marrakchia",
    type:["Stew","Slow-cook","Beef/Lamb"],
    image:"",
    video:"",
    desc:"마라케시식 항아리 요리(‘탄지야’). 커민·사프란·보존 레몬 향으로 오래 천천히 익힌 고기.",
    recipe:[
      "고기에 마늘·커민·후추·사프란·파프리카·보존레몬 국물·올리브오일을 넣어 버무린다(스멘 한 꼬집 선택)",
      "항아리/냄비에 넣고 물 소량을 부어 입구를 호일로 단단히 봉한다",
      "오븐 150–160℃에서 3–4시간(또는 아주 약불) 천천히 익힌다",
      "소스가 자작하게 남고 고기가 결 따라 부드럽게 찢어지면 레몬 조각·고수로 마무리"
    ]
  },
  {
    id:"ma-khlii",
    country:"Morocco",
    name:"Khlii (Khlea)",
    type:["Preserved","Meat","Confit"],
    image:"",
    video:"",
    desc:"향신료에 절이고 말린 뒤 지방에 푹 익혀 보관하는 모로코식 육보관식. 계란과 함께 자주 조리.",
    recipe:[
      "소고기를 길게 저며 소금·식초·마늘·커민·코리앤더·후추로 재운 뒤 그늘에서 말린다",
      "말린 고기를 냄비에 지방/오일과 함께 아주 약불에서 기름에 잠기도록 천천히 익혀 콘피",
      "살균한 병에 고기와 조리 지방을 함께 부어 보관",
      "조리 예: 팬에 기름을 두르고 Khlii를 볶아 향을 내고, 달걀을 깨 넣어 스크램블로"
    ]
  },
  {
    id:"ma-khobz",
    country:"Morocco",
    name:"Khobz (Round Bread)",
    type:["Bread","Baked","Staple"],
    image:"",
    video:"",
    desc:"두툼하고 둥근 일상 빵. 수프·타지네와 곁들이거나 속을 갈라 샌드처럼 먹는다.",
    recipe:[
      "밀가루·세몰리나(선택)·이스트·소금·미지근한 물로 반죽해 매끈해질 때까지 치댄다",
      "둥글게 빚어 1차 발효 후, 납작하게 눌러 시몬(세몰리나)을 묻힌다",
      "표면에 포크로 구멍을 내고 2차 발효",
      "230℃ 예열 오븐/스톤에서 15–20분 구워 색과 볼륨이 나면 식힘"
    ]
  },
  {
    id:"ma-hummus",
    country:"Morocco",
    name:"Hummus",
    type:["Dip","Vegan","Appetizer"],
    image:"",
    video:"",
    desc:"병아리콩·타히니·레몬·마늘을 곱게 갈아 만든 크리미한 디핑 소스.",
    recipe:[
      "불린 병아리콩을 매우 부드럽게 삶고 껍질을 벗기면 더 매끈",
      "타히니·레몬즙·마늘·소금·올리브오일과 함께 갈며 얼음물/콩삶은물로 점도 조절",
      "접시에 펼쳐 올리브오일·파프리카·파슬리, 핫소스/올리브로 마무리",
      "코브즈/채소 스틱과 함께"
    ]
  },
  {
    id:"ma-msemen",
    country:"Morocco",
    name:"Msemen",
    type:["Flatbread","Pan-fry","Breakfast"],
    image:"",
    video:"",
    desc:"기름과 버터로 접어 겹을 낸 사각 팬케이크. 벌집 같은 결이 특징.",
    recipe:[
      "밀가루+미세 세몰리나·소금·물로 부드럽고 매끈한 반죽을 만든 뒤 작은 공으로 나눠 20분 휴지",
      "작업대에 오일을 바르고 반죽을 얇게 펴서 녹인 버터+오일을 바르고 세몰리나를 살짝 흩뿌린다",
      "편지접기(삼중→세로 삼중)로 사각형을 만든다",
      "중불 팬에 양면을 노릇하게 구워 겹이 살아나게 누르며 익힌다",
      "꿀·버터·치즈·잼 등과 곁들임"
    ]
  },
  {
    id:"ma-sfenj",
    country:"Morocco",
    name:"Sfenj",
    type:["Fry","Dessert","Street"],
    image:"",
    video:"",
    desc:"바삭 겉과 쫄깃 속의 이스트 도넛. 설탕을 살짝 묻혀 뜨끈할 때 먹는다.",
    recipe:[
      "강력분·이스트·소금·물로 매우 끈적한 반죽을 만들어 1–2시간 발효",
      "기름을 손에 묻혀 반죽을 떼어 가운데 구멍을 내 링 모양으로 늘린다",
      "170–175℃ 기름에 넣어 양면을 바삭하게 튀긴다",
      "기름을 빼고 설탕을 살짝 묻히거나 꿀 시럽을 끼얹어 제공"
    ]
  },
    // --- Kenya (10)
  {
    id:"ke-ugali",
    country:"Kenya",
    name:"Ugali",
    type:["Staple","Maize","Side"],
    image:"",
    video:"",
    desc:"옥수수가루를 물에 졸여 단단하게 만든 케냐의 대표 주식.",
    recipe:[
      "냄비에 물을 끓이고 소금을 약간 넣는다",
      "옥수수가루를 비에 맞듯 천천히 뿌리며 거품기로 빠르게 저어 뭉침을 방지",
      "주걱으로 바꿔가며 되직해질 때까지 저어 익힌다",
      "뚜껑을 덮고 약불로 2–3분 더 뜸 들인 뒤 그릇에 뒤집어 담는다",
      "수쿠마 위키·스튜와 함께 손으로 떼어 먹기"
    ]
  },
  {
    id:"ke-sukumawiki",
    country:"Kenya",
    name:"Sukuma Wiki",
    type:["Vegetable","Stir-fry","Vegan"],
    image:"",
    video:"",
    desc:"콜라드/케일을 토마토·양파와 볶아낸 서민 반찬. ‘한 주 버티기’라는 뜻을 지님.",
    recipe:[
      "팬에 기름을 두르고 양파를 투명해질 때까지 볶는다",
      "다진 마늘·토마토를 넣어 수분이 줄 때까지 조린다",
      "얇게 썬 콜라드/케일을 넣고 숨이 죽을 때까지 볶기",
      "소금·후추(선택: 큐민/카레파우더)로 간해 마무리",
      "우갈리와 곁들여 먹는다"
    ]
  },
  {
    id:"ke-nyamachoma",
    country:"Kenya",
    name:"Nyama Choma",
    type:["Grill","Meat","Street"],
    image:"",
    video:"",
    desc:"숯불에 구운 염소/소고기 구이. 간단한 양념으로 고기의 풍미를 살린다.",
    recipe:[
      "고기에 소금·후추·레몬즙·기름을 문질러 30분 재운다",
      "강한 숯불에서 겉을 바삭하게, 속은 촉촉하게 굽는다",
      "굽는 동안 기름+레몬즙을 붓으로 살짝 발라 윤기",
      "키추ಂಬ리(토마토·양파 샐러드)와 함께 썰어낸다"
    ]
  },
  {
    id:"ke-githeri",
    country:"Kenya",
    name:"Githeri",
    type:["Stew","Bean","Maize","Vegan"],
    image:"",
    video:"",
    desc:"삶은 옥수수와 콩을 토마토 소스에 볶아/졸여 먹는 가정식.",
    recipe:[
      "불린 콩과 옥수수를 부드럽게 삶아 체에 밭친다",
      "냄비에 기름, 양파·마늘을 볶고 토마토·카레가루(선택)를 넣어 소스 만들기",
      "콩·옥수수를 넣고 섞어가며 자작하게 졸인다",
      "소금으로 간하고 고수·칠리로 마무리"
    ]
  },
  {
    id:"ke-mandazi",
    country:"Kenya",
    name:"Mandazi",
    type:["Fry","Dessert","Tea-time"],
    image:"",
    video:"",
    desc:"코코넛 향의 도넛/빵 사이. 바삭하고 속은 폭신한 스와힐리 간식.",
    recipe:[
      "밀가루·설탕·베이킹파우더·소금에 코코넛밀크·물·기름을 섞어 반죽",
      "덩어리를 치대어 매끈하게 만든 뒤 30분 휴지",
      "0.7cm 두께로 밀어 삼각형/사각형으로 자른다",
      "170–175℃ 기름에 노릇하게 튀기고, 설탕을 살짝 뿌려 제공"
    ]
  },
  {
    id:"ke-samosa",
    country:"Kenya",
    name:"Samosa",
    type:["Fry","Snack","Street"],
    image:"",
    video:"",
    desc:"향신료 간 소고기/채소를 넣은 삼각 만두 튀김. 인도 영향을 받은 인기 간식.",
    recipe:[
      "속: 다짐육(또는 감자·완두)을 양파·마늘·생강·가람마살라와 함께 볶아 식힌다",
      "밀가루 반죽을 얇게 밀어 스트립으로 자르고 콘을 만들어 속을 채운다",
      "가장자리를 밀가루풀로 봉한다",
      "175℃ 기름에서 바삭하게 튀겨 키추ंब리/소스와 제공"
    ]
  },
  {
    id:"ke-mukimo",
    country:"Kenya",
    name:"Mukimo",
    type:["Mash","Vegetable","Staple"],
    image:"",
    video:"",
    desc:"감자에 옥수수·완두/강낭콩·잎채소를 섞어 으깬 키쿠유 전통 요리.",
    recipe:[
      "감자·옥수수·콩을 각각 익도록 삶는다",
      "시금치/호랑이콩잎 등 녹색 잎을 데쳐 잘게 다진다",
      "큰 냄비에서 모든 재료를 넣고 으깨 섞으며 소금·버터로 간",
      "우갈리처럼 메인/사이드로 활용"
    ]
  },
  {
    id:"ke-chapati",
    country:"Kenya",
    name:"Chapati",
    type:["Flatbread","Pan-fry","Side"],
    image:"",
    video:"",
    desc:"기름에 살짝 지져 층이 살아있는 동아프리카식 차파티.",
    recipe:[
      "밀가루·소금·미지근한 물(선택: 기름·설탕 조금)로 부드러운 반죽을 만들어 30분 휴지",
      "작게 분할해 얇게 민 뒤 기름을 바르고 말아 소라 모양→납작하게 눌러 층 만들기",
      "팬을 중불로 달궈 양면을 노릇하게 굽고 약간의 기름으로 마무리",
      "스튜·차이와 곁들임"
    ]
  },
  {
    id:"ke-irio",
    country:"Kenya",
    name:"Irio",
    type:["Mash","Vegetable","Side"],
    image:"",
    video:"",
    desc:"완두·옥수수·감자를 으깨고 때로는 당근·파를 더한 담백한 매시.",
    recipe:[
      "감자를 삶아 으깨고, 완두·옥수수는 따로 데쳐 준비",
      "팬에 버터/기름을 두르고 파를 살짝 볶아 향을 낸다(선택)",
      "모든 재료를 섞어 소금으로 간하고 필요 시 우유 조금",
      "냐마 초마·스튜와 곁들여 제공"
    ]
  },
  {
    id:"ke-pilau",
    country:"Kenya",
    name:"Pilau",
    type:["Rice","Spiced","One-pot"],
    image:"",
    video:"",
    desc:"스와힐리풍 향신료(필라우 마살라)로 지은 향긋한 고기 밥.",
    recipe:[
      "냄비에 기름을 두르고 양파를 깊은 갈색이 나도록 천천히 볶아 단맛 내기",
      "마늘·생강·필라우 마살라(카다몸·계피·정향·큐민·코리앤더)를 넣어 향을 낸다",
      "소고기/염소고기를 넣어 겉면을 익히고 토마토 약간을 넣어 풀어준다",
      "세척한 쌀을 넣어 코팅 후 뜨거운 물/스톡을 붓고 소금 간",
      "뚜껑 덮어 약불로 뜸 들이고, 마지막에 버터 한 조각과 고수로 마무리"
    ]
  },
  // --- Australia (9)
  {
    id:"au-meatpie",
    country:"Australia",
    name:"Meat Pie",
    type:["Pie","Baked","Savory"],
    image:"",
    video:"",
    desc:"진한 그레이비 고기소를 넣어 구운 호주식 미트 파이.",
    recipe:[
      "필링: 팬에 기름 두르고 양파를 볶은 뒤 다짐 소고기·비프스톡·우스터·토마토페이스트·후추를 넣어 졸인다",
      "농도: 물+옥수수전분으로 농도 맞추고 식혀 둔다",
      "반죽: 퍼프 페이스트리/쇼트크러스트를 틀에 깔고 바닥을 포크로 찍는다",
      "필링을 담고 윗덮개(퍼프)를 씌워 가장자리를 눌러 밀봉, 증기구멍을 낸다",
      "180–200℃ 오븐에서 25–35분, 겉이 황금색이 될 때까지 굽기",
      "토마토 소스(케찹)와 함께"
    ]
  },
  {
    id:"au-lamington",
    country:"Australia",
    name:"Lamington",
    type:["Dessert","Cake","Sweet"],
    image:"",
    video:"",
    desc:"스폰지 케이크를 초코 아이싱에 적셔 코코넛에 굴린 호주 디저트.",
    recipe:[
      "스폰지 케이크를 하룻밤 식혀 큐브로 자른다",
      "아이싱: 코코아·슈거파우더·버터·우유를 섞어 묽게 만든다",
      "케이크 큐브를 아이싱에 굴려 코팅",
      "코코넛 가루에 굴려 고루 묻힌다",
      "선택: 가운데 잼/크림을 샌드한 후 코팅해도 좋다",
      "굳힌 뒤 상온/냉장 보관"
    ]
  },
  {
    id:"au-pavlova",
    country:"Australia",
    name:"Pavlova",
    type:["Dessert","Meringue","Fruit"],
    image:"",
    video:"",
    desc:"겉은 바삭, 속은 마시멜로처럼 부드러운 머랭 케이크 위에 크림과 과일을 올린 디저트.",
    recipe:[
      "머랭: 흰자에 설탕을 나눠 넣어 단단한 뿔이 설 때까지 휘핑(옥수수전분·식초 약간)",
      "원판 형태로 팬에 올리고 가운데 살짝 오목하게",
      "110–120℃에서 75–90분 저온 구움 → 오븐 안에서 완전 냉각",
      "크림: 휘핑크림을 70–80%로 올린다",
      "토핑: 키위·베리·패션푸르트 등 제철 과일",
      "먹기 직전 머랭 위에 크림·과일을 올려 제공"
    ]
  },
  {
    id:"au-vegemitetoast",
    country:"Australia",
    name:"Vegemite Toast",
    type:["Breakfast","Toast","Savory"],
    image:"",
    video:"",
    desc:"버터 바른 토스트에 베지마이트를 아주 얇게 펴 바르는 호주식 아침.",
    recipe:[
      "식빵을 노릇하게 토스트",
      "따뜻할 때 버터를 넉넉히 바른다",
      "베지마이트를 얇게—정말 얇게—펴 바른다",
      "선택: 치즈 한 장을 올려 치즈 토스트로",
      "반으로 잘라 따뜻할 때 먹기"
    ]
  },
  {
    id:"au-kangaroosteak",
    country:"Australia",
    name:"Kangaroo Steak",
    type:["Meat","Grill","Pan-sear"],
    image:"",
    video:"",
    desc:"지방이 적어 강한 불에 짧게 구워 먹는 캥거루 스테이크.",
    recipe:[
      "마리네이드: 올리브오일·마늘·후추·허브(타임)·레몬즙을 살짝",
      "고기를 실온에 20분 두고 수분 제거",
      "아주 뜨거운 팬/그릴에서 한 면 1.5–2.5분씩 강불 시어",
      "호일에 느슨히 감아 5분 레스팅",
      "슬라이스 후 소금으로 마무리, 레드와인 주스/후추버터 곁들임"
    ]
  },
  {
    id:"au-crocodile",
    country:"Australia",
    name:"Crocodile (Skewers/Steak)",
    type:["Meat","Grill","Seafood-adjacent"],
    image:"",
    video:"",
    desc:"담백한 악어 고기를 레몬·허브로 간단히 양념해 구워 먹는 요리.",
    recipe:[
      "레몬즙·마늘·올리브오일·소금·후추·허브에 20–30분 가볍게 재운다",
      "스테이크는 팬 시어, 꼬치는 꼬치에 꿰어 그릴에서 굽는다",
      "겉면이 살짝 갈색이 돌고 속은 촉촉할 정도로 짧게 조리",
      "레몬을 짜 마무리, 허브 샐러드와 함께"
    ]
  },
  {
    id:"au-bushtucker",
    country:"Australia",
    name:"Bush Tucker Sampler",
    type:["Platter","Native","Fusion"],
    image:"",
    video:"",
    desc:"호주 토착 식재료(핑거 라임·왓틀시드·레몬 머틀 등)를 활용한 간단 플래터.",
    recipe:[
      "딥: 사워크림+레몬머틀 파우더+소금을 섞어 허브 딥을 만든다",
      "왓틀시드 듁카: 볶은 왓틀시드·참깨·아몬드·소금·후추를 굵게 빻아 섞기",
      "프로틴: 캥거루/에뮤 햄 등 얇은 슬라이스(대체 가능)를 준비",
      "가니시: 핑거 라임 펄·토마토·허브, 담퍼/크래커를 곁들임",
      "플레이팅: 딥·듁카·프로틴·가니시를 한 접시에 구성해 찍어 먹기"
    ]
  },
  {
    id:"au-anzac",
    country:"Australia",
    name:"ANZAC Biscuits",
    type:["Cookie","Baked","Tea-time"],
    image:"",
    video:"",
    desc:"귀리·코코넛·골든 시럽으로 만드는 바삭고소한 비스킷.",
    recipe:[
      "마른 재료: 오트·밀가루·설탕·코코넛을 볼에 섞는다",
      "소스팬에 버터와 골든시럽을 녹이고, 탄산수소나트륨을 뜨거운 물에 풀어 섞는다",
      "젖은 재료를 마른 재료에 붓고 섞어 반죽",
      "스쿱으로 떠 팬에 올려 살짝 눌러 모양",
      "160–170℃에서 12–15분 구워 황금빛이 돌면 꺼내 식힘"
    ]
  },
  {
    id:"au-fairybread",
    country:"Australia",
    name:"Fairy Bread",
    type:["Snack","No-cook","Party"],
    image:"",
    video:"",
    desc:"버터 바른 흰 식빵에 ‘스프링클(100’s & 1000’s)’을 듬뿍 뿌린 파티 간식.",
    recipe:[
      "흰 식빵의 가장자리를 제거(선택)",
      "상온 버터를 고르게 바른다",
      "스프링클을 넉넉히 뿌려 가볍게 눌러 고정",
      "삼각형/사각형으로 잘라 바로 제공"
    ]
  },
    // --- New Zealand (7)
  {
    id:"nz-hangi",
    country:"New Zealand",
    name:"Hāngi",
    type:["Traditional","Earth-oven","Feast"],
    image:"",
    video:"",
    desc:"땅을 파서 달군 돌 위에 고기·채소를 올려 천으로 덮고 흙으로 밀봉해 천천히 익히는 마오리 전통 잔치 음식.",
    recipe:[
      "땅을 파고 화덕을 만들어 큰 돌을 달궈 둔다",
      "고기(양/돼지/닭)와 감자·고구마·호박 등을 소금·후추로 간하고 바스켓/망에 담는다",
      "달궈진 돌 위에 바스켓을 올리고 젖은 헷삼/천으로 덮은 뒤 흙으로 밀봉",
      "2–3시간 저온 증기로 천천히 익힌다",
      "꺼내어 바스켓 채로 휴지 후 접시에 고기와 채소를 함께 담아 제공"
    ]
  },
  {
    id:"nz-lamb",
    country:"New Zealand",
    name:"New Zealand Lamb Roast",
    type:["Meat","Roast","Herb"],
    image:"",
    video:"",
    desc:"허브와 마늘로 향을 더한 뉴질랜드산 양고기 로스트.",
    recipe:[
      "양 다리/랙에 올리브오일·마늘·로즈마리·타임·후추를 문지르고 실온 20분",
      "오븐 220℃에서 10분 시어 후 180℃로 낮춰 원하는 굽기까지 로스트",
      "중간에 팬 주스를 끼얹어가며 촉촉하게 굽는다",
      "호일로 느슨히 감아 10분 레스팅",
      "민트 소스·로스트 채소와 함께 썰어 제공"
    ]
  },
  {
    id:"nz-greenlippedmussel",
    country:"New Zealand",
    name:"Green-lipped Mussels",
    type:["Seafood","Shellfish","Steam"],
    image:"",
    video:"",
    desc:"뉴질랜드 고유의 초록입홍합을 간단히 찜/스팀해 소스로 즐기는 요리.",
    recipe:[
      "홍합을 솔로 문질러 세척 후 수염 제거",
      "냄비에 화이트와인·마늘·샬롯을 넣고 끓인다",
      "홍합을 넣고 뚜껑을 덮어 3–5분, 입이 벌어질 때까지 쪄낸다",
      "버터·레몬·파슬리로 간단히 버무리거나 소스에 국물을 더해 같이 낸다"
    ]
  },
  {
    id:"nz-pavlova",
    country:"New Zealand",
    name:"Pavlova",
    type:["Dessert","Meringue","Fruit"],
    image:"",
    video:"",
    desc:"겉은 바삭, 속은 말랑한 머랭 케이크 위에 생크림과 키위·베리를 올린 대표 디저트.",
    recipe:[
      "흰자에 설탕을 나눠 넣어 단단한 머랭을 만든 뒤 전분·식초 소량을 섞는다",
      "원반 형태로 팬에 올리고 가운데를 오목하게",
      "110–120℃에서 75–90분 구운 뒤 오븐 안에서 완전히 식힌다",
      "먹기 직전 생크림을 올리고 키위·베리·패션푸르트를 얹어 제공"
    ]
  },
  {
    id:"nz-hokeypokey",
    country:"New Zealand",
    name:"Hokey Pokey Ice Cream",
    type:["Dessert","Ice cream","Sweet"],
    image:"",
    video:"",
    desc:"바닐라 아이스크림에 허니콤 캔디가 콕콕 박힌 뉴질랜드 시그니처 아이스크림.",
    recipe:[
      "허니콤: 설탕·골든시럽을 끓여 베이킹소다를 넣고 거품이 오르면 트레이에 부어 식힌다",
      "차게 굳힌 허니콤을 한입 크기로 부순다",
      "바닐라 아이스크림을 살짝 풀어 허니콤을 접어 넣는다",
      "재냉동 후 스쿱으로 떠 제공(서빙 직전 추가 허니콤 토핑)"
    ]
  },
  {
    id:"nz-mincepie",
    country:"New Zealand",
    name:"Mince Pie",
    type:["Pie","Baked","Savory"],
    image:"",
    video:"",
    desc:"소고기 민스를 진한 그레이비로 졸여 채운 휴대용 파이. 뉴질랜드 국민 간식.",
    recipe:[
      "팬에 양파를 볶고 소고기 민스를 갈색이 나도록 볶는다",
      "우스터·토마토페이스트·비프스톡을 넣고 걸쭉하게 졸인다",
      "옥수수전분으로 농도 조절 후 완전히 식힌다",
      "파이 틀에 쇼트크러스트를 깔고 필링을 채운 뒤 퍼프로 덮어 봉합",
      "증기구멍을 내고 190–200℃에서 황금색이 날 때까지 굽기"
    ]
  },
  {
    id:"nz-flatwhite",
    country:"New Zealand",
    name:"Flat White",
    type:["Beverage","Coffee","Cafe"],
    image:"",
    video:"",
    desc:"벨벳 같은 마이크로폼을 얹은 더블 샷 에스프레소 기반 커피.",
    recipe:[
      "더블 에스프레소를 추출해 컵에 담는다",
      "차가운 우유를 스티밍해 고운 마이크로폼(거품층 얇게)으로 만든다",
      "에스프레소에 스월을 그리며 우유를 붓고 얇은 폼층으로 마무리",
      "라떼아트는 선택, 우유와 커피의 비율은 약 1:3 정도"
    ]
  },
    // --- America (10)
  {
    id:"us-hamburger",
    country:"America",
    name:"Hamburger",
    type:["Sandwich","Beef","Grill"],
    image:"",
    video:"",
    desc:"즙 많은 비프 패티와 번, 치즈·야채·소스로 즐기는 미국 대표 버거.",
    recipe:[
      "패티: 80/20 다짐 소고기에 소금·후추만 간하고 살짝 눌러 성형",
      "강한 불에서 한 면 2–3분 시어, 뒤집어 치즈를 올려 녹인다",
      "번을 버터에 살짝 굽고 소스(머스터드/케첩/마요) 바르기",
      "양상추·토마토·양파·피클과 함께 조립"
    ]
  },
  {
    id:"us-hotdog",
    country:"America",
    name:"Hot Dog",
    type:["Sandwich","Street"],
    image:"",
    video:"",
    desc:"스팀/그릴 소시지를 번에 끼우고 머스터드·릴리시·양파 등을 올린 간편 푸드.",
    recipe:[
      "소시지를 끓는 물에 데우거나 그릴에 굽는다",
      "번을 따뜻하게 데우거나 살짝 굽는다",
      "소시지를 끼우고 머스터드·릴리시·다진 양파(선택: 케첩·사워크라우트) 토핑"
    ]
  },
  {
    id:"us-friedchicken",
    country:"America",
    name:"Fried Chicken",
    type:["Fry","Chicken","Crispy"],
    image:"",
    video:"",
    desc:"버터밀크에 재운 닭을 바삭하게 튀긴 남부식 프라이드치킨.",
    recipe:[
      "닭을 버터밀크+소금·후추·파프리카에 2시간 이상 마리네이드",
      "밀가루에 소금·후추·가루양파·가루마늘·파프리카를 섞어 반죽 코팅",
      "170–175℃ 기름에서 황금빛이 날 때까지 튀기고 내부 73℃ 확인",
      "랙에서 5분 레스팅 후 서빙"
    ]
  },
  {
    id:"us-applepie",
    country:"America",
    name:"Apple Pie",
    type:["Dessert","Baked","Pie"],
    image:"",
    video:"",
    desc:"사과 필링을 가득 채워 구운 클래식 미국식 파이.",
    recipe:[
      "크러스트: 차가운 버터로 쇼트크러스트를 만들고 냉장 휴지",
      "필링: 사과 슬라이스에 설탕·시나몬·레몬즙·소금·전분을 섞기",
      "파이팬에 크러스트→필링→상단 격자/덮개, 가장자리 봉합·에그워시",
      "200℃ 20분→180℃ 30–40분 더 구워 식힌 뒤 컷팅"
    ]
  },
  {
    id:"us-bbqribs",
    country:"America",
    name:"BBQ Ribs",
    type:["BBQ","Pork","Slow-cook"],
    image:"",
    video:"",
    desc:"마른 러브로 밑간해 저온으로 부드럽게 익힌 뒤 바비큐 소스로 글레이즈한 립.",
    recipe:[
      "막 제거 후 드라이럽(소금·설탕·파프리카·마늘·후추) 문지르기",
      "스모커/오븐 120–135℃에서 천천히 익혀 뼈가 살짝 드러날 때까지",
      "바비큐 소스를 발라 10–15분 더 구워 소스 세팅",
      "슬라이스 후 추가 소스와 서빙"
    ]
  },
  {
    id:"us-buffalowings",
    country:"America",
    name:"Buffalo Wings",
    type:["Chicken","Fry","Spicy"],
    image:"",
    video:"",
    desc:"바삭하게 익힌 윙을 버터+핫소스에 버무린 핫 윙.",
    recipe:[
      "윙을 키친타월로 말려 소금·베이킹파우더를 얇게 묻혀 220℃ 오븐에서 바삭하게 굽기(또는 175℃ 튀김)",
      "소스: 버터를 녹여 프랭크스 핫소스와 섞어 데운다",
      "구운/튀긴 윙을 즉시 소스에 버무린다",
      "셀러리·블루치즈 디핑과 제공"
    ]
  },
  {
    id:"us-biscuit",
    country:"America",
    name:"Buttermilk Biscuits",
    type:["Baked","Bread","Side"],
    image:"",
    video:"",
    desc:"겹이 살아있는 폭신한 남부식 버터밀크 비스킷.",
    recipe:[
      "박력분·베이킹파우더·소금에 차가운 버터를 잘라 넣어 모래처럼",
      "버터밀크를 넣어 최소한으로 섞고 살짝 접어 층 만들기",
      "커터로 찍어 판에 올리고 상단에 버터/우유 살짝",
      "220℃에서 12–15분 구워 꿀·그레이비와 함께"
    ]
  },
  {
    id:"us-meatloaf",
    country:"America",
    name:"Meatloaf",
    type:["Baked","Beef","Main"],
    image:"",
    video:"",
    desc:"다짐육과 빵가루·양파·계란을 섞어 구운 가정식 로프, 케첩 글레이즈가 포인트.",
    recipe:[
      "소고기(또는 믹스)·빵가루·우유·달걀·다진 양파·우스터·소금·후추를 섞어 결이 보일 정도만 섞기",
      "로프 팬/시트에 성형",
      "윗면에 케첩+머스터드+설탕 글레이즈를 바른다",
      "175–180℃에서 내부 70℃까지 구워 10분 레스팅 후 슬라이스"
    ]
  },
  {
    id:"us-macncheese",
    country:"America",
    name:"Mac and Cheese",
    type:["Pasta","Cheese","Baked"],
    image:"",
    video:"",
    desc:"크리미한 치즈 소스에 엘보 매카로니를 버무린 컴포트 푸드.",
    recipe:[
      "베샤멜: 버터+밀가루 루에 우유를 나눠 넣어 끓인다",
      "치즈: 체더·몬터레이 잭 등을 넣어 소스를 만든다",
      "삶은 매카로니와 섞고, 팬에 담아 빵가루+버터 토핑",
      "190℃에서 윗면이 노릇해질 때까지 구움"
    ]
  },
  {
    id:"us-pancakes",
    country:"America",
    name:"Pancakes",
    type:["Breakfast","Griddle","Sweet"],
    image:"",
    video:"",
    desc:"두툼하고 폭신한 아메리칸 팬케이크.",
    recipe:[
      "가루: 밀가루·베이킹파우더·설탕·소금 / 젖은 재료: 우유·달걀·녹인 버터",
      "섞을 때 과도하게 저어 글루텐이 생기지 않게(약간의 덩어리 OK)",
      "중불 팬에 반죽을 올려 표면 기포가 보이면 뒤집어 굽기",
      "버터·메이플시럽·과일과 함께"
    ]
  },
    // --- Canada (9)
  {
    id:"ca-poutine",
    country:"Canada",
    name:"Poutine",
    type:["Potato","Gravy","Street"],
    image:"",
    video:"",
    desc:"두 번 튀긴 프라이 위에 치즈 커드와 따끈한 그레이비를 부어 먹는 캐나다 대표 간식.",
    recipe:[
      "감자를 굵게 썰어 전분을 빼고 완전히 말린다",
      "1차 튀김: 160℃에서 속만 익게 튀긴 뒤 식힌다",
      "그레이비: 버터+밀가루로 루를 만들고 비프/치킨 스톡을 넣어 걸쭉하게, 소금·후추로 간",
      "2차 튀김: 185–190℃에서 바삭해질 때까지 재튀김",
      "그릇에 프라이→치즈 커드→뜨거운 그레이비 순으로 얹어 즉시 제공"
    ]
  },
  {
    id:"ca-buttertart",
    country:"Canada",
    name:"Butter Tart",
    type:["Dessert","Baked","Tart"],
    image:"",
    video:"",
    desc:"버터·설탕·달걀로 만든 달콤하고 끈적한 필링의 미니 타르트. 건포도/피칸 추가 가능.",
    recipe:[
      "타르트 셸: 차가운 버터로 쇼트크러스트 반죽을 만들어 냉장 휴지 후 몰드에 깐다",
      "필링: 버터를 녹여 설탕·메이플/골든시럽·달걀·바닐라·소금을 섞는다",
      "원하면 건포도/피칸을 셸에 넣고 필링을 채운다",
      "190℃에서 12–18분, 중앙이 살짝 흔들릴 정도로 구워 식힌다"
    ]
  },
  {
    id:"ca-bannock",
    country:"Canada",
    name:"Bannock",
    type:["Bread","Pan-fry","Baked"],
    image:"",
    video:"",
    desc:"밀가루 반죽을 팬에 지지거나 오븐에 구워 만드는 퍼스트 네이션 전통 빵.",
    recipe:[
      "밀가루·베이킹파우더·소금·설탕(선택)에 물/우유·기름을 넣어 부드럽게 섞는다",
      "반죽을 두툼하게 펴서 팬에 기름 살짝 두르고 중약불에 양면을 노릇하게 굽는다",
      "또는 200℃ 오븐에서 15–20분 구워도 좋다",
      "버터·잼 또는 스튜와 함께"
    ]
  },
  {
    id:"ca-nanaimobar",
    country:"Canada",
    name:"Nanaimo Bar",
    type:["Dessert","No-bake","Bar"],
    image:"",
    video:"",
    desc:"오븐 없이 만드는 3층 디저트: 크럼 베이스–커스터드 버터크림–초콜릿 글레이즈.",
    recipe:[
      "베이스: 버터·코코아·설탕을 중탕해 녹이고 달걀을 넣어 농도낸 뒤, 그래험크럼·코코넛·다진 견과를 섞어 팬에 눌러 깐다",
      "중간층: 버터+슈거파우더+커스터드파우더+우유를 섞어 크림을 만들고 베이스 위에 펴 바른다",
      "상단: 초콜릿+버터를 녹여 얇게 붓고 굳힌다",
      "완전히 차게 한 뒤 막대 모양으로 절단"
    ]
  },
  {
    id:"ca-beavertail",
    country:"Canada",
    name:"BeaverTail",
    type:["Fry","Dessert","Street"],
    image:"",
    video:"",
    desc:"비버 꼬리처럼 길게 늘려 튀긴 도넛 반죽 위에 시나몬 슈거·초코·레몬 설탕 등을 얹어 먹는 길거리 간식.",
    recipe:[
      "이스트 반죽을 치대어 부풀린 뒤 작은 공으로 분할",
      "각 조각을 길게 타원형으로 늘린다",
      "170–175℃ 기름에 양면을 노릇하게 튀긴다",
      "기름을 빼고 시나몬 슈거/초코스프레드/레몬·설탕 등으로 토핑"
    ]
  },
  {
    id:"ca-peamealbacon",
    country:"Canada",
    name:"Peameal Bacon Sandwich",
    type:["Pork","Cured","Sandwich"],
    image:"",
    video:"",
    desc:"옥수수 가루(옛 보리콩=peameal) 코팅의 캐나다식 백베이컨을 구워 머스터드와 번에 끼운 토론토 명물.",
    recipe:[
      "피밀 베이컨 슬라이스를 중불 그리들에서 노릇하게 굽는다",
      "번을 버터로 굽고 머스터드를 펴 바른다",
      "베이컨을 듬뿍 올리고 양파/피클(선택)을 더해 샌드",
      "즉시 따뜻할 때 제공"
    ]
  },
  {
    id:"ca-splitpeasoup",
    country:"Canada",
    name:"Split Pea Soup",
    type:["Soup","Legume","Comfort"],
    image:"",
    video:"",
    desc:"노란/초록 완두쪼갬과 햄 호크로 끓이는 진하고 포근한 수프.",
    recipe:[
      "냄비에 버터를 녹이고 양파·셀러리·당근을 볶아 소프리토를 만든다",
      "세척한 스플릿 피·햄 호크·월계수·물/스톡을 넣고 끓인다",
      "약불로 60–90분, 콩이 부드러워질 때까지 끓이며 간 조절",
      "뼈를 건져 살을 떼어 되돌리고, 취향에 따라 살짝 블렌드해 질감 조절"
    ]
  },
  {
    id:"ca-tourtiere",
    country:"Canada",
    name:"Tourtière",
    type:["Pie","Baked","Meat"],
    image:"",
    video:"",
    desc:"퀘벡식 향신료 미트 파이(돼지/송아지/소 혼합). 겨울 명절에 즐긴다.",
    recipe:[
      "팬에 다짐육을 갈색이 나도록 볶고 양파·마늘을 더해 볶는다",
      "계피·정향·올스파이스·백후추·감자 잘게 썬 것(또는 으깬 감자)으로 질감과 향을 맞춘다",
      "파이팬에 크러스트를 깔고 필링을 채운 뒤 상단 크러스트로 덮어 봉합·증기구멍",
      "190℃에서 35–45분 구워 휴지 후 절단"
    ]
  },
  {
    id:"ca-lobsterroll",
    country:"Canada",
    name:"Nova Scotia Lobster Roll",
    type:["Seafood","Sandwich","Cold"],
    image:"",
    video:"",
    desc:"차갑게 무친 랍스터 살을 버터로 구운 토스타드 번에 담아 먹는 동부 해안 스타일.",
    recipe:[
      "삶아 식힌 랍스터 살을 큼직히 썰어 마요·레몬즙·셀러리·차이브·소금·후추로 가볍게 버무린다",
      "탑 스플릿 번을 버터에 노릇하게 굽는다",
      "번에 상추(선택)를 깔고 랍스터 샐러드를 듬뿍 채운다",
      "레몬을 곁들여 바로 제공"
    ]
  },
    // --- Mexico (11)
  {
    id:"mx-taco",
    country:"Mexico",
    name:"Taco",
    type:["Handheld","Street","Corn"],
    image:"",
    video:"",
    desc:"따끈한 또르띠야에 고기·살사·양파·고수를 올려 먹는 스트리트 푸드의 대표주자.",
    recipe:[
      "또르띠야를 마른 팬에서 데워 부드럽게 준비",
      "카르니타스/아사다/알파스토르 등 메인 토핑을 데운다",
      "양파·고수·라임·살사를 곁들여 접는다",
      "취향에 따라 피칸테/과카몰레 추가"
    ]
  },
  {
    id:"mx-tamales",
    country:"Mexico",
    name:"Tamales",
    type:["Steamed","Masa","Corn"],
    image:"",
    video:"",
    desc:"옥수수껍질에 마사 반죽과 속(돼지고기·치킨·치즈·고추 등)을 감싸 쪄낸 전통 간식.",
    recipe:[
      "마사 하리나에 라드/버터·스톡·소금을 넣어 부드럽게 휘핑",
      "옥수수껍질을 물에 불려 부드럽게 한다",
      "껍질 위에 마사를 펴고 속재료를 올려 단단히 말아 접기",
      "찜솥에서 50–70분 쪄서 마사가 굳으면 완성"
    ]
  },
  {
    id:"mx-quesadilla",
    country:"Mexico",
    name:"Quesadilla",
    type:["Griddle","Cheese","Handheld"],
    image:"",
    video:"",
    desc:"또르띠야에 치즈(오아하카 등)와 재료를 넣고 반으로 접어 구워낸 간단한 간식.",
    recipe:[
      "또르띠야 한쪽에 치즈와 버섯/치킨/치차론 등을 올린다",
      "반으로 접어 코마르/팬에서 양면을 노릇하게",
      "살사·크레마와 함께 잘라서 제공"
    ]
  },
  {
    id:"mx-pozole",
    country:"Mexico",
    name:"Pozole",
    type:["Soup","Stew","Hominy"],
    image:"",
    video:"",
    desc:"호미니(석회수 처리 옥수수)에 돼지고기/치킨을 넣고 끓인 진한 국물요리(로호/베르데/블랑코).",
    recipe:[
      "호미니를 부드럽게 삶는다(캔 사용 가능)",
      "돼지고기 목살을 향신료와 함께 끓여 육수와 고기를 준비",
      "불린 말린 칠리(과히요·안초)를 갈아 육수에 풀어 로호로 만들기",
      "호미니와 고기를 합쳐 끓이고, 무·양상추·양파·오레가노·라임·라디시로 토핑"
    ]
  },
  {
    id:"mx-enchiladas",
    country:"Mexico",
    name:"Enchiladas",
    type:["Baked","Sauce","Chicken"],
    image:"",
    video:"",
    desc:"또르띠야에 속을 말아 칠리 소스(레드/그린/몰레)를 끼얹고 치즈를 올려 구운 요리.",
    recipe:[
      "또르띠야를 기름에 가볍게 지나 데워 말기 좋게",
      "치킨/치즈/콩 등을 넣어 돌돌 말아 팬에 나란히 담기",
      "엔칠라다 소스를 듬뿍 붓고 치즈를 올려 오븐에서 녹인다",
      "양파·크레마·고수로 마무리"
    ]
  },
  {
    id:"mx-fajitas",
    country:"Mexico",
    name:"Fajitas",
    type:["Skillet","Beef","Pepper"],
    image:"",
    video:"",
    desc:"쇠고기/치킨과 피망·양파를 뜨겁게 볶아 또르띠야에 싸먹는 철판 요리.",
    recipe:[
      "고기를 라임·마늘·큐민·오레가노·기름에 잠시 마리네이드",
      "강한 불에서 고기를 먼저 시어링 후 건져둔다",
      "같은 팬에 피망·양파를 볶아 달큰한 풍미 내기",
      "모두 섞어 데우고 또르띠야·살사·사워크림과 함께"
    ]
  },
  {
    id:"mx-burrito",
    country:"Mexico",
    name:"Burrito",
    type:["Wrap","Rice","Beans"],
    image:"",
    video:"",
    desc:"큰 밀 또르띠야에 밥·콩·고기·치즈 등을 가득 넣어 돌돌 만 한 끼 식사.",
    recipe:[
      "또르띠야를 데워 유연하게 준비",
      "밥·리프라이드 빈즈/블랙빈·고기·치즈·살사·과카몰을 층층이 올리기",
      "양끝을 접어 단단히 말고 팬에서 겉면을 살짝 구워 고정",
      "반으로 잘라 제공"
    ]
  },
  {
    id:"mx-cochinitapibil",
    country:"Mexico",
    name:"Cochinita Pibil",
    type:["Pork","Slow-cook","Achiote"],
    image:"",
    video:"",
    desc:"아치오테·오렌지로 마리네이드한 돼지고기를 바나나잎에 싸서 천천히 익힌 유카탄 전통 요리.",
    recipe:[
      "아치오테 페이스트+사워 오렌지 주스+마늘+큐민+오레가노로 마리네이드 제조",
      "돼지고기에 문질러 최소 4시간(하룻밤) 재운다",
      "바나나잎에 싸서 뚜껑 있는 냄비/오븐에서 저온으로 오래 익히기",
      "픽클 양파와 함께 또르띠야에 올려 타코처럼"
    ]
  },
  {
    id:"mx-tamal-oaxaqueno",
    country:"Mexico",
    name:"Tamal Oaxaqueño",
    type:["Steamed","Masa","Banana Leaf"],
    image:"",
    video:"",
    desc:"바나나잎에 넓게 펴 찐 부드러운 타말(오아하카 스타일). 소스가 촉촉하게 배어든다.",
    recipe:[
      "마사 반죽을 라드·스톡으로 부드럽게 만든다",
      "바나나잎을 불에 스치듯 지나 유연하게 만든 뒤 넓게 펴기",
      "반죽과 몰레/치킨/돼지고기 등을 올려 단단히 접기",
      "찜솥에서 60–80분 쪄서 완성"
    ]
  },
  {
    id:"mx-marquesita",
    country:"Mexico",
    name:"Marquesita",
    type:["Dessert","Street","Crispy"],
    image:"",
    video:"",
    desc:"유카탄식 바삭 크레페를 말아 안에 에담치즈+누텔라/카하타 등 달콤짭짤한 속을 채운 디저트.",
    recipe:[
      "얇은 크레페 반죽을 철판에 얇게 펴 바삭해질 때까지 굽기",
      "에담치즈 채친 것과 스프레드를 올린다",
      "빠르게 돌돌 말아 식기 전에 제공"
    ]
  },
  {
    id:"mx-horchata",
    country:"Mexico",
    name:"Horchata",
    type:["Beverage","Sweet","Rice"],
    image:"",
    video:"",
    desc:"쌀·시나몬을 불려 갈아 만든 달콤하고 시원한 라이스 드링크.",
    recipe:[
      "쌀과 시나몬 스틱을 물에 하룻밤 불린다",
      "블렌더에 불린 쌀·시나몬·물·우유(선택)·설탕을 넣고 곱게 간다",
      "고운 체/천으로 거른 뒤 차게 냉장",
      "얼음컵에 따르고 시나몬을 살짝 뿌려 제공"
    ]
  },
    // --- Chile (7)
  {
    id:"cl-curanto",
    country:"Chile",
    name:"Curanto",
    type:["Pit-bake","Seafood","Meat","Feast"],
    image:"",
    video:"",
    desc:"돌을 달군 땅 구덩이에 해산물·고기·감자·밀카오를 겹겹이 쌓아 잎으로 덮고 찌는 칠로에 전통 잔치 음식.",
    recipe:[
      "지면에 구덩이를 파고 큰 돌을 달군다",
      "바닥에 달군 돌을 깔고 해산물(홍합·조개)과 고기(돼지·닭), 감자·밀카오/차팔레를 층층이 올린다",
      "나알카/큰 잎(또는 젖은 천)→흙으로 밀봉해 증기가 빠지지 않게 한다",
      "2–3시간 천천히 쪄 익힌다",
      "열을 식힌 뒤 층을 걷어 내며 한 상에 담아낸다"
    ]
  },
  {
    id:"cl-pasteldechoclo",
    country:"Chile",
    name:"Pastel de Choclo",
    type:["Bake","Casserole","Corn"],
    image:"",
    video:"",
    desc:"옥수수 페이스트를 덮어 구운 칠레식 캐서롤. 속은 ‘피노’(다짐고기·양파)와 올리브·삶은달걀·치킨.",
    recipe:[
      "피노: 양파를 볶아 단맛을 내고 다짐 소고기·큐민·파프리카·소금·후추로 간해 졸인다",
      "옥수수 알을 갈아 우유·버터·바질 약간과 함께 되직하게 끓여 페이스트를 만든다",
      "내열 그릇에 피노→올리브·달걀·찢은 치킨 순으로 담기",
      "옥수수 페이스트를 덮고 설탕 약간 뿌려 190–200℃에서 표면이 구워질 때까지",
      "식힌 뒤 스푼으로 떠서 제공"
    ]
  },
  {
    id:"cl-corderoalpalo",
    country:"Chile",
    name:"Cordero al Palo",
    type:["BBQ","Lamb","Roast"],
    image:"",
    video:"",
    desc:"통양을 커다란 꼬치(팔로)에 벌려 고정해 장작불 옆에서 천천히 구워내는 파타고니아식 양구이.",
    recipe:[
      "램을 손질해 소금·후추·마늘·허브로 간한다",
      "금속 프레임/팔로에 벌려 고정하고 장작불 옆에 세운다",
      "1.5–3시간 동안 돌려가며 굽고, 소금물/기름을 발라 촉촉함 유지",
      "겉이 바삭하고 속이 고르게 익으면 결 따라 커팅해 제공"
    ]
  },
  {
    id:"cl-cazuela",
    country:"Chile",
    name:"Cazuela",
    type:["Soup","Stew","Comfort"],
    image:"",
    video:"",
    desc:"소고기/닭고기에 감자·호박·옥수수·쌀을 넣고 끓인 칠레식 맑은 스튜.",
    recipe:[
      "냄비에 소고기(샹꼬) 또는 닭, 양파·마늘·큐민·오레가노를 넣고 물로 끓인다",
      "감자·호박·당근·옥수수(토막)를 넣어 익힌다",
      "쌀 한 줌을 넣어 농도와 포만감 추가",
      "소금으로 간하고 파슬리/고수로 마무리",
      "그릇에 국물과 함께 건더기를 큼직하게 담아낸다"
    ]
  },
  {
    id:"cl-curanto-olla",
    country:"Chile",
    name:"Curanto en Olla (Pulmay)",
    type:["Pot","Seafood","Meat"],
    image:"",
    video:"",
    desc:"전통 쿠란토를 집에서도 즐기기 위해 큰 솥에서 조리하는 변형(풀마이).",
    recipe:[
      "큰 냄비 바닥에 베이컨/돼지고기·양파를 깔아 향을 낸다",
      "그 위로 홍합·조개·치킨·소시지·감자·밀카오를 층층이 올린다",
      "화이트와인/물 약간을 붓고 잎/호일로 덮어 약불에서 찐다",
      "해산물이 열리고 감자가 익을 때까지 자작하게 조리",
      "층을 나눠 접시에 담고 육수는 따로 그릇에"
    ]
  },
  {
    id:"cl-pailamarina",
    country:"Chile",
    name:"Paila Marina",
    type:["Soup","Seafood"],
    image:"",
    video:"",
    desc:"칠레 해산물(홍합·조개·오징어·생선)을 토마토·화이트와인 베이스로 끓인 뜨끈한 해물탕.",
    recipe:[
      "냄비에 올리브오일을 두르고 양파·마늘·피망을 볶는다",
      "화이트와인으로 디글레이즈 후 토마토·피시스톡을 넣어 끓인다",
      "손질한 해산물을 순서대로 넣어 과하게 익지 않게 조리",
      "고수/파슬리·라임으로 마무리하고 뜨겁게 제공",
      "빵을 곁들여 국물을 찍어 먹기"
    ]
  },
  {
    id:"cl-humitas",
    country:"Chile",
    name:"Humitas",
    type:["Steamed","Corn","Vegetarian"],
    image:"",
    video:"",
    desc:"옥수수 알을 갈아 양파·바질과 섞어 옥수수껍질에 싸서 찐 칠레식 옥수수 찜.",
    recipe:[
      "옥수수 알을 갈고 볶은 양파·바질·우유·버터·소금으로 간해 반죽을 만든다",
      "불려 부드러워진 옥수수껍질 2–3장을 겹쳐 깔기",
      "반죽을 올려 단단히 접어 끈으로 묶는다",
      "찜솥에서 40–60분 쪄서 굳히고, 살사 크리오야와 함께"
    ]
  },
    // --- Brazil (10)
  {
    id:"br-churrasco",
    country:"Brazil",
    name:"Churrasco",
    type:["BBQ","Beef","Grill"],
    image:"",
    video:"",
    desc:"굵은 소금으로 간한 고기를 직화로 구워 먹는 브라질식 바비큐.",
    recipe:[
      "피카냐/안심 등 고기에 굵은 소금을 골고루 뿌려 실온 20분",
      "강한 숯불에서 겉을 센불로 시어링하고 원하는 굽기까지 굽는다",
      "굽는 중간 소금을 털어내고, 필요 시 오일을 살짝 바른다",
      "호일에 5–10분 레스팅 후 결 반대로 슬라이스",
      "파로파·비나그레치(토마토·양파·식초)·빵과 함께"
    ]
  },
  {
    id:"br-feijoada",
    country:"Brazil",
    name:"Feijoada",
    type:["Stew","Bean","Pork"],
    image:"",
    video:"",
    desc:"검은콩에 소시지·훈제 돼지고기를 넣고 오래 끓인 진한 스튜.",
    recipe:[
      "검은콩을 불리고, 베이컨·훈제소시지·돼지고기를 큼직하게 썬다",
      "냄비에 기름을 두르고 양파·마늘을 볶아 향을 낸다",
      "고기와 콩·월계수·물/스톡을 넣고 약불로 1.5–2시간 끓인다",
      "소금으로 간하고 농도는 물로 조절, 마지막에 오렌지 슬라이스 곁들임",
      "화이트 라이스·파로파·콜라드그린스와 함께"
    ]
  },
  {
    id:"br-coxinha",
    country:"Brazil",
    name:"Coxinha",
    type:["Fry","Snack","Chicken"],
    image:"",
    video:"",
    desc:"찢은 치킨과 크림치즈를 넣어 눈물방울 모양으로 빚어 튀긴 간식.",
    recipe:[
      "필링: 닭가슴살을 삶아 찢고 크림치즈·파슬리·파프리카로 간한다",
      "도우: 닭육수+버터를 끓이다 밀가루를 넣어 반죽을 만든 후 식힌다",
      "반죽을 떼어 속을 넣고 눈물방울 모양으로 성형",
      "달걀물→빵가루를 입혀 170–175℃에서 황금빛이 날 때까지 튀김",
      "핫소스와 함께 제공"
    ]
  },
  {
    id:"br-farofa",
    country:"Brazil",
    name:"Farofa",
    type:["Side","Toasted","Cassava"],
    image:"",
    video:"",
    desc:"카사바가루(만디오카)를 버터/지방에 볶아 낸 고소한 사이드.",
    recipe:[
      "팬에 버터/베이컨 지방을 녹이고 양파·마늘을 볶는다",
      "카사바가루를 넣어 약불에서 고루 저으며 노릇하게 볶기",
      "소금·후추로 간하고 파슬리·바나나·건포도(선택) 추가",
      "페이조아다·슈하스코와 곁들임"
    ]
  },
  {
    id:"br-moqueca",
    country:"Brazil",
    name:"Moqueca",
    type:["Seafood","Stew","Coconut"],
    image:"",
    video:"",
    desc:"생선·새우를 토마토·피망·코코넛밀크로 끓인 해산물 스튜(바이아식은 덴데오일 사용).",
    recipe:[
      "생선을 라임·소금·마늘로 15분 마리네이드",
      "냄비에 양파·피망·토마토를 켜켜이 깔고 생선·새우를 올린다",
      "코코넛밀크·피시스톡을 붓고, 덴데오일(선택)과 고수·파슬리를 더한다",
      "약불로 생선이 부드럽게 익을 때까지 끓인다",
      "라임을 짜 마무리, 밥·파로파와 함께"
    ]
  },
  {
    id:"br-torresmo",
    country:"Brazil",
    name:"Torresmo",
    type:["Fry","Pork","Snack"],
    image:"",
    video:"",
    desc:"돼지비계를 천천히 구워 바삭하게 만든 브라질식 치차론.",
    recipe:[
      "삼겹/비계를 큐브로 썰어 소금·후추·라임즙 약간으로 밑간",
      "두꺼운 냄비에 약불로 천천히 가열해 자체 지방을 녹이며 익힌다",
      "겉이 말라가면 불을 높여 바삭하게 튀기듯 마무리",
      "키친타월에 올려 기름 제거 후 소금으로 간"
    ]
  },
  {
    id:"br-paodealho",
    country:"Brazil",
    name:"Pão de Alho (Garlic Bread)",
    type:["Bread","Grill","BBQ"],
    image:"",
    video:"",
    desc:"마늘버터·마요를 바른 빵을 그릴에 구워 슈하스코와 함께 먹는 필수 사이드.",
    recipe:[
      "버터·마요·다진 마늘·파슬리·후추·파르미지아노(선택)를 섞어 스프레드",
      "바게트에 칼집을 내거나 반으로 갈라 스프레드를 듬뿍 바른다",
      "호일로 감싸 중불 그릴에서 속까지 데운 뒤, 호일을 벗겨 겉면을 바삭하게",
      "소금 한 꼬집으로 마무리"
    ]
  },
  {
    id:"br-feijaotropeiro",
    country:"Brazil",
    name:"Feijão Tropeiro",
    type:["Bean","Stir-fry","Comfort"],
    image:"",
    video:"",
    desc:"삶은 콩에 카사바가루·베이컨·소시지·계란·콜라드를 볶아 섞은 미나스 전통 요리.",
    recipe:[
      "핑토/카라이오카 콩을 삶아 건져둔다",
      "팬에 베이컨·칼라브레자 소시지를 볶아 기름을 낸다",
      "양파·마늘을 넣어 볶고, 콜라드그린을 살짝 숨만 죽인다",
      "삶은 콩과 카사바가루를 넣어 고루 섞고 소금·후추로 간",
      "가장자리에서 계란을 스크램블해 섞어 마무리"
    ]
  },
  {
    id:"br-pastel",
    country:"Brazil",
    name:"Pastel",
    type:["Fry","Street","Snack"],
    image:"",
    video:"",
    desc:"얇은 만두피에 고기·치즈·하트오브팜 등을 넣어 바삭하게 튀긴 간식.",
    recipe:[
      "필링: 다짐육을 양파·마늘과 볶아 간하고 식힌다(또는 모짜렐라/하트오브팜)",
      "파스테우 피에 속을 올리고 물/밀가루풀로 가장자리를 봉한다",
      "기름 170–180℃에서 양면을 노릇하게 튀긴다",
      "페페리치/소스와 함께 뜨겁게 제공"
    ]
  },
  {
    id:"br-tapioca",
    country:"Brazil",
    name:"Tapioca (Beijú)",
    type:["Griddle","Gluten-free","Snack"],
    image:"",
    video:"",
    desc:"수분을 머금은 타피오카 전분을 팬에 내려 굳혀 만든 쫄깃 바삭 크레페.",
    recipe:[
      "타피오카 전분(폴빌료 도세)을 물로 적셔 체에 내려 고슬고슬하게 준비",
      "달군 논스틱 팬에 전분을 고르게 뿌려 1분 정도 굳힌다",
      "가장자리가 들리면 뒤집고 치즈·코코넛·연유/햄 등 속을 올린다",
      "반으로 접어 30초 더 익혀 접시에"
    ]
  },
    // --- Peru (10)
  {
    id:"pe-lomosaltado",
    country:"Peru",
    name:"Lomo Saltado",
    type:["Stir-fry","Beef","Wok","Rice"],
    image:"",
    video:"",
    desc:"쇠고기·양파·토마토를 강한 불에 볶아 밥과 감자튀김과 함께 내는 페루식 볶음요리.",
    recipe:[
      "소고기를 간장·식초·후추·마늘에 잠깐 재우기",
      "웍을 달궈 기름 두르고 고기를 센불에 재빨리 시어링",
      "양파·토마토·아히 아마릴로(또는 고추)를 넣어 볶기",
      "간장·식초·소금·후추로 간하고 불맛 살리기",
      "감자튀김을 마지막에 살짝 섞고 밥과 함께 담기"
    ]
  },
  {
    id:"pe-trucha",
    country:"Peru",
    name:"Trucha (Fried Trout)",
    type:["Fish","Pan-fry","Andes"],
    image:"",
    video:"",
    desc:"티티카카 호수 등 안데스 지역에서 즐기는 바삭한 송어구이/튀김.",
    recipe:[
      "트루차에 소금·후추·라임즙으로 간하고 밀가루를 얇게 묻힌다",
      "팬에 기름을 두르고 중불에서 피부가 바삭해질 때까지 굽기",
      "뒤집어 속살이 촉촉할 정도만 익힌다",
      "라임과 함께, 살사 크리올라·감자와 곁들임"
    ]
  },
  {
    id:"pe-polloalabrasa",
    country:"Peru",
    name:"Pollo a la Brasa",
    type:["Chicken","Roast","BBQ"],
    image:"",
    video:"",
    desc:"허브·아히 판카·간장·식초로 마리네이드해 구워낸 페루식 로티서리 치킨.",
    recipe:[
      "마리네이드: 간장·식초·아히 판카·마늘·오레가노·후추·커민 섞기",
      "닭에 고루 바르고 냉장 4시간 이상",
      "오븐 190–200℃ 또는 그릴에서 속까지 익을 때까지 굽기",
      "굽는 동안 남은 마리네이드를 바르며 윤기",
      "후추 감자·아히 소스와 제공"
    ]
  },
  {
    id:"pe-ceviche",
    country:"Peru",
    name:"Ceviche",
    type:["Seafood","Citrus","Raw"],
    image:"",
    video:"",
    desc:"신선한 생선을 라임즙·고추·양파와 버무려 만드는 대표 생선요리.",
    recipe:[
      "생선살을 한입 크기로 썰어 차갑게 보관",
      "라임즙·소금·아히 리모·다진 고수로 레체 데 티그레 베이스 만들기",
      "생선을 5–10분 가볍게 절여 붉은 양파와 섞는다",
      "감자(카모테)·치챠란(옥수수)·라임과 함께 담기",
      "즉시 차갑게 제공"
    ]
  },
  {
    id:"pe-anticuchos",
    country:"Peru",
    name:"Anticuchos",
    type:["Skewer","Grill","Beef"],
    image:"",
    video:"",
    desc:"아히 판카·식초·마늘에 재운 쇠고기(전통은 소심장)를 꼬치에 꿰어 굽는 길거리 음식.",
    recipe:[
      "고기를 큐브로 썰어 아히 판카·식초·마늘·커민·오레가노에 2시간 이상 재우기",
      "꼬치에 꿰고 강한 불에서 앞뒤로 굽기",
      "중간중간 마리네이드를 발라 풍미 강화",
      "감자·옥수수와 살사 크리올라 곁들임"
    ]
  },
  {
    id:"pe-chupedecamarones",
    country:"Peru",
    name:"Chupe de Camarones",
    type:["Soup","Seafood","Creamy"],
    image:"",
    video:"",
    desc:"새우·감자·우유·치즈가 들어간 아레키파 스타일의 진한 해물스프.",
    recipe:[
      "새우 껍질로 빠르게 육수를 내어 체에 거른다",
      "팬에 양파·마늘·아히 판카를 볶아 소프리토 만들기",
      "육수+감자+옥수수/쌀을 넣어 끓인다",
      "새우를 넣고 익기 직전에 우유·치즈·계란을 풀어 부드럽게",
      "소금으로 간, 고수로 마무리"
    ]
  },
  {
    id:"pe-causarellena",
    country:"Peru",
    name:"Causa Rellena",
    type:["Potato","Cold","Layer"],
    image:"",
    video:"",
    desc:"노란 감자 퓌레에 라임·아히 아마릴로를 섞고 참치/치킨·아보카도를 층층이 올린 차가운 요리.",
    recipe:[
      "삶은 노란 감자를 으깨고 라임즙·아히 아마릴로 페이스트·소금·기름을 섞는다",
      "원형틀 바닥에 감자층→마요 버무린 참치/치킨→아보카도→감자층",
      "냉장해 굳힌 뒤 틀에서 빼기",
      "올리브·달걀·마요/아히 소스로 장식"
    ]
  },
  {
    id:"pe-ajidegallina",
    country:"Peru",
    name:"Ají de Gallina",
    type:["Chicken","Stew","Creamy"],
    image:"",
    video:"",
    desc:"찢은 닭고기를 아히 아마릴로·우유·빵으로 농도를 낸 소스에 졸인 크리미 스튜.",
    recipe:[
      "닭가슴을 향신채와 삶아 건지고 결 따라 찢기",
      "양파·마늘을 볶아 아히 아마릴로를 넣고 향을 낸다",
      "우유에 적신 빵(또는 크래커)을 갈아 소스에 넣어 농도",
      "찢은 닭을 넣어 한소끔, 소금·후추로 간",
      "밥·감자 위에 올리고 올리브·달걀로 마무리"
    ]
  },
  {
    id:"pe-rocotorelleno",
    country:"Peru",
    name:"Rocoto Relleno",
    type:["Bake","Spicy","Stuffed"],
    image:"",
    video:"",
    desc:"매콤한 로코토 고추 속을 고기·올리브·치즈로 채워 구운 아레키파 명물.",
    recipe:[
      "로코토를 식초·설탕 물에 살짝 데쳐 매운맛을 약간 줄인다",
      "다진 소고기를 양파·마늘·건포도·땅콩과 볶아 속 준비",
      "로코토 속을 채우고 위에 치즈를 듬뿍",
      "오븐에서 치즈가 녹고 가장자리가 살짝 그을릴 때까지 굽기",
      "감자 그라탱(파스텔 데 파파)와 함께"
    ]
  },
  {
    id:"pe-papaalahuancaina",
    country:"Peru",
    name:"Papa a la Huancaína",
    type:["Appetizer","Vegetarian","Sauce"],
    image:"",
    video:"",
    desc:"삶은 감자 위에 아히 아마릴로·퀘소 프레스코 소스를 얹어 먹는 차가운 전채.",
    recipe:[
      "소스: 아히 아마릴로·퀘소 프레스코·우유·크래커·마늘·소금을 블렌딩",
      "감자를 삶아 두껍게 썰어 접시에 깐다",
      "소스를 듬뿍 끼얹고 삶은 달걀·올리브로 장식",
      "상추를 깔아 차갑게 제공"
    ]
  },

];
