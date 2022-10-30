import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Frontend from './components/frontend';
import Backend from './components/backend';
import Networking from './components/networking';
import Home from './components/home';

class App extends Component {
    
  //const [projectlist, setProject] = useState([{ id: 1},{ name: "Rahul"}])

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand bg-info rounded-3 px-2" to="/">Hackathon Ideas</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/frontend">Frontend</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/backend">Backend</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/networking">Networking</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/frontend' element={< Frontend />}></Route>
          <Route exact path='/backend' element={< Backend />}></Route>
          <Route exact path='/networking' element={< Networking />}></Route>
        </Routes>
      </Router>
    );
  }
}



export default App;
