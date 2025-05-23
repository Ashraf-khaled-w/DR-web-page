import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import SecAbout from "../../components/SecAbout/SecAbout";
import SecServices from "../../components/SecServices/SecServices";


function Home() {
  return (
    <>
      <Header/>
      <SecAbout/>
      <SecServices/>
    </>
  );
}

export default Home;
