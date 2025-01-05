import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Fun?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers and bring more joy into your life with our innovative products.
        </p>
        <Button size="lg" variant="secondary">
          Shop Now
        </Button>
      </div>
    </section>
  )
}

