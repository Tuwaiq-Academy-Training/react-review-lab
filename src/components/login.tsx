import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';

export function Login(){
    return <>
    <div className='ll'>
    <div className="login-form">
        <h1>Instagram</h1>
        <input type="text" placeholder="Phone number,username, or email" />
        <input type="text" placeholder="Password" />
        <div className="login-btn">Log In</div>
        <p>--------------OR--------------</p>
        <div className="facebook">
            <AiFillFacebook />
            <p>Log in with facebook</p>
        </div>
        <p className='forget-pass'>Forgot password?</p>
    </div>
    <div className='no-account'>
    <p>don't have an account? </p>
    <p className='blue'>Sign up</p>
    </div>
    <p>Get the app</p>
    <div className="hhhh">

       <div className='app-btn'>
            <AiFillApple />
            App Store
        </div>

        <div className='app-btn'>
            <FaGooglePlay />
            Google Play
        </div>
       </div>
    </div>
    </>
}