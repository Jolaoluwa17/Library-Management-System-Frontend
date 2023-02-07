import React from 'react'
import Header from "../components/Header"
import BodySectionOne from '../components/BodySectionOne'
import BodySectionTwo from '../components/BodySectionTwo'
import BodySectionThree from '../components/BodySectionThree'
import Footer from '../components/Footer'

export const LandingPage = () => {
  return (
    <div className="landing-page">
        <Header />
        <BodySectionOne />
        <BodySectionTwo />
        <BodySectionThree />
        <Footer />
    </div>
  )
}
