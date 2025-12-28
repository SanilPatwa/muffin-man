import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cocoa leading-tight"
          >
            Freshly Baked
            <br />
            Every Morning
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-warm-gray max-w-2xl mx-auto leading-relaxed"
          >
            Artisan cakes, breads, buns & muffins baked fresh daily.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 111, 71, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-cocoa text-white rounded-full text-lg font-semibold shadow-lg"
            >
              View Our Bakes
            </motion.a>

            <motion.a
              href="#visit"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(212, 165, 116, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-peach text-cocoa rounded-full text-lg font-semibold shadow-lg"
            >
              Visit Our Bakery
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

