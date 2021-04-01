const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease-in-out forwards ${index / 7 + 0.3}s`;

            }
        })
        burger.classList.toggle('toggle');
    })
}

navSlide();

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
        $('.counter').each(function() {
            var $this = $(this), countTo = $this.attr('data-count');
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){

                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },

                    {

                        duration: 5000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            }
        });
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
                breakpoint: 1025,
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



