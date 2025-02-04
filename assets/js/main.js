const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuToggle = $('.menu-toggle');
const pcMenu = $('#pc-menu');
const mobileMenu = $('#mobile-menu');
const mobileHeader = $('.mobile-header');
const menuOverlay = $('.menu-overlay');


menuToggle.addEventListener('click', () => {
    mobileHeader.classList.add('mobile-header--active');
});

menuOverlay.addEventListener('click', () => {
    mobileHeader.classList.remove('mobile-header--active');
});

mobileMenu.innerHTML = pcMenu.innerHTML;


const navbarLinks = $$('.navbar__link');

navbarLinks.forEach(navbarLink => {
    navbarLink.addEventListener('click', (e) => {
        $$('.navbar__link-active').forEach(navbarLinkActive => {
            navbarLinkActive.classList.remove('navbar__link-active');
        });
        
        e.target.classList.add('navbar__link-active');
    });
})
