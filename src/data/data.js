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

];
