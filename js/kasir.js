if (localStorage.getItem("valid") == "kasir") {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}
else {
    window.location = "login.html";
}

function callBtn() {
    if (document.getElementById("log-out").style.visibility = "hidden") {
        document.getElementById("profile").style.marginRight = "93px";
        document.getElementById("log-out").style.visibility = "visible";
    }
    else {
        document.getElementById("profile").style.marginRight = "0px";
        document.getElementById("log-out").style.visibility = "hidden";
    }
}

function logOut() {
    localStorage.removeItem("valid");
    window.location = "login.html";
}