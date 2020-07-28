function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    imagemGameover = loadImage('assets/imagens/assets/game-over.png');
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
    imagemTelaInicial = loadImage('assets/imagens/assets/telaInicial.png');
    imagemCoracao = loadImage('assets/imagens/assets/coracao.png');

    fita = loadJSON('fita/fita.json');

    fonteTelaInicial = loadFont('assets/imagens/assets/fonteTelaInicial.otf');

    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
    somDoPulo = loadSound('assets/sons/somPulo.mp3');
}