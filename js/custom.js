$(function () {
    $('.mainSlide .visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
    $('.mainContent .innercontent').slick({
        arrows: false,
        dots: false,
        centerMode: true,
        variableWidth: true,
    });


    $('.mainContent .innercontent').on('afterChange', function (e, s, c) {
        $('.mainContent .bar span').css({
            left: c * 125 + 'px',
        })

        $('.mainContent .num span').text(c + 1);
    });


    $('.mainContent .arrows .left').on('click', function () {
        $('.mainContent .innercontent').slick('slickPrev');
    });

    $('.mainContent .arrows .right').on('click', function () {
        $('.mainContent .innercontent').slick('slickNext');
    });

    $('.lnk').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk);
        if (lnk);
        window.open(lnk);

    })




});








