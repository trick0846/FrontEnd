const mongoose = require("mongoose");

// 스키마(schema) : 데이터의 설계도
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must type name"],
    unique: true,
  },
  // token : 연결 아이디 정보
  token: {
    type: String,
  },
  // 업그레이드를 위해 남겨둔 / 온라인인지 오프라인인지 체크
  online: {
    type: Boolean,
    default: false
  },
});
module.exports = mongoose.model("User", userSchema);