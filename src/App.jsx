import "./App.css";

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
    </main>
  );
}

export default App;