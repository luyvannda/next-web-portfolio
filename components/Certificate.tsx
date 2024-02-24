export default function Certificate() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold text-white xs:text-4xl md:text-[50px]">
        Certificates
      </h1>
      <p className="text-lg text-gray-400 xs:text-xl md:text-2xl">
        Whenever my skills get accredited, <br className="md:hidden" />{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          {" "}
          I will list it here.
        </span>
      </p>
    </div>
  );
}
