import { Smile, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Smile,
    title: 'Joyful Experiences',
    description: 'Our products are designed to bring smiles and laughter to your day.'
  },
  {
    icon: Zap,
    title: 'Innovative Design',
    description: 'We combine cutting-edge technology with playful creativity.'
  },
  {
    icon: Heart,
    title: 'Built with Love',
    description: 'Every product is crafted with care and attention to detail.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose FunWorks?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

