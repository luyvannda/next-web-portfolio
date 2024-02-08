import Image from "next/image";

export default function HorseImage() {
  return (
    <div className="relative">
      <Image
        src="/horse.png"
        alt="horse"
        height={300}
        width={300}
        className="absolute right-0 translate-y-[3%] xs:translate-y-[16%] md:translate-y-[0%] lg:-translate-y-[50%] xl:lg:right-[10rem]"
      />

      <Image
        src="/cliff.webp"
        alt="cliff"
        width={480}
        height={480}
        className="absolute left-20 -translate-y-[10%] xs:-translate-y-[9%] xs:left-[28%] md:left-auto md:-right-48 md:-translate-y-[20%] lg:-translate-y-[36%] lg:-right-52 xl:-right-10"
      />
    </div>
  );
}

//  className =
//    "absolute left-20 -translate-y-[10%] xs:-translate-y-[9%] xs:left-[28%] md:left-[60%] md:-translate-y-[20%]";
