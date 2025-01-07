import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function ContactPage() {
  return (
    //@ts-expect-error
    <Container fluid className='bg-info' style={{ '--bs-bg-opacity': 0.1 }}>
      <Container className='contact-container mt-5 pt-5'>
        <h1 className='text-center mt-5 mb-4'>Contáctanos</h1>
        <Row>
          {/* Columna 1: Formulario */}
          <Col md={6} className='form-column'>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label className='fw-bold'>Nombre</Form.Label>
                <Form.Control type='text' placeholder='Nombre y Apellido' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label className='fw-bold'>Correo electrónico</Form.Label>
                <Form.Control type='email' placeholder='nombre@ejemplo.com' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label className='fw-bold'>Mensaje</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Enviar
              </Button>
            </Form>

            <p style={{ margin: '20px' }}>Mesa Central 2 2222 2222</p>
            <p style={{ margin: '20px' }}>Cardiología Anexo 101</p>
            <p style={{ margin: '20px' }}>Pediatría Anexo 102</p>
            <p style={{ margin: '20px' }}>Neurología Anexo 103</p>
            <p style={{ margin: '20px' }}>
              Ginecología y Obstetricia Anexo 104
            </p>
            <p style={{ margin: '20px' }}>Ortopedía Anexo 105</p>
            <p style={{ margin: '20px' }}>Oftalmología Anexo 106</p>
          </Col>

          {/* Columna 2: Mapa */}
          <Col md={6} className='map-column'>
            <h2 style={{ margin: '20px' }}>Ubicación</h2>
            <div
              className='map-container'
              style={{ height: '450px', width: '100%', margin: '20px' }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.475600983201!2d-70.62689078851422!3d-33.43691357328405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c586d20d8f53%3A0xedac6c086d2b9445!2sHospital%20del%20Salvador!5e0!3m2!1ses-419!2scl!4v1736130162544!5m2!1ses-419!2scl'
                width='100%' // Esto asegura que el iframe ocupe el 100% del ancho de su contenedor
                height='100%' // Lo mismo con la altura (se ajustará a 450px gracias al estilo en el contenedor)
                style={{ border: 0 }}
                allowFullScreen={true} // Correcto en JSX
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade' // Especifica la política de referencia
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactPage;
