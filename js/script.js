var btn =document.querySelector(".btn")
var colorBox =document.querySelector(".color-box")

var x =["blue", "green" ,"red" ,"black" , "yellow"]
var y = 0;

btn.onclick=function(){
    colorBox.style.backgroundColor = x[y]
    btn.style.backgroundColor = x[y]
    btn.style.color = "white"
    y++;
    if(y == 5){
        y = 0;
    }
}