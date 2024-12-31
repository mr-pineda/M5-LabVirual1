import { Container, Nav, Navbar } from 'react-bootstrap';
import { PAGES } from '../utils/constants';

const Header = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href={PAGES.HOME}>INSERTE-LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href={PAGES.HOME}>Inicio</Nav.Link>
            <Nav.Link href={PAGES.ABOUT}>Equipo</Nav.Link>
            <Nav.Link href={PAGES.APPOINTMENT}>Agenda Hora</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
