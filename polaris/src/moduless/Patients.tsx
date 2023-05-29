import React, { useEffect, useState } from 'react';
import PatientsByCityChart from '../cmps/charts/PatientsByCityChart';

interface PatientProps {
    sortType: string;
  }
  

  interface Appointment {
    id: string;
    clinicId: string;
    doctorId: string;
    startTime: string;
    endTime: string;
    type: string;
    location: string;
    patientId: string;
    status: string;
  }

const Patients = ({ sortType }: PatientProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointmentsChartData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/appointments');
          const data = await response.json();
          setAppointments(data.appointments);
        } catch (error) {
          console.error('Error fetching appointments data:', error);
        }
      };

      fetchAppointmentsChartData();
     // Fetch appointments initially
     fetchAppointmentsChartData();

     // Polling interval
     const intervalId = setInterval(fetchAppointmentsChartData, 5000); // Fetch every 5 seconds
 
     // Cleanup
     return () => {
       clearInterval(intervalId);
     };
   }, []);

  const currentTime = new Date();
  const filteredAppointments = appointments.filter((appointment) => {
    const startTime = new Date(appointment.startTime);
    return startTime < currentTime;
  });

  const sortedAppointments = filteredAppointments.sort((a, b) => {
    const startTimeA = new Date(a.startTime);
    const startTimeB = new Date(b.startTime);
    return startTimeA.getTime() - startTimeB.getTime();
  });


  return (
    <div>
      <PatientsByCityChart sortType={sortType} appointments={sortedAppointments} />
      {/* Add other components or content related to patients */}
    </div>
  );
};

export default Patients;
