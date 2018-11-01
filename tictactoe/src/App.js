import React, { Component } from 'react';
import './App.css';

import Cell from './components/cell';

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

  // createBoard = (board) => {
  //   let table = [];

  //   console.log("board.length", Object.keys(board).length);

  //   for(let i=0; i < Object.keys(board).length ; i++){
  //     let row = [];
  //     for(let j=0; j< Object.keys(board[i]).length; j++){
  //       row.push(<Cell key={j} value={board[i][j]} handleClick={this.handleClick} i={i} j={j} player={this.state.player}/>);
  //     }
  //     table.push(<tr key={i}>{row}</tr>);
  //   }

  //   return table;
  // }

  // handleClick = (row, column, player) => {
  //   let newBoard = {...this.state.board} ;
  //   if(newBoard[row][column] === ''){
  //     newBoard[row][column] = player ? 'X' : 'O' ;
  //     player = !player ;

  //     this.setState({player: player, board: newBoard}, ()=>{
  //       // console.log(this.state.board);
        
  //     });
  //   }
  // }

  handleClickV2 = (position) => {
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
    this.setState({...initState});
  }

  render() {
    const board = this.state.board ;
    const winner = this.state.winner ;


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic-Tac-Toe Game</h1>
        </header>
        { winner===null && <h4>Next player is {this.state.player ? 'X' : 'O'}</h4>  }
        { winner!==null && <h4>Game is over</h4>}
        <table className="game-board">
          <tbody>
            <tr>
              <Cell position='0' value={board[0]} handleClick={this.handleClickV2} player={this.state.player}/>
              <Cell position='1' value={board[1]} handleClick={this.handleClickV2} player={this.state.player}/>
              <Cell position='2' value={board[2]} handleClick={this.handleClickV2} player={this.state.player}/>
            </tr>
            <tr>
              <Cell position='3' value={board[3]} handleClick={this.handleClickV2} player={this.state.player}/>
              <Cell position='4' value={board[4]} handleClick={this.handleClickV2} player={this.state.player}/>
              <Cell position='5' value={board[5]} handleClick={this.handleClickV2} player={this.state.player}/>
            </tr>
            <tr>
              <Cell position='6' value={board[6]} handleClick={this.handleClickV2} player={this.state.player}/>
              <Cell position='7' value={board[7]} handleClick={this.handleClickV2} player={this.state.player}/>
              <Cell position='8' value={board[8]} handleClick={this.handleClickV2} player={this.state.player}/>
            </tr>
          </tbody>
        </table>

        <div>Winner is {winner}</div>
        <button onClick={this.resetGame}>New Game</button>
      </div>
    );
  }
}

export default App;
