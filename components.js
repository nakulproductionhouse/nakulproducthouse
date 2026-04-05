async function loadComponents() {
    try {
        const navRes = await fetch('nav.html');
        const navHtml = await navRes.text();
        document.getElementById('nav-placeholder').innerHTML = navHtml;

        const footerRes = await fetch('footer.html');
        const footerHtml = await footerRes.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

        // Highlight Active Link
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('.nav-link, .mob-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
                if(link.classList.contains('mob-link')) link.classList.add('text-nph-gold');
            }
        });

    } catch (err) { console.error("Components failed to load:", err); }
}

function toggleMobileMenu() {
    const overlay = document.getElementById('mobile-nav-overlay');
    const navBar = document.getElementById('nav-inner-container'); // Background Nav Bar

    if (overlay.classList.contains('hidden')) {
        // OPEN MENU
        overlay.classList.remove('hidden');
        navBar.classList.add('nav-hidden'); // Nav ko hide kar do
        setTimeout(() => overlay.classList.remove('translate-x-full'), 10);
        document.body.style.overflow = 'hidden';
    } else {
        // CLOSE MENU
        overlay.classList.add('translate-x-full');
        navBar.classList.remove('nav-hidden'); // Nav ko wapas dikhao
        setTimeout(() => overlay.classList.add('hidden'), 500);
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);