import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Doctor } from '../types/data';
import Image from 'react-bootstrap/Image';
function About() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Doctor[]>('/db/doctors.json');
        console.log(response);

        if (response.data.length > 0) {
          setDoctors(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Equipo Médico</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit,
          cumque placeat non ex voluptatum illo vel natus rerum quam voluptate
          aliquid exercitationem iusto veniam architecto obcaecati itaque eos
          eius!
        </p>
      </div>
      <div>
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
            <p>{doctor.description}</p>
            <p>{doctor.services.join(', ')}</p>
            <p>{doctor.years}</p>
            <Image
              src={`assets/img/doctors/doctor_${doctor.id}.png`}
              alt={`${doctor.name} - ${doctor.specialty}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
