import React, { Component } from 'react';
import './App.css';

import Cell from './components/cell';

const initState = {
  player: true,
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
}

class App extends Component {

  state={ ...initState}

  createBoard = (board) => {
    let table = [];

    // console.log("board.length", Object.keys(board).length);

    for(let i=0; i < Object.keys(board).length ; i++){
      let row = [];
      for(let j=0; j< Object.keys(board[i]).length; j++){
        row.push(<Cell key={j} value={board[i][j]} handleClick={this.handleClick} i={i} j={j} player={this.state.player}/>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }

    return table;
  }

  handleClick = (row, column, player) => {
    let newBoard = {...this.state.board} ;
    if(newBoard[row][column] === ''){
      newBoard[row][column] = player ? 'X' : 'O' ;
      player = !player ;

      this.setState({player: player, board: newBoard}, ()=>{
        // console.log(this.state.board);
        
      });
    }
    
 
  }

  checkWinner = ()=>{
    if(true){
      alert("Winner is ");
    }
  }

  render() {
    const board = this.state.board ;

    // console.log("render", board);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic-Tac-Toe Game</h1>
        </header>
        <table>
          <tbody>
            {
              this.createBoard(board)
            }
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default App;
