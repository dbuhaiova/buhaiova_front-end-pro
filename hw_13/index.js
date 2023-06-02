const images = ["./images/Background-la-gi.jpg",
  "./images/flowers-276014_1280.jpg",
  "./images/nature-3125912_1280.jpg"
]

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const image = document.getElementById('image');

let curIndex = 0;

function changeImage() {
  image.src = images[curIndex];

  if (curIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "inline-block";
  }

  if (curIndex === images.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

nextButton.addEventListener("click", function() {
  if (curIndex < images.length - 1) {
    curIndex++;
    changeImage();
  }
});

prevButton.addEventListener("click", function() {
  if (curIndex > 0) {
    curIndex--;
    changeImage();
  }
});

changeImage();