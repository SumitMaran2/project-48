var gameState = "play";
var corona,coronaGrp1,coronaGrp2,coronaGrp3,coronaGrp4,coronaImg;
var boy,boyImgU,boyImgD,boyImgR,boyImgL;
var obstacles,obstacleImg;
var food,foodImg;
var power,power2,power3,power4,power5,power6,power7,power8,power9,power10;
var powerImg;
var counter =0;
var foodC,Viruskills;
var road,road1,road2,road3,road4,road5,road6;
var groundImg;
var over,overImg;
var won,wonImg;
var house2,house3,house4,house5,house6,house8;
var houseImg,houseImg2,houseImg3,houseImg4,houseImg5,houseImg6,houseImg7,houseImg8,houseImg9,houseImg10;
var line,line1,line2,line3,line4;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;

function preload(){
  coronaImg=loadImage("images/v1.png");
  groundImg=loadImage("images/grass2.jpg");
  boyImgU=loadImage("images/personU.png");
  boyImgD=loadImage("images/personD.png");
  boyImgR=loadImage("images/personR.png");
  boyImgL=loadImage("images/personL.png");
  houseImg2=loadImage("images/h2.png");
  houseImg3=loadImage("images/h3.png");
  houseImg4=loadImage("images/h4.png");
  houseImg5=loadImage("images/h5.png");
  houseImg6=loadImage("images/h6.png");
  houseImg8=loadImage("images/h1.png");
  overImg=loadImage("images/over.png");
  powerImg=loadImage("images/s1.png");
  foodImg=loadImage("images/food.png");
  wonImg=loadImage("images/won.png");

  
 
 
}

function setup() {
  createCanvas(1350,655);
 boy=createSprite(200,400,40,50);
 road=createSprite(500,200,1700,50);
 road1=createSprite(500,600,1700,50);
 road2=createSprite(800,400,50,800);
 road3=createSprite(100,400,50,800);
 road4=createSprite(460,400,50,800);
 road5=createSprite(1100,400,50,800);
 road6=createSprite(500,398,1700,50);

 power=createSprite(460,20);
 power.addImage(powerImg);
 power.scale=0.2;

 power2=createSprite(50,400);
 power2.addImage(powerImg);
 power2.scale=0.2;

 power3=createSprite(1100,20);
 power3.addImage(powerImg);
 power3.scale=0.2;

 power4=createSprite(1300,400);
 power4.addImage(powerImg);
 power4.scale=0.2;

 power5=createSprite(1100,550);
 power5.addImage(powerImg);
 power5.scale=0.2;

 power6=createSprite(60,200);
 power6.addImage(powerImg);
 power6.scale=0.2;

 power7=createSprite(800,150);
 power7.addImage(powerImg);
 power7.scale=0.2;

 power8=createSprite(800,550);
 power8.addImage(powerImg);
 power8.scale=0.2;

 power9=createSprite(230,600);
 power9.addImage(powerImg);
 power9.scale=0.2;

 power10=createSprite(1200,200);
 power10.addImage(powerImg);
 power10.scale=0.2;

 coronaGrp1=new Group();
 coronaGrp2=new Group();
 coronaGrp3=new Group();
 coronaGrp4=new Group();

 line1=createSprite(675,1,1350,10);
 line2=createSprite(1,322,10,660);
 line3=createSprite(1350,322,10,660);
 line4=createSprite(675,630,1350,10);
 box1=createSprite(35,90,70,160);
 box2=createSprite(35,300,70,145);
 box3=createSprite(35,500,70,145);
 box4=createSprite(280,90,300,160);
 box5=createSprite(280,298,300,140);
 box6=createSprite(280,498,300,140);
 box7=createSprite(630,90,280,160);
 box8=createSprite(630,298,280,137);
 box9=createSprite(630,498,280,137);
 box9.shapeColor="green";
 box10=createSprite(950,90,240,160);
 box11=createSprite(950,300,240,138);
 box12=createSprite(950,498,240,138);
 box13=createSprite(1250,90,240,155);
 box14=createSprite(1250,300,240,135);
 box15=createSprite(1250,498,240,138);

 house2=createSprite(620,300,20,30);
 house2.addImage(houseImg2);
 house2.scale=0.2;
 house3=createSprite(950,100,20,30);
 house3.addImage(houseImg3);
 house3.scale=0.3;
 house4=createSprite(260,500,20,30);
 house4.addImage(houseImg4);
 house4.scale=0.3;
 house5=createSprite(950,500,20,30);
 house5.addImage(houseImg5);
 house5.scale=0.3;
 house6=createSprite(290,100,20,30);
 house6.addImage(houseImg6);
 house6.scale=0.3;

 house8=createSprite(1240,296,20,30);
 house8.addImage(houseImg8);
 house8.scale=0.2;

 over=createSprite(640,327);
 over.addImage(overImg);
 over.scale=0.8;

 won=createSprite(640,310);
 won.addImage(wonImg);
 won.scale=0.8;
 

 boy=createSprite(458,395,20,30);
 boy.addImage(boyImgU);
 boy.scale=0.06;
 
 
 Viruskills=0;

}

