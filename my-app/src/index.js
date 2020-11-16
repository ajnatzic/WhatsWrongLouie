import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

const SuperUser = lazy(() => import('./main'));
const User = lazy(() => import('./athleteScreen'));

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={SuperUser}/>
        <Route path="/student" component={User}/>
      </Switch>
    </Suspense>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
