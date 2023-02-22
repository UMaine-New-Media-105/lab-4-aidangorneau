
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  colorMode(RGB, 255, 255, 255)
}

function draw() {
  background(220);
  myLine(255, 0, 0)
  myEllipse(100, 100, 0, 255, 255)
  myTriangle(200, 255, 0)
  sprite(200, 200, 60, 30, 0, 0, 255)
}

function myTriangle(R, G, B){
  fill(R, G, B)
  triangle(20, 20, 60, 60, 100, 20)
}

function myEllipse(X, Y, R, G, B){
  fill(R, G, B)
  ellipse(X, Y, 50, 50)
}

function myLine(R, G, B){
  fill(R, G, B)
  line(150, 50, 200, 100)
}

function sprite(X, Y, myHeight, myWidth, R, G, B){
  if (mouseIsPressed){
      myEllipse(X, Y, 255, 0, 200)
}   else {
      push()
      noStroke()
      translate(X, Y)
      fill(R, G, B)
      triangle(-myWidth, 0, myWidth, 0, 0, myHeight)
      rotate(72)
      triangle(-myWidth, 0, myWidth, 0, 0, myHeight)
      rotate(72)
      triangle(-myWidth, 0, myWidth, 0, 0, myHeight)
      rotate(72)
      triangle(-myWidth, 0, myWidth, 0, 0, myHeight)
      rotate(72)
      triangle(-myWidth, 0, myWidth, 0, 0, myHeight)
      pop()
    }
}
