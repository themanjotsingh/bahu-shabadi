apiline = "https://api.gurbaninow.com/v2/line/"
apishabad = "https://api.gurbaninow.com/v2/shabad/"

favslist = localStorage.favouriteslist.split(" ")


favslist.forEach(displayfavs)

function displayfavs(item, index) {

    if (item !== "") {
        jsonobj = JSON.parse(Get(apiline + item));


        var favslist = document.getElementById("favslist");
        var link = document.createElement('a');

        theurl = "/shabad.html?shabadid=" + jsonobj.line.shabadid + "&lineid=" + jsonobj.line.id
        link.setAttribute("href", theurl);

        link.appendChild(document.createTextNode(jsonobj.line.gurmukhi.unicode));





        favslist.appendChild(link);


        var blank = document.createElement('br');
        favslist.appendChild(blank);







    }
}
