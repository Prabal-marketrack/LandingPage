import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Team from './pages/Team';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { StateContext } from './context/StateContext';

const App = () => {
  return (
    <StateContext>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/team' element={<Team/>}/>
          </Routes>
        </Router>
      </div>
    </StateContext>
  );
};

export default App;