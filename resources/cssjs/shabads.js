const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('shaka');
shabadid = urlParams.get('shabadid');
shakanum = myParam


const lineid = urlParams.get('lineid');

link = apishabad + shabadid;

$.getJSON(
    link,
    function (data) {


        document.getElementById("writer").appendChild(document.createTextNode(data.shabadinfo.writer.unicode))
        document.getElementById("where").appendChild(document.createTextNode(data.shabadinfo.source.unicode))
        document.getElementById("ang").appendChild(document.createTextNode("Ang: " + data.shabadinfo.pageno))


        for (var i = 0; i < data.shabad.length; i++) {

            var each = data.shabad[i];


            var div = document.getElementById("bani");

            var shabad = document.createElement('p');
            shabad.appendChild(document.createTextNode(each.line.gurmukhi.unicode));

            if (lineid == each.line.id) {
                shabad.style.textDecoration = "underline"
            }


            if (getCookie("shabad") == "lv") {
                shabad.className = "shabad condensed"
            } else if (getCookie("shabad") == "ps") {
                shabad.className = "shabad"
            } else if (getCookie("shabad") == "lva") {
                shabad.className = "shabad condensed assisted"
                $(".shabad").lettering('words');
            }
            div.appendChild(shabad);

            var punjabi = document.createElement('p');
            punjabi.appendChild(document.createTextNode(each.line.translation.punjabi.default.unicode));
            if (getCookie("punjabi") == "no") {
                punjabi.className = "punjabi hidden"
            } else if (getCookie("punjabi") == "yes") {
                punjabi.className = "punjabi"


            }
            div.appendChild(punjabi);


            var english = document.createElement('p');
            english.appendChild(document.createTextNode(each.line.translation.english.default));
            if (getCookie("english") == "no") {
                english.className = "english hidden"
            } else if (getCookie("english") == "yes") {
                english.className = "english"
            }
            div.appendChild(english);


        }

    })

if (shakanum == null) {
    console.log("no shaka?")
} else {
    backlink = "/shaka.html?shaka=" + (shakanum)
    document.getElementById("backtop").setAttribute("href", backlink);
    document.getElementById("backtop").innerHTML = "Go back to Shaka #" + shakanum
    document.getElementById("backbottom").setAttribute("href", backlink);
    document.getElementById("backbottom").innerHTML = "Go back to Shaka #" + shakanum
}


function togglelarivaar() {

    //if at larivaar, going to assisted larivaar
    if (getCookie("shabad") == "lv") {

        $(".shabad").addClass("condensed");
        $(".shabad").addClass("assisted");

        //$(".shabad").removeClass("hidden");
        document.getElementById("shabad").innerHTML = "Pad Shed";
        document.cookie = "shabad=lva; expires=Thu, 18 Dec 2023 12:00:00 UTC";

        $(".shabad").lettering('words');



        //if at assisted larivaar, going to pad shed
    } else if (getCookie("shabad") == "lva") {
        $(".shabad").removeClass("condensed");
        $(".shabad").removeClass("assisted");
        //$(".larivaar").addClass("hidden");
        //$(".shabad").removeClass("hidden");
        document.getElementById("shabad").innerHTML = "Larivaar";
        document.cookie = "shabad=ps; expires=Thu, 18 Dec 2023 12:00:00 UTC";

        //if at pad shed, going to larivaar

    } else if (getCookie("shabad") == "ps") {
        $(".shabad").addClass("condensed");
        //$(".larivaar").removeClass("hidden");
        document.getElementById("shabad").innerHTML = "Larivaar Assisted";
        document.cookie = "shabad=lv; expires=Thu, 18 Dec 2023 12:00:00 UTC";

    }



}

function toggleenglish() {


    if (getCookie("english") == "yes") {
        document.cookie = "english=no; expires=Thu, 18 Dec 2023 12:00:00 UTC";
        $(".english").addClass("hidden");

    } else if (getCookie("english") == "no") {
        document.cookie = "english=yes; expires=Thu, 18 Dec 2023 12:00:00 UTC";
        $(".english").removeClass("hidden");
    }

}

function togglepunjabi() {


    if (getCookie("punjabi") == "yes") {
        document.cookie = "punjabi=no; expires=Thu, 18 Dec 2023 12:00:00 UTC";
        $(".punjabi").addClass("hidden");

    } else if (getCookie("punjabi") == "no") {
        document.cookie = "punjabi=yes; expires=Thu, 18 Dec 2023 12:00:00 UTC";
        $(".punjabi").removeClass("hidden");
    }

}


if (getCookie("shabad") == "lva") {
    document.getElementById("shabad").innerHTML = "Pad Shed";

} else if (getCookie("shabad") == "ps") {
    document.getElementById("shabad").innerHTML = "Larivaar";

} else if (getCookie("shabad") == "lv") {
    document.getElementById("shabad").innerHTML = "Larivaar Assisted";
}

getshabadslist(whichlist = "advgutka")

getshabadslist(whichlist = "shabads")

getshabadslist(whichlist = "amritkirtann")


setTimeout(submitmore, 2000);


if (typeof (Storage) !== "undefined") {
    console.log("local storage support")

    if (localStorage.favouriteslist) {

        console.log(localStorage.favouriteslist)
        if (localStorage.favouriteslist.includes(lineid)) {
            document.getElementById("favbutton").innerHTML = "★"

        } else {
            document.getElementById("favbutton").innerHTML = "☆"

        }
    } else {
        localStorage.favouriteslist = " ";
    }




} else {
    console.log("no local storage support")
}



function favourite() {

    if (localStorage.favouriteslist.includes(lineid)) {

        var ret = localStorage.favouriteslist.replace(lineid, '');
        localStorage.favouriteslist = ret;


    } else {
        localStorage.favouriteslist = localStorage.favouriteslist + lineid + " "

    }

    window.location.reload();

}
