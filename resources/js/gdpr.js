this.window.onload = function () {
    var cookie = cookiesHelper.getItem('cookie-gdpr');

    if (cookie == null) {
        toggleModal('modal-gdpr');
    } else if (cookie == 'accepted') {
        enableTracker();
    }

    this.document.getElementById('button-gdpr-yes').addEventListener('click', function (event) {
        cookiesHelper.setItem('cookie-gdpr', 'accepted', Infinity, '/', window.location.hostname, false);
        enableTracker();
        toggleModal('modal-gdpr');
    });
    this.document.getElementById('button-gdpr-no').addEventListener('click', function (event) {
        cookiesHelper.setItem('cookie-gdpr', 'rejected', Infinity, '/', window.location.hostname, false);
        toggleModal('modal-gdpr');
    });
};

function enableTracker() {
    console.log('tracker enabled');
    (function () {
        var t, i, e, n = window,
            o = document,
            a = arguments,
            s = "script",
            r = ["config", "track", "identify", "visit", "push", "call", "trackForm", "trackClick"],
            c = function () {
                var t, i = this;
                for (i._e = [], t = 0; r.length > t; t++)(function (t) {
                    i[t] = function () {
                        return i._e.push([t].concat(Array.prototype.slice.call(arguments, 0))), i
                    }
                })(r[t])
            };
        for (n._w = n._w || {}, t = 0; a.length > t; t++) n._w[a[t]] = n[a[t]] = n[a[t]] || new c;
        i = o.createElement(s), i.async = 1, i.src = "//static.woopra.com/js/w.js", e = o.getElementsByTagName(s)[0], e.parentNode.insertBefore(i, e)
    })("woopra");
    woopra.config({
        domain: 'diquestolibroedeglialtri.review'
    });
    woopra.track();
}

var cookieLawStates = [
    'AT', 'BE', 'BG', 'CY', 'CZ',
    'DE', 'DK', 'EE', 'EL', 'ES',
    'FI', 'FR', 'GB', 'HR', 'HU',
    'IE', 'IT', 'LT', 'LU', 'LV',
    'MT', 'NL', 'PL', 'PT', 'RO',
    'SE', 'SI', 'SK'
];