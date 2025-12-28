import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-blush"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
              alt="Bakery interior"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cocoa">
              About Our Bakery
            </h2>
            <div className="space-y-4 text-lg text-warm-gray leading-relaxed">
              <p>
                Welcome to The Muffin Man Bakery, where tradition meets passion in every bite. 
                For years, we've been the neighborhood's trusted source for fresh, artisanal 
                baked goods crafted with care and the finest ingredients.
              </p>
              <p>
                Our skilled bakers arrive before dawn each morning to knead, proof, and bake 
                our signature creations. From crusty sourdough loaves to delicate pastries, 
                every item is handcrafted with techniques passed down through generations.
              </p>
              <p>
                We believe in the power of fresh-baked goodness to bring people together. 
                Whether you're celebrating a special occasion with one of our custom cakes 
                or starting your day with a warm muffin, we're honored to be part of your moments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

