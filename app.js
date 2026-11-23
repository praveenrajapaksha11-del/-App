const ALL_FONTS = ["Castellar","Cinzel","Playfair Display","Poppins","Bebas Neue","Great Vibes","Montserrat","Roboto","Open Sans","Lato","Oswald","Raleway","Merriweather","Lobster","Pacifico","Dancing Script","Abril Fatface","Alfa Slab One","Anton","Archivo Black","Bangers","Barlow Condensed","Bitter","Caveat","Cormorant Garamond","DM Serif Display","Eczar","Fjalla One","Francois One","Hammersmith One","IBM Plex Serif","Josefin Sans","Kalam","Kanit","Libre Baskerville","Mukta","Noto Serif","Orbitron","Permanent Marker","Quicksand","Righteous","Satisfy","Teko","Ubuntu","Varela Round","Work Sans","Yanone Kaffeesatz","Zilla Slab","Alegreya","Bree Serif","Chakra Petch"];
function loadGoogleFonts(){
  const families = ALL_FONTS.filter(f=>f!=="Castellar").map(f=>f.replace(/ /g,"+")+":wght@400;700").join("&family=");
  const el = document.getElementById('googleFonts');
  if(el) el.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;700&family=" + families + "&display=swap";
}
loadGoogleFonts();
const FORMATS = [
 {id:1,name:"01 ක්ලැසික්",desc:"කලින් PDF එක - කොටුව පොඩි",border:"3px solid #000",bg:"#fff",color:"#000",radius:"0",headerAlign:"center"},
 {id:2,name:"02 නවීන නිල්",desc:"නිල් රේඛාව",border:"none",bg:"#eef2ff",color:"#1e40af",radius:"12px",headerAlign:"center"},
 {id:3,name:"03 සරල",desc:"සරල පිරිසිදු",border:"none",bg:"#fff",color:"#000",radius:"0",headerAlign:"left"},
 {id:4,name:"04 රාජකීය රන්",desc:"රන් දාරය - ලොකු වැඩ වලට",border:"3px solid #d4af37",bg:"#fffbe6",color:"#8a6d00",radius:"8px",headerAlign:"center"},
 {id:5,name:"05 කළු ප්‍රිමියම්",desc:"කළු කොටුව, සුදු අකුරු",border:"3px solid #000",bg:"#111",color:"#fff",radius:"10px",headerAlign:"center"},
 {id:6,name:"06 කොළ",desc:"කොළ පාට",border:"2px solid #16a34a",bg:"#f0fdf4",color:"#166534",radius:"12px",headerAlign:"center"},
 {id:7,name:"07 රතු",desc:"රතු - අවධානය",border:"3px solid #dc2626",bg:"#fef2f2",color:"#991b1b",radius:"6px",headerAlign:"center"},
 {id:8,name:"08 සාගර",desc:"මුහුදු නිල්",border:"2px solid #0284c7",bg:"#f0f9ff",color:"#0c4a6e",radius:"14px",headerAlign:"center"},
 {id:9,name:"09 තැඹිලි",desc:"තැඹිලි",border:"2px solid #ea580c",bg:"#fff7ed",color:"#9a3412",radius:"12px",headerAlign:"center"},
 {id:10,name:"10 දම් සුඛෝපභෝගී",desc:"දම් පාට",border:"2px solid #7c3aed",bg:"#f5f3ff",color:"#4c1d95",radius:"14px",headerAlign:"center"},
 {id:11,name:"11 අළු",desc:"අළු පාට - ක්ලාසි",border:"1px solid #9ca3af",bg:"#f9fafb",color:"#111827",radius:"4px",headerAlign:"center"},
 {id:12,name:"12 ද්විත්ව දාරය",desc:"කොටු දෙකක්",border:"5px double #000",bg:"#fff",color:"#000",radius:"0",headerAlign:"center"},
 {id:13,name:"13 තිත්",desc:"තිත්",border:"3px dotted #000",bg:"#fff",color:"#000",radius:"0",headerAlign:"center"},
 {id:14,name:"14 කැඩුණු",desc:"කැඩුණු රේඛා",border:"3px dashed #000",bg:"#fff",color:"#000",radius:"0",headerAlign:"center"},
 {id:15,name:"15 වටකුරු",desc:"වට කොටු",border:"2px solid #000",bg:"#fff",color:"#000",radius:"20px",headerAlign:"center"},
 {id:16,name:"16 වමට",desc:"වමට - නවීන",border:"none",bg:"#fff",color:"#000",radius:"0",headerAlign:"left"},
 {id:17,name:"17 දකුණට",desc:"දකුණට",border:"none",bg:"#fff",color:"#000",radius:"0",headerAlign:"right"},
 {id:18,name:"18 නේවි",desc:"නේවි නිල් - ආයතන",border:"3px solid #1e3a8a",bg:"#eff6ff",color:"#1e3a8a",radius:"8px",headerAlign:"center"},
 {id:19,name:"19 ටීල්",desc:"ටීල්",border:"2px solid #0d9488",bg:"#f0fdfa",color:"#134e4a",radius:"12px",headerAlign:"center"},
 {id:20,name:"20 රෝස",desc:"රෝස",border:"2px solid #ec4899",bg:"#fdf2f8",color:"#9d174d",radius:"14px",headerAlign:"center"},
 {id:21,name:"21 දුඹුරු ලී",desc:"දැව පාට - ඉදිකිරීම්",border:"3px solid #92400e",bg:"#fef3c7",color:"#451a03",radius:"6px",headerAlign:"center"},
 {id:22,name:"22 වානේ",desc:"යකඩ පාට",border:"2px solid #475569",bg:"#f1f5f9",color:"#0f172a",radius:"6px",headerAlign:"center"},
 {id:23,name:"23 කළු + රන්",desc:"කළු + රන්",border:"3px solid #d4af37",bg:"#111",color:"#facc15",radius:"10px",headerAlign:"center"},
 {id:24,name:"24 ක්‍රීම්",desc:"ක්‍රීම්",border:"2px solid #a16207",bg:"#fffbeb",color:"#451a03",radius:"8px",headerAlign:"center"},
 {id:25,name:"25 අහස",desc:"අහස",border:"2px solid #38bdf8",bg:"#f0f9ff",color:"#075985",radius:"16px",headerAlign:"center"},
 {id:26,name:"26 ලොකු රාමුව",desc:"ලොකු කොටුව",border:"6px solid #000",bg:"#fff",color:"#000",radius:"0",headerAlign:"center"},
 {id:27,name:"27 උඩ රේඛාව",desc:"උඩ රේඛාව විතරයි",border:"none",bg:"#fff",color:"#000",radius:"0",headerAlign:"center"},
 {id:28,name:"28 සෙවනැලි කොටුව",desc:"සෙවනැල්ල එක්ක",border:"1px solid #ddd",bg:"#fff",color:"#000",radius:"12px",headerAlign:"center"},
 {id:29,name:"29 උත්සව",desc:"උත්සව - වර්ණවත්",border:"3px solid #f59e0b",bg:"#fff7ed",color:"#9a3412",radius:"16px",headerAlign:"center"},
 {id:30,name:"30 වී.අයි.පී අත්සන",desc:"අත්සන වගේ - ලොකු අකුරු",border:"none",bg:"#fff",color:"#111",radius:"0",headerAlign:"center"},
];
let defaultSettings = {company1:"",company2:"",font:"Castellar",fontSize:40,fontColor:"#111111",contact1:"",contact2:"",address1:"",address2:"",thanks:"ස්තූතියි!",format:1,logo:"",theme:"light"};
let settings = JSON.parse(localStorage.getItem('rajapaksha_v3')) || {...defaultSettings};
function setTheme(t){
  if(t==="auto"){ t = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark":"light"; }
  settings.theme=t; localStorage.setItem('rajapaksha_v3', JSON.stringify(settings));
  document.body.classList.toggle('dark', t==="dark");
  const tb = document.getElementById('themeBtn');
  if(tb) tb.innerText = t==="dark" ? "☀️ එළිය" : "🌙 අඳුරු";
}
function toggleTheme(){ setTheme(settings.theme==="dark" ? "light":"dark"); }
function renderFontSelect(filter=""){
  const sel=document.getElementById('setFont'); if(!sel) return; sel.innerHTML="";
  ALL_FONTS.filter(f=>f.toLowerCase().includes(filter.toLowerCase())).forEach(f=>{
    const o=document.createElement('option'); o.value=f; o.textContent=f; o.style.fontFamily=`'${f}', serif`; sel.appendChild(o);
  });
  sel.value = settings.font;
}
function filterFonts(){ renderFontSelect(document.getElementById('fontSearch').value); }
function renderFormats(filter=""){
  const grid=document.getElementById('formatGrid'); if(!grid) return; grid.innerHTML="";
  const list = FORMATS.filter(f=>(f.name+" "+f.desc).toLowerCase().includes(filter.toLowerCase()));
  const fc = document.getElementById('formatCount');
  if(fc) fc.innerText = `(${FORMATS.length}ක්)`;
  list.forEach(f=>{
    const d=document.createElement('div');
    d.className="format-card"+(f.id===settings.format?" selected":"");
    let previewName = settings.company1 ? settings.company1 : "ආයතනයේ නම";
    d.innerHTML=`<div class="f-demo" style="border:${f.border}; background:${f.bg}; color:${f.color}; border-radius:${f.radius}; text-align:${f.headerAlign}"><b>${previewName}</b><br><small>දුරකථන | ලිපිනය</small></div><b>${f.name}</b><p>${f.desc}</p>`;
    d.onclick=()=>{ settings.format=f.id; document.getElementById('setFormat').value=f.id; renderFormats(document.getElementById('formatSearch').value); applySettings(); };
    grid.appendChild(d);
  });
}
function filterFormats(){ renderFormats(document.getElementById('formatSearch').value); }
function applySettings(){
  const font=settings.font;
  const fmt = FORMATS.find(f=>f.id===settings.format) || FORMATS[0];
  let comp1 = settings.company1 || "ආයතනයේ නම";
  let comp2 = settings.company2 || "";
  let compFull = comp2 ? comp1 + "<br>" + comp2 : comp1;
  const set = (id, prop, val) => { const el = document.getElementById(id); if(el) el[prop]=val; };
  const setStyle = (id, prop, val) => { const el = document.getElementById(id); if(el) el.style[prop]=val; };
  set('previewCompany','innerHTML',compFull);
  setStyle('previewCompany','fontFamily',`'${font}', serif`);
  setStyle('previewCompany','color',settings.fontColor);
  set('previewFormatName','innerText',"ආකෘතිය: "+fmt.name+" - "+fmt.desc);
  set('topCompany','innerText',settings.company1 || "මගේ ආයතනය");
  set('fontPreview','innerText',settings.company1 || "ආයතනයේ නම");
  setStyle('fontPreview','fontFamily',`'${font}', serif`);
  setStyle('fontPreview','color',settings.fontColor);
  set('printCompany','innerHTML',compFull);
  setStyle('printCompany','fontFamily',`'${font}', serif`);
  setStyle('printCompany','fontSize',settings.fontSize+"px");
  setStyle('printCompany','color',settings.fontColor);
  setStyle('printCompany','textAlign',fmt.headerAlign);
  const box=document.getElementById('printBox');
  if(box){ box.style.border=fmt.border; box.style.background=fmt.bg; box.style.color=fmt.color; box.style.borderRadius=fmt.radius; if(fmt.id===27){ box.style.borderTop="3px solid #000"; } if(fmt.id===28){ box.style.boxShadow="0 4px 12px rgba(0,0,0,.15)"; } else { box.style.boxShadow="none"; } }
  set('printContact1','innerText',settings.contact1);
  set('printContact2','innerText',settings.contact2);
  set('printAddress1','innerText',settings.address1);
  set('printAddress2','innerText',settings.address2);
  set('printThanks','innerText',settings.thanks);
  const logo=settings.logo;
  document.querySelectorAll('#settingsLogoImg, #printLogoImg, #previewLogoImg, #aboutLogoImg').forEach(img=>{
    if(logo){ img.src=logo; img.style.display='block'; } else { img.style.display='none'; }
  });
  const topLogo = document.querySelector('.logo-mini img');
  if(topLogo){ if(logo){ topLogo.src=logo; topLogo.style.display='block'; } else { topLogo.style.display='none'; } }
  const logoEmpty = document.getElementById('logoEmpty');
  if(logoEmpty) logoEmpty.style.display = logo ? 'none' : 'block';
  set('setCompany1','value',settings.company1);
  set('setCompany2','value',settings.company2);
  set('setFont','value',settings.font);
  set('setFontSize','value',settings.fontSize);
  set('setFontColor','value',settings.fontColor);
  set('setContact1','value',settings.contact1);
  set('setContact2','value',settings.contact2);
  set('setAddress1','value',settings.address1);
  set('setAddress2','value',settings.address2);
  set('setThanks','value',settings.thanks);
  set('setFormat','value',settings.format);
  document.body.classList.toggle('dark', settings.theme==="dark");
  const tb = document.getElementById('themeBtn');
  if(tb) tb.innerText = settings.theme==="dark" ? "☀️ එළිය" : "🌙 අඳුරු";
}
function saveSettings(){
  settings={...settings,
    company1:document.getElementById('setCompany1').value.trim(),
    company2:document.getElementById('setCompany2').value.trim(),
    font:document.getElementById('setFont').value,
    fontSize:parseInt(document.getElementById('setFontSize').value)||40,
    fontColor:document.getElementById('setFontColor').value,
    contact1:document.getElementById('setContact1').value.trim(),
    contact2:document.getElementById('setContact2').value.trim(),
    address1:document.getElementById('setAddress1').value.trim(),
    address2:document.getElementById('setAddress2').value.trim(),
    thanks:document.getElementById('setThanks').value.trim()||"ස්තූතියි!",
    format:parseInt(document.getElementById('setFormat').value)||1,
  };
  localStorage.setItem('rajapaksha_v3', JSON.stringify(settings));
  applySettings(); renderFormats();
  alert("✅ සුරකින ලදී!");
  showPage('estimate');
}
function resetSettings(){
  localStorage.removeItem('rajapaksha_v3');
  settings={...defaultSettings};
  applySettings(); renderFontSelect(); renderFormats();
  alert("නැවත සකසන ලදී - සියල්ල හිස් විය.");
}
function uploadLogo(e){ const file=e.target.files[0]; if(!file) return; const r=new FileReader(); r.onload=()=>{ settings.logo=r.result; localStorage.setItem('rajapaksha_v3', JSON.stringify(settings)); applySettings(); alert("✅ ලාංඡනය සුරකින ලදී!"); }; r.readAsDataURL(file); }
function removeLogo(){ settings.logo=""; localStorage.setItem('rajapaksha_v3', JSON.stringify(settings)); applySettings(); }
function showPage(p){
  const show = (id, on) => { const el=document.getElementById(id); if(el) el.style.display = on?'block':'none'; };
  show('pageEstimate', p==='estimate');
  show('pageSettings', p==='settings');
  show('pageManual', p==='manual');
  show('pageAbout', p==='about');
  const btn = (id, active) => { const el=document.getElementById(id); if(el) el.className = active?'icon-btn active':'icon-btn'; };
  btn('btnEstimate', p==='estimate');
  btn('btnSettings', p==='settings');
  btn('btnManual', p==='manual');
  btn('btnAbout', p==='about');
}
const setFontEl = document.getElementById('setFont');
if(setFontEl) setFontEl.addEventListener('change', e=>{ const fp=document.getElementById('fontPreview'); if(fp) fp.style.fontFamily=`'${e.target.value}', serif`; });
// මැනපු ගාණේ ඒකකය අනුව වචන මාරු වෙන විදිය
const QTY_LABELS = {
  "වර්ග අඩි": {count:"වර්ග අඩි ගණන", per:"එක් අඩියකට"},
  "දික් අඩි": {count:"දික් අඩි ගණන", per:"එක් අඩියකට"},
  "වර්ග මීටර්": {count:"වර්ග මීටර් ගණන", per:"එක් වර්ග මීටරයකට"},
  "මීටර්": {count:"මීටර් ගණන", per:"එක් මීටරයකට"},
  "අඟල්": {count:"අඟල් ගණන", per:"එක් අඟලකට"},
  "ගල්": {count:"ගල් ගණන", per:"එක් ගලකට"},
  "කියුබ්": {count:"කියුබ් ගණන", per:"එක් කියුබ් එකකට"},
  "වැලි කියුබ්": {count:"වැලි කියුබ් ගණන", per:"එක් වැලි කියුබ් එකකට"},
  "ගල් කියුබ්": {count:"ගල් කියුබ් ගණන", per:"එක් ගල් කියුබ් එකකට"},
  "කොන්ක්‍රීට් කියුබ්": {count:"කොන්ක්‍රීට් කියුබ් ගණන", per:"එක් කොන්ක්‍රීට් කියුබ් එකකට"},
  "පොයින්ට්": {count:"පොයින්ට් ගණන", per:"එක් පොයින්ට් එකකට"},
  "බෑග්": {count:"බෑග් ගණන", per:"එක් බෑග් එකකට"},
  "ලොරි": {count:"ලොරි ගණන", per:"එක් ලොරියකට"},
  "කිලෝ": {count:"කිලෝ ගණන", per:"එක් කිලෝවකට"},
  "ටොන්": {count:"ටොන් ගණන", per:"එක් ටොන් එකකට"},
  "කණු": {count:"කණු ගණන", per:"එක් කණුවකට"},
  "උලුවහු": {count:"උලුවහු ගණන", per:"එක් උලුවහුවකට"},
  "ජනෙල්": {count:"ජනෙල් ගණන", per:"එක් ජනෙලයකට"},
  "දොර": {count:"දොර ගණන", per:"එක් දොරකට"},
  "ටයිල් පෙට්ටි": {count:"ටයිල් පෙට්ටි ගණන", per:"එක් පෙට්ටියකට"},
  "කෑලි": {count:"කෑලි ගණන", per:"එක් කෑල්ලකට"},
  "පයිප්ප": {count:"පයිප්ප ගණන", per:"එක් පයිප්පයකට"},
  "රෝල්": {count:"රෝල් ගණන", per:"එක් රෝලයකට"},
  "ලීටර්": {count:"ලීටර් ගණන", per:"එක් ලීටරයකට"},
  "ගැලන්": {count:"ගැලන් ගණන", per:"එක් ගැලන් එකකට"},
  "බල්බ්": {count:"බල්බ් ගණන", per:"එක් බල්බ් එකකට"},
  "සොකට්": {count:"සොකට් ගණන", per:"එක් සොකට් එකකට"},
  "ස්විච්": {count:"ස්විච් ගණන", per:"එක් ස්විච් එකකට"},
  "දවස්": {count:"දවස් ගණන", per:"එක් දවසකට"},
  "පැය": {count:"පැය ගණන", per:"එක් පැයකට"},
  "වැඩකරුවන්": {count:"වැඩකරුවන් ගණන", per:"එක් වැඩකරුවෙකුට"},
};
const PRESET_RATES = [
  {n:"පහල තට්ටුවේ බ්ලොක් ගල් බැඳීම", u:"1 ගලකට", r:70},
  {n:"උඩ තට්ටුවේ බ්ලොක් ගල් බැඳීම", u:"1 ගලකට", r:90},
  {n:"ලින්ටල් පහල තට්ටුවේ", u:"දික් අඩියක්", r:275},
  {n:"ලින්ටල් උඩ තට්ටුව", u:"දික් අඩියක්", r:340},
  {n:"කොන්ක්‍රීට් කණු අඟල් 9x9", u:"අඩියක්", r:540},
  {n:"බේස් වල කපා කණුවක් අඩි 10 දක්වා ගෙන ඒමට", u:"1 ට", r:16500},
  {n:"ප්‍රධාන උලුවහු තැබීම", u:"1 ට", r:15000},
  {n:"සාමාන්‍ය උලුවහු තැබීම", u:"1 ට", r:3500},
  {n:"සාමාන්‍ය උලුවහු තැබීම (කොන්ක්‍රීට් උලුවහු)", u:"1 ට", r:4500},
  {n:"පියන් 2 ජනෙල්", u:"1 ට", r:3500},
  {n:"පියන් 2 ජනෙල් (කොන්ක්‍රීට්)", u:"1 ට", r:4500},
  {n:"පියන් 3 ජනෙල්", u:"1 ට", r:4500},
  {n:"පියන් 3 ජනෙල් (කොන්ක්‍රීට්)", u:"1 ට", r:5500},
  {n:"කපරාරුව පහල තට්ටුව", u:"අඩියක්", r:60},
  {n:"කපරාරුව උඩ තට්ටුව", u:"අඩියක්", r:75},
  {n:"පොටි ඇද පේන්ට් කිරීම උඩ තට්ටුව", u:"අඩියක්", r:40},
  {n:"සැබ් එකේ පොටි ඇද පේන්ට් කිරීම", u:"අඩියක්", r:50},
  {n:"වයරින් කිරීම", u:"පොයින්ට් 1 ක්", r:1500},
  {n:"කළුගල් බැඳීම", u:"කියුබ් 1 ක්", r:12500},
  {n:"ටයි බීම්", u:"අඩියක්", r:440},
  {n:"පස් ගොඩකර පොළව තැලීමට ", u:"අඩියක්", r:45},
  {n:"පොළොව කොන්ක්‍රීට් කිරීමට", u:"අඩියක්", r:75},
  {n:"ටයිල් කිරීමට", u:"අඩියක්", r:120},
  {n:"සිවිලිම ගැසීමට", u:"අඩියක්", r:50},
];
let currentMode = 'RATING';
let itemsByMode = { ESTIMATE: [], RATING: [] };
let items = itemsByMode[currentMode];

function fillWorkList(){
  const dl=document.getElementById('workList'); if(!dl) return;
  dl.innerHTML = PRESET_RATES.map(it=>`<option value="${it.n}">`).join('');
}
const itemNameEl = document.getElementById('itemName');
if(itemNameEl){
  itemNameEl.addEventListener('input', function(){
    let found = PRESET_RATES.find(it=>it.n===this.value.trim());
    if(found){
      document.getElementById('unitInput').value = found.u;
      document.getElementById('rate').value = found.r;
    }
  });
  itemNameEl.addEventListener('keydown', e=>{ if(e.key==='Enter') addItem(); });
}
function setMode(m){
  currentMode = m; items = itemsByMode[m];
  document.getElementById('modeEstBtn').classList.toggle('active', m==='ESTIMATE');
  document.getElementById('modeRateBtn').classList.toggle('active', m==='RATING');
  document.getElementById('modeNote').innerText = m==='ESTIMATE' ? 'වැඩේ ආරම්භයට පෙර' : 'වැඩේ අවසන් කල පසු';
  document.getElementById('qtyWrap').style.display = m==='RATING' ? 'block' : 'none';
  document.getElementById('directWrap').style.display = m==='RATING' ? 'block' : 'none';
  document.getElementById('thDetail').innerText = m==='ESTIMATE' ? 'ඒකකය' : 'විස්තරය';
  document.getElementById('thAmount').innerText = m==='ESTIMATE' ? 'Rate' : 'මුදල';
  document.getElementById('totalText').style.display = m==='RATING' ? 'block' : 'none';
  document.getElementById('estTotalNote').style.display = m==='ESTIMATE' ? 'block' : 'none';
  render();
}

function addItem(){
  let name=document.getElementById('itemName').value.trim();
  let unit=document.getElementById('unitInput').value.trim();
  let sqft=document.getElementById('sqft').value;
  let rate=document.getElementById('rate').value;
  let direct=document.getElementById('direct').value;
  if(!name){alert("වැඩය ලියන්න!"); return;}
  if(currentMode==='ESTIMATE'){
    if(!rate){alert("Rate එක දාන්න!"); return;}
    items.push({name, details: unit, total: 0, rate: parseFloat(rate), unit});
     } else {
    let total=0,details="",isDirect=false;
    if(sqft&&rate){
      total=parseFloat(sqft)*parseFloat(rate);
      let qtyUnit = document.getElementById('qtyUnit') ? document.getElementById('qtyUnit').value : "වර්ග අඩි";
      let lbl = QTY_LABELS[qtyUnit] || {count: qtyUnit+" ගණන", per: "එක් "+qtyUnit+"කට"};
      name=name+`. ${lbl.count} ${sqft}. ${lbl.per} රු.${rate}.`;
      details="";
      isDirect=false;
    }
    else if(direct){
      total=parseFloat(direct);
      isDirect=true;
    }
    else{alert("වර්ග අඩි + මිල හෝ සෘජු මුදල දාන්න!"); return;}
    items.push({name,details,total,rate:parseFloat(rate)||0,unit,isDirect});
  }
  render();
  document.getElementById('itemName').value=""; document.getElementById('unitInput').value=""; document.getElementById('sqft').value=""; document.getElementById('rate').value=""; document.getElementById('direct').value="";
  document.getElementById('itemName').focus();
}
function render(){
  let tbody=document.getElementById('tableBody'); if(!tbody) return; tbody.innerHTML=""; let sum=0;
  if(items.length===0){
    tbody.innerHTML=`<tr><td colspan="5" style="text-align:center; color:#888; padding:18px;">අයිතමයක් නැහැ - උඩින් වැඩය ලියලා එකතු කරන්න ✍️</td></tr>`;
  } else {
    items.forEach((it,i)=>{
      sum+=it.total;
      let showDetail = currentMode==='ESTIMATE' ? it.unit : it.details;
      let showAmount = currentMode==='ESTIMATE' ? `රු. ${it.rate.toLocaleString()}` : `රු. ${it.total.toLocaleString()}`;
      tbody.innerHTML+=`<tr><td>${i+1}</td><td>${it.name}</td><td>${showDetail}</td><td>${showAmount}</td><td><button class="edit-btn" onclick="editItem(${i})">Edit</button><button class="del-btn" onclick="delItem(${i})">X</button></td></tr>`;
    });
  }
  const tt=document.getElementById('totalText');
  if(tt) tt.innerText=`මුළු මුදල රු. ${sum.toLocaleString()}`;
}
function editItem(i){
  let it=items[i];
  let n=prompt('වැඩේ Edit කරන්න:', it.name); if(n===null) return;
  let u=prompt('ඒකකය Edit කරන්න:', it.unit||''); if(u===null) return;
  let r=prompt('Rate එක Edit කරන්න:', it.rate||''); if(r===null) return;
  it.name=n; it.unit=u; it.rate=parseFloat(r)||0;
   if(currentMode==='RATING'){
    let q=prompt('මැනපු ගාණ කීයද? (උදා: 10)', '');
    if(q!==null && q!==''){
      let qv=parseFloat(q)||0;
      let qtyUnit = document.getElementById('qtyUnit') ? document.getElementById('qtyUnit').value : "වර්ග අඩි";
      let lbl = QTY_LABELS[qtyUnit] || {count: qtyUnit+" ගණන", per: "එක් "+qtyUnit+"කට"};
      it.total=qv*it.rate; it.details=""; it.isDirect=false;
      it.name=n+`. ${lbl.count} ${qv}. ${lbl.per} රු.${it.rate}.`;
    }
  } else { it.details=u; it.total=0; }
  render();
}
function delItem(i){items.splice(i,1); render();}
function clearAll(){items=[]; render();}

// ===== මේක තමයි හදපු එක - කලින් එකේ html / sum නැති නිසා Print ආවේ නැහැ =====
function doPrint(){
  if(items.length===0){alert("අයිතමයක් නැහැ!"); return;}
  applySettings();
  let date=document.getElementById('dateInput').value;
  let client=document.getElementById('clientName').value;
  document.getElementById('printDate').innerText=client?`දිනය: ${date}   |   පාරිභෝගිකයා: ${client}`:`දිනය: ${date}`;
  let html=""; let sum=0;
  items.forEach((it,i)=>{
    if(currentMode==='ESTIMATE'){
      html+=`<div>${i+1}. ${it.name} ${it.unit} රු.${it.rate.toLocaleString()}</div>`;
    } else {
      sum+=it.total;
      if(it.isDirect){
        html+=`<div>${i+1}. ${it.name} රු.${it.total.toLocaleString()}</div>`;
      } else {
        html+=`<div>${i+1}. ${it.name} එකතුව රු.${it.total.toLocaleString()}</div>`;
      }
    }
  });
  document.getElementById('printItems').innerHTML=html;
  document.getElementById('printTotal').innerText = currentMode==='ESTIMATE' ? '' : `මුළු මුදල රු.${sum.toLocaleString()}`;
  window.print();
}
const dateEl = document.getElementById('dateInput');
if(dateEl) dateEl.valueAsDate=new Date();
fillWorkList();
renderFontSelect(); renderFormats(); applySettings(); setMode('RATING');