const checkq = new URLSearchParams(window.location.search);
const whatsq = checkq.get('shaka');

window.addEventListener("load", function () {
    for (i = 1; i < 25; i++) {

        var shakasdiv = document.getElementById("myleftnav");
        theurl = "/shaka.html?shaka=" + i

        var link = document.createElement('a');
        if (whatsq == i) {
            link.className = "active"
        }
        link.setAttribute("href", theurl);
        link.appendChild(document.createTextNode(i));
        shakasdiv.appendChild(link);
    }
})

function leftopenNav() {
    document.getElementById("myleftnav").style.width = "250px";
}

function leftcloseNav() {
    document.getElementById("myleftnav").style.width = "0";
}


function rightopenNav() {
    document.getElementById("myrightnav").style.width = "250px";
}

function rightcloseNav() {
    document.getElementById("myrightnav").style.width = "0";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


if (getCookie("shabad") == "") {
    document.cookie = "shabad=ps; expires=Thu, 18 Dec 2023 12:00:00 UTC";

}

if (getCookie("english") == "") {
    document.cookie = "english=no; expires=Thu, 18 Dec 2023 12:00:00 UTC";

}
if (getCookie("punjabi") == "") {
    document.cookie = "punjabi=no; expires=Thu, 18 Dec 2023 12:00:00 UTC";

}

if (location.pathname == "/index.html" || location.pathname == "/") {

    if (getCookie("last") == "" || getCookie("last") > "24") {
        console.log("no past")
    } else if (getCookie("last")) {
        var div = document.getElementById("leftoff");
        var a = document.createElement('a');
        a.appendChild(document.createTextNode("Continue from where you left off: Shant " + getCookie("last")));
        a.setAttribute("href", "/shaka.html?shaka=" + getCookie("last"))
        div.appendChild(a);
    }
}

$.getJSON(
    "https://api.banidb.com/v2/banis/90",
    function (data) {

        for (var i = 0; i < data.length; i++) {
            var shaka = data[i];

            console.log("hi")
        }
    }
)
