function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var secretCode = document.getElementById("secret-code").value;
    var time = new Date();
    if (username == "partnerngc009" && password == "passwordnyasusah" && secretCode == time.getMinutes() + time.getHours()) {
        localStorage.setItem("valid", "admin");
        window.location = "admin.html";
    }
    else if (username == "kasirngc001" && password == "apaitungitung" && secretCode == time.getDate() + time.getHours()) {
        localStorage.setItem("valid", "kasir");
        window.location = "kasir.html";
    }
    else {
        alert("Maaf akun yang anda masukan salah");
        document.getElementById("login").reset();
    }
}