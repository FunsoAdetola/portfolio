// ---
const header = document.querySelector(".header");
const footer = document.querySelector(".main-footer");
const headerContent = `<div class="header__content">
<div class="header__logo-container">
  <div class="header__logo-img-cont">
    <img
      src="../assets/jpeg/logo-image.jpg"
      alt="Olufunso Soile Logo Image"
      class="header__logo-img"
    />
  </div>
  <span class="header__logo-sub">Olufunso Soile</span>
</div>
<div class="header__main">
  <ul class="header__links">
    <li class="header__link-wrapper">
      <a href="./index.html" class="header__link"> Home </a>
    </li>
    <li class="header__link-wrapper">
      <a href="./index.html#about" class="header__link">About </a>
    </li>
    <li class="header__link-wrapper">
      <a href="./index.html#projects" class="header__link">
        Projects
      </a>
    </li>
    <li class="header__link-wrapper">
      <a href="./index.html#contact" class="header__link"> Contact </a>
    </li>
  </ul>
  <div class="header__main-ham-menu-cont">
    <img
      src="../assets/svg/ham-menu.svg"
      alt="hamburger menu"
      class="header__main-ham-menu"
    />
  </div>
</div>
</div>
<div class="header__sm-menu">
<div class="header__sm-menu-content">
  <ul class="header__sm-menu-links">
    <li class="header__sm-menu-link">
      <a href="./index.html"> Home </a>
    </li>

    <li class="header__sm-menu-link">
      <a href="./index.html#about"> About </a>
    </li>

    <li class="header__sm-menu-link">
      <a href="./index.html#projects"> Projects </a>
    </li>

    <li class="header__sm-menu-link">
      <a href="./index.html#contact"> Contact </a>
    </li>
  </ul>
</div>
</div>`;

const footerContent = `<div class="main-container">
<div class="main-footer__upper">
  <div class="main-footer__row main-footer__row-1">
    <h2 class="heading heading-sm main-footer__heading-sm">
      <span>Social</span>
    </h2>
    <div class="main-footer__social-cont">
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/olufunso-soile-075468141/">
        <img
          class="main-footer__icon"
          src="../assets/png/linkedin-ico.png"
          alt="icon"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https:www.github.com/funsoadetola">
        <img
          class="main-footer__icon"
          src="../assets/png/github-ico.png"
          alt="icon"
        />
      </a>
      <a target="_blank" rel="noreferrer" href=" https://twitter.com/dee_soil?s=09">
        <img
          class="main-footer__icon"
          src="../assets/png/twitter-ico.png"
          alt="icon"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/daytorlah/">
        <img
          class="main-footer__icon main-footer__icon--mr-none"
          src="../assets/png/insta-ico.png"
          alt="icon"
        />
      </a>
    </div>
  </div>
  <div class="main-footer__row main-footer__row-2">
    <h4 class="heading heading-sm text-lt">Olufunso Soile</h4>
    <p class="main-footer__short-desc">
     Web Developer
    </p>
  </div>
</div>

<!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) -->
<div class="main-footer__lower">
  Olufunso Soile Copyright &copy;
  ${new Date().getFullYear()}
</div>
</div>`;
header.innerHTML = headerContent;
footer.innerHTML = footerContent;

const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
});

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});
