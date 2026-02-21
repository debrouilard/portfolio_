import { motion } from 'framer-motion'

const technicalSkills = [
  { name: 'Statistics', level: 100, years: 5 },
  { name: 'Mathematics', level: 100, years: 5 },
  { name: 'Python for Data Science', level: 100, years: 5 },
  { name: 'Pandas', level: 100, years: 5 },
  { name: 'NumPy', level: 100, years: 5 },
  { name: 'SQL', level: 80, years: 4 },
  { name: 'MySQL', level: 80, years: 4 },
  { name: 'Tableau', level: 80, years: 4 },
  { name: 'Big Data', level: 60, years: 3 },
  { name: 'Data Spooling', level: 60, years: 3 },
  { name: 'Data Warehousing', level: 60, years: 3 },
  { name: 'Data Migration', level: 60, years: 3 },
  { name: 'Data Modeling', level: 60, years: 3 },
  { name: 'Data Extraction', level: 60, years: 3 },
  { name: 'Matplotlib', level: 60, years: 3 },
  { name: 'Hadoop', level: 60, years: 3 },
  { name: 'Quantitative Analysis', level: 60, years: 3 },
  { name: 'Power BI', level: 60, years: 3 },
  { name: 'MATLAB', level: 60, years: 3 },
  { name: 'R', level: 20, years: 1 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Technical <span className="text-accent-teal">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="glass rounded-xl p-5 hover:border-accent-teal/20 transition-colors"
            >
              <div className="flex justify-between mb-2">
                <span className="text-slate-200 font-medium">{skill.name}</span>
                <span className="text-accent-teal/80 text-sm">{skill.years}y</span>
              </div>
              <div className="h-2 bg-navy-slate rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.03, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-accent-teal to-accent-mint rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {['Python', 'React', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'NumPy', 'MATLAB', 'Hadoop'].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 glass rounded-full text-sm text-accent-teal border border-accent-teal/20 hover:bg-accent-teal/10 transition-colors"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
