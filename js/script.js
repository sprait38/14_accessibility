let headermenu = document.querySelector('.header-menu');
let menu = document.querySelector('.header-nav');
let menulinks = menu.querySelectorAll('.header-link');
headermenu.addEventListener('click',
    function() {
        headermenu.classList.toggle('header-menu--active');
        menu.classList.toggle('header-nav--active');
        document.body.classList.toggle('stop-scroll');
    })
menulinks.forEach(function(el) {
    el.addEventListener('click', function() {
        headermenu.classList.remove('header-menu--active');
        menu.classList.remove('header-nav--active');
        document.body.classList.remove('stop-scroll');
    })
})

let search = document.querySelector(".header-search");
let form = document.querySelector(".search-form");
let closeForm = document.querySelector(".headr-search-btn");

search.addEventListener("click", function () {
  form.classList.toggle("search-form--active");
});

closeForm.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("headr-search-btn--active");
  form.classList.remove("search-form--active");
});

const container = document.querySelector(".container");
const swiper = new Swiper(".hero-skrit", {
    speed: 300,
    pagination: {
        el: ".hero-pagination",
        type: "bullets",
        clickable: true,
    },
});

document.querySelectorAll('.how-line').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.how-line').forEach(function(btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});
new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "faq__btn",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});
