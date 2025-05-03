import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from 'home/Home';
import Main from 'main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inicio" element={<Main />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
