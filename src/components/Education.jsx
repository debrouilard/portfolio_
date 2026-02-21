import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 gradient-border hover:shadow-glow transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Bachelor's in Software Engineering</h3>
              <p className="text-accent-teal font-medium mt-1">Addis Ababa University</p>
            </div>
            <span className="text-slate-400 text-sm md:text-base whitespace-nowrap">
              February 2021 – January 2026
            </span>
          </div>
          <p className="mt-4 text-slate-400">
            Comprehensive program covering software design, data structures, algorithms, 
            databases, and full-stack development—foundation for data science and ML engineering.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
