import Image from "next/image";

export default function HorseImage() {
  return (
    <div>
      <Image
        src="/horse.png"
        alt="horse"
        height={280}
        width={280}
        className="absolute ml-10 top-12 z-10 md:right-10 md:top-20 md:w-[400px] md:h-[400px] lg:top-[50%] lg:-translate-y-1/2"
      />

      <Image
        src="/cliff.webp"
        alt="cliff"
        width={480}
        height={480}
        className="absolute top-10 z-0 md:right-0 md:top-10 lg:top-[65%] lg:-translate-y-[50%] 2xl:top-[65%]"
      />
    </div>
  );
}
