for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// mouse click
function handleClick() {
  //with "this" we are getting the identity of the button which is clicked
  //   console.log(this);// this.innerHTML = "white"; // this.style.color = "green";

  var buttonName = this.innerHTML;
  makeSound(buttonName);

  buttontnactive(buttonName);
}

// we have added event listener to entire webpage for when we press from keyboard
document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttontnactive(event.key);
});

// create a fn for switch case to avoid repeatation

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonName);
  }
}

// highlight the button pressed or clicked

function buttontnactive(currentKey) {
  var activeKey = document.querySelector("." + currentKey);

  // add the class which contains css to highlight the button

  activeKey.classList.add("pressed");

  //remove animation after some sec

  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
