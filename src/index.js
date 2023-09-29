import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import LoadingContextProvider from './contexts/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <LoadingContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </LoadingContextProvider>
  // </React.StrictMode>
);
