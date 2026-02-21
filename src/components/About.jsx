import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 gradient-border"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About <span className="text-accent-teal">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a <strong className="text-white">Data Scientist</strong> and{' '}
                <strong className="text-white">Full-Stack Developer</strong> based in Ethiopia, 
                with a passion for turning complex datasets into strategic business value. 
                I specialize in end-to-end data science engineering—from pipeline development 
                and ML modeling to interactive React dashboards.
              </p>
              <p>
                My work spans <strong className="text-accent-teal">finance</strong>,{' '}
                <strong className="text-accent-teal">healthcare</strong>,{' '}
                <strong className="text-accent-teal">marketing</strong>, and{' '}
                <strong className="text-accent-teal">macroeconomics</strong>, 
                with a focus on prescriptive analytics and decision support systems 
                that drive measurable impact.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass rounded-lg text-sm text-accent-teal">Data Scientist</span>
                <span className="px-4 py-2 glass rounded-lg text-sm text-accent-teal">Data Analyst</span>
                <span className="px-4 py-2 glass rounded-lg text-sm text-accent-teal">ML Engineer</span>
              </div>
              <div className="space-y-2 text-slate-400">
                <p><span className="text-slate-500">📍</span> Ethiopia</p>
                <p><span className="text-slate-500">📞</span> +251 960 604 878</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Languages</h4>
                <p className="text-slate-300 text-sm">
                  Amharic (Native) • English (Advanced) • Arabic (Advanced) • Spanish (Intermediate) • Korean (Basic)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
