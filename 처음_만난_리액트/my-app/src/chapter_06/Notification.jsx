import React from 'react'

// 스타일 정의
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius:16,
  },

  messageText:{
    color: "black",
    fontSize: 16,
  }
};

// 클래스 정의하기
class Notification extends React.Component {
  constructor(props) {
    super(props) 
    // state에 아무런 데이터도 가지지 않고 있다.
    this.state = {};
  }

  // Lifecycle 
  componentDidMount() {
    console.log(this.props.id, "componentDidMount() called.")
  }

  componentDidUpdate() {
    console.log(this.props.id, "componentDidUpdate() called.")
  }
  // unmount 되기 전에 출력된다!
  componentWillUnmount() {
    console.log(this.props.id, "componentWillUnmount() called.")
  }


  render () {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
        {/* 이 부분에서 this.message 가 아닌 this.props.message로 작성해야 제대로 전달받는다. */}
      </div>
    )
  }
}



export default Notification;