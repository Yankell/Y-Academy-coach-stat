
const buttons=[...document.querySelectorAll('.c')];
let timer,last=null;
function save(){
 localStorage.setItem('btstats',JSON.stringify(buttons.map(b=>b.textContent)));
}
const saved=JSON.parse(localStorage.getItem('btstats')||'null');
if(saved){buttons.forEach((b,i)=>b.textContent=saved[i]);}
buttons.forEach(b=>{
 b.addEventListener('click',()=>{
   if(b.dataset.long){delete b.dataset.long;return;}
   b.textContent=+b.textContent+1;
   if(navigator.vibrate)navigator.vibrate(20);
   save();
 });
 b.addEventListener('touchstart',()=>{
   timer=setTimeout(()=>{
      b.textContent=Math.max(0,+b.textContent-1);
      b.dataset.long=1;
      if(navigator.vibrate)navigator.vibrate([20,40,20]);
      save();
   },500);
 });
 b.addEventListener('touchend',()=>clearTimeout(timer));
});
document.getElementById('reset').onclick=()=>{
 if(confirm('Nouveau match ?')){
  buttons.forEach(b=>b.textContent=0);
  save();
 }
}
