import React from 'react';
import './App.css';
import Chessboard from './components/Chessboard';

function App() {
    return (
      <div className="app-container">
      <header className="app-header">
          <h1>Chessboard</h1>
      </header>
      <main className="chessboard-container">
        <Chessboard />
      </main>
      <footer className="app-footer">
        <p> By <a href="https://github.com/karthikmudunuri" target="_blank" rel="noopener noreferrer">Karthikeya Varma</a> Woxsen university</p>
      </footer>
  </div>
    );
}

export default App;
