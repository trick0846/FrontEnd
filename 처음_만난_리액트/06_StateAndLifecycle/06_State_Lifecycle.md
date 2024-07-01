# 06 State and Lifecycle

## 1. 정의
### State
- Component의 변경 가능한 데이터
- 개발자가 정의하며, 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다(성능을 위해서!)
- state는 JavaScript의 객체이다.


```jsx
class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    };
  }
}
```
- state는 직접 수정할 수 없다.(가능은하지만 하면 X)
```jsx
// state를 직접 수정 (잘못된 사용법)
// 마음대로 수정시 개발자의 예상 흐름대로 진행되지 않을 수 있다.
this.state = {
  name: 'Inje'
}

// setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
  name: 'Inje'
})
```

### Lifecycle
- Component의 생명주기
- Mounting(출생) -> Updating(인생) -> Unmounting(사망)
- 상위 컴포넌트에서 하위 컴포넌트를 더이상 표시하지 않을 때에 "사망"이라고 생각하자.
- Component는 계속 존재하는 것이 아니라 시간의 흐름에 따라 생성되고 업데이트 되다가 사라진다.


## 실습하기

