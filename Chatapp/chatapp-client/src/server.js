import {io} from "socket.io-client";

// 내가 연결하고싶은 주소를 작성하기
const socket = io("http://localhost:5001");
export default socket;
