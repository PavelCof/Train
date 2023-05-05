const canvas= document.getElementById("canvas");
const ctx= canvas.getContext("2d");

const ground = new Image();
ground.src="img/rails.png";

const trainImg= new Image();
trainImg.src="img/train.png";

let box =1;

let score = 0;


let train =[];
train[0]={
  x:-700*box,
  y:1*box
}


document.addEventListener("keydown",direction);
let dir;
function direction(e) {
  if(e.keyCode==37 ){ dir='left';}
  // else if(e.keyCode==38 && dir!='down'){ dir='up';}
  else if(e.keyCode==39){ dir='right';}
  // else if(e.keyCode==40 && dir!='up'){ dir='down';}
}
function eatTail(newHead,train) {
  let v = train.pop();
  train.unshift(newHead);
}
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(ground,0,1,1200,65);

  for (let i = 0; i < train.length; i++) {
    ctx.drawImage(trainImg,train[i].x,train[i].y,1000,65);
  }
  ctx.fillStyle="white";
  ctx.font="50px Arial";
  ctx.fillText(score,box*1.3,box*0.9 );

  let trainX = train[0].x;
  let trainY = train[0].y;
  if(dir =='left') trainX -=box;
  if(dir =='right') trainX +=box;
  if(trainX<-1000 ||trainX>box*1200 ||trainY<box||trainY>box*1000){
    clearInterval(game);
    game = setInterval(drawGame, 10);
}else{
  let newHead={
    x:trainX,
    y:trainY
  };
  eatTail(newHead,train);
}

  // if(dir =='up') trainY -=box;
  // if(dir =='down') trainY +=box;
console.log('game');

}
 document.addEventListener("keydown",direction1);
//let game = setInterval(drawGame, 10);
let game='';
let i=10;
function direction1(e) {
 if(e.keyCode==38 ){clearInterval(game);game= setInterval(drawGame, i); if(i>1){i-=3;}}
 if(e.keyCode==40 ){ i+=3;if(i>15){clearInterval(game); } }

}window.onload=function() {
  ctx.drawImage(ground,0,1,1200,65);
  ctx.drawImage(trainImg,train[0].x,train[0].y,1000,65);}
  //setTimeout(clearInterval(game),90000);}
//
