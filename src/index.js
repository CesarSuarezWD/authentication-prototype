import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="tutosuarez.us.auth0.com"
			clientId="AMyzA9GX3TpICFB7n6yh4cKhBXAu8DiE"
			redirectUri={`${window.location.protocol}//${window.location.host}${window.location.pathname}`} // El protocol es el protocolo https:, luego viene doble slash (//), el host es cesarsuarezwd.github.io y el path authentication-prototype
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
