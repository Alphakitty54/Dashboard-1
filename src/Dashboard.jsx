import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import ScheduleContent from "./components/ScheduleContent";
import ServiceContent from "./components/ServiceContent";
// Import OtherContent if you have it
// import OtherContent from "./components/OtherContent";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    if (tab === "schedule" || tab === "service") {
      setActiveTab(tab);
    }
  };

  let content = null;

  switch (activeTab) {
    case "schedule":
      content = <ScheduleContent />;
      break;

    case "service":
     content = <ServiceContent />;
    break;
    default:
      content = <div></div>;
  }

  return (
    <div className='container'>
      <Navbar />
      <Container> 
   <Menubar onTabChange={handleTabChange} activeTab={activeTab} />
        {content}
      </Container>
      <Footer />
    </div>
  );
}

export default Dashboard;
