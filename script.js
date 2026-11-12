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
    const IMAGE_URL = "https://upload.wikimedia.org/wikipedia/commons/8/85/Budowa_penisa.jpg";

    function initLucznioreqEgg() {
        const card = [...document.querySelectorAll(".person")]
            .find(el => 
                el.querySelector("h3")?.textContent.trim() === "LucznioreQ"
            );

        if (!card) return;

        let clicks = 0;
        let clickTimer = null;
        let hideTimer = null;

        const overlay = document.createElement("div");

        Object.assign(overlay.style, {
            position: "fixed",
            inset: "0",
            width: "100%",
            height: "100vh",
            height: "100dvh",
            background: "#000",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2147483647"
        });

        const img = document.createElement("img");
        img.src = IMAGE_URL;
        img.alt = "Easter egg";

        Object.assign(img.style, {
            width: "100%",
            height: "100%",
            objectFit: "contain"
        });

        overlay.appendChild(img);
        document.body.appendChild(overlay);

        function showImage() {
            clearTimeout(hideTimer);
            overlay.style.display = "flex";

            hideTimer = setTimeout(() => {
                overlay.style.display = "none";
            }, 4000);
        }

        card.style.touchAction = "manipulation";

        card.addEventListener("pointerup", (event) => {
            if (!event.isPrimary || event.button !== 0) return;

            clicks++;

            clearTimeout(clickTimer);

            if (clicks >= 3) {
                clicks = 0;
                showImage();
            } else {
                clickTimer = setTimeout(() => {
                    clicks = 0;
                }, 1200);
            }
        });

        // Zamknięcie po kliknięciu w ekran
        overlay.addEventListener("pointerup", () => {
            clearTimeout(hideTimer);
            overlay.style.display = "none";
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLucznioreqEgg);
    } else {
        initLucznioreqEgg();
    }
})();

