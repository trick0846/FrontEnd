import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function Calculator(props) {
  // 1) state로 Temperature와 Scale을 선언하여 온도값과 단위를 저장
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  // 섭씨온도로 변환
  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  };

  // 화씨온도로 변환
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
        // 사실상 vue에서 사용하는 emit과 유사하다!
        // 실제로 state를 가지고 있는 곳에서 함수를 선언하고, 이를 전달해서 밑에서 사용하는 것!
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict
      // BoilingVerdict 에 props 전달되는데 parseFloat 함수가 반환하는 값이 celsius 라는 key로 전달!
        celsius={parseFloat(celsius)}
      />
    </div>
  );
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 소수점 반올림해서 표현하기 위한 함수!
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// {celsius} = props를 적지않고 이렇게 적어도 된다!
// props is an object, not an array. 
function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default Calculator;

// { celsius } = props is the correct way to destructure an object,
// while [celsius] = props would be incorrect in this context
// because props is an object, not an array.
// To sum up, { celsius } = props is the correct syntax
// when working with props in a React functional component.