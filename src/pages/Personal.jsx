import { useState } from 'react';
import PlaceholderSvg from '../components/PlaceholderSvg';
import './Personal.css';

const TABS = ['Books', 'Travel', 'Volunteering'];

const BOOKS = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    text: 'A handbook of agile software craftsmanship that transformed how I think about writing readable, maintainable code.',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    text: 'An in-depth look at the architecture behind reliable, scalable, and maintainable systems. A must-read for any backend or full-stack engineer.',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    text: 'Timeless advice on becoming a better developer. I revisit this one every few years and always pick up something new.',
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    text: 'A powerful memoir about the transformative power of education. One of the most impactful non-fiction books I have ever read.',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    text: 'A beautifully simple story about following your dreams. It reminds me to stay curious and embrace the journey.',
  },
];

const TRAVEL = [
  {
    destination: 'Rome, Italy',
    text: 'Wandered through the Roman Forum and stood in awe at the Colosseum. The food was incredible, and every street corner felt like a history lesson.',
    imageClass: 'travel-card__image--1',
  },
  {
    destination: 'Kyoto, Japan',
    text: 'Explored ancient temples and serene Zen gardens. The blend of tradition and modernity was unlike anything I had experienced before.',
    imageClass: 'travel-card__image--2',
  },
  {
    destination: 'Machu Picchu, Peru',
    text: 'Hiked up the mountain to the Incan ruins at sunrise. The view from the top was absolutely breathtaking and worth every step.',
    imageClass: 'travel-card__image--3',
  },
  {
    destination: 'Reykjavik, Iceland',
    text: 'Chased the Northern Lights and soaked in natural hot springs. A land of fire and ice that felt like another planet.',
    imageClass: 'travel-card__image--4',
  },
];

const VOLUNTEERING = [
  {
    role: 'Coding Mentor',
    org: 'Code for Everyone',
    text: 'I teach young people the fundamentals of programming through weekly hands-on sessions. Watching beginners write their first working app is incredibly rewarding.',
  },
  {
    role: 'Event Organizer',
    org: 'Civic Tech Alliance',
    text: 'I organize hackathons and meetups for the local tech community, focusing on building solutions for social good and public benefit.',
  },
  {
    role: 'Open Source Contributor',
    org: 'Various Projects',
    text: 'I contribute to open source projects, especially tools focused on accessibility and education, to help make technology more inclusive.',
  },
];

export default function Personal() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Personal Life</h1>
          <p>Books, travel, and volunteering that shape who I am outside of work.</p>
        </div>
      </header>

      {/* Tab bar */}
      <section className="section">
        <div className="container">
          <div className="tab-bar" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`tab-btn${i === activeTab ? ' tab-btn--active' : ''}`}
                onClick={() => setActiveTab(i)}
                role="tab"
                aria-selected={i === activeTab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section className="section section--alt">
        <div className="container">
          {activeTab === 0 && <BooksPanel />}
          {activeTab === 1 && <TravelPanel />}
          {activeTab === 2 && <VolunteeringPanel />}
        </div>
      </section>
    </>
  );
}

function BooksPanel() {
  return (
    <>
      <h2 className="section__title">Favorite Books</h2>
      <p className="section__subtitle">
        Reading feeds my curiosity. Here are some books that have shaped my thinking the most.
      </p>
      <div className="book-list">
        {BOOKS.map((book) => (
          <div className="book-item" key={book.title}>
            <div className="book-item__cover">
              <PlaceholderSvg variant="book" color="var(--color-primary)" />
            </div>
            <div className="book-item__info">
              <h3>{book.title}</h3>
              <div className="author">{book.author}</div>
              <p>{book.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TravelPanel() {
  return (
    <>
      <h2 className="section__title">Travel Adventures</h2>
      <p className="section__subtitle">
        The world is a book, and those who do not travel read only one page.
      </p>
      <div className="travel-grid">
        {TRAVEL.map((place) => (
          <div className="travel-card" key={place.destination}>
            <div className={`travel-card__image ${place.imageClass}`}>
              <PlaceholderSvg variant="globe" color="var(--color-accent)" />
            </div>
            <div className="travel-card__body">
              <h3>{place.destination}</h3>
              <p>{place.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function VolunteeringPanel() {
  return (
    <>
      <h2 className="section__title">Volunteering</h2>
      <p className="section__subtitle">
        Giving back is one of the most fulfilling parts of my life. Here are the causes I care about.
      </p>
      <div className="volunteer-list">
        {VOLUNTEERING.map((item) => (
          <div className="volunteer-item" key={item.role}>
            <div className="volunteer-item__icon">
              <PlaceholderSvg variant="heart" color="var(--color-accent)" />
            </div>
            <div className="volunteer-item__info">
              <h3>{item.role}</h3>
              <div className="org">{item.org}</div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
