import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Appointment from './pages/Appointment.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/appointment' element={<Appointment />} />
    </Routes>
  </BrowserRouter>
);
