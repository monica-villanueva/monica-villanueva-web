import PlaceholderSvg from '../components/PlaceholderSvg';
import './Professional.css';

const HISTORY = [
  {
    title: 'Lead Site Reliability Engineer',
    employer: 'Shell Recharge Solutions',
    text: 'Moved to the operations side of software to keep enterprise applications healthy in AWS, supporting services on EKS, MSK, Amazon MQ, RDS, OpenSearch, and ElastiCache. Built dashboards, monitors, and alerts in Dynatrace and Datadog, managed with Terraform, so the team could spot trouble before customers did. Served as incident commander, coordinating cross-functional responders under pressure and following through with root cause analysis and postmortems. Worked with engineering and product teams to define SLIs and SLOs, and built Angular-based developer tools that reduce toil.',
  },
  {
    title: 'Senior Software Engineer',
    employer: 'Intelliguard',
    text: 'Applied my Angular expertise for a web application interface for an RFID-enabled medication inventory tracking system. The role evolved into a full-stack position where I was responsible for both front-end and back-end development, CI/CD upgrades, business requirements, and achieving deliverables on time.',
  },
  {
    title: 'Tech Lead, Manager',
    employer: 'Lightstream, a division of Truist Bank',
    text: 'Joined a team of high-performers and learned to take ownership of large projects and deliver high-quality solutions in a heavily regulated environment. I learned to balance technical leadership with people management, and I enjoyed mentoring junior developers and helping them grow in their careers.',
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
    text: 'Cover fundamental AI and Machine Learning topics, explore key concepts such as statistics, uncertainty, and Bayesian networks, study machine learning, logic, and planning, and progress to advanced areas including Markov Decision Processes, reinforcement learning, and adversarial planning',
  },
  {
    title: 'AI Prompt Design',
    source: 'Grossmont College',
    year: '2026',
    text: 'Learn the principles and practices of designing effective prompts for AI systems, explore the role of prompts in guiding AI behavior, apply techniques for optimizing prompt structure, and create, test, and refine prompts to achieve desired AI outcomes',
  },
  {
    title: 'Intro to Python Programming',
    source: 'Grossmont College',
    year: '2026',
    text: 'Learn basic language syntax, functions, control flow, and looping, work with data types, strings, lists, and dictionaries, handle exceptions, use software tools and libraries, and apply functional vs object-oriented programming concepts',
  },
  {
    title: 'AWS Academy Cloud Architecting, Amazon Web Services',
    source: 'San Diego College of Continuing Education',
    year: '2025',
    text: 'Architect and deploy secure and robust applications on a cloud computing platform, define solutions using cloud computing architectural design principles, and provide implementation guidance based on best practices throughout the project lifecycle',
  },
  {
    title: 'AWS Academy Cloud Foundations, Amazon Web Services',
    source: 'San Diego College of Continuing Education',
    year: '2024',
    text: 'Build a general understanding of cloud computing independent of specific technical roles, covering core cloud concepts, cloud services, security, architecture, pricing, and support',
  },
];

const INTERESTS = [
  { title: 'Automation & Developer Tools', text: 'Building full-stack tools, often in Angular, that smooth out workflows and take repetitive work off engineers\' plates.', variant: 'code', color: 'var(--color-primary)' },
  { title: 'Incident Management & Leadership', text: 'Bringing order to chaos: pulling in the right people, keeping communication flowing, and driving toward resolution.', variant: 'alert', color: 'var(--color-accent)' },
  { title: 'Observability & Monitoring', text: 'Turning metrics, logs, and traces in Dynatrace and Datadog into dashboards and alerts that surface problems early.', variant: 'goggles', color: 'var(--color-primary)' },
  { title: 'Root Cause Analysis & Postmortems', text: 'Digging into what really happened and turning lessons learned into concrete fixes.', variant: 'papers', color: 'var(--color-accent)' },
  { title: 'AWS Production Support', text: 'Keeping services healthy across EKS, MSK, Amazon MQ, RDS, OpenSearch, and ElastiCache, with observability managed in Terraform.', variant: 'globe', color: 'var(--color-primary)' },
  { title: 'SLIs, SLOs & Reliability', text: 'Partnering with engineering and product to agree on what "reliable" means and measure progress toward it.', variant: 'uptime', color: 'var(--color-accent)' },
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

      {/* Continuing Education */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Continuing Education</h2>
          <p className="section__subtitle">
            I&apos;m a lifelong learner. Here are some of the courses and classes I&apos;ve taken outside of work recently.
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

      {/* Interests */}
      <section className="section">
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
    </>
  );
}
