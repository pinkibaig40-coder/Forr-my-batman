const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');
const playBtn = document.getElementById('playBtn');
const song = document.getElementById('song');

surpriseBtn.addEventListener('click', ()=>{
  surprise.classList.toggle('hidden');
  if(!surprise.classList.contains('hidden')) surprise.scrollIntoView({behavior:'smooth'});
});

playBtn.addEventListener('click', ()=>{
  if(!song) return;
  if(song.paused) song.play();
  else song.pause();
});

const heartsLayer = document.querySelector('.hearts');
function spawnHeart(){
  const h = document.createElement('div');
  const size = Math.random()*14 + 10;
  h.style.position='absolute';
  h.style.left = (Math.random()*100)+'%';
  h.style.top = '110%';
  h.style.width = size+'px';
  h.style.height = size+'px';
  h.style.transform = 'rotate(45deg)';
  h.style.background = 'linear-gradient(45deg,#ff7aa2,#ff5c8a)';
  h.style.borderRadius = '4px';
  h.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
  h.style.opacity = Math.random()*0.6 + 0.4;
  h.style.transition = `transform 6s linear, top 6s linear, opacity 6s linear`;
  heartsLayer.appendChild(h);
  requestAnimationFrame(()=>{
    h.style.top = (-20 - Math.random()*30) + '%';
    h.style.transform = `translateY(-120vh) scale(1.3) rotate(${Math.random()*40-20}deg)`;
    h.style.opacity = '0';
  });
  setTimeout(()=>h.remove(),7000);
}
setInterval(spawnHeart,600);