function draw() {
  background(groundImg);  
if(gameState === "play"){ 
  line1.visible=false;
  line2.visible=false;
  line3.visible=false;
  line4.visible=false;
  box1.visible=false;
  box2.visible=false;
  box3.visible=false;
  box4.visible=false;
  box5.visible=false;
  box6.visible=false;
  box7.visible=false;
  box8.visible=false;
  box9.visible=false;
  box10.visible=false;
  box11.visible=false;
  box12.visible=false;
  box13.visible=false;
  box14.visible=false;
  box15.visible=false;
  over.visible=false;
  won.visible=false;
  boy.collide(line1);
  boy.collide(line2);
  boy.collide(line3);
  boy.collide(line4);

  boy.collide(box1);
  boy.collide(box2);
  boy.collide(box3);
  boy.collide(house2);
  boy.collide(box5);
  boy.collide(house3);
  boy.collide(box7);
  boy.collide(house4);
  boy.collide(box9);
  boy.collide(house5);
  boy.collide(box11);
  boy.collide(house6);
  boy.collide(box13);
  boy.collide(house8);
  boy.collide(box15);


   
    //console.log(counter);

   
 
  

  if(keyDown("up")){
    boy.y = boy.y -4;
    boy.addImage(boyImgU);
  }

  if(keyDown("down")){
    boy.y = boy.y +4;
    boy.addImage(boyImgD);

  }

  if(keyDown("right")){
    boy.x = boy.x +4;
    boy.addImage(boyImgR);
  }

  if(keyDown("left")){
    boy.x = boy.x -4;
    boy.addImage(boyImgL);
  }
  
  if(boy.isTouching(power)){
    counter=10
    power.x=0;
    power.visible=false;
  
    }

  if(boy.isTouching(power2)){
    counter=10
    power2.x=0;
    power2.visible=false;
      
    }
   if(boy.isTouching(power3)){
    counter=10
    power3.x=0;
    power3.visible=false;
        
    }
   if(boy.isTouching(power4)){
    counter=10
    power4.x=0;
    power4.visible=false;
          
    }
  if(boy.isTouching(power5)){
    counter=10
    power5.visible=false;
    power5.x=0;
            
    }
  if(boy.isTouching(power6)){
    counter=10
    power6.visible=false;
    power6.x=0;
              
    }
  if(boy.isTouching(power7)){
    counter=10
    power7.visible=false;
    power7.x=0;
                
    }
  if(boy.isTouching(power8)){
    counter=10
    power8.visible=false;
    power8.x=0;
                  
    }
  if(boy.isTouching(power9)){
    counter=10
    power9.visible=false;
    power9.x=0;
                      
    }
  if(boy.isTouching(power10)){
    counter=10
    power10.visible=false;
    power10.x=0;
                        
    }
                                                                                          

   

   if(counter >0  &&  boy.isTouching(coronaGrp1)){
    coronaGrp1.destroyEach();
    Viruskills++;
  }
  
  if(counter >0  &&  boy.isTouching(coronaGrp2)){
    coronaGrp2.destroyEach();
    Viruskills++;
  }
  if(counter >0  &&  boy.isTouching(coronaGrp3)){
    coronaGrp3.destroyEach();
    Viruskills++;
  }
  if(counter >0  &&  boy.isTouching(coronaGrp4)){
    coronaGrp4.destroyEach();
    Viruskills++;
  }
  
   if(Viruskills >14){
     won.visible=true;
     coronaGrp1.setVelocityXEach(0);
    coronaGrp2.setVelocityXEach(0);
    coronaGrp3.setVelocityYEach(0);
    coronaGrp4.setVelocityYEach(0);
    counter = 0;
   }


 if(boy.isTouching(coronaGrp1) || boy.isTouching(coronaGrp2) || boy.isTouching(coronaGrp3) ||
 boy.isTouching(coronaGrp4)){
   gameState="end";
    coronaGrp1.setVelocityXEach(0);
    coronaGrp2.setVelocityXEach(0);
    coronaGrp3.setVelocityYEach(0);
    coronaGrp4.setVelocityYEach(0);
    coronaGrp1.setLifetimeEach(-1);
    coronaGrp2.setLifetimeEach(-1);
    coronaGrp3.setLifetimeEach(-1);
    coronaGrp4.setLifetimeEach(-1);
    coronaGrp1.destroyEach();
    coronaGrp2.destroyEach();
    coronaGrp3.destroyEach();
    coronaGrp4.destroyEach();
    
 }
 
 
  }

  

  spawncorona4();
  spawncorona3();
  spawncorona2();
  spawncorona();
  drawSprites();

  

  stroke("white");
  textSize(30);
  fill("white");
  text("timeLeft:"+ counter,555,130);
  
    stroke("black");
  textSize(30);
  fill("black");
  text("viruskilled:"+ Viruskills,550,90);


  

   fill("black");
  stroke("black");
   textSize(25);
   text("Killed 15 virus",550,500);

   fill("white");
  stroke("white");
   textSize(25);
   text("To Won the game",530,530);

   fill("black");
  stroke("black");
   textSize(25);
   text("Use powerPalets",200,298);
   
   fill("white");
  stroke("white");
   textSize(25);
   text("to killed the virus",200,330);

   fill("black");
  stroke("black");
   textSize(25);
   text("You have only 10 ",850,290);

   fill("white");
  stroke("white");
   textSize(23);
   text("seconds to kill the virus",830,320);

  if(gameState==="end"){
    over.visible=true;
    boy.visible=false;
    coronaGrp1.setVelocityXEach(0);
    coronaGrp2.setVelocityXEach(0);
    coronaGrp3.setVelocityYEach(0);
    coronaGrp4.setVelocityYEach(0);
    counter = 0;
  }
}

  function spawncorona(){
    if(frameCount%180 === 0){
      corona=createSprite(200,300,50,20);
      corona.x= 2;
      corona.y= 200;
      corona.velocityX=(Math.round(random(2,10)));
      corona.addImage(coronaImg);
      corona.scale=0.1;
      coronaGrp1.add(corona);

    }
  }

  function spawncorona2(){
    if(frameCount%200 === 0){
      corona2=createSprite(200,300,50,20);
      corona2.x= 2;
      corona2.y= 600;
      corona2.velocityX=(Math.round(random(2,10)));
      corona2.addImage(coronaImg);
      corona2.scale=0.1;
      coronaGrp2.add(corona2);
    }
  }

  function spawncorona3(){
    if(frameCount%220 === 0){
      corona3=createSprite(200,300,50,20);
      corona3.x= 800;
      corona3.y= 2;
      corona3.velocityY=(Math.round(random(2,10)));
      corona3.addImage(coronaImg);
      corona3.scale=0.1;
      coronaGrp3.add(corona3);
    }
  }

  function spawncorona4(){
    if(frameCount%240 === 0){
      corona4=createSprite(200,300,50,20);
      corona4.x= 100;
      corona4.y= 750;
      corona4.velocityY=(Math.round(random(-2,-10)));
      corona4.addImage(coronaImg);
      corona4.scale=0.1;
      coronaGrp4.add(corona4);
    }
  }

  function timeout(){
    counter--
   if(counter <0){
     counter =0;
   }

}
   
  setInterval(timeout,1000);

