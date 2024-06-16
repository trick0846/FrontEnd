import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Btn from './Btn.module.css';


function Button ({text}) {
  return(
    // 1) CSS를 적용하고 싶을 때에 앞에 어느파일에서 가져온건지 작성하고 싶다면 파일명에 꼭 module.을 붙이기
    // 2) 그냥 className만 적고싶다면 .module 적지 않고 사용!
    // module의 장점은 className을 HTML에서 랜덤하게 표현해준다!!
    <button className={Btn.btn}>{text}</button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button
// 위의 코드가 없으면 오류가 발생
// export 'default' (imported as 'Button') was not found in './components/05/Button' (module has no exports)