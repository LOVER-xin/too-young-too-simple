const express = require('express');
const app = express();
const server = require('http').createServer(app);
// 初始化 Socket.IO，允许实时通信
const io = require('socket.io')(server);

// WebSocket 处理对战逻辑
io.on('connection', (socket) => {
    // 监听加入房间事件
    socket.on('joinRoom', (roomId) => {
        // TODO: 
        // 1. 将用户加入指定房间
        // 2. 更新房间玩家列表
        // 3. 广播房间状态更新
        // 4. 如果房间人数达到要求，开始游戏
    });
    
    // 监听提交诗句事件
    socket.on('submitPoem', (data) => {
        // TODO:
        // 1. 验证诗句是否符合规则（包含关键字、是否重复等）
        // 2. 更新游戏状态（玩家得分、回合信息等）
        // 3. 广播最新游戏状态给房间内所有玩家
        // 4. 检查游戏是否结束
    });

    // TODO: 添加更多事件处理
    // - 断开连接处理
    // - 准备状态切换
    // - 游戏结束处理
    // - 聊天消息处理
});

// API 路由
app.get('/api/poems/search', (req, res) => {
    // TODO: 
    // 1. 接收搜索关键词
    // 2. 查询诗词数据库
    // 3. 返回匹配的诗句
    // 4. 错误处理
}); 

// TODO: 添加更多 API 路由
// - 用户认证
// - 历史记录查询
// - 排行榜数据
// - 房间列表获取

// TODO: 错误处理中间件
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('服务器错误');
// });

// TODO: 数据库连接
// - MongoDB：用户数据、游戏记录
// - MySQL/PostgreSQL：诗词数据库

// TODO: 安全相关
// - CORS 配置
// - 请求速率限制
// - 输入验证
// - WebSocket 认证 