const axios = require('axios');

class ChatService {
    constructor(config) {
        this.config = config;
    }

    async sendMessage(userMessage) {
        try {
            // 로컬 Ollama API 호출
            const response = await axios.post(`${this.config.baseUrl}/api/chat`, {
                model: this.config.modelName,
                messages: [
                    { role: 'user', content: userMessage }
                ],
                stream: false
            });

            if (response.data && response.data.message) {
                return response.data.message.content;
            }
            return "응답이 없습니다.";
        } catch (error) {
            console.error('ChatService Error:', error.message);
            throw error;
        }
    }
}

// 중요: 클래스 자체를 내보냅니다.
module.exports = ChatService;