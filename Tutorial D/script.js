document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.querySelector('.send-button');
    const chatInput = document.querySelector('.chat-input');
    const chatBody = document.querySelector('.chat-body');

    sendButton.addEventListener('click', function() {
        const messageText = chatInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
            chatBody.appendChild(messageElement);
            chatInput.value = ''; // 清空输入框
            chatBody.scrollTop = chatBody.scrollHeight; // 滚动到最新消息
        }
    });
});
