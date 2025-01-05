import React, { useState } from 'react';
import type { Doctor } from '../types/data';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


interface FormAgendarProps {
  doctors: Doctor[];
}

const FormAgendar: React.FC<FormAgendarProps> = ({ doctors }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const specialties = [...new Set(doctors.map((doctor) => doctor.specialty))];
  const filteredDoctors = doctors.filter((doctor) => doctor.specialty === selectedSpecialty);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedDoctor || !appointmentDate) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert(`Cita agendada con ${selectedDoctor} el ${appointmentDate}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="specialty" className="form-label">
          Especialidad:
        </Form.Label>
        <Form.Select
          id="specialty"
          className="form-select"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          <option value="">Selecciona una especialidad</option>
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {filteredDoctors.length > 0 && (
        <Form.Group className="mb-3">
          <Form.Label htmlFor="doctor" className="form-label">
            Médico:
          </Form.Label>
          <Form.Select
            id="doctor"
            className="form-select"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Selecciona un médico</option>
            {filteredDoctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name} ({doctor.years} años de experiencia)
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      {selectedDoctor && (
        <Form.Group className="mb-3">
          <Form.Label htmlFor="date" className="form-label">
            Fecha de la cita:
          </Form.Label>
          <Form.Control
            type="date"
            id="date"
            className="form-control"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </Form.Group>
      )}

      <Button type="submit" className="btn btn-primary">
        Agendar cita
      </Button>
    </Form>
  );
};

export default FormAgendar;
