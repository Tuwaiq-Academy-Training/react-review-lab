



export default function SignUp() {
  return (
    <div className='box-signup'>
            <div className="phone">
            <div > <img className="imge1" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" alt="" /></div>
            </div>
            <div className='signup'>
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram"></img>
                <p className="p">Sign up to see photos and <br /> videos from your friends.</p>
                <button className="btn-2" type="submit" name="submit">Log in With Facebook</button>
                <div className="or">
                      <div><p>______________</p></div>
                      <div>or</div>
                      <div><p>________________</p></div>
                    </div>
                <form className="form">
                      <input type="text"  placeholder="Mobile Number or Email" />
                      <input type="password" name="password" id="password" placeholder="Full Name" />
                      <input type="text"  placeholder="username" />
                      <input type="password" name="password" id="password" placeholder="Password" />
                      <div className="p-font">
                      <p className="p1">People who use our service may have uploaded<br /> your contact information to instagram. <strong>Learn</strong>  <br /><strong>More</strong> </p>
                      <p className="p1">By signing up, you agree to our <strong>Terms</strong> ,<strong>Privacy</strong>  <br /><strong>Policy and Cookies Policy</strong> </p>
                      </div>
                    <span className="button-box">
                      <button className="btn" type="submit" name="submit">Log in</button>
                    </span>
              
        
          
                <div className="dont-signup"><p>Have an account? <a href="#">Sign in</a></p></div>
               
                </form>
                </div>
    </div>
  )
}
