const checkq = new URLSearchParams(window.location.search);
const whatsq = checkq.get('shaka');

$.getJSON(
    "https://adv.sikhresources.site/json/shakas.json",
    function (data) {

        for (var i = 0; i < data.length; i++) {
            var shaka = data[i];

            var shakasdiv = document.getElementById("myleftnav");
            
            var link = document.createElement('a');
            if (whatsq == shaka.shaka) {
                link.className = "active"
            }
            link.setAttribute("href", shaka.link);
            link.appendChild(document.createTextNode("ਸ਼ਕਾ " + shaka.shaka));
            shakasdiv.appendChild(link);

        }

    }

)




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
