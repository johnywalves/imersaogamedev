class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 1.5, 0, 200, 200, 400, 400, 10, 100);

        inimigos.push(inimigo);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoGrande);

        cenario = new Cenario(imagemCenario, 3);
    }

    keyPressed(key) {
        if (key === "ArrowUp") {
            personagem.pula(somDoPulo);
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        personagem.exibe();
        personagem.aplicaGravidade();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        const inimigo = inimigos[inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            inimigoAtual = (inimigoAtual + 1) % inimigos.length;
            inimigo.velocidade = parseInt(random(5, 30));
        }

        if (personagem.estaColidindo(inimigo)) {
            //image(imagemGameover, width / 2 - 200, height / 3);
            //noLoop();
        }
    }
}
