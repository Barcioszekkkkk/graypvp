const menu = document.querySelector('.menu-toggle'), 
      links = document.querySelector('.navlinks');

menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
});

links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

function copyIp() {
    navigator.clipboard.writeText('graypvp.pl').then(() => {
        const t = document.querySelector('#toast');
        if(t) {
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 1800);
        }
    }).catch(() => alert('Adres serwera: graypvp.pl'));
}

document.querySelectorAll('#copyIp,#copyIp2').forEach(b => b.addEventListener('click', copyIp));

const socialUrls = {
    discord: 'https://discord.gg/54qdz78JHW',
    youtube: 'https://www.youtube.com/@barcio%C5%82ak333',
    tiktok: 'https://www.tiktok.com/@graypvpofficial'
};

document.querySelectorAll('[data-link]').forEach(a => {
    const url = socialUrls[a.dataset.link];
    if(url) {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    }
});
