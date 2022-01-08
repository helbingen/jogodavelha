//INICIALIZAÇÃO DO JOGO

let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogada = 0;
let jogador = ['O', 'X'];
let gameOver = false;
let vitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// function reiniciar() {
//     tabuleiro = ['', '', '', '', '', '', '', '', ''];
//     jogada = 0;
//     gameOver = false;
// }

function movimento(position) {

    if (gameOver) {
        return;
    }
    if (tabuleiro[position] == '') {
        tabuleiro[position] = jogador[jogada];

        gameOver = ganhou();
        if (gameOver == false) {
            jogada = (jogada == 0) ? 1 : 0; // faz a mesma coisa que a linha de comando abaixo
            // if (jogada == 0) {
            //     jogada = 1;
            // } else {
            //     jogada = 0;
            // }
        }
    }
    return gameOver;
}

function ganhou() {


    for (let i = 0; i < vitoria.length; i++) {
        let seq = vitoria[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != '') {
            return true;
        }
    }
    return false;
}