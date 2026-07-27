import { useState } from 'react';
import PlaceholderSvg from '../components/PlaceholderSvg';
import CountryFlag from '../components/CountryFlag';
import cambodiaFlagImage from '../assets/cambodia_flag.png';
import canadaFlagImage from '../assets/canada_flag.png';
import koreaFlagImage from '../assets/korea_flag.png';
import mexicoFlagImage from '../assets/mexico_flag.png';
import portugalFlagImage from '../assets/portugal_flag.png';
import spainFlagImage from '../assets/spain_flag.png';
import './Personal.css';

const TABS = ['Books', 'Travel', 'Volunteering'];

const BOOKS = [
  {
    title: 'Amanda Knox: Waiting to be Heard',
    author: 'Amanda Knox',
    text: 'A memoir about an American college student being wrongfully accused and convicted of murder in Perugia, Italy while studying abroad.',
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    text: 'A memoir chronicaling the life of the former First Lady of the United States, from her childhood to her time in the White House and beyond.',
  },
  {
    title: 'Deacon King Kong',
    author: 'James McBride',
    text: 'A humorous historical fiction novel set in 1969 Brooklyn that touches on issues of race, community, and redemption.',
  },
  {
    title: 'I am Malala',
    author: 'Malala Yousafzai',
    text: 'A memoir about the young life of Malala Yousafzai, a Pakistani activist for female education who survived an assassination attempt by the Taliban and went on to become the youngest-ever Nobel Prize laureate.',
  },
  {
    title: 'Know My Name: A Memoir',
    author: 'Chanel Miller',
    text: 'A memoir about the experience of being a survivor of sexual assault and the journey toward healing and empowerment.',
  },
  {
    title: 'Love Warrior',
    author: 'Glennon Doyle',
    text: 'A memoir about infidelity, betrayal, and redemption.',
  },
  {
    title: 'Loving What Is',
    author: 'Byron Katie',
    text: 'A guide to finding peace and acceptance in the present moment through questioning our thoughts and beliefs.',
  },
  {
    title: 'The Great Believers',
    author: 'Rebecca Makkai',
    text: 'A historical fiction novel, set in the 1980s, about the AIDS epidemic and its impact on a group of friends in Chicago.',
  },
  {
    title: 'The House on Mango Street',
    author: 'Sandra Cisneros',
    text: 'A beautiful novel written in a unique style in the form of vignettes, written in a poetic and lyrical style, tells the story of a young Latina girl growing up in Chicago and her community.',
  },
  {
    title: 'The Vanishing Half',
    author: 'Brett Bennett',
    text: 'A historical fiction novel that follows the lives of twin sisters who choose to live in different racial identities. The story explores themes of race, identity, and transformation.',
  },
];

const TRAVEL = [
  {
    destination: 'Cambodia',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--2',
    image: cambodiaFlagImage,
  },
  {
    destination: 'Canada',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
    image: canadaFlagImage,
  },
  {
    destination: 'China',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--3',
  },
  {
    destination: 'Czech Republic',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Denmark',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'England',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'France',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Germany',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Italy',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--1',
  },
  {
    destination: 'Japan',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--2',
  },
  {
    destination: 'Mexico',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
    image: mexicoFlagImage,
  },
  {
    destination: 'Norway',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--3',
  },
  {
    destination: 'Portugal',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--2',
    image: portugalFlagImage,
  },
  {
    destination: 'South Korea',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
    image: koreaFlagImage,
  },
  {
    destination: 'Spain',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
    image: spainFlagImage,
  },
  {
    destination: 'Sweden',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Thailand',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--1',
  },
  {
    destination: 'Vietnam',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageClass: 'travel-card__image--3',
  },
];

const VOLUNTEERING = [
  {
    role: 'Cat Adoption Center Volunteer',
    org: 'Smittens Rescue',
    text: 'I help care for cats and kittens by cleaning cages, allowing for playtime, observing behavior, and monitoring health. I assist with adoptions which includes meeting potential adopters and processing adoption applications. When the adoption center coordinator is on leave, I fill in as a co-coordinator with managing the center.',
  },
  {
    role: 'River Cleanup Volunteer',
    org: 'San Diego River Park Foundation',
    text: 'I join the River Rescue team who work to clean up small, remote, and complicated trash sites from the San Diego River in order to ensure a healthy ecosystem.',
  }
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
        Reading takes me on journeys beyond the tech world. 
        There are too many to name them all, but here are some books that have shaped my thinking recently.
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
              {place.image ? (
                <img
                  src={place.image}
                  alt={place.destination}
                  className="travel-card__photo"
                />
              ) : (
                <CountryFlag country={place.destination} />
              )}
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
        I love cats and care about the environment that surrounds my community. I volunteer with local organizations to help make a difference in the lives of animals and the health of our planet.
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
