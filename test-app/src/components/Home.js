import {Link} from 'react-router-dom';
// import {useState} from 'react'
import "./style.css"
function Home() {
    // const navbar = []
    return(
        <div>
            <p>Home</p>
            <div className="nav">
                {}
                <span>
                <Link to="signup">SignUp</Link>
                </span>
                {/* <Link to={`detail/${value}`}> */}
                {/* </Link> */}
                <span>
                <Link to="login">login</Link>
                </span>
            </div>
        </div>
    )
};

export default Home;