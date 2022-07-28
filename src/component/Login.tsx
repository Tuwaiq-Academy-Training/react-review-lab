

export function LoginPage(){
    return(
        <>
    <div className="box">
        <div>
        <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png" alt="ghg" className="box-img" />
        </div>
        <div>
     <div id="wrapper">
      <div className="main-content">
        <div className="header">
           <h1 className="header-title">T9aweer</h1>
        </div>
        {/* <div className="container2"> */}
        <div>
    <div className="input-group">
      <input type="text" placeholder="Username" className="input-1" />
      <div className="overlap-text">
        <input type="password" placeholder="Password" className="input-2" />
        <a href="#">Forgot?</a>
      </div>
      <input type="button" value="Log in" className="btn" />
    </div>
  <div className="sub-content">
    <div className="s-part">
      Don't have an account?<a href="#">Sign up</a>
    </div>
  </div>
 </div>
 </div>
</div>
    </div>
    </div>
    {/* </div> */}
        </> 
    );
}