import React, { Fragment } from "react";
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Movies from './components/Movies';
import Games from './components/Games';
import Comics from './components/Comics';
import Home from './components/Home';
import Admin from './components/Admin';
import { useParams } from "react-router-dom";


export default function App() {
  return (
    <Router>
    <div className='container'>
      <div className='row'>
        <h1 className='mt-3'>
          Backlog Buddy
        </h1>
        <hr className='mb-3'></hr>
      </div>

      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <ul className='list-group'>
              <li className='list-group-item'>
                <Link to="/">Home</Link>
              </li>
              <li className='list-group-item'>
                <Link to="/movies">Movies</Link>
              </li>
              <li className='list-group-item'>
                <Link to="/games">Games</Link>
              </li>
              <li className='list-group-item'>
                <Link to="/comics">Comics</Link>
              </li>
              <li className='list-group-item'>
                <Link to="/admin">Manage Catalogue</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className= "col-md-10">
          <Switch>
            <Route path="/movies/:id">
              <Movie />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/comics">
              <Comics />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

function Movie() {
  let { id } = useParams();

  return <h2>Movie id {id}</h2>
}