import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';

const PoemInput = ({ onSubmit, keyword }) => {
  // 诗句输入状态
  const [poem, setPoem] = useState('');

  // 提交诗句处理函数
  const handleSubmit = () => {
    if (poem.trim()) {
      onSubmit(poem);
      // 提交后清空输入框
      setPoem('');
    }
  };

  return (
    // 输入区域容器
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Space.Compact 使输入框和按钮紧密相连 */}
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={poem}
          onChange={(e) => setPoem(e.target.value)}
          placeholder={`请输入包含"${keyword}"的诗句`}
          // 回车键提交
          onPressEnter={handleSubmit}
        />
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </Space.Compact>
    </div>
  );
};

export default PoemInput; 