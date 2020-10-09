document.getElementById("highScore").innerHTML = "High Score: " + localStorage.highScore;

var character = {
  x: 100,
  y: 100,
  speedMultiplier: 5,
  element: document.getElementById("character")
};
var block = document.getElementById("block");
var game = document.getElementById("game");
var scores = document.getElementById("scores");
var udead = "no";
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
var block5 = document.getElementById("block5");
var block6 = document.getElementById("block6");
var block7 = document.getElementById("block7");
var block8 = document.getElementById("block8");
var block9 = document.getElementById("block9");
var block10 = document.getElementById("block10");
var gw = document.getElementById("game").style.width;
var gh = 300;
var charHeight = (window.innerWidth * 10)/100;

//function vwToPixel(value){
//return (window.innerWidth * value /100)
//};

var score = 0;


//Start

function start(){
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("block").style.display = "block";
  document.getElementById("character").style.display = "absolute";
  document.getElementById("highScore").style.display = "flex";
  document.getElementById("score").style.display = "flex";
  document.getElementById("restart").style.display = "flex";
  document.getElementById("resetScore").style.display = "flex";

  //collision detection

  setInterval(function collision() {
    var charY = document.getElementById("character").offsetTop; 
    var charX = document.getElementById("character").offsetLeft;
    var charH = document.getElementById("character").offsetHeight;
    var charW = document.getElementById("character").offsetWidth;
    var blockX = document.getElementById("block").offsetLeft;
    var blockW = document.getElementById("block").offsetWidth;
    var blockY = document.getElementById("block").offsetTop;
    var blockH = document.getElementById("block").offsetHeight;
    var block1X = document.getElementById("block1").offsetLeft;
    var block1W = document.getElementById("block1").offsetWidth;
    var block1Y = document.getElementById("block1").offsetTop;
    var block1H = document.getElementById("block1").offsetHeight;
    var block2X = document.getElementById("block2").offsetLeft;
    var block2W = document.getElementById("block2").offsetWidth;
    var block2Y = document.getElementById("block2").offsetTop;
    var block2H = document.getElementById("block2").offsetHeight;
    var block3X = document.getElementById("block3").offsetLeft;
    var block3W = document.getElementById("block3").offsetWidth;
    var block3Y = document.getElementById("block3").offsetTop;
    var block3H = document.getElementById("block3").offsetHeight;
    var block4X = document.getElementById("block4").offsetLeft;
    var block4W = document.getElementById("block4").offsetWidth;
    var block4Y = document.getElementById("block4").offsetTop;
    var block4H = document.getElementById("block4").offsetHeight;
    var block5X = document.getElementById("block5").offsetLeft;
    var block5W = document.getElementById("block5").offsetWidth;
    var block5Y = document.getElementById("block5").offsetTop;
    var block5H = document.getElementById("block5").offsetHeight;
    var block6X = document.getElementById("block6").offsetLeft;
    var block6W = document.getElementById("block6").offsetWidth;
    var block6Y = document.getElementById("block6").offsetTop;
    var block6H = document.getElementById("block6").offsetHeight;
    var block7X = document.getElementById("block7").offsetLeft;
    var block7W = document.getElementById("block7").offsetWidth;
    var block7Y = document.getElementById("block7").offsetTop;
    var block7H = document.getElementById("block7").offsetHeight;
    var block8X = document.getElementById("block8").offsetLeft;
    var block8W = document.getElementById("block8").offsetWidth;
    var block8Y = document.getElementById("block8").offsetTop;
    var block8H = document.getElementById("block8").offsetHeight;
    var block9X = document.getElementById("block9").offsetLeft;
    var block9W = document.getElementById("block9").offsetWidth;
    var block9Y = document.getElementById("block9").offsetTop;
    var block9H = document.getElementById("block9").offsetHeight;
    var block10X = document.getElementById("block10").offsetLeft;
    var block10W = document.getElementById("block10").offsetWidth;
    var block10Y = document.getElementById("block10").offsetTop;
    var block10H = document.getElementById("block10").offsetHeight;

  if (window.innerWidth <503){
    stopEverything();
  } else if ((charX < blockX + blockW &&
    charX + charW > blockX && 
    charY < blockY + blockH && 
    charY + charH > blockY) || 
    (charX < block1X + block1W &&
        charX + charW > block1X && 
        charY < block1Y + block1H && 
        charY + charH > block1Y) || 
        (charX < block2X + block2W &&
            charX + charW > block2X && 
            charY < block2Y + block2H && 
            charY + charH > block2Y) || 
            (charX < block3X + block3W &&
                charX + charW > block3X && 
                charY < block3Y + block3H && 
                charY + charH > block3Y) || 
                (charX < block4X + block4W &&
                    charX + charW > block4X && 
                    charY < block4Y + block4H && 
                    charY + charH > block4Y)|| 
                    (charX < block5X + block5W &&
                        charX + charW > block5X && 
                        charY < block5Y + block5H && 
                        charY + charH > block5Y)|| 
                        (charX < block6X + block6W &&
                            charX + charW > block6X && 
                            charY < block6Y + block6H && 
                            charY + charH > block6Y)|| 
                            (charX < block7X + block7W &&
                                charX + charW > block7X && 
                                charY < block7Y + block7H && 
                                charY + charH > block7Y)|| 
                                (charX < block8X + block8W &&
                                    charX + charW > block8X && 
                                    charY < block8Y + block8H && 
                                    charY + charH > block8Y)|| 
                                    (charX < block9X + block9W &&
                                        charX + charW > block9X && 
                                        charY < block9Y + block9H && 
                                        charY + charH > block9Y)|| 
                                        (charX < block10X + block10W &&
                                            charX + charW > block10X && 
                                            charY < block10Y + block10H && 
                                            charY + charH > block10Y)
    ) {
        block.style.animation = "none";
        youLose();
      } else {
        if (udead === "no") {
          score++;
          document.getElementById("score").innerHTML = "Score:   " + score;
          levelUp();
        }
      }
    }, 10);
}


