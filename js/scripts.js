/*!
 * Bhone's Portfolio - Custom JavaScript
 * Built on Start Bootstrap - Agency theme
 * Licensed under MIT
 */
(function ($) {
    "use strict";

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Animate skill bars when they come into view
    var skillsAnimated = false;
    $(window).on("scroll", function () {
        var skillsSection = $("#skills");
        if (skillsSection.length && !skillsAnimated) {
            var sectionTop = skillsSection.offset().top - $(window).height() + 200;
            if ($(window).scrollTop() > sectionTop) {
                $(".progress-bar").each(function () {
                    var width = $(this).attr("aria-valuenow") + "%";
                    $(this).css("width", "0%").animate({ width: width }, 1500);
                });
                skillsAnimated = true;
            }
        }
    });

    // Add fade-in effect for favourites cards
    $(window).on("scroll", function () {
        $(".favourites-card").each(function () {
            var cardTop = $(this).offset().top - $(window).height() + 100;
            if ($(window).scrollTop() > cardTop) {
                $(this).addClass("visible");
            }
        });
    });

})(jQuery);
