import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Senior Data Scientist',
    company: 'Cloudaddis.ltd',
    period: 'May 2023 – Present',
    description: 'Leading data science initiatives, building ML pipelines, and delivering prescriptive analytics solutions for enterprise clients.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Syntech',
    period: 'January 2023 – December 2025',
    description: 'Developed full-stack applications with React frontends and Python/Node backends, integrating data visualization and analytics.',
  },
  {
    role: 'Networking Engineer',
    company: 'Too Sharp Engineering',
    period: 'August 2024 – September 2025',
    description: 'Designed and maintained network infrastructure, ensuring reliable connectivity for enterprise environments.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Syntech',
    period: 'May 2022 – November 2022',
    description: 'Built scalable web applications and data-driven dashboards, establishing foundational full-stack development experience.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Work <span className="text-accent-teal">Experience</span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 gradient-border hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent-teal transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-accent-teal font-medium mt-1">{exp.company}</p>
                </div>
                <span className="text-slate-400 text-sm whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="mt-4 text-slate-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
