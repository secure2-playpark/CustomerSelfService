(()=>{
  const C=window.SUPPORT_CONFIG||{};
  const esc=s=>String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  document.querySelectorAll('[data-app]').forEach(x=>x.textContent=C.APP_NAME||'Support Test Center');
  document.querySelectorAll('[data-brand]').forEach(x=>x.textContent=C.BRAND_NAME||'SUPPORT LAB');
  document.querySelectorAll('[data-game]').forEach(x=>x.textContent=C.GAME_NAME||'GAME PC');
  document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
  window.SUPPORT={config:C,escape:esc,statusClass:s=>{s=String(s||'').toUpperCase();return s==='RESOLVED'?'resolved':s==='CLOSED'?'closed':(s==='IN_PROGRESS'||s==='WAITING')?'progress':'open';},statusLabel:s=>({OPEN:'รับเรื่องแล้ว',IN_PROGRESS:'กำลังดำเนินการ',WAITING:'รอข้อมูลเพิ่มเติม',RESOLVED:'แก้ไขแล้ว',CLOSED:'ปิดคำร้อง'}[String(s||'').toUpperCase()]||String(s||'รับเรื่องแล้ว'))};
})();
