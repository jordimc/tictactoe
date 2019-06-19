//import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { Client } from 'boardgame.io/react';
import { AI } from 'boardgame.io/ai';

import TicTacToe from './Game'
import TicTacToeBoard from './Board'

const App = Client({
    game: TicTacToe,
    board: TicTacToeBoard,

    ai: AI({
        enumerate: (G, ctx) => {
            let moves = [];
            for(let i=0; i<9; i++) {
                if(G.cells[i] === null) {
                    moves.push({
                        move: 'clickCell', args: [i]
                    });
                }
            }
            return moves;
        }
    })
});

export default App;
