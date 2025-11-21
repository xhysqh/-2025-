# -2025-
喵子和兔兔的日常记录

## 📧 在线HTML静态网页邀请函

这是一个精美的在线邀请函，具有自动邮件绑定功能。访客可以填写RSVP表单，系统会自动打开邮件客户端并填充相关信息。

### ✨ 功能特点

- 📱 **响应式设计** - 完美适配手机、平板和桌面设备
- 💌 **邮件自动绑定** - 提交表单后自动打开邮件客户端
- 💾 **本地存储** - 自动保存RSVP数据到浏览器本地存储
- 🎨 **精美动画** - 流畅的动画效果提升用户体验
- ✅ **表单验证** - 实时验证邮箱格式
- 📊 **数据导出** - 可导出CSV格式的RSVP数据

### 🚀 使用方法

1. **直接在浏览器中打开 `index.html`**
   ```bash
   # 使用任意浏览器打开
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

2. **或使用本地服务器**
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
   然后访问 `http://localhost:8000`

### ⚙️ 配置

编辑 `script.js` 文件中的收件人邮箱：

```javascript
const recipient = 'your-email@example.com'; // 替换为您的实际邮箱
```

### 📋 导出RSVP数据

在浏览器控制台中运行以下命令来导出所有RSVP数据为CSV文件：

```javascript
exportRSVPData()
```

### 🎯 技术栈

- HTML5
- CSS3 (动画、渐变、响应式设计)
- 原生JavaScript (无依赖)
- LocalStorage API
- Mailto协议

### 📝 文件结构

```
.
├── index.html    # 主HTML文件
├── styles.css    # 样式表
├── script.js     # JavaScript功能
└── README.md     # 说明文档
```

### 🌟 特性说明

#### 邮件自动绑定
当访客提交RSVP表单时，系统会：
1. 验证输入的邮箱格式
2. 将数据保存到浏览器本地存储
3. 自动构建邮件内容（包含姓名、邮箱、留言）
4. 使用 `mailto:` 协议打开默认邮件客户端
5. 自动填充收件人、主题和正文

#### 本地存储
所有RSVP数据都保存在浏览器的LocalStorage中，可以：
- 持久化保存访客信息
- 支持多个RSVP记录
- 随时导出为CSV格式

### 🎨 自定义

您可以轻松自定义：

1. **颜色主题** - 修改 `styles.css` 中的渐变色
2. **邀请文案** - 编辑 `index.html` 中的文本内容
3. **表单字段** - 添加或删除表单项
4. **收件邮箱** - 修改 `script.js` 中的 `recipient` 变量

### 📱 浏览器兼容性

- ✅ Chrome / Edge (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ 移动浏览器

### 💡 注意事项

- 使用 `mailto:` 协议需要用户设备上配置了邮件客户端
- 某些浏览器可能会阻止自动打开邮件客户端，需要用户授权
- 建议在实际使用前修改 `script.js` 中的收件人邮箱地址

---

💕 喵子和兔兔 敬邀
