import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { ILogin, ISignup } from '../data';

interface SignupProps {
	signup: ISignup;
}

export function Signup1({ signup }: SignupProps) {
	return (
		
		<>
        <div className="main2">
        <div className="imgsignup">
            <img src="Image 28-07-2022 at 4.46 PM.jpg" alt="" />
        </div>
        <div className='signup'>
            <img id="signlogo" src="Instagram_logo.svg.png" alt='' />
            <h2 id="description1">{signup.description1}</h2>
            <button id="btn1">Login in with Facebook</button>
            {/* <div className='spacer'></div> */}
            
            <input className="input-signup" type="text" placeholder="mobile Number or email " />
            <input className="input-signup" type="text" placeholder="Full Name"/>
            <input className="input-signup" type="text" placeholder="Username"/>
            <input className="input-signup" type="text"  placeholder="password"/>
            
            <h2 id="description1" >{signup.description2} </h2>
            <button id="btn2"> Signup</button>
        </div>
        <img src={signup.imgsignup} alt='' />
        <div className="I_have_account">
            <h2 id="have-account">have an account</h2>
        </div>
        <div className='footer'>
                <h2 id="get-app">get the app</h2>
                <img src="" alt="" id=""/>
                <img src=""alt=""  id= ""/>

            </div>
            </div>
            </>
    );
    }
