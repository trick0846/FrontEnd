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
mongoose.connect( uri ).then(() => console.log("connected to database"));



// 이 부분 오류 처리 완료 => README에서 확인하기!!!
module.exports = app;