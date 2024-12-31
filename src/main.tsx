import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Appointment from './pages/Appointment.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.tsx';
import { PAGES } from './utils/constants.ts';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={PAGES.HOME} element={<Home />} />
      <Route path={PAGES.ABOUT} element={<About />} />
      <Route path={PAGES.APPOINTMENT} element={<Appointment />} />
    </Routes>
  </BrowserRouter>
);
