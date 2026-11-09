import { Link } from 'react-router-dom';
import mePhoto from '../assets/me.jpg';
import PlaceholderSvg from '../components/PlaceholderSvg';
import './Home.css';

const HIGHLIGHTS = [
  {
    title: 'Prevent',
    text: 'Partnering with teams on SLIs, SLOs, and automation so small issues don\'t become outages.',
    variant: 'prohibit',
    color: 'var(--color-primary)',
  },
  {
    title: 'Detect',
    text: 'Building dashboards, monitors, and alerts that surface trouble before customers notice.',
    variant: 'goggles',
    color: 'var(--color-accent)',
  },
  {
    title: 'Resolve',
    text: 'Leading incident response, finding the root cause, and turning lessons into lasting fixes.',
    variant: 'bulb',
    color: 'var(--color-primary)',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>
              Hi, I&apos;m <span className="gradient-text">Monica Villanueva</span>
            </h1>
            <p>
              I&apos;m a Site Reliability Engineer who still thinks like a developer. I catch
              production problems early, take charge when things break, and build tools that
              make life easier for the teams behind the services. Off the clock, you&apos;ll find
              me with a book, a sewing project, a rescue cat, or a plane ticket.
            </p>
            <div className="hero__actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/professional" className="btn btn--primary">
                My Career
              </Link>
              <Link to="/personal" className="btn btn--accent">
                Personal Life
              </Link>
            </div>
          </div>

          <div className="hero__avatar">
            <img src={mePhoto} alt="Monica Villanueva" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="section__title" style={{ textAlign: 'center' }}>
            At a Glance
          </h2>
          <p className="section__subtitle" style={{ textAlign: 'center' }}>
            How I keep services running for customers, with a software engineer&apos;s mindset.
          </p>

          <div className="highlights">
            {HIGHLIGHTS.map((item) => (
              <div className="highlight" key={item.title}>
                <div className="highlight__icon">
                  <PlaceholderSvg variant={item.variant} color={item.color} />
                </div>
                <div className="highlight__title gradient-text">{item.title}</div>
                <p className="highlight__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">
            I got my start as a full-stack developer, building web applications on both the
            front end and the back end, and I loved seeing a feature go from an idea to
            something people actually used. Over time I picked up more DevOps and production
            support work, and being close to real outages showed me how much software problems
            affect customers and the people supporting them. That pulled me into Site
            Reliability Engineering, where my developer background helps me make production
            systems healthier: better observability, calmer incident response, and automation
            that reduces toil.
          </p>
          <p className="section__subtitle">
            I&apos;m at my best when things are complicated. I like bringing structure to messy
            situations, setting priorities, getting the right people in the room, and keeping
            everyone moving toward a result. I&apos;ve led development projects, coordinated
            production releases, managed direct reports, and stepped in as incident commander.
            I&apos;m curious and hands-on, and I believe reliability is a shared responsibility
            that works best when teams solve problems together.
          </p>
          <p className="section__subtitle">
            Outside of work, I love sewing, rescuing cats, traveling, and reading fiction and
            memoirs. I believe that a well-rounded life fuels creativity and makes me a better
            engineer.
          </p>
        </div>
      </section>
    </>
  );
}
