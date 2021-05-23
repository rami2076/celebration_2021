window.onload = function () {

    $(".variants-container").slick({

        // normal options...
        infinite: true,
        dots: true,


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

            breakpoint: 428,
            settings: {
                slidesToShow: 1,
                dots: true
            }

            // settings: "unslick" // destroys slick

        }]
    });


};
const slickInit = () => {
    $('.variants-container').slick('setPosition');
}