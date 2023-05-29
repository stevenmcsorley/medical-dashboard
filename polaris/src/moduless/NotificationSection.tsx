import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NotificationCard from "../cmps/cards/NotificationCard";
import Container from "../cmps/containers/Container";
import { formatTimeNumeric, isWithinNextMinutes } from "../services/dateFormatService";
import styles from "./NotificationSection.module.css";

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

const NotificationSection = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointmentsData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/appointments");
        const data = await response.json();
        setAppointments(data.appointments);
      } catch (error) {
        throw new Error("Error fetching appointments data");
      }
    };

    // Fetch appointments initially
    fetchAppointmentsData();

    // Polling interval
    const intervalId = setInterval(fetchAppointmentsData, 5000); // Fetch every 5 seconds

    // Cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentTime = new Date();
  const filteredAppointments = appointments.filter((appointment) => {
    const startTime = new Date(appointment.startTime);
    return startTime > currentTime;
  });

  const sortedAppointments = filteredAppointments.sort((a, b) => {
    const startTimeA = new Date(a.startTime);
    const startTimeB = new Date(b.startTime);
    return startTimeA.getTime() - startTimeB.getTime();
  });

  const upcomingAppointments = sortedAppointments.slice(0, 3);

  return (
    <Container padding="1rem" margin="0 auto">
      <Router>
        {upcomingAppointments.map((appointment) => (
          <NotificationCard
            key={appointment.id}
            time={`${formatTimeNumeric(appointment.startTime)} - ${formatTimeNumeric(
              appointment.endTime
            )}`}
            title={appointment.type}
            subtitle={appointment.location}
            to={`/appointment/${appointment.id}`}
            className={
                isWithinNextMinutes(appointment.startTime, currentTime, 1)
                  ? styles["near-appointment"]
                  : styles["pending-appointment"]
              }
          />
        ))}
      </Router>
    </Container>
  );
};

export default NotificationSection;
