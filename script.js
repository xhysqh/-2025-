// 邮件自动绑定功能
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('successMessage');

    // 表单提交处理
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 获取表单数据
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 验证邮箱格式
        if (!validateEmail(email)) {
            alert('请输入有效的电子邮箱地址！');
            return;
        }

        // 构建邮件内容
        // 配置：将下面的邮箱地址替换为实际接收邮箱
        const recipient = 'your-email@example.com'; // TODO: 替换为实际接收邮箱
        const subject = encodeURIComponent('邀请函回复 - ' + name);
        const body = encodeURIComponent(
            '姓名: ' + name + '\n' +
            '邮箱: ' + email + '\n' +
            '留言: ' + message + '\n\n' +
            '---\n' +
            '此邮件来自喵子和兔兔的邀请函'
        );

        // 使用mailto协议自动打开邮件客户端
        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
        
        // 同时保存到本地存储
        saveRSVP(name, email, message);

        // 使用临时链接打开邮件客户端，避免影响当前页面
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        // 显示成功消息
        showSuccessMessage();
    });

    // 邮箱验证函数
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // 保存RSVP到本地存储
    function saveRSVP(name, email, message) {
        const rsvpData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        };

        // 获取现有RSVP列表，带错误处理
        let rsvpList = [];
        try {
            rsvpList = JSON.parse(localStorage.getItem('rsvpList') || '[]');
        } catch (e) {
            console.error('Failed to parse RSVP list from localStorage:', e);
            rsvpList = [];
        }
        
        // 添加新的RSVP
        rsvpList.push(rsvpData);
        
        // 保存回本地存储
        localStorage.setItem('rsvpList', JSON.stringify(rsvpList));

        console.log('RSVP已保存:', rsvpData);
    }

    // 成功消息显示时长（毫秒）
    const SUCCESS_MESSAGE_DURATION = 3000;

    // 显示成功消息
    function showSuccessMessage() {
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // 一段时间后重置表单
        setTimeout(function() {
            form.reset();
            form.style.display = 'flex';
            successMessage.style.display = 'none';
        }, SUCCESS_MESSAGE_DURATION);
    }

    // 实时邮箱验证反馈
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#e74c3c';
            this.setCustomValidity('请输入有效的电子邮箱地址');
        } else {
            this.style.borderColor = '#667eea';
            this.setCustomValidity('');
        }
    });

    emailInput.addEventListener('input', function() {
        if (validateEmail(this.value)) {
            this.style.borderColor = '#2ecc71';
        }
    });

    // 添加输入动画效果
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});

// 清理CSV字段，防止CSV注入攻击
function sanitizeCSVField(field) {
    if (!field) return '';
    // 转换为字符串
    let sanitized = String(field);
    // 移除或转义可能导致CSV注入的字符
    sanitized = sanitized.replace(/^[=+\-@\t\r]/g, "'$&");
    // 转义双引号
    sanitized = sanitized.replace(/"/g, '""');
    return sanitized;
}

// 导出RSVP数据功能（管理员使用）
function exportRSVPData() {
    let rsvpList = [];
    try {
        rsvpList = JSON.parse(localStorage.getItem('rsvpList') || '[]');
    } catch (e) {
        console.error('Failed to parse RSVP data:', e);
        return;
    }
    
    if (rsvpList.length === 0) {
        console.log('没有RSVP数据');
        return;
    }

    // 转换为CSV格式，带安全清理
    let csv = '姓名,邮箱,留言,提交时间\n';
    rsvpList.forEach(rsvp => {
        const name = sanitizeCSVField(rsvp.name);
        const email = sanitizeCSVField(rsvp.email);
        const message = sanitizeCSVField(rsvp.message);
        const timestamp = sanitizeCSVField(rsvp.timestamp);
        csv += `"${name}","${email}","${message}","${timestamp}"\n`;
    });

    // 创建下载链接
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'rsvp_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('RSVP数据已导出');
}

// 在控制台中可以调用此函数导出数据
console.log('提示: 要导出RSVP数据，请在控制台中运行 exportRSVPData()');
