var num1 = Math.floor(Math.random() * 6) + 1;
var str = "images/dice" + num1.toString() + ".png";
document.querySelector(".img1").setAttribute("src", str);

var num2 = Math.floor(Math.random() * 6) + 1;
str = "images/dice" + num2.toString() + ".png";
document.querySelector(".img2").setAttribute("src", str);

if(num1 > num2)
{
  document.querySelector("h1").textContent = "⛳Player1 Wins!!!";
}
else if(num1 < num2)
{
  document.querySelector("h1").textContent = "Player2 Wins!!!⛳";
}
else
{
  document.querySelector("h1").textContent = "Its a Draw";
}
