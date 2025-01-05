import Image from 'next/image'

const products = [
  { name: 'Fun Gadget X', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Joyful Toy Y', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Exciting Game Z', image: '/placeholder.svg?height=300&width=300' }
]

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Fun Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={product.image} alt={product.name} width={300} height={300} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

