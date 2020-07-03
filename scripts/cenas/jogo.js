class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup() {
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        vida = new Vida(fita.connfiguracoes.vidaMaxima, fita.connfiguracoes.vidaInicial);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 1.5, 0, 200, 200, 400, 400, 10);

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

        vida.draw();

        personagem.exibe();
        personagem.aplicaGravidade();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
            inimigo.velocidade = linhaAtual.velocidade;
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();

            if (vida.vidas < 0) {
                image(imagemGameover, width / 2 - 200, height / 3);
                noLoop();
            }
        }
    }
}
