import { useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import axios from 'axios';
import { Doctor, Service } from '../types/data';
import HospitalImg from '../assets/img/hospital.jpg';

function Home() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Doctor[]>('/db/doctors.json');
        console.log(response);

        if (response.data.length > 0) {
          console.log('data len: ', response.data.length);
          setServices(
            response.data.map(({ specialty, services }) => {
              return { global: specialty, services };
            })
          );
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    //@ts-expect-error
    <Container fluid className='bg-info' style={{ '--bs-bg-opacity': 0.1 }}>
      <Container className='mt-5 pt-5 '>
        <Container className='d-flex flex-column justify-content-center align-items-center'>
          <h1 className='mt-5'>Inicio</h1>
          <p className='text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur fugit inventore nam quibusdam veniam voluptate ratione
            asperiores temporibus animi error rem, voluptatibus, soluta facere
            nisi obcaecati itaque eos. Dolorem, cupiditate!
          </p>
        </Container>

        <Container className='d-flex flex-column justify-content-center align-items-center'>
          <h1 className='my-3 text-black'>Nuestros Servicios</h1>
          <Carousel fade controls={false} interval={2000} variant='dark'>
            {services.map(({ global, services }, idx) => (
              <Carousel.Item
                key={idx}
                className=' d-flex flex-column justify-content-center align-items-center text-black'
              >
                <Image src={HospitalImg} height={300} />
                <h2>{global}</h2>
                {services.map((service, idx) => (
                  <p key={idx}>{service}</p>
                ))}
                <br />
                <br />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
