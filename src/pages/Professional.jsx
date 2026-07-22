import PlaceholderSvg from '../components/PlaceholderSvg';
import { getYearsOfExperience } from '../utils/experience';
import './Professional.css';

const HISTORY = [
  {
    date: '2022 - 2026',
    title: 'Lead Site Reliability Engineer',
    text: 'Made the leap to the operations side of software development, focusing on site reliability engineering, observability engineering, incident response, automation, and cloud architecture. Managed high-stress situations and lead teams to resolve critical incidents while maintaining a focus on long-term reliability and scalability.'
  },
  {
    date: '2020 - 2022',
    title: 'Senior Software Engineer',
    text: 'Applied my Angular expertise for a web application interface for an RFID-enabled medication inventory tracking system. The role evolved into a full-stack position where I was responsible for both front-end and back-end development, CI/CD upgrades, business requirements, and achieving deliverables on time.',
  },
  {
    date: '2016 - 2020',
    title: 'Tech Lead, Manager',
    text: 'Joined a team of high-performers and learned to take ownership of large projects and deliver high-quality solutions in a heavily regulated environment. I learned to balance technical leadership with people management, and I enjoyed mentoring junior developers and helping them grow in their careers.',
  },
  {
    date: '2010 - 2015',
    title: 'Senior Software Engineer',
    text: 'Continued my journey as a .NET developer learning C#, WPF, and early web tools like Backbone.js, AngularJS, and native mobile app conversions. I discovered a love for building web apps and saw how quickly the web evolves. I also realized that software development is a collaborative effort. I enjoyed being part of a team that worked together to solve complex problems and deliver innovative solutions while maintaining the integrity of our codebase.',
  },
  {
    date: '2008 - 2010',
    title: 'Junior Software Engineer',
    text: 'Started my career in a .NET shop building web reports for factory equipment that measured productivity. Gained hands-on experience with VB.NET, ASP.NET, and building client-facing applications that users relied on for important business decisions. I learned that my work had a direct impact on the success of our customers\'s business, and I took pride in delivering high-quality software that met the needs of our users.',
  },
];

const EDUCATION = [
  {
    title: 'From DevOps to Platform Engineering: Master Backstage & IDPs',
    source: 'Udemy',
    year: '2026',
    text: 'Build and deploy applications using Docker, Kubernetes, and ArgoCD, automate CI/CD pipelines with GitHub Actions, create an Internal Developer Platform (IDP) using Backstage, write Documentation as Code with Backstage TechDocs, implement Software Templates for faster application deployments, deploy Backstage in a production environment',
  },
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
  { title: 'Angular', text: 'Deep expertise in the Angular ecosystem.', variant: 'code', color: 'var(--color-primary)' },
  { title: 'React', text: 'Currently learning React and its ecosystem.', variant: 'code', color: 'var(--color-accent)' },
  { title: 'Cloud Architecture', text: 'Experience with AWS, Azure, and GCP.', variant: 'globe', color: 'var(--color-primary)' },
  { title: 'DevOps', text: 'CI/CD pipelines, Docker, and Kubernetes.', variant: 'code', color: 'var(--color-accent)' },
  { title: 'Agile', text: 'Scrum and Kanban methodologies.', variant: 'person', color: 'var(--color-primary)' },
  { title: 'Open Source', text: 'Active contributor and maintainer.', variant: 'heart', color: 'var(--color-accent)' },
];

export default function Professional() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Professional</h1>
          <p>{getYearsOfExperience()} years of building software and growing engineering teams.</p>
        </div>
      </header>

      {/* History */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">History</h2>
          <p className="section__subtitle">My professional journey through the years.</p>

          <div className="timeline">
            {HISTORY.map((item) => (
              <div className="timeline__item" key={item.date}>
                <div className="timeline__dot" />
                <div className="timeline__date">{item.date}</div>
                <div className="timeline__title">{item.title}</div>
                <p className="timeline__text">{item.text}</p>
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
          <h2 className="section__title">Professional Interests</h2>
          <p className="section__subtitle">
            Technologies and disciplines I&apos;m most passionate about.
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
