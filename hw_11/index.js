const input = document.querySelector('#hover')
const div = document.querySelector('#divMouseOver')

input.addEventListener('mouseover', function() {
  div.style.display = 'block'
})
input.addEventListener('mouseout', function() {
  div.style.display = 'none'
})
