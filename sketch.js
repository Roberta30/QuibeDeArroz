var player;
var gI, g1, g2, g3, g4, g5, g6,g7 ,g8 ,g9 ,g10, g11, g12, g13, g14, g15;
var caVerde, caCinza, caV, caV2, chave, chaveImg, fechadura, fechaduraImg, parada, andando;
var pE1, pE2, pE3, pF, porta, porta2, porta3, porta4, porta5;
var dong1, dong2, dong3, dong4, dong5, dong6, dong7, dong8, dong9, dong10;
var dong11, dong12, dong13, dong14, dong15, dong16, dong17, dong18, dong19, dong20;
var dong31, dong32, dong33, dong34, dong35, dong36, dong37, dong38, dong39, dong30;
var dong41, dong42, dong43, dong44, dong45, dong46, dong47, dong48, dong49, dong40;
var dicas, dicaIN, dicaINT, dica, saida, obst, winImg;

var Mortes = 0;
var TeveSorte = 0;
var jogo = 1;
var win = 0;
var gameState = jogo;

function preload(){
  parada = loadAnimation("Idle1.png","Idle2.png","Idle3.png","Idle4.png"
  ,"Idle5.png"); 

  andando = loadAnimation("Walk1.png","Walk2.png","Walk3.png","Walk4.png",
  "Walk5.png","Walk6.png","Walk7.png","Walk8.png","Walk9.png"
  ,"Walk10.png","Walk11.png","Walk12.png","Walk13.png","Walk14.png"
  ,"Walk15.png","Walk16.png","Walk17.png","Walk18.png","Walk19.png"
  ,"Walk20.png"); 

  caVerde = loadImage("Caixa_Verde.png");
  caCinza = loadImage("Caixa_Cinza.png");
  caV = loadImage("Caixa_Vermelha.png");
  caV2 = loadImage("Caixa_Vermelha2.png");
  chaveImg = loadImage("chaveAmarela.png");
  fechaduraImg = loadImage("fechadura.png");
  winImg = loadImage("vcGanhou.avif");
}

