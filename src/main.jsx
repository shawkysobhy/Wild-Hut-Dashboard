import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ErrorFallBack from './ui/ErrorFallBack.jsx';
import { ErrorBoundary } from 'react-error-boundary';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallBack}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
