import React from 'react';

const scaleNames = {
  c: '섭씨',
  f: '화씨'
};

function TemperatureInput(props) {
  // event.target.value 이 부분을 사용하기 위해서는 컴포넌트 내에서 한번 더 정의가 필요!
  // 그래서 onChange={props.onTemperatureChange}가 아닌 handleChange 정의
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>
        {/* scale을 넘겨준건 단위를 표시하기 위해서! */}
        온도를 입력해 주세요(단위: {scaleNames[props.scale]}):
      </legend>
      {/* input value가 변할때마다 onChange 발생 */}
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;