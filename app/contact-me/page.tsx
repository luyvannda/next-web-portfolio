import ContactForm from "@/components/contact/ContactForm";
import Profile from "@/components/contact/Profile";
import React from "react";

const ContactMePage = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="flex h-full w-screen flex-col items-center justify-center overflow-y-scroll bg-cover bg-center"
    >
      <Profile />

      <section className="pb-16 pt-8">
        {" "}
        <div
          style={{ backgroundImage: "url(atombg-comp.webp" }}
          className="relative w-full rounded-xl border border-white bg-cover bg-center lg:h-[60%]"
        >
          <div className="">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMePage;
