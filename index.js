// function getImageOfTheDay() {
//   fetch(
//     "https://api.nasa.gov/planetary/apod?api_key=TMwH0mQYVUz8HClsf21Q31IHtjcL90svDqRnwiKy"
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.url);
//       const imageElement = document.getElementById("photo-of-the-day");
//       imageElement.src = data.url;
//     })
//     .catch((error) => {
//       console.log("ERROR: ", error);
//     });
// }
// getImageOfTheDay();

// My attempt at hooking up the Mars images API

function getMarsImages() {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=TMwH0mQYVUz8HClsf21Q31IHtjcL90svDqRnwiKy"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.url);
      const imageElement = document.getElementById("photo-of-the-day");
      imageElement.src = data.url;
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
}
getMarsImages();

// Left and right navigation
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");

previous.addEventListener("click", function () {});

next.addEventListener("click", function () {});

// Dropdown menu
var imageOfTheDay = document.getElementById("imageOfTheDay");
var marsImages = document.getElementById("marsImages");

imageOfTheDay.addEventListener("click", function () {});

marsImages.addEventListener("click", function () {});

// Setup an event listener on the left and right buttons
// Add click event to left and right buttons
// Checkout CSS keyframes

// <!-- API Key - https://api.nasa.gov/planetary/apod?api_key=TMwH0mQYVUz8HClsf21Q31IHtjcL90svDqRnwiKy -->
