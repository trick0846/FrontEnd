function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked!' : 'Click here!'
  )
}


// react 컴포넌트를 DOM에 가져오기
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer)