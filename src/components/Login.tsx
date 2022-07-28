export function Login() {
	return (
		<>
			<div className='login'>
				<img
					id='limg'
					src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png'
					alt=''
				/>
				<div className='login-container'>
					<div className='login-form'>
						<img
							src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
							alt=''
						/>

						<input id='user' type='text' placeholder='username' />
						<input id='pass' type='password' placeholder='password' />
						<button id='log-btn' type='submit'>
							Login
						</button>

						<p id='forget'>forget password?</p>
					</div>
					<div className='dont'>
						<p>Don't have an account?</p>
						<p>Sign up</p>
					</div>
					<div className='getapp'>
						<p>Get the app</p>
						<div className='m'>
							<img
								src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
								alt=''
							/>
							<img
								src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
