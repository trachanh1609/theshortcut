import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
// import Cell from './components/cell';
import Row from './components/Row';

const initState = {
  player: true,
  board: [ '', '', '', '', '', '',  '', '', ''],
  winner: null,
}

const winningArray = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

class App extends Component {

  state={ ...initState}


  handleClick = (position) => {
    const {player, winner, board } = this.state ;

    let newBoard = [...board];
    if(newBoard[position] === '' && winner === null){
      newBoard[position] = player ? 'X' : 'O' ;

      this.setState({player: !player, board: newBoard}, ()=>{
        let currentWinner = this.checkWinner();
        this.setState({winner: currentWinner });
      }) ;
    }
  }

  checkWinner = ()=>{
    let winner = null;
    const board = this.state.board;
    for(let i=0 ; i< winningArray.length ; i++) {
      const [a, b , c] = winningArray[i];
      if(board[a]===board[b] && board[a] ===board[c] && board[a]!=='') {
        winner = board[a];
      }
    }
    
    return winner;
  }

  resetGame = ()=> {
    this.setState({...initState, player: this.state.player});
  }

  render() {
    const {board, winner } = this.state ;
    const noOfRows = 3;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic-Tac-Toe Game</h1>
        </header>
        { winner===null && <h4>Next player is {this.state.player ? 'X' : 'O'}</h4>  }
        { winner!==null && <h4>Game is over</h4>}
        <table className="game-board">
          <tbody>
            {
              _.chunk(board, noOfRows)
              .map( (row, rowIndex) => 
                <Row row={row} rowIndex={rowIndex} handleClick={this.handleClick} /> 
              )
            }
          </tbody>
        </table>

        <div>Winner is {winner}</div>
        <button onClick={this.resetGame}>New Game</button>
      </div>
    );
  }
}

export default App;
