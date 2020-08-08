$.getJSON(
    "   http://github.manjotsingh.xyz/Bahu-Shabadi/json/shakas.json",
    function (data) {

        for (var i = 0; i < data.length; i++) {
            var shaka = data[i];

            var shakasdiv = document.getElementById("myleftnav");
            
            var link = document.createElement('a');

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
