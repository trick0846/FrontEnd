import React from 'react';
import Notification from './Notification';

// 데이터 입력
const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다.'
  },
  {
    id: 2,
    message: '점심식사 시간입니다.'
  },
  {
    id: 3,
    message: '이제 곧 미팅이 시작됩니다.'
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    // 빈배열을 생성
    this.state = {
      notifications: []
    };
  }

  // 컴포넌트의 출생
  componentDidMount() {
    const { notifications } = this.state;

    // 시간마다 정해진 작업 수행
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        // state를 업데이트하기위해서는 setState를 사용
        this.setState({
          notifications: notifications
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          // map 함수에서는 key와 id를 넣지 않으면 warning message 출력된다.
          return <Notification key={notification.id} id={notification.id} message={notification.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;
