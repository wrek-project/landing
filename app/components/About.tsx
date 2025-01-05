'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Wrek</h2>
          <p className="text-xl text-gray-600 mb-8">
            At Wrek, we believe that technology should bring more joy and excitement to people's lives. Our team of creative engineers and designers work tirelessly to develop innovative products that put a smile on your face.
          </p>
          <p className="text-xl text-gray-600">
            From AI companions to revolutionary gaming gear, we're on a mission to make the world a more fun place, one product at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

