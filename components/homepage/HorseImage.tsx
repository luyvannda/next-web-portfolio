import Image from "next/image";

export default function HorseImage() {
  return (
    <div className="relative">
      <Image
        src="/horse.png"
        alt="horse"
        height={300}
        width={300}
        className="vs:translate-y-[2%] absolute right-0  xs:translate-y-[14%] sm:translate-y-[10%] md:translate-y-[0%] lg:top-[50%] lg:z-50 lg:-translate-y-[50%] xl:lg:right-[10rem]"
      />

      <Image
        src="/cliff.webp"
        alt="cliff"
        width={480}
        height={480}
        className="vs:left-24 vs:-translate-y-[11%] absolute left-10 -translate-y-[4%] xs:left-[35%] xs:-translate-y-[9%] sm:left-[46%] sm:-translate-y-[16%]  md:-right-48 md:left-auto md:-translate-y-[20%] lg:-right-52 lg:top-[50%] lg:z-50 lg:-translate-y-[36%] xl:-right-10"
      />
    </div>
  );
}

//  className =
//    "absolute left-20 -translate-y-[10%] xs:-translate-y-[9%] xs:left-[28%] md:left-[60%] md:-translate-y-[20%]";
