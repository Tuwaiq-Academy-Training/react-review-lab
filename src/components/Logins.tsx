import {  logins } from '../data';
// import { Post } from './Post';
import { Login } from './Login'

export function Logins() {
	const LoginDivs = logins.map((login) => <Login login={login} />);

	return (
		<div className='login' id=''>
			{LoginDivs}
		</div>
	);
}
