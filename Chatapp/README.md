# 채킹 서비스
- 이 md파일은 <strong>작성 흐름대로 정리</strong>되어있다.

1. 백엔드 세팅 : DB, 웹소켓 세팅
2. 프론트엔드 세팅 : 웹소켓 세팅
3. 백엔드 프론트엔드 연결 테스트
4. 유저 로그인
5. 메세지 주고받기


---
```bash
// package.json 파일 생성
npm init -y

npm i express, mongoose, cors detenv http
// express : 서버 생성
// mongoose : mongoDB를 쉽게 
// cors : 백과 프론트의 통신 연결
// dotenv : 환경변수
// http : 웹소켓 올리기


npm i socket.io
```

### 데이터베이스 세팅
- 필요한 것 : 유저, 채팅
```Models/user.js```, ```Models/chat.js```,```app.js```에 필기되어 있는 내용 체크하기
- 환경변수 파일 ```.env```에 DB 주소 작성하기
```env
PORT=5001
// mongodb에서 기본적으로 사용하는 주소 /localhost:27017
// 내가 설정하는 이름 : kakao-talk   이 밑에 데이터 저장
DB=mongodb://localhost:27017/kakao-talk
```

- 모두에게 접근을 허락하지 않는다. => 백앤드의 허락이 필요!!
```js
const express = require("express")
const mongoose = require("mongoose")

// 밑에서 process.env를 사용하기 위해서는 install이 필요하다!
require('dotenv').config();

// 아무에게나 접근을 허락하지 않는다! => 허락이 필요!! == cors
const cors = require("cors");
const app = express();
app.use(cors());

// 프로그램실행시에 uri가 String이 아니라는 오류 발생
// uri를 정의하여서 해결하였다.
const uri = process.env.DB


// DB 주소는 중요한 부분!
// 첫번째 매개변수에 DB 주소 입력
mongoose.connect( uri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("connected to database"));

module.exports = app;
```
- ```npm index.js``` 대신에 다른 방식으로 시작하기<br>
=> ```nodemon app.js```사용 / 실행을 하는 명령어 but 파일에 변화가 생기면 reload 해준다.
```bash
// 설치가 필요
npm install nodemon

// nodemon app.js
=> npx nodemon app.js
```
<strong>오류처리</strong> <br>
```txt
throw new MongooseError 'The `uri` parameter to `openUri()` must be a...
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
```
- 이 부분을 고치기 위해서 ```uri```를 따로 정의하였다.
```md
nodemon을 분명히 설치했음에도 불구하고(package.json, devDependency에 nodemon이 있고 npm run dev할 때 실행이 잘 되지요) nodemon이라는 명령어를 찾을 수 없다는 오류인데요(command not found: nodemon).

저희는 nodemon을 저희가 생성한 노드 서버에서만 사용할 수 있도록 설치했었어요(npm i -D nodemon).

그래서 package.json의 script로 nodemon을 실행하면 node_modules에 설치된 nodemon을 가져다가 사용하게 되서 이 때는 문제가 없었어요.

이 강의에서는 package.json의 script를 통하지 않고 터미널에 바로 nodemon 명령어를 사용하게 된 경우인데요. 이 때는 컴퓨터가 nodemon이 뭔지 알 수 없어요. 그래서 위와 같은 오류가 떴었는데요. 모듈을 설치 할 때 -g를 추가(npm i -g nodemon)해주시면 글로벌하게 설치가 되요. 그러면 nodemon을 어디서든지 터미널에서 사용할 수 있게 되요(package.json에는 추가가 안되요. 이미 추가되어 있었으면 그대로 있구요)

윈도우가 아닌 맥이나 우분투를 사용하시면 앞에 sudo를 쳐주고 이후에 컴퓨터 비밀번호를 쳐줘야 하는 이유는 관리자 권한이 필요하기 때문이에요.
```

### 웹소켓 세팅
- 기본 세팅은 ```index.js```, ```utils/io.js```
- 소켓 io는 ```emit```과 ```on```의 조합


### 프론트엔드쪽 기본코드는 강의에서 제공해준것 clone 해왔다.
- 강의 자료에는 이미 ```socket.io-client```가 설치되어있다.
- ```src/server.js```  작성 후에 ```App.js```에서 server 설치

### 오류처리
- useNewUrlParser is a deprecated option....
```js
mongoose.connect( uri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("connected to database"));

module.exports = app;
```
-위의 코드에서 option으로 넣어주고 있는 부분이 오류가 생기는 듯 하다.

### 다음 코드
프론드와 백엔드 모두 실행하면 서버에 연결이 된다.

- 연결이 끊기는 경우에도 잡을 수 있다. (io.js에서)