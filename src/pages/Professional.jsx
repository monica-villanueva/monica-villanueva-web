import PlaceholderSvg from '../components/PlaceholderSvg';
import './Professional.css';

const HISTORY = [
  {
    title: 'Lead Site Reliability Engineer',
    employer: 'Shell Recharge Solutions',
    text: 'Moving out of my comfort zone taught me that I can thrive in the face of production problems. I found purpose in improving the platform experience for the customers who rely on our services.' 
  },
  {
    title: 'Senior Software Engineer',
    employer: 'Intelliguard',
    text: 'I was hired specifically for my Angular expertise, but the role quickly evolved into something broader. I got to do full-stack development, work on deployments, and organize teams and delivery timelines. I enjoyed that variety and took pride in contributing beyond my original specialty.',
  },
  {
    title: 'Tech Lead, Manager',
    employer: 'LightStream, by Truist',
    text: 'I joined a team of talented engineers I grew to admire and felt proud to work alongside them. Their confidence in me helped me embrace leadership roles I might otherwise have shied away from.',
  },
  {
    title: 'Software Engineer III',
    employer: 'Mitchell, an Enlyte Company',
  },
  {
    title: 'Software Engineer',
    employer: 'Versacall Technologies',
  },
];

const EDUCATION = [
  {
    title: 'Intro to AI & Machine Learning',
    source: 'Grossmont College',
    year: '2026',
    text: 'Covers foundational AI and machine learning concepts, including statistics, uncertainty, Bayesian networks, logic, and planning. Advanced topics include Markov Decision Processes, reinforcement learning, and adversarial planning.',
  },
  {
    title: 'AI Prompt Design',
    source: 'Grossmont College',
    year: '2026',
    text: 'Covers the principles and practices of designing effective prompts to guide AI behavior, including techniques for optimizing prompt structure. Emphasizes creating, testing, and refining prompts to achieve desired AI outcomes.',
  },
  {
    title: 'Intro to Python Programming',
    source: 'Grossmont College',
    year: '2026',
    text: 'Covers Python syntax, functions, control flow, loops, data types, strings, lists, dictionaries, and exception handling. Includes software tools and libraries, along with the application of functional and object-oriented programming concepts.',
  },
  {
    title: 'AWS Academy Cloud Architecting, Amazon Web Services',
    source: 'San Diego College of Continuing Education',
    year: '2025',
    text: 'Covers designing and deploying secure, robust cloud applications using cloud computing architectural principles. Includes defining solutions and providing implementation guidance based on best practices throughout the project lifecycle.',
  },
  {
    title: 'AWS Academy Cloud Foundations, Amazon Web Services',
    source: 'San Diego College of Continuing Education',
    year: '2024',
    text: 'Provides a role-independent foundation in cloud computing, covering core concepts, cloud services, security, and architecture. Also addresses cloud pricing and support.',
  },
];

const INTERESTS = [
  { title: 'Automation & Developer Tools', text: 'Building full-stack tools that smooth out workflows and take repetitive work off engineers\' plates.', variant: 'code', color: 'var(--color-primary)' },
  { title: 'Observability & Monitoring', text: 'Turning metrics, logs, and traces in Dynatrace into dashboards and alerts that help surface problems early.', variant: 'goggles', color: 'var(--color-primary)' },
  { title: 'Incident Management & Leadership', text: 'Bringing order to chaos: pulling in the right people, keeping communication flowing, and driving toward resolution.', variant: 'alert', color: 'var(--color-accent)' },
  { title: 'Root Cause Analysis & Postmortems', text: 'Digging into what really happened and turning lessons learned into concrete fixes.', variant: 'papers', color: 'var(--color-accent)' },
  { title: 'AWS Production Support', text: 'Keeping services healthy across EKS, MSK, Amazon MQ, RDS, OpenSearch, and ElastiCache, with Dynatrace configurations managed in Terraform.', variant: 'globe', color: 'var(--color-primary)' },
  { title: 'SLIs, SLOs & Reliability', text: 'Partnering with teams to establish SLI/SLO baselines, identify recurring issues, and ensure follow-through on fixes and improvements.', variant: 'uptime', color: 'var(--color-accent)' },
];

export default function Professional() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Professional</h1>
          <p>Keeping production healthy, with a software engineer&apos;s mindset.</p>
        </div>
      </header>

      {/* History */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">History</h2>
          <p className="section__subtitle">From full-stack development to Site Reliability Engineering.</p>

          <div className="timeline">
            {HISTORY.map((item) => (
              <div className="timeline__item" key={item.title + item.employer}>
                <div className="timeline__dot" />
                <div className="timeline__title">{item.title}</div>
                <div className="timeline__employer">{item.employer}</div>
                {item.text && <p className="timeline__text">{item.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">What I Focus On</h2>
          <p className="section__subtitle">
            The areas where I spend most of my energy today.
          </p>

          <div className="interests-grid">
            {INTERESTS.map((item) => (
              <div className="interest-card" key={item.title}>
                <div className="interest-card__icon">
                  <PlaceholderSvg variant={item.variant} color={item.color} />
                </div>
                <div className="interest-card__title">{item.title}</div>
                <p className="interest-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuing Education */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Continuing Education</h2>
          <p className="section__subtitle">
            I&apos;m a lifelong learner. Here are some of the courses and classes I&apos;ve completed outside of work recently.
          </p>

          <div className="education-grid">
            {EDUCATION.map((item) => (
              <div className="education-card" key={item.title}>
                <div className="education-card__header">
                  <div className="education-card__icon">
                    <PlaceholderSvg variant="book" color="var(--color-accent)" />
                  </div>
                  <div>
                    <div className="education-card__title">{item.title}</div>
                    <div className="education-card__meta">
                      <span className="education-card__source">{item.source}</span>
                      <span className="education-card__year">{item.year}</span>
                    </div>
                  </div>
                </div>
                <p className="education-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
