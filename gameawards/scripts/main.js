//万岁！js语法借鉴cc++python,l因此可以选择写还是不写；（一行里面必须写）
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc == "imags/TGA.png") {
    myImage.setAttribute("src", "imags/bot.png");
  } else {
    myImage.setAttribute("src", "imags/TGA.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `welcome, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `TGA is cool, ${storedName}`;
  }
  myButton.onclick = function () {
    setUserName();
  };