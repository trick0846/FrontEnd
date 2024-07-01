// import 와 유사한 기능!
const {createServer} = require("http")
const app = require("./app") 
const {Server} = require("socket.io")

// env 사용하려면 설치 필요
require("dotenv").config()

// 위에서 변수로 설정했기때문에 ""안에 작성할 필요 X
const httpServer = createServer(app)
// 웹소켓 서버 생성
const io = new Server(httpServer,{
  // 허락할 주소를 작성하기
  cors:{
    origin:"http://localhost:3000"
  }
})

require("./utils/io")(io) // 함수를 가져왔고, 그 함수에 io 매개변수 전달 

httpServer.listen(process.env.PORT,() => {
  console.log("server listening on port", process.env.PORT)
})