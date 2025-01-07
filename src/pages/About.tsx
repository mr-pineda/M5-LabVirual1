import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Doctor } from '../types/data';
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  Spinner,
} from 'react-bootstrap';

function About() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const fetchData = async () => {
    setDoctors([]);

    // Fake loading time
    setTimeout(async () => {
      try {
        const response = await axios.get<Doctor[]>('/db/doctors.json');
        console.log(response);

        if (response.data.length > 0) {
          setDoctors(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    //@ts-expect-error
    <Container fluid className='bg-info' style={{ '--bs-bg-opacity': 0.1 }}>
      <Container className='mt-5 pt-5 d-flex flex-column align-items-center'>
        <Container className='d-flex flex-column align-items-center'>
          <h1 className='mt-5 mb-4 text-center'>Equipo Médico</h1>
          <p className='text-center mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit,
            cumque placeat non ex voluptatum illo vel natus rerum quam voluptate
            aliquid exercitationem iusto veniam architecto obcaecati itaque eos
            eius!
          </p>
          <Button className='mx-auto mb-5' onClick={fetchData}>
            Recargar lista
          </Button>
        </Container>
        {doctors.length > 0 ? (
          <Row>
            {doctors.map((doctor) => (
              <Col key={doctor.id} sm={12} md={6} lg={4} className='mb-4'>
                <Card>
                  <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      {doctor.specialty}
                    </Card.Subtitle>
                    <Card.Text>{doctor.description}</Card.Text>
                    <Card.Text>
                      <strong>Servicios: </strong>
                      {doctor.services.join(', ')}
                    </Card.Text>
                    <Card.Text>
                      <strong>Años de experiencia: </strong>
                      {doctor.years}
                    </Card.Text>
                    <Image
                      src={`assets/img/doctors/doctor_${doctor.id}.png`}
                      alt={`${doctor.name} - ${doctor.specialty}`}
                      fluid
                      className='mb-3 rounded'
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Spinner animation='grow' />
        )}
      </Container>
    </Container>
  );
}

export default About;
