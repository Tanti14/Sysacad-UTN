import React from "react";
import { HomeLayout } from "../../layout/home/home_layout";
import { Navbar } from "../../components/navbar/navbar";
import { HeroSection } from "../../components/hero/hero_section";

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <HeroSection/>
      </HomeLayout>
    </>
  );
};
