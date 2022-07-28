import { AiFillApple, AiFillFacebook } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

export function Signup(){
    return <>
    <div className='ll'>
    <div className="login-form">
        <h1>Instagram</h1>
        <h2>Sign up to see photos and videos from your friends.</h2>
        <div className="facebook login-btn">
            <AiFillFacebook />
            <p>Log in with facebook</p>
        </div>
        <p>--------------OR--------------</p>

        <input type="text" placeholder="Mobile Number or Email" />
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
       <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
        <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
        <div className="login-btn">Sign up</div>
    </div>
    <div className='no-account'>
    <p>Have an account?  </p>
    <p className='blue'>Log in</p>
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