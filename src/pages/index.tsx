import Cards from "@/components/cards";
import React from "react";
import Header from '../components/header/header';
import homeStyle from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={homeStyle.home}>
      <Header />
      <Cards />
    </div>
  )
}
