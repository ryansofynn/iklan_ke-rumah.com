import { FaLocationDot, FaLeaf } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import spesifikasi1 from "../assets/spesifikasi-1.png";
import spesifikasi2 from "../assets/spesifikasi-2.png";
import ac1 from "../assets/ac-1.png";

// Komponen Lightbox
function CTAImageLightbox({ ctaLabel = "Lihat Spesifikasi", images = [] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const currentX = useRef(0);

  const close = () => setOpen(false);
  const go = (dir) =>
    setIndex((i) => (i + dir + images.length) % images.length);
  const goTo = (i) =>
    setIndex(((i % images.length) + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    currentX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const dx = currentX.current - startX.current;
    if (Math.abs(dx) > 50) {
      go(dx < 0 ? 1 : -1);
    }
    startX.current = 0;
    currentX.current = 0;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg px-6 py-2 text-base font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"
      >
        {ctaLabel}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="relative mx-auto w-full max-w-6xl p-4">
            {/* Header Lightbox */}
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <div className="text-sm opacity-80">
                {index + 1} / {images.length}
              </div>
              <button
                onClick={close}
                className="rounded-full p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                ✕
              </button>
            </div>

            {/* Gambar + Caption */}
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
              <img
                src={images[index]?.src}
                alt={images[index]?.alt}
                className="h-[70vh] w-full select-none object-contain"
                draggable={false}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />

              {/* Caption di atas gambar */}
              {images[index]?.caption && (
                <div className="absolute top-0 left-0 w-full bg-black/50 text-white text-center text-base lg:text-2xl p-2">
                  {images[index].caption}
                </div>
              )}

              {/* Tombol navigasi */}
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-3xl lg:text-6xl cursor-pointer"
              >
                ‹
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-3xl lg:text-6xl cursor-pointer"
              >
                ›
              </button>
            </div>

            {/* Thumbnail */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`overflow-hidden rounded-xl border ${
                    i === index
                      ? "border-blue-500 ring-2 ring-blue-500"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-20 w-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Komponen Promo
const Promo = () => {
  const images = [
    {
      src: spesifikasi1,
      alt: "Spesifikasi Unit Indoor",
      caption: "Spesifikasi lengkap Unit Indoor Multi-S",
    },
    {
      src: spesifikasi2,
      alt: "Spesifikasi Unit Outdoor",
      caption: "Spesifikasi lengkap Unit Outdoor Multi-S",
    },
  ];

  return (
    <section className="justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-0 pt-8 lg:pt-14">
      {/* Gambar */}
      <div className="mx-4 flex justify-center">
        <img
          src={ac1}
          alt="AC DAIKIN"
          className="w-full h-auto object-cover rounded-2xl md:max-w-xl lg:max-w-2xl cursor-pointer transform transition duration-300 hover:scale-110 active:scale-110"
        />
      </div>

      {/* Teks */}
      <div className="space-y-5 md:space-y-6 mx-4 pt-8">
        <h1 className="text-slate-900 text-base md:text-lg lg:text-xl font-[800] text-center uppercase">
          DAIKIN PROMO HEPI ( HEMATNYA PASTI )
          <span className="block">Multi-S Inverter</span>
        </h1>
        <h2 className="text-sm md:text-base text-justify">
          Promo HEPI, <span className="font-[800]">HEMATNYA PASTI</span> hingga
          <span className="font-[800]"> Rp1.250 juta. </span>Beli AC DAIKIN
          Multi-S dengan harga promo sampai{" "}
          <span className="font-[800]">30 September 2025!</span>
        </h2>
        <h2 className="text-sm md:text-base text-justify mb-8">
          Ditambah <span className="font-[800]">HEMAT TEMPAT</span>,{" "}
          <span className="font-[800]">HEMAT DAYA</span> dan{" "}
          <span className="font-[800]">HEMAT ENERGI</span> sekaligus.
        </h2>
        <ul className="text-sm md:text-base space-y-4">
          <li className="flex items-start space-x-3">
            <FaLocationDot className="w-6 h-6 flex-shrink-0" />
            <p className="text-justify">
              <strong>HEMAT TEMPAT</strong>, cukup gunakan 1 unit outdoor untuk
              mengoperasikan 2 unit indoor sekaligus.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <FaLeaf className="w-6 h-6 flex-shrink-0" />
            <p className="text-justify">
              <strong>HEMAT DAYA</strong>, untuk mengoperasikan 2 unit AC ini
              hanya membutuhkan daya listrik 380 Watt dengan menggunakan mode
              low watt.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <MdElectricBolt className="w-6 h-6 flex-shrink-0" />
            <p className="text-justify">
              <strong>HEMAT ENERGI</strong>, teknologi inverter yang dimiliki
              mampu menyesuaikan suhu sesuai dengan kebutuhan ruang.
            </p>
          </li>
        </ul>

        {/* CTA Lightbox */}
        <div className="text-center">
          <CTAImageLightbox ctaLabel="Lihat Spesifikasi" images={images} />
        </div>
      </div>
    </section>
  );
};

export default Promo;
