import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch -> Routes로 변경
import Start from './pages/start';
import Home from './pages/home';
import CreateDiary from './pages/createDiary'
import WriteDiary from './pages/writeDiary'
import DownloadDiary from './pages/downloadDiary'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createDiary" element={<CreateDiary />} />
        <Route path="/writeDiary" element={<WriteDiary />} />
        <Route path="/downloadDiary" element={<DownloadDiary />} />
      </Routes>
    </Router>
  );
};

export default App;
