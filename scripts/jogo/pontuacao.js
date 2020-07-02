class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        fill("#fff")
        textAlign(RIGHT)
        textSize(50);
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto() {
        this.pontos = this.pontos + .2;
    }
}