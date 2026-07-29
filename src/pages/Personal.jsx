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
    text: 'I learned a lot about its difficult history and the genocide under the Khmer Rouge regime, enjoyed cultural performances like Aspara dance and an acrobatic circus, and visited the ancient temple, Angkor Wat.',
    imageClass: 'travel-card__image--2',
    image: cambodiaFlagImage,
  },
  {
    destination: 'Canada',
    text: 'I visited Vancouver in the rainy season which made it even more magical. Riding bikes around Stanley Park was my favorite memory.',
    imageClass: 'travel-card__image--4',
    image: canadaFlagImage,
  },
  {
    destination: 'China',
    text: 'The book \"Undress Me in the Temple of Heaven\" inspired me to explore this vast and culturally rich country. I visited Beijing, Xi\'an, Shanghai, Hangzhou, and Hong Kong.',
    imageClass: 'travel-card__image--3',
  },
  {
    destination: 'Czech Republic',
    text: 'I made a stop in Prague on my first ever international trip backpacking around Europe. My favorite things were all things Kafka (the writer), learning about the history in the Jewish Quarter, and the public art installation, Babies, by the Czech sculptor David Cerny.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Denmark',
    text: 'I visited Copenhagen and loved the walking and biking culture, the beautiful design of everything, and the \"hygge\" philosophy.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'England',
    text: 'I went to London on my first international trip and then returned years later for a road trip around the country.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'France',
    text: 'I spent 10 days in Paris in the winter and learned that it\'s possible to spend too much time in one city. :) But forever grateful to have seen some of the most famous landmarks in the world, including the Eiffel Tower, Notre Dame, the Louvre (which houses the Mona Lisa!), and Versailles.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Germany',
    text: 'I definitely had my share of bratwurst, pretzels, and beer! But one of my favorite memories was visiting the castle that inspired Disney\'s Sleeping Beauty Castle, Neuschwanstein Castle.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Italy',
    text: 'My favorite memories of visiting Florence were, seeing the Statue of David, seeing the Birth of Venus painting, doing a day trip in Tuscany wine country, and having a real Cappuccino!',
    imageClass: 'travel-card__image--1',
  },
  {
    destination: 'Japan',
    text: 'The most orderly country I\'ve ever visited! I visited Tokyo, Kyoto, and Osaka. My favorite thing was eating the best sushi at the most reasonable prices.',
    imageClass: 'travel-card__image--2',
  },
  {
    destination: 'Mexico',
    text: 'I lived in Mexico City for a few months after completing university and have explored much of the country since then. It is like a second home.',
    imageClass: 'travel-card__image--4',
    image: mexicoFlagImage,
  },
  {
    destination: 'Norway',
    text: 'I visited Bergen and Oslo. My most memorable experiences were doing a mini fjord cruise called Norway in a Nutshell, seeing the painting The Scream by Edvard Munch, visiting the hall where the Nobel Prizes are awarded, and meeting the kindest people.',
    imageClass: 'travel-card__image--3',
  },
  {
    destination: 'Portugal',
    text: 'I visited Coimbra, Porto, and Lisbon. Porto was the most beautiful city I never knew I needed to see. The beautiful tile work, the colorful buildings, and the Douro River made it a magical place to visit.',
    imageClass: 'travel-card__image--2',
    image: portugalFlagImage,
  },
  {
    destination: 'South Korea',
    text: 'I ate my way through Seoul, Gyeongju, and Busan. I loved the variety of delicious Korean cuisine. Busan was the most unexpected treat - an amazing city with many fun tourist attractions and the beautiful surrounding sea.',
    imageClass: 'travel-card__image--4',
    image: koreaFlagImage,
  },
  {
    destination: 'Spain',
    text: 'I have been to Spain many times. Inititally to Barcelona, Tarragona, and Madrid and then later to Sevilla and many back and forth trips to Madrid. I enjoyed the Gaudí architecture, the Roman ruins, the tile work in the south, and the incredible dining and bar culture at a price that is much more reasonable for American travelers.',
    imageClass: 'travel-card__image--4',
    image: spainFlagImage,
  },
  {
    destination: 'Sweden',
    text: 'Stockholm was the first stop on my Scandanavian trip. They had the most beautiful subway station art, instagrammable libraries, and the hippest coffee shops.',
    imageClass: 'travel-card__image--4',
  },
  {
    destination: 'Thailand',
    text: 'I learned that I am a city girl! While the Thai islands are beatiful and fun, I felt most alive when I explored Bangkok.',
    imageClass: 'travel-card__image--1',
  },
  {
    destination: 'Vietnam',
    text: 'Crossing the street in Ho Chi Minh City, with the insane motorbike traffic is something I\'ll never forget! The food was also delcious and cheap for American travelers. This was the start of my guided tour of Southeast Asia.',
    imageClass: 'travel-card__image--3',
  },
];

const VOLUNTEERING = [
  {
    role: 'Cat Adoption Center Volunteer',
    org: 'Smittens Rescue',
    text: 'I help care for cats and kittens by cleaning cages, allowing for playtime, observing behavior, and monitoring health. I assist with adoptions which includes meeting potential adopters and processing adoption applications. When the adoption center coordinator is on leave, I fill in as a co-coordinator with managing the center.',
    icon: 'cat',
  },
  {
    role: 'River Cleanup Volunteer',
    org: 'San Diego River Park Foundation',
    text: 'I join the River Rescue team who work to clean up small, remote, and complicated trash sites from the San Diego River in order to ensure a healthy ecosystem.',
    icon: 'river',
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
        The ability to move about this earth freely, to come and go as I please, is a gift I cherish and a privilege I will not waste.
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
        I am obsessed with cats and care about the ecosystem that surrounds my community. I volunteer with two local organizations to help make a difference in the things I care about.
      </p>
      <div className="volunteer-list">
        {VOLUNTEERING.map((item) => (
          <div className="volunteer-item" key={item.role}>
            <div className="volunteer-item__icon">
              <PlaceholderSvg variant={item.icon ?? 'heart'} color="var(--color-accent)" />
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
