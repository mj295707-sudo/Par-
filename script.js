(()=>{const s=document.querySelector('.sticker');
s.addEventListener('animationend',e=>{if(e.animationName==='pop')s.classList.remove('pop')});
s.addEventListener('click',()=>{
  s.classList.add('pop');
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  const b=s.getBoundingClientRect(),f=['💜','⭐','✨'];
  for(let i=0;i<12;i++){const e=document.createElement('span');e.className='pf';e.textContent=f[i%3];
    e.style.cssText=`left:${b.left+b.width/2}px;top:${b.top+b.height/2}px;--dx:${Math.round(Math.random()*180-90)}px;--r:${Math.round(Math.random()*60-30)}deg`;
    document.body.appendChild(e);setTimeout(()=>e.remove(),1500);}
});})();
