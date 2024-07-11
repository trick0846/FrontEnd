import {Link} from 'react-router-dom';
// import {useState} from 'react'
import "./style.css"
function Home() {
    // const navbar = []
    // <p>Home</p>
    // <div className="nav">
    //     {}
    //     <span>
    //     <Link to="signup">SignUp</Link>
    //     </span>
    //     {/* <Link to={`detail/${value}`}> */}
    //     {/* </Link> */}
    //     <span>
    //     <Link to="login">login</Link>
    //     </span>
    // </div>
    return(
        <div class="body">
            <header>
                <h6 class="header">포스텔러 만세력</h6>
            </header>
            <div class="container">
                <h1>모두를 위한 사주풀이,<br></br>포스텔러 만세력</h1>
                <p>서머타임은 물론 지역에 따른 1 ~2분의 미세 시차까지 보정합니다.</p>
                <p>포스텔러 만세력을 통해 다양한 방식으로 사주 오행을 분석해보세요.</p>
                <div class="box">
                    <p class="update-btn">2.2 업데이트</p>
                    <ul>
                        <li>일진 달력이 추가되었습니다. 오늘의 날짜를 12간지로 알 수 있습니다.</li>
                        <li>나의 일주 천간을 기준으로 오행의 흐름을 볼 수 있는 오행표가 추가되었습니다.</li>
                        <li>12간지 시간표가 추가되었습니다.</li>
                        <li>길성과 흉성을 확인하기 편하도록 별도의 영역으로 분리했습니다.</li>
                        <li>사주풀이 자세히 보기가 펼침 상태로 제공됩니다.</li>
                    </ul>
                </div>
                <Link to="profile/edit"><button class="start-btn">시작하기</button></Link>
                
            </div>
            
        </div>
    )
};

export default Home;