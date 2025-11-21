/**
 * 邀请函配置示例文件
 * 
 * 使用方法：
 * 1. 将此文件复制为 config.js
 * 2. 修改下面的配置项
 * 3. 在 index.html 中引入这个文件（在 script.js 之前）
 * 4. 修改 script.js 使用这些配置
 */

const InvitationConfig = {
    // 邮件配置
    email: {
        // 接收邀请回复的邮箱地址
        recipient: 'your-email@example.com',
        // 邮件主题前缀
        subjectPrefix: '邀请函回复'
    },

    // 邀请函信息
    invitation: {
        // 主标题
        title: '喵子和兔兔的邀请函',
        // 副标题
        subtitle: '诚挚邀请您见证我们的美好时光',
        // 主要内容
        mainText: [
            '亲爱的朋友，',
            '',
            '我们诚挚地邀请您',
            '一起分享我们的日常点滴',
            '见证我们的甜蜜时光'
        ],
        // 活动详情
        details: [
            { icon: '📅', text: '时间：随时欢迎' },
            { icon: '📍', text: '地点：线上空间' },
            { icon: '🎉', text: '主题：日常记录分享' }
        ],
        // 页脚文本
        footer: {
            main: '期待与您相见 🌟',
            signature: '喵子和兔兔 敬邀'
        }
    },

    // 表单配置
    form: {
        // 表单字段配置
        fields: {
            name: {
                label: '姓名',
                placeholder: '请输入您的姓名',
                required: true
            },
            email: {
                label: '电子邮箱',
                placeholder: 'your.email@example.com',
                required: true
            },
            message: {
                label: '留言',
                placeholder: '想对我们说的话...',
                required: false
            }
        },
        // 提交按钮文本
        submitButton: '发送邀请回复',
        // 成功消息
        successMessage: '✅ 感谢您的回复！邮件已准备好发送。',
        // 成功消息显示时长（毫秒）
        successMessageDuration: 3000
    },

    // 样式配置
    theme: {
        // 主色调（CSS渐变）
        primaryGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        // 可以添加更多主题配置...
    },

    // 功能开关
    features: {
        // 是否启用本地存储
        enableLocalStorage: true,
        // 是否启用数据导出
        enableExport: true,
        // 是否在控制台显示提示
        showConsoleTips: true
    }
};

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InvitationConfig;
}
