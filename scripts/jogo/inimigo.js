class Inimigo extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    }

    move() {
        this.x = this.x - 10;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }
}