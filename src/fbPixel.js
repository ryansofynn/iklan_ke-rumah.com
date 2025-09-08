// src/fbPixel.js
import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // otomatis config Pixel
  debug: true, // kalau true, log event muncul di console (bisa ubah ke false nanti)
};

// Fungsi untuk inisialisasi Pixel
export const initFacebookPixel = () => {
  ReactPixel.init("2255111058269479", {}, options); // Ganti YOUR_PIXEL_ID dengan Pixel ID dari Meta
  ReactPixel.pageView(); // Tracking page view pertama kali
};

// Fungsi untuk tracking klik WhatsApp
export const trackWhatsAppClick = () => {
  ReactPixel.trackCustom("WhatsAppClick");
};
