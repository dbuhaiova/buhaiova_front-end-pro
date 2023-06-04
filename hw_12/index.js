document.querySelector("#loginButton").addEventListener("click", function login() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (email === "" || password === "") {
      alert("Введіть ваш логін і пароль");
      return;
    }

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    document.getElementById("email").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("label").style.display = "none";
    document.getElementById("label1").style.display = "none";
    document.getElementById("loginButton").style.display = "none";
    spinner();

    setTimeout(function () {
      document.getElementById("spinner").style.display = "none";
      window.location.href = "index2.html";
      document.getElementById("email").style.display = "none";
    }, 2000);
  });
function spinner() {
  document.getElementById("spinner").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.href.includes("index2.html")) {
    console.log("Ширина екрану:", window.screen.width);
    console.log("Висота екрану:", window.screen.height);
    document.getElementById("loginButton").style.display = "none";
  }
});