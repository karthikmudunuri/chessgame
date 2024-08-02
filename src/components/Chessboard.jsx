import React, { useState } from 'react';
import '../styles/Chessboard.css';
import { Github , MoveRight} from 'lucide-react';

const Chessboard = () => {
    const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));
    const [board, setBoard] = useState(initialBoard);
    const [history, setHistory] = useState([initialBoard]);
    const [redoHistory, setRedoHistory] = useState([]);

    const handleClick = (row, col) => {
        const clearedBoard = initialBoard.map(row => row.map(() => null));
        const newBoard = clearedBoard.map((r, rowIndex) =>
            r.map((cell, colIndex) => {
                if (
                    Math.abs(row - rowIndex) === Math.abs(col - colIndex) || 
                    (row === rowIndex && col === colIndex) 
                ) {
                    return 'red';
                }
                return cell;
            })
        );
        setHistory([...history, board]);
        setBoard(newBoard);
        setRedoHistory([]);
    };

    const handleUndo = () => {
        if (history.length > 1) {
            const previousBoard = history[history.length - 1];
            setRedoHistory([board, ...redoHistory]);
            setBoard(previousBoard);
            setHistory(history.slice(0, -1));
        }
    };

    const handleRedo = () => {
        if (redoHistory.length > 0) {
            const nextBoard = redoHistory[0];
            setHistory([...history, board]);
            setBoard(nextBoard);
            setRedoHistory(redoHistory.slice(1));
        }
    };

    const handleVisitRepo = () => {
        window.open('https://github.com/karthikmudunuri/chessgame', '_blank');
    };

    return (
        <div>
            <div className="chessboard">
                {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${((rowIndex + colIndex) % 2 === 0) ? 'white' : 'black'}`}
                            style={{ backgroundColor: cell || '' }}
                            onClick={() => handleClick(rowIndex, colIndex)}
                        ></div>
                    ))
                )}
            </div>
            <div className="controls">
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleRedo}>Redo</button>
                <button onClick={handleVisitRepo} className="github-button">
                 <Github /> Visit Repo  <MoveRight />
                </button>
            </div>
        </div>
    );
};

export default Chessboard;
