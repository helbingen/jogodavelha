document.addEventListener('DOMContentLoaded', () => {
    let quadrados = document.querySelectorAll('.quadrado');
    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', click);
    })
})

function click(event) {
    let quadrado = event.target;
    let position = quadrado.id;
    if (movimento(position)) {
        setTimeout(() => {
            alert("O jogador " + parseInt(jogada + 1) + " venceu.");
        }, 10);
    }
    preencherQuadrado(position);
}

function preencherQuadrado(position) {
    let quadrado = document.getElementById(position.toString());
    let jogador = tabuleiro[position];
    quadrado.innerHTML = `<div class='${jogador}'></div>`
}

function reiniciar() {
    let quadrados = document.querySelectorAll('.quadrado');
    quadrados.forEach((quadrado) => {
        let position = quadrado.id;
        let jogador = tabuleiro[position];

        if (jogador != '') {
            quadrado.innerHTML = `<div class=''></div>`
        }
    })
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogada = 0;
    gameOver = false;
}
