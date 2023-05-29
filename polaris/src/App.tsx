import React from "react";
import "./designTokens.css";
import { BrowserRouter as Router } from "react-router-dom";

import Grid from "./cmps/Grid";
import GridItem from "./cmps/GridItem";

import Title from "./cmps/typografy/Title";



// import Button from "./cmps/buttons/Button";
import Sidebar from "./cmps/sidebars/Sidebar";

import PieChartWithPaddingAngle from "./cmps/charts/PieChartWithPaddingAngle";
import PieChartWithPaddingAngleSimple from "./cmps/charts/PieChartWithPaddingAngleSimple";
import OverallPerformanceChart from "./cmps/charts/OverallPerformanceChart";

import Header from "./cmps/headers/Header";

import Logo from "./cmps/Logo";
// import Logo from './cmps/Logo';
import Navigation from "./cmps/navs/Nav";

import Tabs from "./cmps/tabs/Tabs";

import Container from "./cmps/containers/Container";
import NotificationSection from "./moduless/NotificationSection";
import DashboardSection from "./moduless/DashboardSection";

function App() {
  const tabs = [
    { id: "patients", title: "Patients" },
    { id: "doctors", title: "Doctors" },
    { id: "appointments", title: "Appointments" },
    { id: "medical-status", title: "Medical Status" },
  ];


  return (
    <div className="App">
      <Grid columns={12} gaps="1rem" background="white">
        <GridItem lg={2} md={12} sm={12} xs={12}>
          <Sidebar>
            <Router>
              <Container padding="1rem" margin="0 auto">
                <Logo src="logo.png" alt="Medical Logo" />
              </Container>
              <Container padding="1rem 0rem" margin="0 auto">
                <Navigation orientation="vertical" />
              </Container>
            </Router>
          </Sidebar>
        </GridItem>
        <GridItem lg={10} md={12} sm={12} xs={12}>
          <Container padding="1rem" margin="0 auto">
            <Header></Header>
          </Container>
          <DashboardSection />
          <Grid columns={12} gaps="1rem" background="white">
            <GridItem lg={9} md={12} sm={12} xs={12}>
              <Container padding="0" margin="0">
                <Tabs tabs={tabs} />
              </Container>
              <Container padding="0" margin="0">
                <Grid columns={12} gaps="1rem" background="white">
                  <GridItem lg={6} md={12} sm={12} xs={12}>
                  <Container padding="1rem 2rem" margin="0 auto">
                  <Title level={6}>Age of patient</Title>
                    <PieChartWithPaddingAngle />
                    </Container>
                  </GridItem>
                  <GridItem lg={6} md={12} sm={12} xs={12}>
                  <Container padding="1rem 2rem" margin="0 auto">
                  <Title level={6}>Gender</Title>
                  </Container>
                    <PieChartWithPaddingAngleSimple />
                  </GridItem>
                </Grid>
              </Container>
            </GridItem>
            <GridItem lg={3} md={12} sm={12} xs={12}>
              <Container padding="0rem 1rem 1rem" margin="0 auto">
                <Title level={6}>Upcoming Appointments</Title>
              </Container>
              {/* <Container padding="1rem" margin="0 auto">
                <Router>
                  <NotificationCard
                    time="3:30 PM - 4:00 PM"
                    title="Dentist Appointment"
                    subtitle="Clinic B, City Dental"
                    to="/appointment/2"
                  />

                  <NotificationCard
                    time="9:00 AM - 9:30 AM"
                    title="Meeting with Dr. Johnson"
                    subtitle="Conference Room 3, Main Building"
                    to="/appointment/3"
                  />

                  <NotificationCard
                    time="1:45 PM - 2:00 PM"
                    title="MRI Scan"
                    subtitle="Radiology Department, Blue Hospital"
                    to="/appointment/4"
                  />
                </Router>
              </Container> */}
              <NotificationSection />
              <Container padding="1rem" margin="0 auto">
            
                <Title level={6}>Performance</Title>
             
                <OverallPerformanceChart />
              </Container>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
