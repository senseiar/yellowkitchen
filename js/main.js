//burger menu function
(function burger() {
    const burger = document.querySelector('.burger');
    const sideMenu = document.querySelector('.menu');
    const overlay = document.getElementById('body_overlay');

    burger.addEventListener('click', function () {
        burger.classList.toggle('burger_active');
        sideMenu.classList.toggle('menu_active');
        overlay.classList.toggle('overlay_active');
    })

})();

//Language DropDown
(function dropDown() {
    const langPicker = document.querySelector('.lang__trigger');
    const langList = document.getElementById('langList');
    const arrow = document.getElementById('arrow');
    const options = document.querySelectorAll('.lang__option');

    langPicker.addEventListener('click', function () {
        console.log(1);
        langList.classList.toggle('lang__options_open');
        arrow.classList.toggle('arrow_up');
    });

    for (const option of options) {

        option.addEventListener('click', function () {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.lang__option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.lang').querySelector('.lang__trigger span').textContent = this.textContent;
                langList.classList.remove('lang__options_open');
                arrow.classList.remove('arrow_up');
            }
        })

    }

    window.addEventListener('click', function (e) {
        const lang = document.querySelector('.lang')
        if (!lang.contains(e.target)) {
            langList.classList.remove('lang__options_open');
            arrow.classList.remove('arrow_up');
        }
    });
})();


let scrollY = document.documentElement.scrollTop
function isScrollToTop(currentScrollY){
    return currentScrollY < scrollY
}

// sticky menu
function fixedNav() {
    const header = document.querySelector('#header');
    let currentScrollY = document.documentElement.scrollTop;

    if (currentScrollY > 72) {
        header.classList.add('sticky');
    }  else {
        header.classList.remove('sticky');    
    }

    if(isScrollToTop(currentScrollY)){
        header.classList.remove('sticky');
    }
    scrollY = currentScrollY
}

window.onscroll = function() {fixedNav()};


//google map
let map;

function initialize() {
    map = new google.maps.Map(document.getElementById("map"), {
        mapId: "23bc54dbc3fdcd27",
        center: { lat: 50.4501, lng: 30.5234 },
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false
    });
}

function initMap() {

    const myLating = {lat: 50.44498036365375, lng: 30.519990277966922};
    initialize();
    
    new google.maps.Marker({
        position: myLating,
        map,
        title: "Legend place",
        icon: {
            url: "../img/ico/marker.svg",
            scaledSize: new google.maps.Size(28, 33)
        },
        animation: google.maps.Animation.DROP,
    });
}

// slick.js slider
$(document).ready(function() {
    $('.restaurants__cards').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.restaurants__slider-prev'),
        nextArrow: $('.restaurants__slider-next'),
        variableWidth: true,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                centerMode: true,
              }
            }
        ]
    });
    
    $('.specs__cards').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.specs__slider-prev'),
        nextArrow: $('.specs__slider-next'),
        variableWidth: true,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                centerMode: true,
              }
            }
        ]
    });
    
    $('.slick-track').css({'padding':'30px 0'});
});