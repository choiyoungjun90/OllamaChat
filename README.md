# Ollama Chatbot (Phi-3.5)

이 프로젝트는 로컬 LLM 실행 도구인 **Ollama**와 **Node.js**를 사용하여 만든 개인용 챗봇 애플리케이션입니다. 브라우저 기반의 간단한 채팅 인터페이스를 제공하며, 로컬에서 실행되는 `phi3.5` 모델과 대화할 수 있습니다.

## 📂 프로젝트 구조

ollama-chatbot
├── public
│ └── index.html # 채팅 웹 인터페이스
├── src
│ ├── index.js # 앱 진입점 (Express 서버)
│ ├── config
│ │ └── ollamaConfig.js # Ollama 연결 설정
│ ├── services
│ │ └── chatService.js # Ollama API 통신 로직
│ └── utils
│ └── logger.js # 로깅 유틸리티
├── .env # 환경 변수 (선택 사항)
├── package.json # 의존성 관리
└── README.md # 문서
```

## 사전 준비 (Prerequisites)

이 프로젝트를 실행하기 전에 **Ollama**가 설치되어 있고 실행 중이어야 합니다.

### 1. Ollama 설치
*   **macOS / Linux / Windows**: [Ollama 공식 홈페이지](https://ollama.com/download)에서 다운로드하여 설치합니다.

구동:
### (Window) ollama serve
### (Mac) ollama 애플리케이션 실행

### 2. 모델 다운로드 (Phi-3.5)
터미널을 열고 다음 명령어를 입력하여 사용할 모델을 다운로드합니다.
```bash
ollama pull phi3.5

### 3. 의존성 설치
npm install

---

# 서버 실행 커맨드
node src/index.js

# 로컬 웹
http://localhost:3000