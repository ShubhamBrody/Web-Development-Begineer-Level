/*jshint esversion: 6 */

function caseHandler(caseToHandle)
{
  switch (caseToHandle) {
    case 'w':
      new Audio("sounds/tom-1.mp3").play();
      break;
    case 'a':
      new Audio("sounds/tom-2.mp3").play();
      break;
    case 's':
      new Audio("sounds/tom-3.mp3").play();
      break;
    case 'd':
      new Audio("sounds/tom-4.mp3").play();
      break;
    case 'j':
      new Audio("sounds/snare.mp3").play();
      break;
    case 'k':
      new Audio("sounds/crash.mp3").play();
      break;
    case 'l':
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      break;
    }
}

function handleClick()
{
  caseHandler(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

var butts = document.querySelectorAll(".drum");
for (var i = 0; i < butts.length; i++)
{
  butts[i].addEventListener("click", handleClick);
  document.addEventListener("keyup", (event) => {
    console.log(event.key);
    caseHandler(event.key.toString());
    buttonAnimation(event.key);
  });
}

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("."+currentKey);
  if(activeButton === null)
  return;
  activeButton.className += " pressed";
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);
}
