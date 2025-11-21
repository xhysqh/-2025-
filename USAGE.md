# 使用指南 - 在线邀请函

## 📖 快速开始

### 1. 基本使用

最简单的使用方式是直接在浏览器中打开 `index.html` 文件：

```bash
# 双击文件或使用命令行
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux
```

### 2. 使用本地服务器（推荐）

为了获得更好的体验，建议使用本地服务器：

#### Python
```bash
python -m http.server 8000
# 访问 http://localhost:8000
```

#### Node.js
```bash
npx http-server
# 访问 http://localhost:8080
```

#### PHP
```bash
php -S localhost:8000
```

## ⚙️ 配置指南

### 修改收件邮箱

1. 打开 `script.js` 文件
2. 找到第19行的配置：
```javascript
const recipient = 'your-email@example.com'; // TODO: 替换为实际接收邮箱
```
3. 将 `your-email@example.com` 替换为您的实际邮箱地址

### 自定义邀请内容

编辑 `index.html` 文件：

#### 修改标题
```html
<h1 class="title">✨ 喵子和兔兔的邀请函 ✨</h1>
```

#### 修改副标题
```html
<p class="subtitle">诚挚邀请您见证我们的美好时光</p>
```

#### 修改主要文本
```html
<p class="main-text">
    亲爱的朋友，<br><br>
    我们诚挚地邀请您<br>
    一起分享我们的日常点滴<br>
    见证我们的甜蜜时光
</p>
```

#### 修改活动详情
```html
<div class="detail-item">
    <span class="icon">📅</span>
    <span class="detail-text">时间：随时欢迎</span>
</div>
```

### 自定义样式

编辑 `styles.css` 文件：

#### 修改配色方案
```css
/* 背景渐变色 */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 卡片头部渐变色 */
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### 修改字体
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## 📊 管理RSVP数据

### 查看存储的数据

在浏览器控制台中运行：
```javascript
JSON.parse(localStorage.getItem('rsvpList'))
```

### 导出CSV文件

在浏览器控制台中运行：
```javascript
exportRSVPData()
```

这将下载一个包含所有RSVP数据的CSV文件。

### 清除数据

在浏览器控制台中运行：
```javascript
localStorage.removeItem('rsvpList')
```

## 🎨 高级自定义

### 添加更多表单字段

1. 在 `index.html` 中添加新的表单组：
```html
<div class="form-group">
    <label for="phone">电话号码</label>
    <input type="tel" id="phone" name="phone" placeholder="请输入电话号码">
</div>
```

2. 在 `script.js` 中更新表单处理逻辑：
```javascript
const phone = document.getElementById('phone').value;
```

3. 更新邮件正文：
```javascript
const body = encodeURIComponent(
    '姓名: ' + name + '\n' +
    '邮箱: ' + email + '\n' +
    '电话: ' + phone + '\n' +
    '留言: ' + message
);
```

### 修改动画效果

在 `styles.css` 中调整动画参数：

```css
/* 加快/减慢动画速度 */
@keyframes fadeIn {
    /* animation-duration 在元素上设置 */
}

.container {
    animation: fadeIn 0.5s ease-in; /* 从1s改为0.5s加快速度 */
}
```

### 添加背景图片

```css
body {
    background: url('your-image.jpg') no-repeat center center fixed;
    background-size: cover;
}

/* 添加遮罩层以保持可读性 */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(102, 126, 234, 0.8);
    z-index: -1;
}
```

## 🌐 部署到线上

### GitHub Pages

1. 将代码推送到GitHub仓库
2. 进入仓库设置 Settings → Pages
3. 选择分支和目录
4. 保存后GitHub会生成一个公开URL

### Netlify

1. 在 [Netlify](https://netlify.com) 注册账号
2. 拖拽项目文件夹到Netlify
3. 自动部署完成

### Vercel

```bash
npm install -g vercel
vercel
```

## ❓ 常见问题

### Q: 为什么点击提交后没有打开邮件客户端？

A: 请确保：
1. 您的设备上已安装并配置了邮件客户端
2. 浏览器允许打开外部应用程序
3. 检查浏览器的弹出窗口设置

### Q: 如何在手机上使用？

A: 
1. 将文件部署到在线服务器（GitHub Pages、Netlify等）
2. 或者在电脑上启动本地服务器，确保手机和电脑在同一网络
3. 在手机浏览器中访问电脑的IP地址

### Q: 数据存储在哪里？

A: 所有RSVP数据都存储在浏览器的LocalStorage中，仅在本地保存，不会上传到任何服务器。

### Q: 如何备份数据？

A: 定期使用 `exportRSVPData()` 函数导出CSV文件进行备份。

## 📝 最佳实践

1. **测试邮件功能**：修改配置后先测试邮件发送是否正常
2. **定期备份数据**：使用导出功能定期备份RSVP数据
3. **移动端测试**：在不同设备上测试响应式设计
4. **性能优化**：如果图片较大，考虑压缩图片文件
5. **浏览器兼容**：在主流浏览器中测试功能

## 🔧 故障排除

### 样式显示不正常

检查 `styles.css` 文件是否在正确的位置，并且在 `index.html` 中正确引用：
```html
<link rel="stylesheet" href="styles.css">
```

### JavaScript功能不工作

1. 打开浏览器开发者工具（F12）查看Console错误
2. 检查 `script.js` 是否正确引用
3. 确保文件路径正确

### 邮件内容显示乱码

确保文件编码为UTF-8：
```bash
file -I index.html  # 检查文件编码
```

## 📞 技术支持

如果遇到问题：
1. 查看浏览器控制台的错误信息
2. 确认所有文件都在正确的位置
3. 检查文件权限
4. 参考README.md中的更多信息

---

祝您使用愉快！💕
