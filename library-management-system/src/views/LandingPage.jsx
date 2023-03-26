import React, { useRef } from "react";
import Header from "../components/Header";
import BodySectionOne from "../components/BodySectionOne";
import BodySectionTwo from "../components/BodySectionTwo";
import BodySectionThree from "../components/BodySectionThree";
import Footer from "../components/Footer";

export const LandingPage = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSectionContact = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToSectionAbout = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="landing-page">
      <Header
        scrollToSectionContact={scrollToSectionContact}
        scrollToSectionAbout={scrollToSectionAbout}
      />
      <BodySectionOne />
      <BodySectionTwo aboutRef = {aboutRef}/>
      <BodySectionThree />
      <Footer contactRef={contactRef} />
    </div>
  );
};
