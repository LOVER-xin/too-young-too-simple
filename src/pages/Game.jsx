import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, message } from 'antd';
import GameBoard from '../components/GameBoard';
import PoemInput from '../components/PoemInput';
import io from 'socket.io-client';

const Game = () => {
  const { roomId } = useParams();
  const [socket, setSocket] = useState(null);
  const [gameState, setGameState] = useState({
    players: [],
    currentTurn: null,
    keyword: '花',
    history: []
  });

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    
    newSocket.emit('joinRoom', roomId);
    
    newSocket.on('gameUpdate', (newState) => {
      setGameState(newState);
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [roomId]);

  const handleSubmit = (poem) => {
    if (socket) {
      socket.emit('submitPoem', { roomId, poem });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card title={`房间号：${roomId}`} className="mb-4">
        <GameBoard gameState={gameState} />
      </Card>
      <PoemInput onSubmit={handleSubmit} keyword={gameState.keyword} />
    </div>
  );
};

export default Game; 