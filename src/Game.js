import { Game } from 'boardgame.io/core';

function isVictory(cells) {
    const positions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pos of positions) {
        const symbol = cells[pos[0]];
        let winner = symbol;
        for (let i of pos) {
            if (cells[i] !== symbol) {
                winner = null;
                break;
            }
        }
        if (winner !== null) return true;
    }
}

function isDraw(cells) {
    return cells.filter(c => c === null).length === 0;
}

const TicTacToe = Game({
    name: "tic-tac-toe",

    setup: () => ({
        cells: Array(9).fill(null)
    }),

    moves: {
        clickCell(G, ctx, id) {
            G.cells[id] = ctx.currentPlayer;
        }
    },

    flow: {
        movesPerTurn: 1,
        endGameIf: (G, ctx) => {
            if (isVictory(G.cells)) {
                return { winner: ctx.currentPlayer }
            }

            if (isDraw(G.cells)) {
                return { draw: true }
            }
        }
    }
});

export default TicTacToe;