import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Anime from 'pages/Anime';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/">
        <Anime />
      </Route>
    </Routes>
  );
}

export default App;
