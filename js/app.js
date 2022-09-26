(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    $(document).ready((function() {
        $(`.menu-burger`).click((function(event) {
            $(`.menu-burger, .menu__body`).toggleClass(`active`);
            $(`body`).toggleClass(`lock`);
        }));
        $(`.menu__link`).click((function() {
            $(`.menu-burger, .menu__body`).removeClass(`active`);
            $(`body`).removeClass(`lock`);
        }));
        $(".single-carousel").slick({
            dots: true,
            speed: 500,
            autoplay: true,
            fade: true
        });
        $(".fade").slick({
            speed: 500,
            dots: true,
            arrows: true,
            fade: true
        });
        $("a.open-modal").click((function(event) {
            $(this).modal({
                fadeDuration: 300
            });
            return false;
        }));
        var header = $(".header");
        var scrollChange = 100;
        $(window).scroll((function() {
            var scroll = $(window).scrollTop();
            if (scroll >= scrollChange) header.addClass("fixed"); else header.removeClass("fixed");
        }));
        $(document).on("click", ".video-img", (function() {
            var $video = $("#video-frame"), src = $video.attr("src");
            $video.attr("src", src + "&autoplay=1");
            $video.css("opacity", "1").css("visibility", "visible").css("transition", "all 0.5s ease 0s");
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();