import { Container, Nav, Navbar } from 'react-bootstrap';
import { PAGES } from '../utils/constants';
import { Button, Image } from 'react-bootstrap';
import '../assets/styles/styles.css';

const Header = () => {
  return (
    <>
      {/* Navigation TO-DO: Agregar fixed-top cuando se logre achicar header*/}
      <div className='container_nav'>
        <div className='B-top-item d-block'>
          <ul className='nav navbar-expand-md'>
            <li className='container m-4 d-none d-md-block'>
              <p className='nav-info me-auto d-sm-none d-md-block d-lg-block' aria-current="page">
                <img src="assets/img/telephone-fillB.png" alt="Mesa central, reserva de horas" />
                Mesa central y reserva de horas 2 2222 2222
              </p>
            </li>
            <Button className='btn btn-primary ms-auto m-2'>
              <Nav.Link className='text-white' href={PAGES.APPOINTMENT}>Reserva de horas</Nav.Link>
            </Button>
          </ul>
        </div>

        <Navbar expand='lg' className='navbar navbar-expand-lg bg-body-tertiary'>
          <Container fluid>
            <Navbar.Brand href={PAGES.HOME}>
              <Image src='../../public/assets/img/Logo--principal.png' alt='Hospital Nacional' className='logo-principal' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
              <Nav>
                <Nav.Link href={PAGES.HOME}>Inicio</Nav.Link>
                <Nav.Link href={PAGES.ABOUT}>Equipo</Nav.Link>
                <Nav.Link href={PAGES.CONTACT}>Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
