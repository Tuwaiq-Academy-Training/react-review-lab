import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Signup(){

    return(
              
       
      <div className="container">
    <div className="content">
      <div className="login-box">

        <div className="header">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram"/>

        </div>
        <div className="form-wrap">

          <form className="form">

            <div className="input-box">
              <input type="text" id="name" placeholder="Mobile number or Email"/>
            </div>  

            <div className="input-box">
              <input type="text" name="password"  placeholder="Full Name"/>
            </div>  
            <div className="input-box">
              <input type="text" name="password" placeholder="Username"/>
            </div>  

            <div className="input-box">
              <input type="password" name="password" id="password" placeholder="Password"/>
            </div>  

            <span className="button-box">
              <button className="btn" type="submit" name="submit">Sign up </button>
            </span>  
          </form>
        </div> 
      </div> 

      <div className="login-box">
        <p className="text">have an account?<Link to={'/'}><a>Log in</a></Link></p>
      </div>

      <div className="app">
        <p>Get the app.</p>
        <div className="app-img">
        <a><AiFillApple size={25}/></a>
           <a><FaGooglePlay size={25}/></a>
        </div> 
      </div> 
</div> 

</div>
    );
}
