function setup() {
    createCanvas(windowWidth, windowHeight);
    const jogo = new Jogo();
    jogo.setup();

    const telaInicial = new TelaInicial();
    telaInicial.setup();

    cenas = { jogo, telaInicial };

    botaoGerenciador = new BotaoGerenciador("Iniciar", width / 2, height / 2);
}

function draw() {
    cenas[cenaAtual].draw();
}

function keyPressed() {
    cenas[cenaAtual].keyPressed(key);
}

function mousePressed() {
    if (!isPlaying) {
        //somDoJogo.loop();
        isPlaying = true;
    }
}
