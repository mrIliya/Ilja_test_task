import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context'
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'https://countries.trevorblades.com/'
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<AppProvider>
				<App />
			</AppProvider>
		</ApolloProvider>

	</React.StrictMode>,
	document.getElementById('root')
)
