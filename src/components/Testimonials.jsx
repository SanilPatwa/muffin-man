import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The best croissants I\'ve had outside of Paris! The Muffin Man has become our weekend tradition.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      text: 'Their custom birthday cake was absolutely stunning and delicious. Made our daughter\'s day extra special!',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      text: 'Fresh bread every morning? Yes please! The sourdough is incredible and the staff is so friendly.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      text: 'I\'ve tried bakeries all over the city, but nothing compares. The quality and freshness are unmatched.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cocoa mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Real feedback from our beloved community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-butter rounded-2xl p-8 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-caramel">⭐</span>
                ))}
              </div>
              <p className="text-warm-gray text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-cocoa font-semibold text-lg">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

