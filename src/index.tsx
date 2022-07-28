import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { LoginPage } from './routes/login';
import { SignPage } from './routes/signup';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<LoginPage/>} />
			<Route path='/signup' element={<SignPage/>} />
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
