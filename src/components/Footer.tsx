import { PAGES } from '../utils/constants';
// CAMBIO ABSURDO

const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href={PAGES.HOME} className='nav-link px-2 text-body-secondary'>
              Inicio
            </a>
          </li>
          <li className='nav-item'>
            <a href={PAGES.ABOUT} className='nav-link px-2 text-body-secondary'>
              Acerca de
            </a>
          </li>
          <li className='nav-item'>
            <a
              href={PAGES.APPOINTMENT}
              className='nav-link px-2 text-body-secondary'
            >
              Agendar
            </a>
          </li>
        </ul>
        <p className='text-center text-body-secondary'>© 2025 Hospital</p>
      </footer>
    </div>
  );
};

export default Footer;
