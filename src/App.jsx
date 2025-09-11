"use client";

import NavBar from "./component/NavBar";
import JobsList from "./component/JobsList";
import Footer from "./component/Footer";
import { ContactUs } from "./component/ContactUs";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

export default function App() {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      { x: -100, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: "power1.inOut" }
    );
  }, []);

  return (
   <div className="bg-[#f0f5ff] font-header relative overflow-hidden">
  <NavBar />

  {/* Hero Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
    {/* Background Blur Top */}
    <div
      aria-hidden="true"
      className="absolute  inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    />

    {/* Left Content */}
    <div id="home" className="mx-auto max-w-2xl  py-38 lg:py-60 lg:px-20 lg:ml-35 text-center lg:text-left">
      <h1
        id="header"
        className="text-3xl her sm:text-6xl  font-semibold capitalize text-[#02101b] font-body text-balance mt-2 lg:mt-3"
      >
        Get <span className="text-[#008eca]">employed</span>  from the  <span className="text-[#008eca]">comfort </span> of your <span className="text-[#008eca]"> home </span>
      </h1>
       <br/> 
      <p className="mt-4 m-8 lg:m-0  text-sm p text-[#001b30b2] leading-relaxed">
        Risingstar Recruitment Agency connects you with job opportunities across Nigeria, 
        making it easy to apply and get hired. 
      </p>

     

      <div className="mt-10  flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
        {["Manager", "Cook", "Driver", "Teacher"].map((role) => (
          <a key={role} href="#" className="text-sm text-gray-900 ">
            {role}
          </a>
        ))}
      </div>
    </div>

    

    {/* Right Image */}
    <div className="flex-1 flex justify-center px-4">
      <img
        src="https://i.ibb.co/twqh0zm6/Cartoon-of-Simon-Baker-The-Mentalist-s-actor-Photoroom.png"
        alt="Cartoon"
        className="w-45 md:w-64 lg:w-100 xl:w-80 lg:-mt-8 -mt-40 object-contain"
      />
    </div>
  </div>

  {/* Tagline Bar */}
  <div className="bg-[#02101b] text-center flex justify-center items-center text-[#f0f5ff] w-full h-20 -mt-12 lg:-mt-48 relative z-10">
    <h2 className="tracking-wide font-semibold p-6">
      SWIFT || RELIABLE || REAL || TRUSTED
    </h2>
  </div>

  <JobsList />
  <ContactUs/>
  <Footer />
</div>

  );
}
