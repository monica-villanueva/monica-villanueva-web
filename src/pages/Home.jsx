import { Link } from 'react-router-dom';
import PlaceholderSvg from '../components/PlaceholderSvg';
import { getYearsOfExperience } from '../utils/experience';
import './Home.css';

export default function Home() {
  const years = getYearsOfExperience();

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
              Software professional with {years} years of experience building scalable
              applications, leading engineering teams, and turning complex problems
              into elegant solutions. Passionate about books, travel, and giving back
              to the community.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/professional" className="btn btn--primary">
                My Career
              </Link>
              <Link to="/personal" className="btn btn--accent">
                Personal Life
              </Link>
            </div>
          </div>

          <div className="hero__avatar">
            <PlaceholderSvg variant="person" color="var(--color-primary)" />
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
            A few highlights from my professional and personal journey.
          </p>

          <div className="highlights">
            <div>
              <div className="highlight__number gradient-text">{years}</div>
              <div className="highlight__label">Years of Experience</div>
            </div>
            <div>
              <div className="highlight__number gradient-text">12</div>
              <div className="highlight__label">Countries Visited</div>
            </div>
            <div>
              <div className="highlight__number gradient-text">100+</div>
              <div className="highlight__label">Books Read</div>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">
            I&apos;m a software professional who has spent nearly two decades crafting
            web applications, mentoring developers, and staying curious about the
            ever-evolving tech landscape. My expertise is rooted in Angular, but
            I&apos;m currently diving deep into React and loving every bit of it.
          </p>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Outside of work, you&apos;ll find me buried in a good book, planning my
            next travel adventure, or volunteering with local organizations. I believe
            that a well-rounded life fuels creativity and makes me a better engineer.
          </p>
        </div>
      </section>
    </>
  );
}
