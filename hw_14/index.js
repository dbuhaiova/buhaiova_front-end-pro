document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("buyButton");
    const orderForm = document.getElementById("orderForm");
    const orderDetails = document.getElementById("orderDetails");
    const errorContainer = document.getElementById("errorContainer");
  
    orderForm.style.display = "none";
    orderDetails.style.display = "none";
  
    button.addEventListener("click", function () {
      orderForm.style.display = "block";
      orderDetails.style.display = "none";
      errorContainer.textContent = "";
    });
  
    const submit = document.getElementById("submitButton");
  
    submit.addEventListener("click", function (event) {
      event.preventDefault();
  
      const yourName = document.getElementById("name").value;
      const city = document.getElementById("city").value;
      const shipping = document.getElementById("shipping").value;
      const payment = document.querySelector('input[name="Спосіб"]:checked').value;
      const quantity = document.getElementById("quantity").value;
      const comment = document.getElementById("comment").value;
  
      const inputData = {
        "ПІБ покупця": yourName,
        "Місто": city,
        "Склад Нової пошти для надсилання": shipping,
        "Післяплати або оплати банківської картки": payment,
        "Кількість продукції, що купується": quantity,
        "Коментар до замовлення": comment
      };
  
      if (yourName === '' || city === '' || shipping === '' || payment === '' || quantity === '') {
        displayError('Заповніть усі поля');
        return;
      }
      if (isNaN(shipping)) {
        displayError('Невірно заповнені поля');
        return;
      }
  
      console.log(inputData);
  
      orderForm.style.display = "none";
      orderDetails.style.display = "block";
      errorContainer.style.display = "none";
  
      const productInfo = document.getElementById("productInfo");
      const shippingInfo = document.getElementById("shippingInfo");
  
      productInfo.textContent = `Інформація про товар: Кількість - ${quantity}`;
      shippingInfo.textContent = `Інформація про доставку: Місто доставки і відділення Нової Пошти: ${city}, ${shipping}; Спосіб оплати: ${payment}`;
    });
  
    function displayError(errorMessage) {
        errorContainer.textContent = errorMessage;
        errorContainer.style.display = errorMessage ? 'block' : 'none';
      }
  });
  
  