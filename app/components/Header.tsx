'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">FunTech</Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#products" className="hover:text-blue-600 transition-colors">Products</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white"
        >
          <nav className="flex flex-col items-center py-4">
            <Link href="#products" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="#about" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#contact" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

