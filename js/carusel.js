$(document).ready(function(){
    $('.carusel').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: false,
        centerPadding: 10,
        arrows: false,
        responsive: [
          {
            breakpoint: 1600,
            arrows: false,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true
            }
          },{
            breakpoint: 924,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 584,
            arrows: false,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            arrows: false,
            settings: {
              centerMode: true,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 360,
            arrows: false,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});