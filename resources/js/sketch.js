let lines = 18;
let lineFrequency = 0.01;
let amplitude = 36;
let movementSpeed = 0.01;
let wavelength = 0.5;
let waveDirection = -1;
let widthOfCanvas = 300;
let heightOfCanvas = 100;

function setup() {
  var myCanvas = createCanvas(widthOfCanvas, heightOfCanvas);
  myCanvas.parent("sketch");
}

function draw() {
  let colOfWave = color(55, 68, 126);
  let colOfBackground = color(255, 255, 255);
  background(colOfBackground);
  for (let i = 0; i < lines; i++) {
    const x = (width / lines) * i;
    const sineWave =
      sin(
        frameCount * movementSpeed +
          (x * lineFrequency * waveDirection) / wavelength
      ) * amplitude;
    fill(colOfWave);
    stroke(colOfBackground);
    strokeWeight(4);
    rect(x, height / 2, width / lines, -sineWave);
    rect(x, height / 2, width / lines, sineWave);
    noStroke();
    rect(x + 2, height / 2 - 2, width / lines - 4, 4);
  }
}
