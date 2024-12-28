import React from 'react';
import { Card, Tag, Space } from 'antd';

// Room 组件用于显示房间信息和状态
const Room = ({ roomInfo }) => {
  const { 
    roomId,          // 房间ID
    playerCount,     // 当前玩家数量
    maxPlayers,      // 最大玩家数量
    status,          // 房间状态：waiting（等待中）, playing（游戏中）
    currentKeyword   // 当前关键字
  } = roomInfo;

  return (
    <Card 
      title="房间信息" 
      className="mb-4"
    >
      <Space direction="vertical" className="w-full">
        {/* 房间基本信息 */}
        <div className="flex justify-between items-center">
          <span>房间号：{roomId}</span>
          <Tag color={status === 'waiting' ? 'blue' : 'green'}>
            {status === 'waiting' ? '等待中' : '游戏中'}
          </Tag>
        </div>
        
        {/* 玩家信息 */}
        <div>
          玩家数量：{playerCount}/{maxPlayers}
        </div>
        
        {/* 当前关键字 */}
        {status === 'playing' && (
          <div>
            当前关键字：
            <Tag color="purple">{currentKeyword}</Tag>
          </div>
        )}
      </Space>
    </Card>
  );
};

export default Room; 