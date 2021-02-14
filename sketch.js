var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    block1 = createSprite(0,700,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,700,200,30);
    block2.shapeColor ="yellow"

    block3 = createSprite(515,700,200,30);
    block3.shapeColor = "pink"

    block4 = createSprite(740,700,220,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),50, 20,20);
    ball.shapeColor="white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb("grey"));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor ="pink"
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green"
    }

    drawSprites();
}
