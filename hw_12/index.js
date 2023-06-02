document.querySelector('#loginButton').addEventListener("click", function login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  
    spinner();
  
    setTimeout(function() {
        document.getElementById("spinner").style.display = "none";
    }, 2000);
  });
  
  function spinner() {
    document.getElementById("spinner").style.display = "block";
  }
  
  

          