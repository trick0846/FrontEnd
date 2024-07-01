// 통신관련 파일은 다 이곳에서
// io에서는 말하는 함수(emit)와 듣는 함수(on)을 사용
module.exports = function (io) {
  // io
  // 연결된 사람을 socket으로 받아온다.
  io.on("connection", async(socket)=>{
    console.log("client is connected", socket.id);


    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};