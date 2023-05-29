import React, { useEffect, useState } from "react";
import Grid from "../cmps/Grid";
import GridItem from "../cmps/GridItem";
import Container from "../cmps/containers/Container";
import CardSmall from "../cmps/cards/CardSmall";
import { FaUserInjured, FaUserMd, FaCalendarCheck, FaHeartbeat } from "react-icons/fa";


const DashboardSection = () => {
    const [totalPatients, setTotalPatients] = useState(0);
    const [totalDoctors, setTotalDoctors] = useState(0);
    const [totalAppointments, setTotalAppointments] = useState(0);
  
    useEffect(() => {
      fetchTotalPatients();
      fetchTotalDoctors();
      fetchTotalAppointments();
       // Polling interval
       const intervalId = setInterval(() => {
        fetchTotalAppointments();
      }, 5000); // Fetch every 5 seconds
  
      // Cleanup
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const fetchTotalPatients = async () => {
      // Make API call to fetch total patients count
      // Update the 'totalPatients' state with the fetched data
      // Replace the API call with your actual implementation
      const response = await fetch("http://localhost:8000/api/patients");
      const data = await response.json();
      setTotalPatients(data.patients.length);
    };
  
    const fetchTotalDoctors = async () => {
      // Make API call to fetch total doctors count
      // Update the 'totalDoctors' state with the fetched data
      // Replace the API call with your actual implementation
      const response = await fetch("http://localhost:8000/api/doctors");
      const data = await response.json();
      setTotalDoctors(data.doctors.length);
    };
  
    const fetchTotalAppointments = async () => {
      // Make API call to fetch total appointments count
      // Update the 'totalAppointments' state with the fetched data
      // Replace the API call with your actual implementation
      const response = await fetch("http://localhost:8000/api/appointments");
      const data = await response.json();
      const currentTime = new Date();
      const filteredAppointments = data.appointments.filter(
        (appointment: { startTime: string | number | Date; }) => new Date(appointment.startTime) < currentTime
      );
      setTotalAppointments(filteredAppointments.length);
    };
  
    return (
      <Container padding="1rem 1rem 2rem" margin="0 auto">
        <Grid columns={12} gaps="1rem" background="white">
          <GridItem lg={3} md={6} sm={12} xs={12}>
            <CardSmall
              icon={FaUserInjured}
              number={totalPatients}
              subtitle="Total Patients"
            />
          </GridItem>
          <GridItem lg={3} md={6} sm={12} xs={12}>
            <CardSmall
              icon={FaUserMd}
              number={totalDoctors}
              subtitle="Total Doctors"
            />
          </GridItem>
          <GridItem lg={3} md={6} sm={12} xs={12}>
            <CardSmall
              icon={FaCalendarCheck}
              number={totalAppointments}
              subtitle="Appointments"
            />
          </GridItem>
          <GridItem lg={3} md={6} sm={12} xs={12}>
            <CardSmall
              icon={FaHeartbeat}
              number={847}
              subtitle="Medical Status"
            />
          </GridItem>
        </Grid>
      </Container>
    );
  };
  
  export default DashboardSection;
  