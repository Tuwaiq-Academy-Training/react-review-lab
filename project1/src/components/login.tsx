
export function Login() {

	return (

       
  
    <div className="section-all">

      <div className="main"/>
      
      <div><img className="po" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png" width={180} /></div>
     

            <div className="content">
              <div className="login-box">
                <div className="header">
                  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" width="200"/>
                </div> 
                <div className="form-wrap">
                  <form className="form">

                    <div className="input-box">
                     <input  type="text" name="name " placeholder="enter your name" />
                    </div>  

                    <div className="input-box">
                    <input  type="password" name="password " placeholder="enter your password" />
                    </div>  

                    <span className="button-box">
                      <button className="btn" type="submit" name="submit">Log in</button>
                    </span>  

                    <a className="forgot" href='#'>Forgot password?</a>
                  </form>
                </div>   
              </div>  

              <div className="login-box">
                <p className="text">Don't have an account?<a href="#">Sign up</a></p>
              </div>  </div>

</div>


	)
}