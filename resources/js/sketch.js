let lines = 18;
let lineFrequency = 0.01;
let amplitude = 36; // needs to be rem
let movementSpeed = 0.01;
let wavelength = 0.5;
let waveDirection = -1;
let widthOfCanvas = 300; // needs to be rem
let heightOfCanvas = 100; // needs to be rem

// 

// trigger when screen gets resized then calculate the rem to set up width and height

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
