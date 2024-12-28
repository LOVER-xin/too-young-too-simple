import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(7);
    navigate(`/game/${roomId}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="text-center">
        <h2 className="text-2xl mb-8">欢迎来到飞花令</h2>
        <div className="space-y-4">
          <Button 
            type="primary" 
            size="large" 
            onClick={createRoom}
            className="w-48"
          >
            创建房间
          </Button>
          <br />
          <Button 
            size="large" 
            className="w-48"
          >
            加入房间
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home; 