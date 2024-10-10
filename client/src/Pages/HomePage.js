import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "../Component/Countdown.js";
import CardSlider from "../Component/CardSlider.js";
import FAQ from "../Component/FAQ";
import ContactForm from "../Component/contactform";
import GallerySection from "../GallerySection.js";
import Scroll from "../Component/Scrollcirc.js";
import BubbleRevealText from "../Component/BubbleRevealText.js";
import CaptionHp from "../Component/HomeCaption.js";

export default function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center bg-black text-gray-100 shadow-inner overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
      }}
    > <div  className="w-full items-center justify-center bg-custom-bg bg-no-repeat ">
      <BubbleRevealText />
      <div className="flex items-center">
      <p className="lg:pb-40 pb-5 lg:px-40 px-5 lg:pt-20 pt-5">
      <CaptionHp />
      </p>
      </div>
      </div>
      <Countdown />
      <Scroll />
      <CardSlider />
      <FAQ />
      <GallerySection />
      <ContactForm />
      {/* Hero and Footer can be added here if needed */}
    </div>
  );
}
