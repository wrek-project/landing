'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  { name: 'FunBot', description: 'AI-powered robot companion', image: '/placeholder.svg?height=300&width=300' },
  { name: 'JoyPad', description: 'Next-gen gaming controller', image: '/placeholder.svg?height=300&width=300' },
  { name: 'LaughTrack', description: 'Smart comedy assistant', image: '/placeholder.svg?height=300&width=300' },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Fun Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={product.image} alt={product.name} width={300} height={300} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

