import React from "react";

import Certificate from "@/components/Certificate";
import { CertificateData } from "@/data/certificateData";
import SkillHeading from "@/components/skillpage/SkillHeading";
import SkillSlide from "@/components/skillpage/SkillSlide";

const Page = () => {
  return (
    <main className="h-full w-screen overflow-x-hidden overflow-y-scroll">
      <div
        style={{ backgroundImage: "url(/bg-3.jpg)" }}
        className="flex min-h-full w-screen flex-col items-center justify-center space-y-8 bg-cover bg-center"
      >
        <SkillHeading />
        <SkillSlide />
        <div>
          <Certificate certificateObj={CertificateData} />
        </div>
      </div>
    </main>
  );
};

export default Page;
