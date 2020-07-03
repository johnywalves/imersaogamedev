class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.yInicial = height - this.altura - variacaoY;
        this.y = this.yInicial;

        this.velocidadePulo = 0;
        this.gravidade = 3;
        this.alturaDoPulo = -30;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula(somDoPulo) {
        if (this.pulos < 3) {
            this.velocidadePulo = this.alturaDoPulo;
            this.pulos++;
            somDoPulo.play();
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.velocidadePulo = 0;
            this.pulos = 0;
        }
    }

    tornarInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000);
    }

    estaColidindo(inimigo) {
        if (this.invencivel) {
            return false;
        }

        const precisao = .7;

        /*noFill();
        stroke("#0f0");
        rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
        stroke("#f00");
        rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);*/

        return collideRectRect(
            this.x, this.y,
            this.largura * precisao, this.altura * precisao,
            inimigo.x, inimigo.y,
            inimigo.largura * precisao, inimigo.altura * precisao
        );
    }
}
