// codé en UTF-8
// codé par Ethan Sanjuan alias PalmierPale et Thomas Bouret alias satt105
// le12/10/2022 à 10:58 heures de Paris

// fonction récupéré de https://www.w3schools.com/js/js_cookies.asp pour la création de cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Code développé par nous
if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
) {
    self.location = "mobile.html";
}

window.setInterval(() => {
    var page = self.location.pathname.replace(/^.*[\\\/]/, '')
    // uniquement a des fin de test
    // console.log(page)
    if (page != "invalid.html") {
        if (window.outerWidth <= 1000) {
            setCookie("page", page);
            self.location = "invalid.html";
        }
    }
    else {
        if (window.outerWidth >= 1000) {
            self.location = getCookie('page');
        }
    }
}, 100)
