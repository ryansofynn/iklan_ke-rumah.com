import { FaWhatsapp } from "react-icons/fa";
import { trackWhatsAppClick } from "../fbPixel";
import harga from "../assets/harga.png";

const Harga = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick(); // kirim event ke Facebook Pixel
    window.open(
      "https://wa.me/6282130104003?text=Halo%2C%20saya%20tertarik%20dengan%20Promo%20AC%20DAIKIN%20MULTI-S.",
      "_blank",
      "noopener noreferrer"
    ); // ganti nomor WA kamu
  };

  return (
    <section className="pt-10 py-16 md:pt-30">
      {/* Gambar */}
      <div className="relative w-full md:max-w-xl lg:max-w-2xl flex flex-col justify-center items-center mx-auto cursor-pointer transform transition duration-300 hover:scale-105 active:scale-105">
        <img src={harga} alt="List Harga" />
      </div>

      {/* Teks & CTA */}
      <div className="mt-8 text-center">
        <h1 className="text-xl md:text-2xl font-extrabold text-blue-700 drop-shadow-md">
          PESAN SEKARANG & DAPATKAN PROMONYA!
        </h1>

        {/* Info klik */}
        <a
          onClick={handleWhatsAppClick}
          className="cursor-pointer block mt-5 text-sm text-gray-600 animate-pulse"
        >
          👇 Klik di sini untuk pesan via WhatsApp
        </a>

        {/* Tombol WhatsApp */}
        <a
          onClick={handleWhatsAppClick}
          className="cursor-pointer group inline-block mt-4 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl shadow-xl hover:scale-110 active:scale-105 transform transition duration-300 ease-in-out"
        >
          <span className="block text-sm font-medium tracking-wide">
            Hemat Hingga :
          </span>

          <span className="flex items-center justify-center gap-3 text-5xl font-extrabold text-amber-400 mt-3 group-hover:animate-bounce group-active:animate-bounce">
            <FaWhatsapp className="text-5xl" />
            1.250<span className="text-2xl align-top">JT*</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Harga;
