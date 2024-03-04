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

        <section className="w-[90%] pb-16 pt-8 md:w-[80%]">
          {" "}
          <div
            style={{ backgroundImage: "url(atombg-comp.webp" }}
            className="h-full w-full rounded-xl border border-white bg-cover bg-center p-4 vs:p-6 xs:pr-[30%] sm:pr-[45%] md:p-10 md:pr-[40%] lg:pr-[50%] xl:pr-[52%] "
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
