var width = window.innerWidth || document.body.clientWidth;
if (localStorage.getItem("valid") == "admin") {
    //localStorage.removeItem("valid");
    document.getElementsByTagName("body")[1].style.visibility = "visible";
    if (width > 990) {
        document.getElementById('btn-item').click();
    }
    else {
        document.getElementById('btn-item-sm').click();
    }
}
else {
    window.location = "login.html";
}


function tabList(menu, tabName) {
    var x;
    var content = document.getElementsByClassName("content");
    var links = document.getElementsByClassName("links");
        for (x = 0; x < content.length; x++) {
            content[x].style.display = "none";
        }
        for (x = 0; x < links.length; x++) {
            links[x].className = links[x].className.replace(" active", "");
        }
    document.getElementById(tabName).style.display = "block";
    menu.currentTarget.className += " active";
}

function openNav() {
    document.getElementById("side-nav-sm").style.width = "15rem";
}

function closeNav() {
    document.getElementById("side-nav-sm").style.width = "0";
}