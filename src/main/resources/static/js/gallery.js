window.onload = function () {
    // $('.variants-container').slick({
    //     infinite: true,
    //     dots: true,
    //     // centerMode: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 0
    // });


    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });
    $(".variants-container").slick({

        // normal options...
        infinite: true,
        dots: true,
        // autoplay: true,

        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 300,
            slidesToShow: 1,
            dots: true

            // settings: "unslick" // destroys slick

        }]
    });

};
const slickInit = () => {
    $('.variants-container').slick('setPosition');
}