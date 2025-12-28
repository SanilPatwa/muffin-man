import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Philosophy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const principles = [
    {
      title: 'Fresh Ingredients',
      description: 'We source only the finest local and organic ingredients for every recipe.',
      icon: '🥖',
      color: 'bg-butter',
    },
    {
      title: 'No Preservatives',
      description: 'Pure, natural baking means no artificial additives or preservatives ever.',
      icon: '🌿',
      color: 'bg-peach',
    },
    {
      title: 'Handcrafted Daily',
      description: 'Every batch is mixed, shaped, and baked by hand with traditional methods.',
      icon: '👨‍🍳',
      color: 'bg-butter',
    },
    {
      title: 'Made With Love',
      description: 'Our secret ingredient? The care and passion we put into every creation.',
      icon: '❤️',
      color: 'bg-peach',
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
            Our Baking Philosophy
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            The values that guide everything we create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${principle.color} rounded-2xl p-8 shadow-lg text-center`}
            >
              <div className="text-6xl mb-4">{principle.icon}</div>
              <h3 className="text-2xl font-display font-bold text-cocoa mb-4">
                {principle.title}
              </h3>
              <p className="text-warm-gray leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy

