import React from "react";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2 } from "lucide-react";

// import chain icons
import ethLogo from "../assets/chains/eth.svg";
import bnbLogo from "../assets/chains/bnb.svg";
import solLogo from "../assets/chains/sol.svg";
import baseLogo from "../assets/chains/base.svg";
import suiLogo from "../assets/chains/sui.svg";

const roadmapItems = [
  { title: "Multi-project support", done: true },
  {
    title: "Support for more chains",
    done: true,
    chains: [
      { name: "Ethereum", logo: ethLogo },
      { name: "BNB", logo: bnbLogo },
      { name: "Solana", logo: solLogo },
      { name: "Base", logo: baseLogo },
      { name: "Sui", logo: suiLogo },
    ],
  },
  { title: "Dashboard for project owners", done: false },
  { title: "Advanced analytics & reports", done: false },
];

export default function Roadmap() {
  return (
    <section className="py-20 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-10 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="text-neon-green" /> Roadmap
        </motion.h2>

        <ul className="space-y-6 text-left">
          {roadmapItems.map((item, i) => (
            <motion.li
              key={i}
              className="flex flex-col gap-3 bg-neutral-900 p-5 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  className={`w-6 h-6 ${
                    item.done ? "text-neon-green" : "text-gray-600"
                  }`}
                />
                <span
                  className={`${
                    item.done ? "text-gray-200" : "text-gray-500"
                  } font-medium`}
                >
                  {item.title}
                </span>
              </div>

              {/* Render chain icons if available */}
              {item.chains && (
                <div className="flex gap-4 mt-2 pl-9 flex-wrap">
                  {item.chains.map((chain) => (
                    <div
                      key={chain.name}
                      className="flex items-center gap-2 bg-neutral-800 px-3 py-2 rounded-lg"
                    >
                      <img
                        src={chain.logo}
                        alt={chain.name}
                        className="w-5 h-5"
                      />
                      <span className="text-gray-300 text-sm">
                        {chain.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
