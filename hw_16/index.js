$(document).ready(function (){
  let modal = $('#modal')
  let modalButton = $('#modalButton')

  modalButton.click(function(){
    modal.css('display', 'block')
  })
  $(window).click(function (event){
    if(event.target == modal[0]){
      modal.css('display', 'none')
    }
  })
});