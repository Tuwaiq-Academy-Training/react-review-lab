 import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { ILogin, ISignup } from '../data';
import { FaFacebookSquare} from 'react-icons/fa';

interface LoginProps {
	login: ILogin;
}

export function Login({ login }: LoginProps) {
	return (
		
		<><div className="main"> 
           <div>
               <img src="Image 28-07-2022 at 4.46 PM.jpg" alt="" />
           </div>
            <img src="" alt="" />
        <div className="login">
            <img id="loginlogo" src="Instagram_logo.svg.png" alt="" />
                <img src={login.img_logo_instgram} alt="" />
                <input type="text" className="input-login" placeholder="email,username , phone" />
                <input type="text" className="input-login" placeholder="password"/>
              
              <button id="btn3"> Log in</button>
              <br />
             <FaFacebookSquare  className="facebook"/>
              <a className="facebook" href="https://www.facebook.com">Login in with Facebook</a>
              <br />
              <p id="forgotpassword">Forgot password</p>
              </div>
              
              <div className ="get-the-app">
                  <p>Get the app</p>
              </div>
              </div>
        </>
    );
    }
