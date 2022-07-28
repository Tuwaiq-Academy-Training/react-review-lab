import { signups } from '../data';
// import { Post } from './Post';
import { Signup1 } from './Signup1'

export function Signups() {
	const SignupDivs = signups.map((signup) => <Signup1 signup={signup} />);

	return (
		<div className='signup' id=''>
			{SignupDivs}
		</div>
	);
}

