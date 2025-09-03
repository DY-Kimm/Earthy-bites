// src/data/mapMarkers.js
// x, y는 이미지 기준 % (왼쪽→오른쪽, 위→아래)
const markers = [
  // ASIA
  { code:"KR", name:"대한민국", to:"/country/kr", x:82.2, y:41.0, region:"asia" },
  { code:"JP", name:"일본",     to:"/country/jp", x:84.0, y:43.0, region:"asia" },
  { code:"VN", name:"베트남",   to:"/country/vn", x:78.0, y:52.5, region:"asia" },
  { code:"SG", name:"싱가포르", to:"/country/sg", x:77.0, y:58.0, region:"asia" },

  // EUROPE
  { code:"GB", name:"영국",     to:"/country/gb", x:45.5, y:33.2, region:"europe" },
  { code:"FR", name:"프랑스",   to:"/country/fr", x:47.0, y:36.2, region:"europe" },
  { code:"IT", name:"이탈리아", to:"/country/it", x:50.8, y:38.7, region:"europe" },

  // AFRICA
  { code:"MA", name:"모로코",     to:"/country/ma", x:44.8, y:44.0, region:"africa" },
  { code:"EG", name:"이집트",     to:"/country/eg", x:54.3, y:46.0, region:"africa" },
  { code:"NG", name:"나이지리아", to:"/country/ng", x:45.3, y:55.2, region:"africa" },
  { code:"KE", name:"케냐",       to:"/country/ke", x:56.5, y:59.8, region:"africa" },

  // OCEANIA
  { code:"AU", name:"호주",     to:"/country/au", x:84.2, y:72.0, region:"oceania" },
  { code:"NZ", name:"뉴질랜드", to:"/country/nz", x:94.5, y:79.2, region:"oceania" },

  // NORTH AMERICA
  { code:"CA", name:"캐나다",   to:"/country/ca", x:19.0, y:31.2, region:"na" },
  { code:"US", name:"미국",     to:"/country/us", x:17.7, y:39.5, region:"na" },
  { code:"MX", name:"멕시코",   to:"/country/mx", x:16.2, y:47.2, region:"na" },

  // SOUTH AMERICA
  { code:"PE", name:"페루",     to:"/country/pe", x:23.5, y:63.2, region:"sa" },
  { code:"BR", name:"브라질",   to:"/country/br", x:31.0, y:65.5, region:"sa" },
  { code:"CL", name:"칠레",     to:"/country/cl", x:25.6, y:75.0, region:"sa" },
];
export default markers;
