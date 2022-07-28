import './Login.css'

export function Login() {
    return <>

    <div className="container">
    <div className="main-container">
        <div className="main-content">
            <div className="slide-container">
                <div className="slide-content" id="slide-content">
                    < img 
                    src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="slide image" className="active"></img>
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="slide image"></img>
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="slide image"></img>
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="slide image"></img>
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="slide image"></img>
                </div>
            </div>
            <div className="form-container">
                <div className="form-content box">
                    <div className="logo">
                        <img src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' alt="Instagram logo" className="logo-light"></img>
                        <img src="../../images/logo-dark.png" alt="Instagram logo" className="logo-dark"></img>
                    </div>
                    <div className="signin-form" id="signin-form">
                        <div className="form-group">
                            <div className="animate-input">
                                <span>
                                    Phone number, username or email
                                </span>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="animate-input">
                                <span>
                                    Password
                                </span>
                                <input type="password"></input>
                                <button>Show</button>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="btn-login" id="signin-btn" disabled>
                                Log In
                            </button>
                        </div>
                        <div className="divine">
                            <div></div>
                            <div>OR</div>
                            <div></div>
                        </div>
                        <div className="btn-group">
                            <button className="btn-fb">
                                <img src="https://www.bing.com/th?id=OIP.7My9Mg_dkUAAdiVjdbugkgHaHP&w=252&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""></img>
                                <span>Log in with Facebook</span>
                            </button>
                        </div>
                        <a href="#" className="forgot-pw">Forgot password?</a>
                    </div>
                </div>
                <div className="box goto">
                    <p>
                        Don't have an account?
                        <a href="#">Sign up</a>
                    </p>
                </div>

                <div className="app-download">
                    <p>Get the app.</p>
                    <div className="store-link">
                        <a href="#">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="app store"></img>
                        </a>
                        <a href="#">
                            <img src= "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="google play"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer">
        <div className="links">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Top Accounts</a>
            <a href="#">Hashtags</a>
            <a href="#">Locations</a>
            <a href="#" id="darkmode-toggle">Darkmode</a>
        </div>
        <div className="copyright">
            © 2021 Instagram from Facebook
        </div>
    </div>
</div>
</>



}

