module.exports = {
  // 指定需要处理的文件类型和路径
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // 主题配置
  theme: {
    extend: {}, // 可以在这里扩展默认主题
  },
  // 插件配置
  plugins: [],
  // 核心插件配置
  corePlugins: {
    preflight: false, // 禁用 preflight，避免与 Ant Design 的默认样式冲突
  }
} 