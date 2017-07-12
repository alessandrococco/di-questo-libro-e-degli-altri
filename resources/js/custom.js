
$(document).ready(function() {
    // This cookie discaimer is a fork of stiank's discaimer - https://www.bootply.com/stiank/2E0oBIpqlu
    handleCookie();
 
    scrollToTopHandler();

    function scrollToTopHandler() {
        $('.top-link').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 750);
        });
    }

    function handleCookie() {
        var cookie = false;
        var cookieContent = $('.cookie-disclaimer');

        checkCookie();

        if (cookie === false) {
            cookieContent.slideDown();
        }

        function checkCookie() {
            var check = getCookie("acookie");
            if (check !== "") {
                return cookie = true;
            } else {
                return cookie = false;
            }
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');

            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }

            return "";
        }

        $('.accept-cookie').click(function() {
            setCookie("acookie", "accepted", 365);
            cookieContent.slideUp();
        });

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }
    }
});