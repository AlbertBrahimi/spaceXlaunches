import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import client from './apolloCient'; // Import Apollo Client
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
