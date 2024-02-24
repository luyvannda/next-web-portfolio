import Certificate from "@/components/Certificate";
import ContactForm from "@/components/contactpage/ContactForm";
import ProfileCard from "@/components/contactpage/ProfileCard";
import React from "react";

const ContactMePage = () => {
  return (
    <main className="h-full w-screen overflow-x-hidden overflow-y-scroll">
      <div
        style={{ backgroundImage: "url(bg-3.jpg)" }}
        className="flex min-h-full w-screen flex-col items-center justify-center bg-cover bg-center"
      >
        <ProfileCard />

        <Certificate />

        <section className="pb-16 pt-8">
          {" "}
          <div
            style={{ backgroundImage: "url(atombg-comp.webp" }}
            className="relative h-full w-full rounded-xl border border-white bg-cover bg-center lg:h-[60%]"
          >
            <div className="">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactMePage;
