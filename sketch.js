let imagemCenario;
let personagem;
let cenario;
let somDoJogo;
let isPlaying;

function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    personagem = new Personagem(imagemPersonagem);
    cenario = new Cenario(imagemCenario, 3);
}

function draw() {
    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.anima();
}

function mousePressed() {
    if (!isPlaying) {
        somDoJogo.loop();
        isPlaying = true;
    }
}
