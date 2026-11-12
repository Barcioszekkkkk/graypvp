const menu=document.querySelector('.menu-toggle'), links=document.querySelector('.navlinks');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
function copyIp(){navigator.clipboard.writeText('graypvp.pl').then(()=>{const t=document.querySelector('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}).catch(()=>alert('Adres serwera: graypvp.pl'))}
document.querySelectorAll('#copyIp,#copyIp2').forEach(b=>b.addEventListener('click',copyIp));document.querySelector('#year').textContent=new Date().getFullYear();
// Uzupełnij docelowe adresy social mediów przed publikacją.
const socialUrls={discord:'https://discord.gg/TWOJ_LINK',youtube:'https://youtube.com/@TWOJ_KANAL',tiktok:'https://tiktok.com/@TWOJ_PROFIL'};
document.querySelectorAll('[data-link]').forEach(a=>{const url=socialUrls[a.dataset.link];a.href=url;a.target='_blank';a.rel='noopener noreferrer'});
