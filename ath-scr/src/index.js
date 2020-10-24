import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// NavBar (shows on every screen)
import NavBar from './navbar';

// Athlete Screen (welcome screen)
import AthleteScreen from './athleteScreen';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
  <NavBar />
  <AthleteScreen />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
