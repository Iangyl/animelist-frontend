import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Anime from 'pages/Anime';

function App() {
  return (
    <Routes>
      <Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="*" element={<Home />} />
      </Fragment>
    </Routes>
  );
}

export default App;
