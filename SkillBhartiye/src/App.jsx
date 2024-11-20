import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Filter from "./Components/filter/Filter";
import ReviewCard from "./Components/reviewCard/ReviewCard";
import Footer from "./Components/footer/Footer";
import FreelancerCard from "./Components/freelancerCard/FreelancerCard";
import TestimonialCard from "./Components/testimonialCard/TestimonialCard";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Filter />
      <TestimonialCard />
      <FreelancerCard />
      <ReviewCard />
      <Footer />
    </>
  );
}

export default App;