function setup() {
  createCanvas(1000, 605);

  saida = createSprite(970,555,10,100);
  saida.shapeColor = "#FF6EC7";

  dicas = createSprite(75, 525, 120, 20);
  dicas.visible = false;
  dicaIN = createSprite(200, 113, 100,20)
  dicaIN.visible = false;
  dica = createSprite(880, 113, 130,100)
  dica.visible = false;
  dicaINT = createSprite(200, 113, 100,20)
  dicaINT.visible = false;

  chave = createSprite(205, 540, 1, 1);
  chave.addImage(chaveImg);
  chave.scale = 0.065;

  player = createSprite(475,560,1,1);
  player.addAnimation("parada",parada);
  player.addAnimation("andando",andando);
  player.scale = 0.1;

  dong1 = createSprite(65, 460, 1, 1);
  dong1.addImage(caVerde);
  dong1.scale = 0.2;
    dong2 = createSprite(130,340, 1, 1);
    dong2.addImage(caVerde);
    dong2.scale = 0.2;
  dong3 = createSprite(65, 360, 1, 1);
  dong3.addImage(caVerde);
  dong3.scale = 0.2;
    dong4 = createSprite(120, 230, 1, 1);
    dong4.addImage(caVerde);
    dong4.scale = 0.2;
  dong5 = createSprite(30,300, 1, 1);
  dong5.addImage(caVerde);
  dong5.scale = 0.2;
    dong6 = createSprite(40,220, 1, 1);
    dong6.addImage(caVerde);
    dong6.scale = 0.2;
  dong7 = createSprite(19,400, 1, 1);
  dong7.addImage(caVerde);
  dong7.scale = 0.2;
    dong8 = createSprite(24,590, 1, 1);
    dong8.addImage(caVerde);
    dong8.scale = 0.2;
  dong9 = createSprite(35,530, 1, 1);
  dong9.addImage(caVerde);
  dong9.scale = 0.2;
    dong10 = createSprite(115,580, 1, 1);
    dong10.addImage(caVerde);
    dong10.scale = 0.2;

  
  dong11 = createSprite(235,466 ,1, 1);
  dong11.addImage(caVerde);
  dong11.scale = 0.2;
    dong12 = createSprite(170,310 ,1, 1);
    dong12.addImage(caVerde);
    dong12.scale = 0.2;
  dong13 = createSprite(175,390 ,1, 1);
  dong13.addImage(caVerde);
  dong13.scale = 0.2;
    dong14 = createSprite(170,260 ,1, 1);
    dong14.addImage(caVerde);
    dong14.scale = 0.2;
  dong15 = createSprite(250,300 ,1, 1);
  dong15.addImage(caVerde);
  dong15.scale = 0.2;
    dong16 = createSprite(255,220 ,1, 1);
    dong16.addImage(caVerde);
    dong16.scale = 0.2;
  dong17 = createSprite(240,400 ,1, 1);
  dong17.addImage(caVerde);
  dong17.scale = 0.2;
    dong18 = createSprite(225,590 ,1, 1);
    dong18.addImage(caVerde);
    dong18.scale = 0.2;
  dong19 = createSprite(235,530 ,1, 1);
  dong19.addImage(caVerde);
  dong19.scale = 0.2;
    dong20 = createSprite( 165,470,1, 1);
    dong20.addImage(caVerde);
    dong20.scale = 0.2;

  
  dong31 = createSprite(575,142 ,1, 1);
  dong31.addImage(caV);
  dong31.scale = 0.2;
    dong32 = createSprite(440,80 ,1, 1);
    dong32.addImage(caV);
    dong32.scale = 0.2;
  dong33 = createSprite( 870,137,1, 1);
  dong33.addImage(caV);
  dong33.scale = 0.2;
    dong34 = createSprite(310,145 ,1, 1);
    dong34.addImage(caV);
    dong34.scale = 0.2;
  dong35 = createSprite(385,85 ,1, 1);
  dong35.addImage(caV);
  dong35.scale = 0.2;
    dong36 = createSprite(510,145 ,1, 1);
    dong36.addImage(caV);
    dong36.scale = 0.2;
  dong37 = createSprite(640,76 ,1, 1);
  dong37.addImage(caV);
  dong37.scale = 0.2;
    dong38 = createSprite( 675,150,1, 1);
    dong38.addImage(caV);
    dong38.scale = 0.2;
  dong39 = createSprite(740,78 ,1, 1);
  dong39.addImage(caV);
  dong39.scale = 0.2;
    dong30 = createSprite( 805, 150,1, 1);
    dong30.addImage(caV);
    dong30.scale = 0.2;

  
  dong41 = createSprite(568,583, 1, 1);
  dong41.addImage(caCinza);
  dong41.scale = 0.2;
    dong42 = createSprite(500,509, 1, 1);
    dong42.addImage(caCinza);
    dong42.scale = 0.2;
  dong43 = createSprite(435,590, 1, 1);
  dong43.addImage(caCinza);
  dong43.scale = 0.2;
    dong44 = createSprite(380,520, 1, 1);
    dong44.addImage(caCinza);
    dong44.scale = 0.2;
  dong45 = createSprite(620,515, 1, 1);
  dong45.addImage(caCinza);
  dong45.scale = 0.2;
    dong46 = createSprite(760,530, 1, 1);
    dong46.addImage(caCinza);
    dong46.scale = 0.2;
  dong47 = createSprite(889,590, 1, 1);
  dong47.addImage(caCinza);
  dong47.scale = 0.2;
    dong48 = createSprite(685,590, 1, 1);
    dong48.addImage(caCinza);
    dong48.scale = 0.2;
  dong49 = createSprite(35,530, 1, 1);
  dong49.addImage(caCinza);
  dong49.scale = 0.2;
    dong40 = createSprite(115,580, 1, 1);
    dong40.addImage(caCinza);
    dong40.scale = 0.2;

  obst = createSprite(680, 330, 590, 340)
  obst.visible = false;

  pE1 = createSprite(140, 113, 10, 85);
  pE1.shapeColor = "#5C4033";

  pE2 = createSprite(270, 113, 10, 85);
  pE2.shapeColor = "#5C4033";

  pE3 = createSprite(925, 165, 90, 10);
  pE3.shapeColor = "#5C4033";

  porta = createSprite(800, 455, 10, 70);
  porta.shapeColor = "#5C4033";
    porta2 = createSprite(690,210,10, 70);
    porta2.shapeColor = "#5C4033";
  porta3 = createSprite(585,455, 10, 70);
  porta3.shapeColor = "#5C4033";
    porta4 = createSprite(480,210, 10, 70);
    porta4.shapeColor = "#5C4033";
  porta5 = createSprite(380,455, 10, 70);
  porta5.shapeColor = "#5C4033";

  pF = createSprite(325, 500, 95, 10);
  pF.shapeColor = "#5C4033";

  var ground_options = {
    isStatic : true
  }
  push();
  gI = createSprite(495,605,980,10,ground_options);
  gI.shapeColor = "#0ff0fc";

  g1 = createSprite(10,350,10,580,ground_options);
  g1.shapeColor = "#0ff0fc";
    g2 = createSprite(980,350,10,580,ground_options);
    g2.shapeColor = "#0ff0fc";
  g3 = createSprite(495,60,980,10,ground_options);
  g3.shapeColor = "#0ff0fc";
    g4 = createSprite(140,400,10,480,ground_options);
    g4.shapeColor = "#0ff0fc";
  g5 = createSprite(270,400,10,480,ground_options);
  g5.shapeColor = "#0ff0fc";
    g6 = createSprite(575,165,600,10,ground_options);
    g6.shapeColor = "#0ff0fc";
  g7 = createSprite(675,500,600,10,ground_options);
  g7.shapeColor = "#0ff0fc";
    g8 = createSprite(380,290,10,250,ground_options);
    g8.shapeColor = "#0ff0fc";
  g9 = createSprite(800,290,10,250,ground_options);
  g9.shapeColor = "#0ff0fc";
    g10 = createSprite(480,375,10,250,ground_options);
    g10.shapeColor = "#0ff0fc";
  g11 = createSprite(690,375,10,250,ground_options);
  g11.shapeColor = "#0ff0fc";
    g12 = createSprite(585,290,10,250,ground_options);
    g12.shapeColor = "#0ff0fc";
  pop();

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);

  if(gameState = jogo){
    fill("#ff3131");
    textSize(30);
    text("Mortes: "+Mortes, 50, 45);
   
    fill("#39ff14");
    textSize(30);
    text("Vitorias: "+TeveSorte, 800, 45);
  
   if(player.isTouching(chave)){
      chave.destroy();
      dicaIN.destroy();
  
      dong11.destroy();
      dong12.destroy();
      dong13.destroy();
      dong14.destroy();
      dong15.destroy();
      dong16.destroy();
      dong17.destroy();
      dong18.destroy();
      dong19.destroy();
      dong20.destroy();
    }
  
    if(player.isTouching(dicas)){
      fill("#fff01f");
      textSize(30);
      text("Chegue no final do labirinto!", 225, 40);
    }
  
    if(player.isTouching(dicaIN)){
      fill("#fff01f");
      textSize(30);
      text("Pegue a chave!!", 425, 40);
    }
  
    if(player.isTouching(dica)){
      fill("#fff01f");
      textSize(30);
      text("Cuidado! o chão perece estar escorregadio!", 205, 40);
    }
  
    if(player.collide(pE1)){
      fill("#01c4e7");
      textSize(30);
      text("Qual dos doces abaixo é tipicamente brasileiro?", 305, 130);
  
      textSize(17);
      text("A  Macaron", 160, 200);
      text("B  Brigadeiro", 160, 350);
      text("C  Tiramissú", 160, 440);
      text("D  Brownie", 160, 573);
  
      fill("#15e6cc");
      textSize(20);
      text("Use o teclado para responder as questões", 210, 40);
  
      if(keyDown(66)){
        pE1.destroy();
      }
  
      if(keyDown(65)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(67)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(68)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(pE2)){
      fill("#c501e2");
      textSize(30);
      text("A que temperatura a água ferve?", 405, 130);
  
      textSize(17);
      text("A  200 ºC", 160, 230);
      text("B  -10 ºC", 160, 350);
      text("C  180 ºC", 160, 470);
      text("D  100 ºC", 160, 590);
  
      if(keyDown(68)){
        pE2.destroy();
        pE2.visible = false;
      }
  
      if(keyDown(65)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(67)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(66)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(pE3)){
      fill("#2ef8a0");
      textSize(30);
      text("Quantos ossos temos no nosso corpo?", 340, 130);
  
     textSize(17);
      text("A  206", 160, 230);
      text("B  126", 160, 350);
      text("C  186", 160, 470);
      text("D  200", 160, 590);
  
      if(keyDown(65)){
        pE3.destroy();
      }
  
      if(keyDown(66)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(67)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(68)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(porta)){
      fill("#f82d97");
      textSize(40);
      text("Quantos fusos horários existem na Rússia?", 130, 130);
      text("A  11", 160, 230);
      text("B  1", 160, 350);
      text("C  6", 160, 470);
      text("D  9", 160, 590);
  
      if(keyDown(65)){
        porta.destroy();
      }
  
      if(keyDown(66)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(67)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(68)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(porta2)){
      fill("#ff0534");
      textSize(40);
      text("Quantas tiras há na bandeira dos Estados Unidos?", 45, 130);
      text("A  12", 160, 230);
      text("B  9", 160, 350);
      text("C  15", 160, 470);
      text("D  13", 160, 590);
  
      if(keyDown(68)){
        porta2.destroy();
      }
  
      if(keyDown(65)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(67)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(66)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(porta3)){
      fill("#1eff05");
      textSize(30);
      text("Quantos dias são necessários para a Terra orbitar o sol?", 137, 130);
      text("A  378", 160, 230);
      text("B  363", 160, 350);
      text("C  365", 160, 470);
      text("D  346", 160, 590);
  
      if(keyDown(67)){
        porta3.destroy();
      }
  
      if(keyDown(65)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(66)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(68)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(porta4)){
      fill("#ffa300");
      textSize(30);
      text("Qual dos impérios a seguir não possui um idioma escrito?", 130, 130);
  
      textSize(20);
      text("A  Azteca", 160, 230);
      text("B  Egípcio", 160, 350);
      text("C   Inca", 162, 470);
      text("D  Romano", 160, 590);
  
      if(keyDown(67)){
        porta4.destroy();
      }
  
      if(keyDown(65)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(66)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(68)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(porta5)){
      fill("#01c4e7");
      textSize(40);
      text("Qual é o rio mais longo do mundo?", 190, 130);
  
      textSize(17);
      text("A   Amazonas", 153, 230);
      textSize(20);
      text("B  Nilo", 160, 350);
      text("C  Yangtzé", 160, 470);
      textSize(17);
      text("D   Mississippi", 153, 590);
  
      if(keyDown(66)){
        porta5.destroy();
      }
  
      if(keyDown(65)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(67)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(68)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(player.collide(pF)){
      fill("#55ffe2");
      textSize(40);
      text("Complete a frase: “Penso, logo ….”", 190, 130);
  
      textSize(23);
      text("A   Evoluo", 153, 230);
      text("B   Existo", 160, 350);
      textSize(18);
      text("C   Cresço", 160, 470);
      text("D   Aprendo", 153, 590);
  
      if(keyDown(66)){
        pF.destroy();
      }
  
      if(keyDown(65)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(67)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
      if(keyDown(68)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    }
  
    if(keyDown("UP_ARROW")||touches.length>0)
    {
      player.y = player.y-6;
      player.changeAnimation("andando", andando);
  
      if(player.isTouching(obst)){
        player.y = player.y-13;
      }
    }
  
    if(keyDown("DOWN_ARROW")||touches.length>0)
    {
      player.y = player.y+6;  
      player.changeAnimation("andando", andando);
  
      if(player.isTouching(obst)){
        player.y = player.y+13;
      }
    }
  
    if(keyDown("RIGHT_ARROW")||touches.length>0)
    {
      player.x = player.x+6;  
      player.changeAnimation("andando", andando);
      player.mirrorX(1);
  
      if(player.isTouching(obst)){
        player.x = player.x+13;  
      }
    } else {
      player.changeAnimation("parada", parada);
    }
  
    if(keyDown("LEFT_ARROW")||touches.length>0)
    {
      player.x = player.x-6;
      player.changeAnimation("andando", andando);
      player.mirrorX(-1);
  
      if(player.isTouching(obst)){
        player.x = player.x-13;  
      }
    } else {}
  
      if(  player.collide(gI)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(g1)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(g2)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(g3)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(g4)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(g5)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(g6)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(g7)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(g8)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(g9)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(g10)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(g11)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(g12)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
  
    if(player.collide(dong1)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }  
      if(player.collide(dong2)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong3)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong4)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong5)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong6)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong7)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong8)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong9)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong10)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
  
  
    if(player.collide(dong11)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong12)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong13)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong14)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong15)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong16)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong17)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong18)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong19)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong20)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }  
  
    
    if(player.collide(dong31)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong32)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong33)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong34)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong35)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong36)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong37)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong38)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong39)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong30)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }  
  
    
    if(player.collide(dong41)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong42)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong43)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong44)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong45)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong46)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong47)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong48)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }
    if(player.collide(dong49)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
      if(player.collide(dong40)){
        Mortes = Mortes +1;
        player.x = 75;
        player.y = 560;
      }  

    if(player.isTouching(saida)){
      background(winImg);
      TeveSorte = TeveSorte +1;
      gameState = win;
      fill("#fff01f");
      textSize(35);
      text("Parabéns!! Você e muito bom!", 285, 40);
    }
  }
 

  drawSprites();
}