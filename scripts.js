$(document).ready(function () {

    var portf = [
        {
            "class_a": "portfolio_1",
            "href": "#"
        },
        {
            "class_a": "portfolio_2",
            "href": "#"
        },
        {
            "class_a": "portfolio_3",
            "href": "#"
        },
        {
            "class_a": "portfolio_4",
            "href": "#"
        },
        {
            "class_a": "portfolio_5",
            "href": "#"
        },
        {
            "class_a_back": "portfolio_6",
            "href": ""
        }
    ]

    $.each(portf, function (i, f) {
        var portfolioItem = "<li><a href='" + f.href + "' class='" + f.class_a + "'></a></li>";
        $(portfolioItem).appendTo(".list-portf");
    });

    $(".list-portf > li:last > a").replaceWith("<p></p>");
    $(".list-portf > li:last > p").css({
        "margin": "0",
        "background-color": "rgb(133, 133, 133)",
        "width": "200px",
        "height": "200px",
        "display": "flex",
        "position": "relative",
        "border-radius": "25%",
        "box-shadow": "0 0 0 2px rgba(255, 255, 255) inset"
    });

    var show = true;
    $(window).on("scroll", function() {

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $("#skills").offset().top;

        if(e_top - w_top < 310) {
            $(".animate-1, .animate-2, .animate-3, .animate-4").css({
                "transform": "translate(0)",
                "opacity": "1",
                "transition": "1s"
            });

            show = false;
        }
    });

    $(".grid__skill").mouseenter(function() {
        $(this).css({
            "transition": ".2s",
            "padding": "2.5%",
            "box-shadow": "none",
            "overflow": "hidden"
        });
    });
    $(".grid__skill").mouseleave(function() {
        $(this).css({
            "transition": ".2s",
            "padding": "0",
            "overflow": "hidden"
        });
    });

    var link = $(".menu-link");
    var link_active = $(".menu-link_active");
    var menu = $("nav");

    link.click(function(){
        link.toggleClass("menu-link_active");
        menu.toggleClass("menu_active");
    });
    link_active.click(function(){
        link.removeClass("menu-link_active");
    });
});