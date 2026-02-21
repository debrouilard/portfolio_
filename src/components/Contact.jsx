import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 gradient-border text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-accent-teal">Touch</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Interested in data science, ML engineering, or full-stack development? 
            Let's connect and explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="tel:+251960604878"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-xl text-accent-teal hover:shadow-glow transition-shadow"
            >
              <span className="text-2xl">📞</span>
              +251 960 604 878
            </motion.a>
            <motion.a
              href="mailto:contact@blendebebe.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-xl text-accent-teal hover:shadow-glow transition-shadow"
            >
              <span className="text-2xl">✉️</span>
              Email Me
            </motion.a>
          </div>
          <p className="mt-8 text-slate-500 text-sm">
            Ethiopia • Open to remote and hybrid opportunities
          </p>
        </motion.div>
      </div>
    </section>
  )
}
