let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ativaJogo();
  desenharJogador();
  desenhaLinhadeChegada();
  checarquemganhou();
}

function ativaJogo() {
  if (focused == true) {
    background(34, 139, 34);
  } else {
background(220, 20, 60);
  }
}

function desenharJogador() {
  fill("black");
  textSize(20);
  text("😎", xJogador1, 70);
  text("🏎️", xJogador2, 250);
  text("🐕", xJogador3, 170);
  text("🐎", xJogador4, 350); // Corrigido: xJogador4
}

function desenhaLinhadeChegada() {
  fill("white");
  rect(350, 0, 20, 400);
  fill("black");
  rect(350, 0, 10, 400);
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    fill("white");
    rect(350, yAtual, 10, 10);
    fill("black");
    rect(360, yAtual, 10, 10);
  }
}

function checarquemganhou() {
  textSize(30);
  fill("white");

  if (xJogador1 > 350) {
    text("😎 venceu!", 60, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("🏎️ venceu!", 60, 200);
    noLoop();
  }
  if (xJogador3 > 350) {
    text("🐕 venceu!", 60, 200);
    noLoop();
  }
  if (xJogador4 > 350) {
    text("🐎 venceu!", 60, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key === "w") {
    xJogador1 += random(10, 20);
  } else if (key === "a") {
    xJogador2 += random(10, 20);
  } else if (key === "s") {
    xJogador3 += random(10, 20);
  } else if (key === "d") {
    xJogador4 += random(10, 20); 
  }
}