/// store key codes and currently pressed ones
var keys = {};
keys.UP = 38;
keys.LEFT = 37;
keys.RIGHT = 39;
keys.DOWN = 40;



/// key detection (better to use addEventListener, but this will do)
document.body.onkeyup =
  document.body.onkeydown = function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    var kc = e.keyCode || e.which;
    keys[kc] = e.type == 'keydown';
  };

/// character movement update
var moveCharacter = function(dx, dy) {
  character.x += (dx || 0) * character.speedMultiplier;
  character.y += (dy || 0) * character.speedMultiplier;
  character.element.style.left = character.x + 'px';
  character.element.style.top = character.y + 'px';
};

/// character control
var detectCharacterMovement = function() {
  if (keys[keys.LEFT] && document.getElementById("character").offsetLeft >0) {
    moveCharacter(-1, 0);
  }
  if (keys[keys.RIGHT]) {
    moveCharacter(1, 0);
  }
  if (keys[keys.UP] && document.getElementById("character").offsetTop > (document.getElementById("game").offsetTop)+5) {
    moveCharacter(0, -1);
  }
  if (keys[keys.DOWN] && window.innerWidth < 1000 && document.getElementById("character").offsetTop < (document.getElementById("game").offsetTop + gh - charHeight)) {
   moveCharacter(0, 1);
  } else if(keys[keys.DOWN] && document.getElementById("character").offsetTop < (document.getElementById("game").offsetTop + gh - 97)){
    moveCharacter(0, 1);
  }
};

/// update current position on screen
moveCharacter();

/// game loop
setInterval(function() {
  detectCharacterMovement();
}, 33);


//stop if resize
function stopEverything(){
  score = 0;
  udead = "yes";

  document.getElementById("character").style.display = "none";
  document.getElementById("block").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("block").style.display = "none";
  document.getElementById("block1").style.display = "none";
  document.getElementById("block2").style.display = "none";
  document.getElementById("block3").style.display = "none";
  document.getElementById("block4").style.display = "none";
  document.getElementById("block5").style.display = "none";
  document.getElementById("block6").style.display = "none";
  document.getElementById("block7").style.display = "none";
  document.getElementById("block8").style.display = "none";
  document.getElementById("block9").style.display = "none";
  document.getElementById("block10").style.display = "none";
  document.getElementById("resetScore").style.display = "none";
  document.getElementById("restart").style.display = "none";
  document.getElementById("highScore").style.display = "none";
  document.getElementById("score").style.display = "none";
}


