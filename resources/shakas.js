numbers = ["one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine",
"ten",
"eleven",
"twelve",
"thirteen",
"fourteen",
"fifteen",
"sixteen",
"seventeen",
"eighteen",
"nineteen",
"twenty",
"twentyone",
"twentytwo",
"twentythree",
"twentyfour"]


apiline = "https://api.gurbaninow.com/v2/line/"
apishabad = "https://api.gurbaninow.com/v2/shabad/"




var pathArray = window.location.pathname.split('/');
shakanum = pathArray[1].replace(/\D/g, "");
writtenshakanum = numbers[shakanum - 1]

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('shaka');
shakanum = myParam


$.getJSON(
    "https://sheetdb.io/api/v1/aqv99npuj23ip?sheet=sheet",
    function (data) {


        lineslist = data[shakanum - 1].lines
        lines = lineslist.split(",")


        for (var i = 0; i < lines.length; i++) {
            var each = lines[i];

            link = apiline + each;

            $.getJSON(
                link,
                function (data) {

                    var div = document.getElementById("bani1");

                    var shabad = document.createElement('p');
                    shabad.appendChild(document.createTextNode(data.line.gurmukhi.unicode));
                    shabad.className = "shabad"
                    div.appendChild(shabad);
                });
        };

        aftershabadslist = data[shakanum - 1].shabads
        aftershabads = aftershabadslist.split(",")


        for (var i = 0; i < aftershabads.length; i++) {
            var each = aftershabads[i];

            link = apishabad + each;

            $.getJSON(
                link,
                function (data) {

                    for (var i = 0; i < data.shabad.length; i++) {
                        var each = data.shabad[i];


                        var div = document.getElementById("bani2");

                        var shabad = document.createElement('p');
                        shabad.appendChild(document.createTextNode(each.line.gurmukhi.unicode));
                        shabad.className = "shabad"
                        div.appendChild(shabad);


                    }

                });
        };







    });




$.getJSON(
    "https://api.gurbaninow.com/v2/shabad/MK1",
    function (data) {

    });
