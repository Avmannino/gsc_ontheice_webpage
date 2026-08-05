import "./App.css";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/thegreenwichskatingclub/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.55-1.5H16.7V3.4c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.43-3.96 4.06v2.34H7.6v3.2h2.77V21h3.13Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thegreenwichskatingclub/?hl=en",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const PROGRAMS = [
  {
    title: "Learn to Skate",
    image: "learn-to-skate.png",
    url: "https://wingsarenact.wixstudio.com/gscnewsite/learn-to-skate",
    imageClassName: "",
  },
  {
    title: "Mini Mites",
    image: "mini-mites.png",
    url: "",
    imageClassName: "",
  },
  {
    title: "Youth Travel Hockey",
    image: "youth-travel-hockey.png",
    url: "",
    imageClassName: "",
  },
  {
    title: "Stateline Girls Hockey",
    image: "stateline-girls-hockey.png",
    url: "",
    imageClassName: "",
  },
  {
    title: "Figure Skating",
    image: "figure-skating.png",
    url: "",
    imageClassName: "program-card__image--wide",
  },
  {
    title: "Adult Hockey",
    image: "adult-hockey.png",
    url: "",
    imageClassName: "",
  },
];

function ProgramHeader() {
  const logoSource = `${import.meta.env.BASE_URL}gsc-logo.png`;

  return (
    <header className="program-header">
      <div className="program-header__logo-row">
        <img
          className="program-header__logo"
          src={logoSource}
          alt="Greenwich Skating Club — On the Ice at GSC"
          draggable="false"
        />
      </div>
    </header>
  );
}

function ProgramCard({ program }) {
  const imageSource = `${import.meta.env.BASE_URL}card-images/${program.image}`;
  const hasLink = Boolean(program.url);

  const handleClick = (event) => {
    if (!hasLink) {
      event.preventDefault();
    }
  };

  return (
    <a
      className={`program-card ${
        !hasLink ? "program-card--inactive" : ""
      }`}
      href={program.url || "#"}
      target="_top"
      onClick={handleClick}
      aria-label={program.title}
      aria-disabled={!hasLink}
    >
      <span className="program-card__glow" aria-hidden="true" />

      <span className="program-card__clip" aria-hidden="true">
        <span className="program-card__shine" />
      </span>

      <div className="program-card__image-area">
        <img
          className={`program-card__image ${program.imageClassName}`}
          src={imageSource}
          alt=""
          draggable="false"
        />
      </div>

      <h2 className="program-card__title">{program.title}</h2>
    </a>
  );
}

function App() {
  return (
    <main className="on-the-ice-page">
      <ProgramHeader />

      <section
        className="program-grid"
        aria-label="Greenwich Skating Club programs"
      >
        {PROGRAMS.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </section>

      <section className="social-follow" aria-label="Follow Greenwich Skating Club">
        <p className="social-follow__text">Follow us on</p>

        <div className="social-follow__icons">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              className="social-follow__icon"
              href={social.url || "#"}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;