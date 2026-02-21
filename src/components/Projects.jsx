import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Dynamic Pricing Optimization System',
    problem: 'Revenue leakage from static pricing in competitive markets.',
    approach: 'ML-driven demand elasticity modeling and real-time price optimization.',
    frontend: 'React dashboard with price simulation and A/B test visualization.',
    impact: 'Increased margin capture through data-driven dynamic pricing.',
  },
  {
    title: 'Sales Revenue Forecasting System',
    problem: 'Unpredictable revenue streams and poor capacity planning.',
    approach: 'Time series models (ARIMA, Prophet) with ensemble methods.',
    frontend: 'Interactive React charts for forecast vs. actual and scenario planning.',
    impact: 'Improved budgeting accuracy and resource allocation decisions.',
  },
  {
    title: 'Medical Insurance Cost Analyzer & Predictor',
    problem: 'Rising healthcare costs and lack of predictive insights.',
    approach: 'Regression and tree-based models for cost prediction and risk profiling.',
    frontend: 'React dashboards for cost trends and patient segment analysis.',
    impact: 'Informed underwriting and policy design decisions.',
  },
  {
    title: 'Macroeconomic Scenario Response Decision Model',
    problem: 'Uncertainty in macro conditions affecting strategic planning.',
    approach: 'Prescriptive optimization under multiple macro scenarios.',
    frontend: 'Scenario comparison and sensitivity analysis dashboards.',
    impact: 'Resilient strategic decisions across economic cycles.',
  },
  {
    title: 'Investment Portfolio Rebalancing Decision Model',
    problem: 'Suboptimal portfolio drift and rebalancing inefficiency.',
    approach: 'Optimization-based rebalancing with transaction cost modeling.',
    frontend: 'Portfolio allocation and performance attribution visualizations.',
    impact: 'Better risk-return alignment and cost-efficient rebalancing.',
  },
  {
    title: 'Risk-Based Capital Allocation Decision Model',
    problem: 'Inefficient capital deployment across business units.',
    approach: 'Risk-adjusted return optimization with regulatory constraints.',
    frontend: 'Capital allocation and risk exposure dashboards.',
    impact: 'Optimized capital efficiency and regulatory compliance.',
  },
  {
    title: 'AI-Driven Financial Decision Engine',
    problem: 'Liquidity and risk management challenges in corporate finance.',
    approach: 'ML models for cash flow forecasting and liquidity optimization.',
    frontend: 'Real-time liquidity and risk monitoring dashboards.',
    impact: 'Proactive liquidity management and reduced operational risk.',
  },
  {
    title: 'Marketing Campaign ROI Attribution Modeling',
    problem: 'Inability to attribute revenue to specific marketing channels.',
    approach: 'Multi-touch attribution and causal inference for channel ROI.',
    frontend: 'Attribution breakdown and campaign performance visualizations.',
    impact: 'Data-driven marketing spend optimization.',
  },
  {
    title: 'Corporate Financial Distress Prediction',
    problem: 'Late detection of financial distress in portfolio companies.',
    approach: 'Classification models (logistic regression, XGBoost) for early warning.',
    frontend: 'Risk scoring and trend dashboards for monitoring.',
    impact: 'Early intervention and reduced credit losses.',
  },
  {
    title: 'Gymletena Frontend Project',
    problem: 'Fitness facility management and user experience.',
    approach: 'React-based frontend with responsive design and modern UX.',
    frontend: 'Full React SPA with booking, scheduling, and user flows.',
    impact: 'Improved user engagement and streamlined operations.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Projects <span className="text-accent-teal">Showcase</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 gradient-border hover:shadow-glow group cursor-default"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-accent-teal transition-colors mb-3">
                {project.title}
              </h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-slate-500">Problem:</span> <span className="text-slate-400">{project.problem}</span></p>
                <p><span className="text-slate-500">ML/Approach:</span> <span className="text-slate-400">{project.approach}</span></p>
                <p><span className="text-slate-500">Frontend:</span> <span className="text-slate-400">{project.frontend}</span></p>
                <p><span className="text-accent-teal font-medium">Impact:</span> <span className="text-slate-300">{project.impact}</span></p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-accent-teal/10 text-accent-teal rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-accent-teal/10 text-accent-teal rounded text-xs">React</span>
                <span className="px-2 py-1 bg-accent-teal/10 text-accent-teal rounded text-xs">ML</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
