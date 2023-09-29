
const mobile_nav = document.querySelector('.mobile-navbar-btn');

const header = document.querySelector('.header');
console.log(header);

const toggleNavbar = () => {
    header.classList.toggle('active');

}

mobile_nav.addEventListener("click", () => toggleNavbar());