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


(() => {
    const IMAGE_URL = "https://upload.wikimedia.org/wikipedia/commons/8/85/Budowa_penisa.jpg?utm_source=pl.wikipedia.org&utm_campaign=index&utm_content=original";

    const personCard = [...document.querySelectorAll(".person")]
        .find(card => 
            card.querySelector("h3")?.textContent.trim() === "LucznioreQ"
        );

    if (!personCard) return;

    let clicks = 0;
    let clickTimer;

    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999999;
    `;

    const image = document.createElement("img");
    image.src = IMAGE_URL;
    image.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        object-fit: contain;
    `;

    overlay.appendChild(image);
    document.body.appendChild(overlay);

    let hideTimer;

    personCard.addEventListener("click", () => {
        clicks++;

        clearTimeout(clickTimer);

        if (clicks >= 3) {
            clicks = 0;

            clearTimeout(hideTimer);

            overlay.style.display = "flex";

            hideTimer = setTimeout(() => {
                overlay.style.display = "none";
            }, 4000);

        } else {
            clickTimer = setTimeout(() => {
                clicks = 0;
            }, 800);
        }
    });
})();
