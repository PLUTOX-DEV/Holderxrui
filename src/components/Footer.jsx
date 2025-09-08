import React from "react";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#050505] text-gray-400">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Copyright */}
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} HolderXR — Built with ❤️
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="https://t.me/yourtelegramlink"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-900 hover:bg-green-500/20 shadow-md transition-all"
            aria-label="Join us on Telegram"
          >
            <FaTelegramPlane className="w-6 h-6 text-green-400 hover:text-green-300" />
          </a>
          <a
            href="https://discord.gg/yourdiscordlink"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-900 hover:bg-green-500/20 shadow-md transition-all"
            aria-label="Join us on Discord"
          >
            <FaDiscord className="w-6 h-6 text-green-400 hover:text-green-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
