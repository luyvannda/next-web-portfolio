import Image from "next/image";

export default function HorseImage() {
  return (
    <div className="relative">
      <Image
        src="/horse.png"
        alt="horse"
        height={320}
        width={320}
        className="absolute right-0 w-5/6 translate-y-[5%] xs:translate-y-[6%] md:w-1/2 "
      />

      <Image
        src="/cliff.webp"
        alt="cliff"
        width={480}
        height={480}
        className="absolute left-16 -translate-y-[8%] xs:-translate-y-[9%] xs:left-[20%] md:left-[50%]"
      />
    </div>
  );
}
