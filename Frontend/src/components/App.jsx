import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Main from './Main';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
