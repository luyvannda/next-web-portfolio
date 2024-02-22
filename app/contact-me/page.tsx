import ContactForm from "@/components/contact/ContactForm";
import ProfileCard from "@/components/contact/ProfileCard";
import React from "react";

const ContactMePage = () => {
  return (
    <main className="h-full w-screen overflow-y-scroll">
      <div
        style={{ backgroundImage: "url(bg-3.jpg)" }}
        className="flex min-h-full w-screen flex-col items-center justify-center bg-cover bg-center"
      >
        <ProfileCard />

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
