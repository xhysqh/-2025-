# 在线邀请函 - 使用说明

## 功能介绍

这是一个功能完整的在线邀请函网页，具有自动邮箱绑定功能。

### 主要特性

1. **自动邮箱绑定**
   - 支持从URL参数自动获取邮箱地址
   - 自动填充邮箱输入框
   - 实时验证邮箱格式

2. **表单验证**
   - 实时输入验证
   - 友好的错误提示
   - 防止无效提交

3. **数据持久化**
   - 使用localStorage保存绑定记录
   - 支持多个邮箱绑定
   - 自动更新重复邮箱

4. **优雅的用户界面**
   - 响应式设计，支持移动设备
   - 平滑的动画效果
   - 现代化的渐变配色

## 使用方法

### 基本使用

1. 直接在浏览器中打开 `invitation.html` 文件
2. 填写姓名和邮箱地址
3. 点击"确认绑定"按钮

### 自动绑定邮箱

通过URL参数预填充邮箱地址：

```
invitation.html?email=user@example.com
```

示例：
```
invitation.html?email=xiaoming@gmail.com
```

当用户通过带有邮箱参数的链接访问页面时，邮箱地址会自动填充到表单中。

## 技术实现

### 自动邮箱绑定功能

邮箱绑定通过以下机制实现：

1. **URL参数解析**：使用 `URLSearchParams` API 从URL中提取邮箱参数
2. **自动填充**：页面加载时自动将邮箱填入输入框
3. **格式验证**：使用正则表达式验证邮箱格式
4. **本地存储**：使用 `localStorage` 保存绑定信息

### 数据结构

绑定数据以JSON格式存储在localStorage中：

```javascript
{
  "name": "用户姓名",
  "email": "user@example.com",
  "timestamp": "2025-11-21T14:18:57.277Z"
}
```

### 查看绑定记录

在浏览器控制台中运行以下代码查看所有绑定记录：

```javascript
// 查看所有绑定
JSON.parse(localStorage.getItem('emailBindings'))

// 查看当前绑定
JSON.parse(localStorage.getItem('currentEmailBinding'))
```

## 集成到服务器

如果需要将数据提交到服务器，可以在 `invitation.html` 文件的提交处理函数中取消注释API调用代码：

```javascript
fetch('/api/bind-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
});
```

## 自定义配置

### 修改样式

所有样式都在 `<style>` 标签中，可以根据需要修改：

- 主题颜色：修改 `#667eea` 和 `#764ba2`
- 字体：修改 `font-family`
- 布局：调整 padding 和 margin 值

### 修改内容

在HTML的 `.content` 部分修改邀请函内容。

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 安全说明

- 数据仅存储在本地浏览器中
- 不会自动发送到任何服务器
- 建议在生产环境中添加HTTPS支持
- 集成后端时应添加适当的安全措施（CSRF保护、输入验证等）

## 示例场景

1. **邮件营销**：在邮件中包含带参数的链接，自动绑定收件人邮箱
2. **社交分享**：生成个性化邀请链接，自动识别邀请者
3. **活动报名**：预填充用户信息，简化报名流程

## 扩展功能建议

可以添加以下功能来增强页面：

- [ ] 添加验证码确认
- [ ] 集成后端API
- [ ] 添加二维码扫描功能
- [ ] 支持多语言
- [ ] 添加社交媒体分享按钮
- [ ] 数据导出功能
- [ ] 邮件发送确认
