import  React from "react";

import Nav from "./navbar/nav";
import Banner from "./home/home";
import AboutUs from "./aboutUs/abus";
import ProWork from "./prowork/pwork";
import Services from "./services/ser";
import ContactUs from "./contactUs/conUs";
import Footer from "./footer/footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    
      <Nav />
      <Banner/>
      <AboutUs/>
      <Services/>
      <ProWork/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
