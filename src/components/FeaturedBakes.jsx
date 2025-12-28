import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FeaturedBakes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const bakes = [
    {
      title: 'Artisan Cakes',
      description: 'Handcrafted celebration cakes with premium ingredients and exquisite decoration.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    },
    {
      title: 'Fresh Bread',
      description: 'Crusty sourdough, soft brioche, and classic white loaves baked daily at dawn.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    },
    {
      title: 'Golden Buns',
      description: 'Buttery, flaky buns perfect for breakfast or afternoon tea time.',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
    },
    {
      title: 'Fresh Muffins',
      description: 'Moist, flavorful muffins bursting with berries, chocolate, and seasonal flavors.',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80',
    },
  ]

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cocoa mb-4">
            Featured Bakes
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Discover our signature creations, made with love every single day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bakes.map((bake, index) => (
            <motion.div
              key={bake.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={bake.image}
                  alt={bake.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-cocoa mb-3">
                  {bake.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {bake.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedBakes

