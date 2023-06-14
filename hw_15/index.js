document.querySelector("#loginButton").addEventListener("click", function() {
    event.preventDefault();
  
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const pib = document.querySelector("#pib").value;
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[\+\d\s]{10,13}$/;
    const pibRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
  
    if (email.length < 5 || !emailRegex.test(email)) {
      console.log("Bведіть дійсну електронну пошту");
      return;
    }
  
    if (!phoneRegex.test(phone)) {
      console.log("Bведіть дійсний номер телефону");
      return;
    }
  
    if (!pibRegex.test(pib)) {
      console.log("Bведіть ПІБ, використовуючи три слова з великої літери без розділових знаків");
      return;
    }
  
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`PIB: ${pib}`);
  });
  