import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import NavBar from './pages/Nav';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import { fetchRockets } from './redux/rockets/rockets';
import retrieveRocket from './redux/rockets/api/fetchRockets';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRockets());
  console.log(retrieveRocket());
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
