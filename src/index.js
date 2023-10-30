import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
=======
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
=======
>>>>>>> ec7cc13 (Added signin/signup)
>>>>>>> 96887d7 (Added Signin and Signup)
import { Provider } from 'react-redux';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 96887d7 (Added Signin and Signup)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======
reportWebVitals();
=======
);
>>>>>>> ec7cc13 (Added signin/signup)
>>>>>>> 96887d7 (Added Signin and Signup)
