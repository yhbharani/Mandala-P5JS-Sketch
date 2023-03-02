let t=0;
let petals=3;
let x1,x2,x3,x4,y1,y2,y3,y4;
let outsize = 800;

function setup() {
  
  let ang=TWO_PI/petals;
  createCanvas(800,800);
  background(0);
  blendMode(ADD);
  colorMode(HSB, 100);

}


function draw() {
  t++;
  let radBase = map(mouseX, 0, width, 0, outsize/2);
  if(t>=100){
    t=0;
  }
  petals=int(map(mouseY,0,outsize,5,30));
  ang=TWO_PI/petals;
  fill(100,50,80,20);
  noFill();
  translate (width/2,height/2);
  rotate(0);
  x1=radBase + noise(frameCount*0.01)*outsize/5;
  x2=radBase + noise(frameCount*0.009)*outsize/5;
  x3=radBase + noise(frameCount*0.008)*outsize/5;
  x4=radBase + noise(frameCount*0.007)*outsize/5;
  y1=0;
  y2=outsize/5*noise(frameCount*0.006)*tan(ang);
  y3=outsize/5*noise(frameCount*0.005)*tan(ang);
  y4=0;
  
  //fill(255,255,255,10);
  noFill();
  stroke(t*0.5,255,255, 100);
  strokeWeight(outsize/1000);
  
  for(let i=0; i<petals; i++){

    //shape
    beginShape();
    curveVertex(x1,y1);
    curveVertex(x1,y1);
    curveVertex(x2,y2);
    curveVertex(x3,y3);
    curveVertex(x4,y4);
    curveVertex(x4,y4);
    endShape();

    //shape_mirror
    beginShape();
     curveVertex(x1,-y1);
     curveVertex(x1,-y1);
     curveVertex(x2,-y2);
     curveVertex(x3,-y3);
     curveVertex(x4,-y4);
     curveVertex(x4,-y4);
    endShape();
    rotate(ang);
  }
  
  
  createbg();
  
  if (mouseIsPressed === true){
   background(0,255,255);
  }

}

function createbg(){
  
  blendMode(MULTIPLY);
  fill(0,1);
  noStroke();
  rectMode(CENTER);
  rect(0,0,width,height,10);
  //background(0,50);
  blendMode(ADD);

}
