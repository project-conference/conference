const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const register = document.querySelector(".register");
const login = document.querySelector(".login");
const optBtn = document.querySelector(".optBtn");
const heading = document.querySelector(".changable");
const dis = document.querySelector(".dis");
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach(item => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach(item => item.classList.remove("open"));
    showMenu = false;
  }
}

let showLogin = false;

function toggle() {
  console.log("hello");
  if (!showLogin) {
    register.style.display = "block";
    login.style.display = "none";
    showLogin = true;
    optBtn.innerHTML = "Sign in";
    heading.textContent = "Sign up...";
  } else {
    register.style.display = "none";
    login.style.display = "block";
    showLogin = false;
    optBtn.innerHTML = "Sign up";
    heading.textContent = "Login...";
  }
}
function remove(){
  console.log("hello");
        add.style.display="none";
}