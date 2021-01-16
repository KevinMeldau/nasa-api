const imageContainer1 = document.getElementById("imageDiv1");
var imageArray1 = [];
var index1 = 0;
function getMarsImages() {
  fetch("https://picsum.photos/v2/list/")
    .then((response) => {
      return response.json();
    })
    .then((data) => { 
      data.forEach((each) => {
        let img = document.createElement("img");
        img.src = each.download_url;
        imageArray1.push(img);
      });
      imageContainer1.innerHTML = "";
      imageContainer1.appendChild(imageArray1[index1]);
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
}
getMarsImages();

function getImageOfTheDay() {
  fetch("https://api.nasa.gov/planetary/apod?api_key=TMwH0mQYVUz8HClsf21Q31IHtjcL90svDqRnwiKy")
    .then((response) => {
      return response.json();
    })
    .then((data) => { 
      const imageElement = document.getElementById("image-of-the-day");
      imageElement.src = data.url;
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
}
getImageOfTheDay();

// Left and right navigation
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");

previous.addEventListener("click", function () {
  if(index1 != 0){
    index1--;
  }
  imageContainer1.innerHTML = "";
  imageContainer1.appendChild(imageArray1[index1]);
});

next.addEventListener("click", function () {
  if(index1 != imageArray1.length - 1){
    index1++;
  }
  imageContainer1.innerHTML = "";
  imageContainer1.appendChild(imageArray1[index1]);
});

function showDiv(index){
  if(index == 1){
    document.getElementById("image-of-the-day-container").style.display = "block";
    document.getElementById("main-image-container").style.display = "none";
    document.getElementById("previous1").style.display = "block";
    document.getElementById("next1").style.display = "block";
  }
  else if(index == 2){
    document.getElementById("image-of-the-day-container").style.display = "none";
    document.getElementById("main-image-container").style.display = "flex";
    document.getElementById("previous1").style.display = "none";
    document.getElementById("next1").style.display = "none";
  }
}

// <!-- NASA API Key - https://api.nasa.gov/planetary/apod?api_key=TMwH0mQYVUz8HClsf21Q31IHtjcL90svDqRnwiKy -->
