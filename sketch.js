var PLAY = 1;
var END = 0;
var EstadoDeJogo = PLAY;
var path, carro, invisibleBlock, invisibleBlockGroup, ob1;
var pathImg,carroImg, ob1Img;
var i;
var obstaculo;

function preload(){
  pathImg = loadImage("path.png");
  carroImg = loadImage("carro.png");
  ob1Img = loadImage ("obstaculo 1.png");
}

function setup(){
  
  createCanvas(600,600);
  
//mover fundo
path=createSprite(300,600);
path.addImage(pathImg);
path.velocityY = 1;

//criar carro 
carro = createSprite(300,300,30,30);
carro.scale=0.3,2;
carro.addImage(carroImg);
  
//criar barra esquerda
leftBoundary=createSprite(0,0,200,400);
leftBoundary.visible = true;

//criar barra direita
rightBoundary=createSprite(0,0,400,400);
rightBoundary.visible = true;

pontos = 0;

grupoObstaculos=new Group();
invisibleBlockGroup=new Group();
}


function draw() {
  background(180);
  
  if (EstadoDeJogo === PLAY){
    pontos = pontos + Math.round(frameCount / 60);
    path.velocityY = 4; 
  }
  
  // mover carro com setas
  if (keyDown("left_arrow")){
    carro.x = carro.x - 3;

  }
  
  if (keyDown("right_arrow")){
    carro.x = carro.x + 3;
    
  }
  
  
  
  
  //resetar o fundo
  

   if(path.y > 400 ){
    path.y = height/4;
  } 

  criarObstaculos();
  
  

  if(EstadoDeJogo === "end"){
    stroke("yellow");
    fill ("yellow");
    textSize(30);
    text("fim de jogo ",300,300);
  }
    drawSprites();
  }
  
  

  


//criando obstaculos

function criarObstaculos() {
  if (frameCount % 240 === 0) {
    obstaculo = createSprite(200, -50);
    invisibleBlock = createSprite(200,15,obstaculo.width,2);
    invisibleBlock.visible = false;
    obstaculo.addImage(ob1Img);
    obstaculo.x = Math.round(random(120,400));
    invisibleBlock.x = obstaculo.x;
    obstaculo.velocityY= 1;
    invisibleBlock.velocityY = 1;
    obstaculo.lifetime = 800;
    invisibleBlock.lifetime = 800;
    carro.depth = carro.depth;
    carro.depth += 1;
    obstaculo.scale = 0.2;
    grupoObstaculos.add (obstaculo);
    invisibleBlockGroup.add(invisibleBlock);
  }
}