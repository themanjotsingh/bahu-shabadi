apiline = "https://api.gurbaninow.com/v2/line/"
apishabad = "https://api.gurbaninow.com/v2/shabad/"

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('shaka');
shakanum = myParam

$.getJSON(
    "https://sheetdb.io/api/v1/aqv99npuj23ip?sheet=sheet",
    function (data) {

        lineslist = data[shakanum - 1].lines
        lines = lineslist.split(",")

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
                    shabad.className = "shabad"
                    div.appendChild(shabad);
                });
        };


        aftershabadslist = data[shakanum - 1].shabads
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
                        shabad.className = "shabad"
                        div.appendChild(shabad);

                    }



                })
        }

    })
