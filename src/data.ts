interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
	description: string;
	imageUrl: string;
	date: Date;
	likeCount: number;
	comments: IComment[];
	username: string;
	userAvatarUrl: string;
}

export const posts: IPost[] = [
	{
		id: '1',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: `
		حياة الطلاب صارت اسهل مع خطة! شكرًا لكل رهيب ورهيبة شاركوا بتطويره💚

ثبتنا أسماء الرهيبين ووسائل للتواصل معهم في موقع خطة، شيكوا عليهم 😎
khotta.io`,
		imageUrl:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},
	/// post with my dog image
	{
		id: '2',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: 'This is my second post',
		imageUrl:
			'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: 'This is my second post',
		imageUrl:
			'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
];
export interface ILogin {
	id: string;
	imglogin: string;
	img_logo_instgram: string;
	moreway_option_login: string;
}
export const logins: ILogin[] =[ {
	id: '4',
	imglogin: 'url',
	img_logo_instgram: 'url',
	moreway_option_login: 'Log in with Facebook'

}]
///
export interface ISignup {
	id: string;
	imgsignup: string;
	img_logo_instgram: string;
	description1: string;
	description2: string;

}
export const signups: ISignup[] =[ {
	id: '4',
	imgsignup: 'url',
	img_logo_instgram: 'url',
	description1: 'Sign up to see photos and videos from your friends.',
	description2: `People who use our service may have uploaded your contact information to Instagram. Learn More

	By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .`

}]