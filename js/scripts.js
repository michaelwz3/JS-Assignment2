// constants for query selectors
const pageBg = document.querySelector("html");
const studentId = document.querySelector("#myStudentId");
const customNumberInput = document.querySelector("#customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const selectList = document.querySelector("#imageSelect");
const image = document.querySelector("#images");
const imageList = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
];

// function to change bg color from user input and add student id
function changeCustomColor() {
  // colorId is equal to the value of the input field
  let colorId = customNumberInput.value;
  studentId.style.visibility = "visible";
  // Changes background color based on number entered
  pageBg.style.backgroundColor = changeColor(colorId);
}

// function to change bg color from random no.
function changeRandomColor() {
  // Generates random number between 1 and 100
  let colorId = Math.floor(Math.random() * 100) + 1;
  // Changes background color based on number generated
  pageBg.style.backgroundColor = changeColor(colorId);
}

function changeColor(colorId) {
  // Returns color based on what number is chosen
  if (colorId >= 0 && colorId <= 20) {
    return "green";
  } else if (colorId >= 21 && colorId <= 40) {
    return "blue";
  } else if (colorId >= 41 && colorId <= 60) {
    return "orange";
  } else if (colorId >= 61 && colorId <= 80) {
    return "purple";
  } else if (colorId >= 81 && colorId <= 100) {
    return "yellow";
  } else {
    return "red";
  }
}
// function to generate options for select list
function addList() {
  // Tip: use for loop to iterate over imageList array and add options to select list
  // if the select list is less than the image list, generate options for select list
  if (selectList.length < imageList.length) {
    for (let image of imageList) {
      // create option element
      let option = document.createElement("option");
      // set text content and value of option element
      option.textContent = image;
      option.value = image;
      // append option to select list
      selectList.appendChild(option);
    }
  }
}

// function to change image
function changeImage() {
  if (!selectList.value) {
    // If no image is selected, hide the image
    image.style.visibility = "hidden";
    image.src = "";
  } else {
    // If an image is selected, display it
    image.src = selectList.value;
    image.style.visibility = "visible";
  }
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
selectList.addEventListener("click", addList);
// event listeners for on change event of select
selectList.addEventListener("change", changeImage);
