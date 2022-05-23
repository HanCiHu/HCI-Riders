import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CautionScreen from './components/caution';
import CourseScreen from './components/course';
import SignScreen from './components/sign';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/course/*" element={<CourseScreen />} />
        <Route path="/caution/*" element={<CautionScreen />} />
        <Route path="/*" element={<SignScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
