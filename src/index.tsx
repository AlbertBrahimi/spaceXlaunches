// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx'; // Missions page
import Login from './Login.tsx'; // Login page
import client from './apolloCient.js'; // Import Apollo Client
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const Main = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/missions"
          element={
            <PrivateRoute>
              <App /> {/* Your protected missions page */}
            </PrivateRoute>
          }
        />
        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
