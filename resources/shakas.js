apiline = "https://api.gurbaninow.com/v2/line/"
apishabad = "https://api.gurbaninow.com/v2/shabad/"

const urlParams = new URLSearchParams(window.location.search);
const shakanum = urlParams.get('shaka');

if (shakanum == "null") {
    window.location.replace("/");
}

if (shakanum < 1) {
    window.location.replace("/");
}

if (shakanum > 24) {
    window.location.replace("/");
}

$.getJSON(
    "json/shabads.json",
    function (data) {

        try {
            lineslist = data[shakanum - 1].shakalines
            lines = lineslist.split(",")
        } catch (err) {

            lines = []
        }
        lines.forEach(myLine)

        function myLine(item, index) {

            link = apiline + item;

            $.getJSON(
                link,
                function (data) {
                    which = index + "bani"

                    var div = document.getElementById(which);

                    var shabad = document.createElement('p');
                    shabad.appendChild(document.createTextNode(data.line.gurmukhi.unicode));
                    if (getCookie("shabad") == "lv") {
                        shabad.className = "shabad condensed"
                    } else if (getCookie("shabad") == "ps") {
                        shabad.className = "shabad"
                    } else if (getCookie("shabad") == "lva") {
                        shabad.className = "shabad condensed assisted"
                    }

                    div.appendChild(shabad);
                    /*

                                        var larivaar = document.createElement('p');
                                        larivaar.appendChild(document.createTextNode(data.line.larivaar.unicode));
                                        if (getCookie("shabad") == "ps") {
                                            larivaar.className = "larivaar hidden"
                                        } else if (getCookie("shabad") == "lv") {
                                            larivaar.className = "larivaar"
                                        }
                                        div.appendChild(larivaar);
                    */

                    var punjabi = document.createElement('p');
                    punjabi.appendChild(document.createTextNode(data.line.translation.punjabi.default.unicode));
                    if (getCookie("punjabi") == "no") {
                        punjabi.className = "punjabi hidden"
                    } else if (getCookie("punjabi") == "yes") {
                        punjabi.className = "punjabi"
                    }
                    div.appendChild(punjabi);


                    var english = document.createElement('p');
                    english.appendChild(document.createTextNode(data.line.translation.english.default));
                    if (getCookie("english") == "no") {
                        english.className = "english hidden"
                    } else if (getCookie("english") == "yes") {
                        english.className = "english"
                    }
                    div.appendChild(english);

                });
        };

        aftershabadslist = data[shakanum - 1].shakashabads
        aftershabads = aftershabadslist.split(",")

        aftershabads.forEach(myShabad)

        function myShabad(item, index) {

            link = apishabad + item;

            $.getJSON(
                link,
                function (data) {

                    for (var i = 0; i < data.shabad.length; i++) {

                        var each = data.shabad[i];

                        which = "bani" + index;

                        var div = document.getElementById(which);

                        var shabad = document.createElement('p');
                        shabad.appendChild(document.createTextNode(each.line.gurmukhi.unicode));
                        if (getCookie("shabad") == "lv") {
                            shabad.className = "shabad condensed"
                        } else if (getCookie("shabad") == "ps") {
                            shabad.className = "shabad"
                        } else if (getCookie("shabad") == "lva") {
                            shabad.className = "shabad condensed assisted"
                            $(".shabad").lettering('words');
                        }
                        div.appendChild(shabad);

                        /*
                        var larivaar = document.createElement('p');
                        larivaar.appendChild(document.createTextNode(each.line.larivaar.unicode));
                        if (getCookie("shabad") == "ps") {
                            larivaar.className = "larivaar hidden"
                        } else if (getCookie("shabad") == "lv") {
                            larivaar.className = "larivaar"
                        }
                        div.appendChild(larivaar);

*/
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
        }

    });


backlink = "/shaka.html?shaka=" + (parseInt(shakanum) - 1)
document.getElementById("backtop").setAttribute("href", backlink);
document.getElementById("backbottom").setAttribute("href", backlink);
nextlink = "/shaka.html?shaka=" + (parseInt(shakanum) + 1)
document.getElementById("nexttop").setAttribute("href", nextlink);
document.getElementById("nextbottom").setAttribute("href", nextlink);

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

if (shakanum == "null") {

} else {
    setcookie("last", shakanum)
}


getshabadslist(whichlist = "advgutka")

getshabadslist(whichlist = "shabads")

getshabadslist(whichlist = "amritkirtann")


setTimeout(submitmore, 2000);
