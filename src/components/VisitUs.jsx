import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const VisitUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="visit"
      ref={ref}
      className="py-24 bg-blush"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cocoa mb-4">
            Visit Our Bakery
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Come experience the warmth and aroma of freshly baked goodness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-cocoa mb-4">
                Location
              </h3>
              <p className="text-lg text-warm-gray leading-relaxed">
                123 Artisan Street<br />
                Downtown District<br />
                City, State 12345
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-cocoa mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-lg text-warm-gray">
                <p><span className="font-semibold">Monday - Friday:</span> 6:00 AM - 7:00 PM</p>
                <p><span className="font-semibold">Saturday:</span> 7:00 AM - 6:00 PM</p>
                <p><span className="font-semibold">Sunday:</span> 8:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div>
              <p className="text-lg text-warm-gray leading-relaxed">
                We welcome walk-ins! Feel free to stop by anytime during our hours. 
                For custom orders or large quantities, we recommend calling ahead or 
                visiting us in person to discuss your needs.
              </p>
            </div>

            <motion.a
              href="#visit"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 111, 71, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-4 bg-cocoa text-white rounded-full text-lg font-semibold shadow-lg"
            >
              Visit Us Today
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-warm-gray/10"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-butter to-peach">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-xl text-cocoa font-semibold">
                  Map View
                </p>
                <p className="text-warm-gray mt-2">
                  Find us on your favorite map app
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisitUs

