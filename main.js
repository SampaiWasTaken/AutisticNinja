
var ninja;
var speed = 10;
var obstacle = [];
var i = 0;

function startGame() {
    ninja = new component(50, 50, "black", 800, 120);
    obstacle[0] = new component(100, 200, "grey", 500, 120);
    obstacle[2] = new component(100, 200, "grey", 100, 120);
    obstacle[1] = new component(100, 200, "grey", 0, 60);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
        start : function() {
            this.canvas.width = 1200;
            this.canvas.height = 600;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 30);
            window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
            switch(e.keyCode){
                case 37: case 39: case 38:  case 40: case 32: e.preventDefault(); break;
                            }
            })
            window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
            })
    },
    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    
    stop : function() {
        clearInterval(this.interval);
    }
    
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.hitLeft = function(othObj){
        var crash = false;
         if (ninja.x === othObj.x + (othObj.width) && ninja.y >= othObj.y - (ninja.height) && ninja.y <= othObj.y  + (othObj.height)){
             crash = true;
         }
        return crash; 
    }
  
}

function updateGameArea(){
    myGameArea.clear();
    ninja.speedX = 0;
    ninja.speedY = 0;  
    
//for(var i = 0; i < obstacle.length; i++){
    //left
   if (ninja.hitLeft(obstacle[i]) === true){
        ninja.speedX <0;
    } else if (myGameArea.key && myGameArea.key == 37) {ninja.speedX = -speed;}
    //right
    if (ninja.x + (ninja.width) === obstacle[i].x && ninja.y >= obstacle[i].y - (ninja.height) && ninja.y <= obstacle[i].y  + (obstacle[i].height)){
        ninja.speedX >0;
    } else if (myGameArea.key && myGameArea.key == 39) {ninja.speedX = speed; }
    //up
    if (ninja.y === obstacle[i].y + (obstacle[i].height) && ninja.x + (ninja.width) >= obstacle[i].x && ninja.x <= obstacle[i].x + (obstacle[i].width)){
        ninja.speedY>0;
    } else  if (myGameArea.key && myGameArea.key == 38) {ninja.speedY = -speed; }
    //down
     if (ninja.y === obstacle[i].y - ninja.height && ninja.x + (ninja.width) >= obstacle[i].x && ninja.x <= obstacle[i].x + (obstacle[i].width)){
        ninja.speedY>0;
    } else if (myGameArea.key && myGameArea.key == 40) {ninja.speedY = speed; }

    
    ninja.newPos();    
    ninja.update();
    obstacle[i].update();
    //if(i === obstacle.length){
      //  i = 0;
   // }
//}
}