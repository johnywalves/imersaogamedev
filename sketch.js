let imagemCenario;
let personagem;
let cenario;
let somDoJogo;

function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    personagem = new Personagem(imagemPersonagem);
    cenario = new Cenario(imagemCenario, 3);
    //somDoJogo.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.anima();
}
