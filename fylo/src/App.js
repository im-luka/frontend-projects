import React from "react";
import Cover from "./components/Cover/Cover";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Productive from "./components/Productive/Productive";
import Subscription from "./components/Subscription/Subscription";
import Team from "./components/Team/Team";

const App = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <Features />
      <Productive />
      <Team />
      <Subscription />
      <Footer />
    </>
  );
};

export default App;
