import React from "react";

const Harga = () => {
  return (
    <section className="pt-10 py-16 md:pt-30">
      {/* Gambar */}
      <div className="relative w-full md:max-w-xl lg:max-w-2xl flex flex-col justify-center items-center mx-auto cursor-pointer transform transition duration-300 hover:scale-105 active:scale-105">
        <img src="../src/assets/harga.png" alt="List Harga" />
      </div>

      {/* Teks & CTA */}
      <div className="mt-8 text-center">
        <h1 className="text-xl md:text-2xl font-extrabold text-blue-700 drop-shadow-md">
          PESAN SEKARANG & DAPATKAN PROMONYA!
        </h1>

        {/* Tombol WhatsApp */}
        <a
          href="https://wa.me/6281340004155?text=Halo%2C%20saya%20tertarik%20dengan%20Promo%20AC%20DAIKIN%20MULTI-S."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block mt-6 px-24 pt-2 pb-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl shadow-xl hover:scale-110 active:scale-105 transform transition duration-300 ease-in-out"
        >
          <span className="block text-sm font-medium tracking-wide">
            Hemat Hingga :
          </span>
          <span className="block text-5xl font-extrabold text-amber-400 mt-3 group-hover:animate-bounce group-active:animate-bounce">
            1.250<span className="text-2xl align-top">JT*</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Harga;
