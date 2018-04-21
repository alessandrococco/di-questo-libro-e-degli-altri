window.onload = function () {
    var cookie = getCookie();

    if (cookie != 'accepted') {
        showCookiePolicyBar();
    }

    document.getElementsByClassName('is-confirm-button')[0].addEventListener('click', function (event) {
        acceptCookiePolicy();
        hideCookiePolicyBar();
    });
};

window.onscroll = function () {
    var cookie = getCookie();

    if (cookie == null) {
        acceptCookiePolicy();
        hideCookiePolicyBar();
    }
};

function getCookie() {
    return cookiesHelper.getItem('cookie-policy');
}

function showCookiePolicyBar() {
    var cookiesBar = document.getElementsByClassName('cookie-bar')[0];
    cookiesBar.style.display = 'block';
}

function acceptCookiePolicy() {
    cookiesHelper.setItem('cookie-policy', 'accepted', Infinity, '/', window.location.hostname, false);
}

function hideCookiePolicyBar() {
    var cookiesBar = document.getElementsByClassName('cookie-bar')[0];
    cookiesBar.style.display = 'none';
}

var cookieLawStates = [
    'AT', 'BE', 'BG', 'CY', 'CZ',
    'DE', 'DK', 'EE', 'EL', 'ES',
    'FI', 'FR', 'GB', 'HR', 'HU',
    'IE', 'IT', 'LT', 'LU', 'LV',
    'MT', 'NL', 'PL', 'PT', 'RO',
    'SE', 'SI', 'SK'
];
