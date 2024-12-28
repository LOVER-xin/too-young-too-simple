import React from 'react';
import { List, Avatar } from 'antd';

const GameBoard = ({ gameState }) => {
  const { players, history, currentTurn } = gameState;

  return (
    <div className="flex gap-4">
      <div className="w-1/3">
        <h3 className="mb-4">玩家列表</h3>
        <List
          dataSource={players}
          renderItem={(player) => (
            <List.Item className={currentTurn === player.id ? 'bg-blue-50' : ''}>
              <List.Item.Meta
                avatar={<Avatar>{player.name[0]}</Avatar>}
                title={player.name}
                description={`得分：${player.score || 0}`}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="w-2/3">
        <h3 className="mb-4">对战记录</h3>
        <List
          dataSource={history}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.playerName}
                description={item.poem}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default GameBoard; 