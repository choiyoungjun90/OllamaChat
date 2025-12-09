const ollamaConfig = {
    // 로컬 Ollama 기본 주소 설정
    baseUrl: process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434', 
    // 사용할 모델 이름 (기본값 phi3.5)
    modelName: process.env.MODEL_NAME || 'phi3.5',
    // 로컬 실행 시 API Key는 보통 필요 없지만, 확장을 위해 남겨둘 수 있습니다.
    apiKey: process.env.OLLAMA_API_KEY || '', 
    options: {
        temperature: 0.7,
        // maxTokens 등은 Ollama API 스펙에 따라 다를 수 있으므로 필요한 옵션만 남깁니다.
        num_predict: 150, // Ollama에서는 maxTokens 대신 num_predict를 주로 사용합니다.
    }
}

module.exports = { ollamaConfig };