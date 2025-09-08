import React from "react";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa"; // social icons
import logo from "../assets/logo.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Glow background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70 -z-10" />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="HolderXR Logo"
        className="w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-[0_0_40px_#00ff88] rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        HolderXR
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-gray-300 max-w-2xl text-lg md:text-xl leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Verify token holders, automate access, and grow your private community.
      </motion.p>

      {/* Main CTA */}
      <motion.a
        href="#features"
        aria-label="Get Started with HolderXR"
        className="mt-8 inline-block px-8 py-4 bg-green-500/90 hover:bg-green-400 rounded-xl font-semibold text-lg shadow-[0_0_20px_#00ff88] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Get Started
      </motion.a>

      {/* Social Buttons */}
      <motion.div
        className="flex gap-6 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Telegram */}
        <a
          href="https://t.me/yourtelegramlink"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-neutral-900 hover:bg-green-500/20 shadow-md transition-all"
          aria-label="Join us on Telegram"
        >
          <FaTelegramPlane className="w-7 h-7 text-green-400 hover:text-green-300" />
        </a>

        {/* Discord */}
        <a
          href="https://discord.gg/yourdiscordlink"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-neutral-900 hover:bg-green-500/20 shadow-md transition-all"
          aria-label="Join us on Discord"
        >
          <FaDiscord className="w-7 h-7 text-green-400 hover:text-green-300" />
        </a>
      </motion.div>
    </section>
  );
}
