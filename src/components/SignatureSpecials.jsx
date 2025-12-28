import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SignatureSpecials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const specials = [
    {
      title: 'Custom Celebration Cakes',
      description: 'Beautifully designed cakes for birthdays, weddings, and special occasions',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    },
    {
      title: 'Fresh Bread Loaves',
      description: 'Crusty artisan loaves, soft sandwich bread, and specialty varieties',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    },
    {
      title: 'Tea-Time Buns',
      description: 'Perfectly flaky buns ideal for your afternoon tea or coffee break',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
    },
    {
      title: 'Seasonal Muffins',
      description: 'Limited edition flavors that celebrate the best of each season',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80',
    },
  ]

  return (
    <section className="py-24 bg-blush">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cocoa mb-4">
            Signature Specials
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Our most beloved creations, available fresh daily
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specials.map((special, index) => (
            <motion.div
              key={special.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <motion.img
                src={special.image}
                alt={special.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
                initial={{ y: 20, opacity: 0.9 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-display font-bold mb-3">
                  {special.title}
                </h3>
                <p className="text-lg opacity-90">
                  {special.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureSpecials

