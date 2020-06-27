class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

        this.yInicial = height - this.altura;
        this.y = this.yInicial;

        this.velocidadePulo = 0;
        this.gravidade = 3;
    }

    pula() {
        //if (this.velocidadePulo === 0) {
        this.velocidadePulo = -33;
        //}
    }

    aplicaGravidade() {
        //if (this.velocidadePulo !== 0) {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;
        //}

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.velocidadePulo = 0;
        }
    }

    estaColidindo(inimigo) {

        const precisao = .7;

        noFill();
        rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
        rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

        return collideRectRect(
            this.x, this.y,
            this.largura * precisao, this.altura * precisao,
            inimigo.x, inimigo.y,
            inimigo.largura * precisao, inimigo.altura * precisao
        );
    }
}
