

export default function Login() {
  return (
    <div className='box-login'>
            <div className="phone">
            <div > <img className="imge1" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" alt="" /></div>
            </div>
            <div className='login'>
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram"></img>
                <form className="form">
                      <input type="text"  placeholder="Phone number, username, or email" />
                      <input type="password" name="password" id="password" placeholder="Password" />
                    
                    <span className="button-box">
                      <button className="btn" type="submit" name="submit">Log in</button>
                    </span>
                    <div>______________or________________</div>
                    <div className="fec">
                    <div><p>Log in with Facebook</p></div>
                    <a className="forgot" href="">Forgot passworda?</a>
                </div>
                <div className="dont"><p>Don`t have an account <a href="#">Sign Up</a></p></div>
                <div className="app">
                <p>Get the app.</p>
                <div className="app-img">
                  <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8" />
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
                  
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png" />
                  </a>  
                </div>  
              </div>
                </form>
                </div>
    </div>
  )
}
