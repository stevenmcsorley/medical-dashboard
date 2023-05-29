import React, { useState } from "react";
import styles from "./Tabs.module.css";

import Grid from "../Grid";
import GridItem from "../GridItem";
import Title from "../typografy/Title";
import Container from "../containers/Container";
import SortByMonth from "../filters/SortByMonth";
import SimpleAreaChart from "../charts/SimpleAreaChart";
import SimpleBarChart from "../charts/SimpleBarChart";
import SimpleLineChart from "../charts/SimpleLineChart";

import Patients from "../../moduless/Patients";

interface TabData {
  id: string;
  title: string;
}

interface TabsProps {
  tabs: TabData[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [sortType, setSortType] = useState("");

  const handleSortChange = (sortType: string) => {
    setSortType(sortType);
  };

  return (
    <div>
      <ul className={styles.tabs}>
        <Grid columns={12} gaps="1rem" background="white">
          <GridItem xl={2} lg={12} md={12} sm={12} xs={12}>
            <li>
              <Title level={6}>Activity</Title>
            </li>
          </GridItem>
          {tabs.map((tab) => (
            <GridItem key={tab.id} xl={2} lg={12} md={12} sm={12} xs={12}>
              <li
                className={`${styles.tab} ${
                  tab.id === activeTab ? styles["tab--active"] : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </li>
            </GridItem>
          ))}
          <li>
            <GridItem xl={2} lg={12} md={12} sm={12} xs={12}>
              <SortByMonth sortType={sortType} onChange={handleSortChange} />
            </GridItem>
          </li>
        </Grid>
      </ul>
      <div>
        <Container padding="1rem 0 0" margin="0 auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={{ display: tab.id === activeTab ? "block" : "none" }}
            >
              {tab.id === activeTab && (
                <>
                  {tab.id === "patients" && (
                    <Patients sortType={sortType} />
                  )}
                  {tab.id === "doctors" && (
                    <SimpleLineChart sortType={sortType} />
                  )}
                  {tab.id === "appointments" && (
                    <SimpleBarChart sortType={sortType} />
                  )}
                  {tab.id === "medical-status" && (
                    <SimpleLineChart sortType={sortType} />
                  )}
                </>
              )}
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Tabs;
