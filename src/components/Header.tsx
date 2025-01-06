import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { PAGES } from '../utils/constants';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar
      expand='lg'
      className='navbar navbar-expand-lg bg-body-secondary fixed-top'
    >
      <Container fluid>
        <Row className='w-100'>
          <Col className='d-flex align-items-center justify-content-center justify-content-lg-start'>
            <Navbar.Brand
              href={PAGES.HOME}
              className='d-flex flex-row align-items-center'
            >
              <Image
                src='../../public/assets/img/hlogo.svg'
                alt='Hospital Nacional'
                height={50}
              />
              <h2 className='d-none d-lg-block'>Hospital Nacional</h2>
            </Navbar.Brand>
          </Col>
          <Col className='d-flex align-items-center justify-content-center justify-content-lg-end'>
            <Button className='btn btn-primary m-2'>
              <Nav.Link className='text-white' href={PAGES.APPOINTMENT}>
                Agenda tu Hora
              </Nav.Link>
            </Button>
          </Col>
        </Row>
        <Row className='w-100'>
          <Col className='d-flex justify-content-center'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
          </Col>
        </Row>
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href={PAGES.HOME}>Inicio</Nav.Link>
            <Nav.Link href={PAGES.ABOUT}>Equipo</Nav.Link>
            <Nav.Link href={PAGES.CONTACT}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
