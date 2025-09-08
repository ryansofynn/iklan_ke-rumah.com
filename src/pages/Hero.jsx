import { FaLocationDot, FaLeaf } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { trackWhatsAppClick } from "../fbPixel";

const Hero = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick(); // kirim event ke Facebook Pixel
    window.open(
      "https://wa.me/6282130104003?text=Halo%2C%20saya%20tertarik%20dengan%20Promo%20AC%20DAIKIN%20MULTI-S.",
      "_blank",
      "noopener noreferrer"
    ); // ganti nomor WA kamu
  };

  return (
    <section className="relative w-full">
      {/* Background - Gambar */}
      <div className="relative flex">
        <img
          src="../src/assets/cewe.png"
          alt="Cewe"
          className="w-1/2 md:h-screen object-cover object-top"
        />
        <img
          src="../src/assets/cowo.png"
          alt="Cowo"
          className="w-1/2 md:h-screen object-cover object-top"
        />

        {/* Teks Promo di tengah */}
        <div className="absolute inset-0 text-center pt-5 px-6 md:pt-20 lg:pt-36">
          <h1 className="font-[800] text-2xl md:text-4xl lg:text-6xl text-white drop-shadow-lg">
            BEBAS <span className="text-amber-400">CEMAS!</span>
          </h1>
          <h2 className="font-[800] text-base md:text-2xl lg:text-4xl mt-1 md:mt-3 lg:mt-4 text-white">
            Pasang 2 AC Sekaligus, Tetap Ringkas
          </h2>
          <p className="text-[0.6rem] md:text-sm lg:text-xl bg-amber-400 text-[#0E1C47] font-bold inline-block px-3 py-1 rounded-full mt-2 md:mt-5 lg:mt-6 shadow">
            Periode Promo : 1 Agustus – 30 September 2025
          </p>
        </div>

        {/* Box Hemat (tabel) */}
        <div className="absolute bottom-0 md:bottom-35 left-1/2 -translate-x-1/2 translate-y-1/2 w-[75%] sm:w-[60%] md:w-[50%] lg:w-[45%]">
          <div className="rounded-xl bg-[#1968A9] drop-shadow-lg flex items-center justify-between p-3 transform transition duration-300 hover:scale-105 active:scale-105">
            {/* Kolom Kiri */}
            <div className="text-white text-sm md:text-xl lg:text-2xl space-y-3 md:space-y-4 lg:space-y-5 tracking-wide">
              <h1 className="flex items-center gap-2">
                <FaLocationDot /> HEMAT TEMPAT
              </h1>
              <h1 className="flex items-center gap-2">
                <FaLeaf /> HEMAT DAYA
              </h1>
              <h1 className="flex items-center gap-2">
                <MdElectricBolt /> HEMAT ENERGI
              </h1>
            </div>

            {/* Kolom Kanan */}
            <div className="text-white text-center">
              <h1 className="text-xs md:text-lg lg:text-xl">HEMAT HINGGA :</h1>
              <h1 className="font-[800] text-3xl md:text-4xl lg:text-5xl text-amber-400 mt-2 mb-1 md:mb-3 lg:mb-4">
                <sup className="text-sm md:text-lg lg:text-2xl">Rp</sup> 1.250
                <span className="text-lg md:text-xl lg:text-2xl"> JT</span>
              </h1>
            </div>
          </div>
          <div className="text-center mt-7">
            <a
              onClick={handleWhatsAppClick}
              className="cursor-pointer text-lg md:text-sm lg:text-base py-1 px-7 rounded-full text-white bg-amber-500 hover:bg-amber-400 font-bold tracking-wide"
            >
              KLIK DI SINI
            </a>
          </div>
        </div>
      </div>

      {/* Spasi antar tabel dan logo */}
      <div className="h-28 md:h-12"></div>

      {/* Logo */}
      <div className="flex justify-center items-center gap-4 md:gap-20 lg:gap-40">
        <img
          src="../src/assets/daikin.png"
          alt="Daikin"
          className="h-7 md:h-12"
        />
        <img
          src="../src/assets/multi-es.png"
          alt="Multi-S"
          className="h-7 md:h-12"
        />
        <img
          src="../src/assets/inverter.png"
          alt="Inverter"
          className="h-7 md:h-12"
        />
      </div>
    </section>
  );
};

export default Hero;
