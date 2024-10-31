import React from "react";

import "../CSS(Pages)/teams.css";

import Footer from "./Components/Footer";
import About from "./Components/Teams/About";

// import VehiclecontainerEV from "./Components/Teams/VehiclecontainerEV";
import VehiclecontainerCV from "./Components/Teams/VehiclecontainerCV";
import VehiclecontainerTGW from "./Components/Teams/VehiclecontainerTGW";
import Routecomp from "./Components/RouteComp/Routecomp";
import TeamMembersCV from "./Components/Teams/TeamMembersCV";
import TeamMembersEV from "./Components/Teams/TeamMembersEV";
import TeamMembersTGW from "./Components/Teams/TeamMembersTGW";

function TeamsPage({ Title, Description, State }) {
  if (State === "CV") {
    var Route = "/zfr-cv";
    var LastRoutename = "Zfr-Cv";
    var heading = "Zhcet Formula Racing Combustion";
    var Rightsideimg =
      "https://drive.google.com/uc?id=1g9gNgmn8jXmJivpCNb98CLSObvoZ5zOM";
    var Description =
      "ZHCET Formula Racing, the formula-student racing team from ZHCET was established in the year 2013 to provide a testing ground for world-class engineers. The team of passionate undergraduate students from Aligarh Muslim University conceptualizes and fabricates a formula-style car and takes part in various national and international competitions throughout the year. Over the years, the team has recorded exponential growth in the Indian formula-student community.Being one of the fastest growing teams in the North Indian formula-student circuit, the team has consistently performed well at Formula Bharat, being the 6th and the only team from the northern region to complete the endurance test. Moreover, after being ranked in the top 10 consistently for the past three years, we were finally the winners of the Business Plan event at Formula Bharat 2022.";
  }

  if (State === "EV") {
    var Route = "/zfr-ev";
    var LastRoutename = "Zfr-Ev";
    var heading = "Zhcet Formula racing Electric";
    var Rightsideimg =
      "https://drive.google.com/uc?id=1Yhls6CWwvIo4m3MvEUS_uGTRPH-_XZER";
    var Description =
      "The students of the ZHCER Formula Racing Club launched ZFR Electric in 2021. It symbolizes a leap towards the future as the automobile industry gradually transitions to a low-pollution, environmentally friendly world of EVs. The club's objective is to give students who are interested in creating Formula Style Electric Vehicles a space to conceptualize the vehicle and participate in competitions both in India and abroad.  To date, the team has worked on establishing the conceptual design of the EV Powertrain with the aim to compete with the institute's maiden EV in the Formula Bharat 2024 competition.";
  }

  if (State === "TGW") {
    var Route = "tgw";
    var LastRoutename = "Tgw";
    var heading = "Team Green Warriors";
    var Rightsideimg =
      "https://drive.google.com/uc?id=1uYlomQWSH2UJ5id9j0LIl8n7Z_oipKWa";
    var Description =
      'A group of undergraduate students who were determined to revolutionize the transportation sector created Team Green Warriors in 2013. The team\'s goal is to create a three-wheeled hybrid vehicle to accommodate two passengers and their daily mobility needs. It should be aerodynamically designed with performance, safety, and ergonomic features, and it should also promote innovation and raise awareness of the need for environmentally friendly mobility options.The chapter got started in 2013 with the development of "STRYKE 1.0." Later, in 2021, the team created "Jackdaw," which earned them AIR 5 overall rank and AIR 1 in project planning at the SAENIS Efficycle 2021 Virtual Event. Finally, in 2022, the team won The Best Innovation Award at SAE-NIS EffiCycle, exemplifying their excellence in representing the university and bringing honor to the institution.This was done through continual innovation. With continuous evolution throughout the pandemic, the team is working on building a 4-wheeled electrically powered vehicle for its upcoming participation in 2023.';
  }

  return (
    <div className="maincontainer">
      <div>
        <Routecomp
          Heading={heading}
          LastRoutename={LastRoutename}
          Route={Route}
        />
      </div>

      {/* <UpperCV New={Title} />*/}
      <About Rightsideimg={Rightsideimg} Desc={Description} />
      {State === "EV" ? (
        ""
      ) : State === "CV" ? (
        <VehiclecontainerCV />
      ) : (
        <VehiclecontainerTGW />
      )}

      {State === "EV" ? (
        <div
          style={{
            width: "100%",
            color: "gray",
            fontStyle: "italic",
            padding: "40px",
            textAlign: "center",
          }}
        >
          To be updated soon
        </div>
      ) : State === "CV" ? (
        <TeamMembersCV />
      ) : (
        <TeamMembersTGW />
      )}
      <Footer />
    </div>
  );
}

export default TeamsPage;
