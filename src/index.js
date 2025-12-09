const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ChatService = require('./services/chatService'); 
const { log } = require('./utils/logger');
const { ollamaConfig } = require('./config/ollamaConfig');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// 정적 파일 서빙 설정 (public 폴더 연결)
app.use(express.static(path.join(__dirname, '../public')));

const chatService = new ChatService(ollamaConfig);

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await chatService.sendMessage(message);
        res.json({ response });
    } catch (error) {
        // 수정: log 함수 대신 console.error 사용 (logger.js 충돌 방지)
        console.error('Error handling chat request:', error.message);
        
        // 404 에러일 경우 모델이 없는지 확인하는 힌트 제공
        if (error.response && error.response.status === 404) {
            console.error('힌트: Ollama 모델이 설치되어 있는지 확인하세요. (예: ollama pull phi3.5)');
        }
        
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    // log 함수는 첫 번째 인자로 메시지, 두 번째 인자로 레벨(선택)을 받도록 설계된 것으로 보임
    // 안전하게 console.log 사용하거나 log 함수 사용법에 맞게 호출
    console.log(`Server is running on http://localhost:${port}`);
});