function youLose() {
        document.getElementById("score").innerHTML = "Score: " + score;
        udead = "yes";
      
        document.getElementById("loser").style.display = "block";
        document.getElementById("game").style.display = "none";
        block.style.display = "none";
        block1.style.display = "none";
        block2.style.display = "none";
        block3.style.display = "none";
        block4.style.display = "none";
        block5.style.display = "none";
        block6.style.display = "none";
        block7.style.display = "none";
        block8.style.display = "none";
        block9.style.display = "none";
        block10.style.display = "none";
      
        if (localStorage.highScore) {
          if (score > localStorage.highScore) {
            localStorage.highScore = score;
          }
        } else {
          localStorage.setItem("highScore", score);
        }
        document.getElementById("highScore").innerHTML = "Highscore: " + localStorage.highScore;
      }
      
      function restart() {
        score = 0;
        udead = "no";
      
        document.getElementById("loser").style.display = "none";
        document.getElementById("score").innerHTML = "Score: " + score;
        game.style.backgroundColor = "rgba(255,255,255,0)";
        document.getElementById("character").style.display = "block";
        block.style.display = "block";
        block.style.left = "480px";
        block.style.animation = "bounce-5 6s infinite linear";
        character.x = 100;
        character.y = 100;
        document.getElementById("character").style.top = "100px";
        document.getElementById("character").style.left = "100px";
        document.getElementById("game").style.display = "block";
        block1.style.display = "none";
        block2.style.display = "none";
        block3.style.display = "none";
        block4.style.display = "none";
        block5.style.display = "none";
        block6.style.display = "none";
        block7.style.display = "none";
        block8.style.display = "none";
        block9.style.display = "none";
        block10.style.display = "none";
      
      }
      
      function deleteData() {
        var confirmDelete = confirm("Your data will be lost forever! (A very long time!)\nConfirm?");
        if (confirmDelete == true) {
          localStorage.removeItem("highScore");
          restart();
        }
        document.getElementById("highScore").innerHTML = "High Score: 0";
      }

function randomIntFromInterval() {
  var max = document.getElementById("game").offsetTop + gh;
  var min = document.getElementById("game").offsetTop;
  var divsize = 50;
  var posy = document.getElementById("character").offsetTop;

  if (posy < (min + 50)) {
    return (posy + 50) + 'px';
  } else if (posy > (max - 50)) {
    return (max - (Math.random() * 150)) + 'px';
  } else {
    return posy.toString() + 'px';
  }
}

function levelUp(){
        if (score>500 && score<502){
              document.getElementById("block1").style.display = "block";
              document.getElementById("block1").style.top = randomIntFromInterval();
          }
        if (score>1000 && score<1002){
            document.getElementById("block2").style.display = "block";
            document.getElementById("block2").style.top = randomIntFromInterval();
          }
        if (score>2000 && score<2002){
            document.getElementById("block3").style.display = "block";
            document.getElementById("block3").style.top = randomIntFromInterval();
          }
          if (score>3000 && score<3002){
            document.getElementById("block4").style.display = "block";
            document.getElementById("block4").style.top = randomIntFromInterval();
          }
          if (score>4000 && score<4002){
            document.getElementById("block5").style.display = "block";
            document.getElementById("block5").style.top = randomIntFromInterval();
          }
          if (score>5000 && score<5002){
            document.getElementById("block6").style.display = "block";
            document.getElementById("block6").style.top = randomIntFromInterval();
          }
          if (score>6000 && score<6002){
            document.getElementById("block7").style.display = "block";
            document.getElementById("block7").style.top = randomIntFromInterval();
          }
          if (score>7000 && score<7002){
            document.getElementById("block8").style.display = "block";
            document.getElementById("block8").style.top = randomIntFromInterval();
          }
          if (score>8000 && score<8002){
            document.getElementById("block9").style.display = "block";
            document.getElementById("block9").style.top = randomIntFromInterval();
          }
          if (score>9000 && score<9002){
            document.getElementById("block10").style.display = "block";
            document.getElementById("block10").style.top = randomIntFromInterval();
          }
}  

