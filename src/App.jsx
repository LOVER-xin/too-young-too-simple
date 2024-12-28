import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import Game from './pages/Game';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout className="min-h-screen">
        <Header className="bg-white shadow-md">
          <h1 className="text-2xl text-center text-gray-800">飞花令</h1>
        </Header>
        <Content className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:roomId" element={<Game />} />
          </Routes>
        </Content>
        <Footer className="text-center">飞花令 ©2024</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App; 