
// Hamburger menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
}
navSlide();

// AOS scroll
AOS.init({
    duration: 1200,
    offet: 0,
})



// Category Works
function filterSelection(c) {
    let x, i;
    let dot = document.getElementsByClassName("dot");
    x = document.getElementsByClassName("works__image");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

filterSelection("all")



// Modal image
function wrapBox(indexImg) {
    var wrap = document.getElementsByClassName('close')[0];
    var bgImg =     document.getElementsByClassName('bg--img')[0];
    switch (indexImg) {
        case 1 :
            bgImg.className+= ' bg--img-01';
            break;
        case 2:
            bgImg.className+= ' bg--img-02';
            break;
        case 3:
            bgImg.className+= ' bg--img-03';
            break;
        case 4:
            bgImg.className+= ' bg--img-04';
            break;
        case 5:
            bgImg.className+= ' bg--img-05';
            break;
        case 6:
            bgImg.className+= ' bg--img-06';
            break;
        case 7:
            bgImg.className+= ' bg--img-07';
            break;
        case 8:
            bgImg.className+= ' bg--img-08';
            break;
    }
    wrap.addEventListener('click',function (){
        bgImg.classList.remove(`bg--img-0${indexImg}`);
    })
}


$(document).ready(function(){
    $(window).scroll(function(){
        var div_banner = $('.banner').innerHeight();
        var header = $('.header'),
            scroll = $(window).scrollTop();
        if (scroll >= div_banner){
            header.addClass('sticky');
        }
        else {
            header.removeClass('sticky');
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.banner__slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.features__content').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
});

    $('.team__list').slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    });

})



