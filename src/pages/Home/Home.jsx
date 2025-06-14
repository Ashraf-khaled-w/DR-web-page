import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import SecAbout from "../../components/SecAbout/SecAbout";
import SecServices from '../../components/SecService/SecService'

function Home() {
  return (
    <>
    <div>
      <Header/>
      <SecAbout/>
      <SecServices/>
    </div>
      
    </>
  );
}

export default Home;
