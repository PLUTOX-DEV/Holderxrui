import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, UserCheck, Users } from 'lucide-react'

const items = [
  {
    title: 'Token Holder Verification',
    desc: 'Verify wallets across multiple chains.',
    icon: ShieldCheck,
  },
  {
    title: 'Human Check',
    desc: 'Simple human checks before on-chain queries.',
    icon: UserCheck,
  },
  {
    title: 'Private Groups',
    desc: 'Automatically share invite links upon verification.',
    icon: Users,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[#050505]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-lg mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Features
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-green-500/60 transition-all shadow-lg hover:shadow-[0_0_20px_#00ff8855] flex flex-col items-center text-center"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              {/* Icon */}
              <it.icon className="w-12 h-12 text-green-400 mb-4" />
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {it.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
