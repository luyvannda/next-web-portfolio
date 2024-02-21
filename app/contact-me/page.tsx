import ContactForm from "@/components/ContactForm";
import Profile from "@/components/Profile";
import React from "react";

const ContactMePage = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center"
    >
      <div className="relative z-50">
        <Profile />
      </div>

      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="relative h-[60%] w-[80%] rounded-xl border border-white bg-cover bg-center"
      >
        <div className="absolute bottom-16 left-20 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
