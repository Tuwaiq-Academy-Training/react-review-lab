import{FaGooglePlay} from 'react-icons/fa';
import{AiFillApple} from 'react-icons/ai';
import { Link } from 'react-router-dom';
export function Login(){

    return (
    

      
        <div className="container">
                  <div>
                    <img className="img-dir" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="..."/>
                    </div>
                <div className="content">
                  <div className="login-box">
    
                    <div className="header">
                      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram"/>

                    </div>
                    <div className="form-wrap">

                      <form className="form">
    
                        <div className="input-box">
                          <input type="text" id="name" placeholder="Phone number, username, or email"/>
                        </div>  
    
                        <div className="input-box">
                          <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>  
    
                        <span className="button-box">
                          <button className="btn" type="submit" name="submit">Log in</button>
                        </span>  
                        <a className="forgot">Forgot password?</a>
                      </form>
                    </div> 
                  </div> 
    
                  <div className="login-box">
                    <p className="text">Don't have an account? <Link to ={'/signup'}><a>Sign up</a></Link></p>
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