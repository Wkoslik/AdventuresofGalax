document.getElementById("highScore").innerHTML = "Highscore: " + localStorage.highScore;
var score = 0;
var up = 1;
var ded = "yes";
setInterval(checkPlayer, 10);
document.addEventListener("keydown", jump);
var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");
var mute = "no";
function jump(){
    if(player.classList != "animate"){
player.classList.add("animate");
setTimeout(function(){
    player.classList.remove("animate");
}, 500);
    }
}

function remove(){
player.style.animation = "none";
}

function checkPlayer(){
var characterTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
if(blockLeft<130 && blockLeft>0 && characterTop>325){
dead();
}

else{
if(ded=="no"){

score++;
document.getElementById("score").innerHTML = "Score: " + score;
if(score>500 && score<1000){
obstacle.style.animation = "none";
document.getElementById("obstacle").style.animation = "block 850ms alternate infinite";
if(up == 1){
up++;
}
}
}
if(score>2000 && score<4999){
if(up == 2){
up++;
obstacle.style.animation = "none";
document.getElementById("obstacle").style.animation = "block 750ms alternate infinite";
}
}
if(score<5000){
if(up == 3){
up++;
obstacle.style.animation = "none";
document.getElementById("obstacle").style.animation = "block 600ms alternate infinite";
}
}
}
}

function dead(){
if(mute == "no"){
return;
}


document.getElementById("obstacle").style.animation = "p";
document.getElementById("score").innerHTML = "Score: " + score;
ded = "yes";
document.getElementById("restart").style.display = "block";
obstacle.style.display = "none";
document.getElementById("resetScore").style.display = "block";

if(localStorage.highScore){
if(score>localStorage.highScore){
localStorage.highScore = score;
}
}
else{
localStorage.setItem("highScore", score);
}
document.getElementById("highScore").innerHTML = "Highscore: " + localStorage.highScore;

}
function restart(){
up = 1;
score = 0;
ded = "no";
document.getElementById("obstacle").style.animation = "block 3s alternate infinite";
document.getElementById("restart").style.display = "none";
obstacle.style.display = "block";
document.getElementById("resetScore").style.display = "none";

}
function deleteData(){
var confirmDelete = confirm("Your data will be lost forever! (A very long time!)\nConfirm?");
if(confirmDelete == true){
localStorage.removeItem("highScore");
}
}
