import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
//import App from './App';
import Header from './header'
import Main from './main'
import * as serviceWorker from './serviceWorker';

// NavBar (shows on every athlete screen)
import NavBar from './athleteNavbar';

// Athlete Screen
import AthleteScreen from './athleteScreen';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />

    {/* <NavBar />
    <AthleteScreen /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
