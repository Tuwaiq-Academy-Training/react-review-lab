
// import "../style/App.css";

    export function Login(){

return(

<div id="wrapper">
  <div className="main-content">
    <div className="header1">
      <img src="https://i.imgur.com/zqpwkLQ.png" />
    </div>
    <div className="l-part">
      <input type="text" placeholder="Username" className="input-1" />
      <div className="overlap-text">
        <input type="password" placeholder="Password" className="input-2" />
        {/* <a href="https://www.instagram.com/">Forgot?</a> */}
      </div>
      <div className="h3">--------------------OR-------------------</div>
      <input type="button" value="Log in" className="btn" />
      <a className="h3" href="https://www.instagram.com/">Forgot?</a>
    </div>
  </div>
  <div className="sub-content">
    <div className="s-part">
      Don't have an account?<a href="https://www.instagram.com/">Sign up</a>
   
    </div>
  </div>

  {/* <div>
       <p> Get the app:</p>
    </div> */}

<div className="app">
              <span>Get the app</span>
              <div className="appIcon">
                

   <a href=""> <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png' ></img></a>
   
<a href=""><img src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png'></img></a>
  </div>
  </div>
</div>

);
    }
