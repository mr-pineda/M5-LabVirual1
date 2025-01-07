import { useEffect, useState } from 'react';
import axios from 'axios';
import FormAgendar from '../components/Form';
import type { Doctor } from '../types/data';
import { Container } from 'react-bootstrap';

function Appointment() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Doctor[]>('/db/doctors.json'); // Ruta del archivo JSON
        setDoctors(response.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setError('Error al cargar los datos de los médicos.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    //@ts-expect-error
    <Container fluid className='bg-info' style={{ '--bs-bg-opacity': 0.1 }}>
      <Container className='mt-5 pt-5 container'>
        <h1 className='mt-5 mb-4 text-center'>Agendar una Cita Médica</h1>
        <FormAgendar doctors={doctors} />
      </Container>
    </Container>
  );
}

export default Appointment;
