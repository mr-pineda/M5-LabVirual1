import React, { useState } from 'react';
import type { Doctor } from '../types/data';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface FormAgendarProps {
  doctors: Doctor[];
}

const FormAgendar: React.FC<FormAgendarProps> = ({ doctors }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const specialties = [...new Set(doctors.map((doctor) => doctor.specialty))];
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.specialty === selectedSpecialty
  );
  const selectedDoctor = doctors.find(
    (doctor) => doctor.id === selectedDoctorId
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !selectedSpecialty ||
      !selectedDoctorId ||
      !selectedService ||
      !appointmentDate ||
      !selectedTime
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert(
      `Cita agendada con ${selectedDoctor?.name} (${selectedDoctor?.specialty}), Servicio: ${selectedService}, el ${appointmentDate} a las ${selectedTime}`
    );
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className='d-flex flex-column align-items-center'
    >
      {/* Selección de Especialidad */}
      <Form.Group className='mb-3 w-100'>
        <Form.Label className='fw-bold' htmlFor='specialty'>
          Especialidad:
        </Form.Label>
        <Form.Select
          id='specialty'
          // className='w-100'
          value={selectedSpecialty}
          onChange={(e) => {
            setSelectedSpecialty(e.target.value);
            setSelectedDoctorId('');
            setSelectedService('');
            setSelectedTime('');
          }}
        >
          <option value=''>Selecciona una especialidad</option>
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Selección de Médico */}
      {selectedSpecialty && (
        <Form.Group className='mb-3 w-100'>
          <Form.Label className='fw-bold' htmlFor='doctor'>
            Médico:
          </Form.Label>
          <Form.Select
            id='doctor'
            value={selectedDoctorId}
            onChange={(e) => {
              setSelectedDoctorId(e.target.value);
              setSelectedService('');
              setSelectedTime('');
            }}
          >
            <option value=''>Selecciona un médico</option>
            {filteredDoctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} ({doctor.years} años de experiencia)
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      {/* Selección de Servicio */}
      {selectedDoctor && selectedDoctor.services.length > 0 && (
        <Form.Group className='mb-3 w-100'>
          <Form.Label className='fw-bold' htmlFor='service'>
            Servicio:
          </Form.Label>
          <Form.Select
            id='service'
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value=''>Selecciona un servicio</option>
            {selectedDoctor.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      {/* Selección de Horario */}
      {selectedService &&
        selectedDoctor &&
        selectedDoctor.availableTimes.length > 0 && (
          <Form.Group className='mb-3 w-100'>
            <Form.Label className='fw-bold' htmlFor='time'>
              Horario disponible:
            </Form.Label>
            <Form.Select
              id='time'
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value=''>Selecciona un horario</option>
              {selectedDoctor.availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        )}

      {/* Selección de Fecha */}
      {selectedTime && (
        <Form.Group className='mb-3 w-100'>
          <Form.Label className='fw-bold' htmlFor='date'>
            Fecha de la cita:
          </Form.Label>
          <Form.Control
            type='date'
            id='date'
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </Form.Group>
      )}

      <Button
        type='submit'
        variant='primary'
        disabled={!selectedTime || !appointmentDate}
      >
        Agendar cita
      </Button>
    </Form>
  );
};

export default FormAgendar;
