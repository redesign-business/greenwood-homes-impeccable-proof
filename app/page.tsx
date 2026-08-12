const projects = [
  {
    name: "Cutting Edge Modern",
    place: "Lake Tahoe",
    image: "/images/proof-cabinet-cutting-edge-modern.webp",
    href: "https://greenwood-homes.com/portfolio/cutting-edge-modern/",
  },
  {
    name: "Clear Creek Fairway",
    place: "Lake Tahoe",
    image: "/images/proof-cabinet-clear-creek-fairway.webp",
    href: "https://greenwood-homes.com/portfolio/clear-creek-mountain-modern/",
  },
  {
    name: "Hale Pakika",
    place: "Hawaii",
    image: "/images/proof-cabinet-hale-pakika.webp",
    href: "https://greenwood-homes.com/portfolio/hale_pakika/",
  },
];

const awards = [
  { year: "2025", name: "Mountain Homes Award", href: "https://tahoequarterly.com/mountain-home-awards-2025/bringing-old-tahoe-style-into-the-light" },
  { year: "2023", name: "Mountain Homes Award", href: "https://tahoequarterly.com/mountain-home-awards-2023/a-modern-take-on-mountain-charm" },
  { year: "2021", name: "Craftsmanship Award", href: "https://tahoequarterly.com/mountain-home-awards-2021/in-harmony-with-the-hills" },
  { year: "2019", name: "Mountain Legacy Home Award", href: "http://tahoequarterly.com/mountain-home-awards-2019/all-in-the-family-2" },
  { year: "2015", name: "Mountain Classic Merit Award", href: "https://greenwood-homes.com/portfolio/mtn_estate/" },
  { year: "2014", name: "Craftsmanship Award", detail: "Martis Camp Estate" },
  { year: "2014", name: "Interior Design Award", href: "https://greenwood-homes.com/portfolio/austin_cabin/" },
];

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 16">
      <path d="M1 8h27M21 1l7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Greenwood Homes, home">
          <img alt="Greenwood Homes" src="/images/gwhweblogo1020-4faa02ba82.png" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#portfolio">Portfolio</a>
          <a href="#approach">Approach</a>
          <a href="#team">Team</a>
        </nav>
        <a className="nav-cta pinned" href="https://greenwood-homes.com/contact/">
          Start a conversation
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="headline-spine">
          <p>Custom homes,<br />professionally delivered.</p>
          <h1 id="hero-title">Homes that hold their ground.</h1>
        </div>

        <div className="hero-photo" role="img" aria-label="Cutting Edge Modern custom home in Lake Tahoe" />

        <a className="hero-cta pinned" href="https://greenwood-homes.com/contact/">
          Start a conversation <Arrow />
        </a>
      </section>

      <section className="testimony paper-sheet" aria-label="Client testimony">
        <span className="brass-pin left" aria-hidden="true" />
        <blockquote>“We have built 5 homes over our lives, in Texas, Lake Tahoe and Hawaii, and our experience with Kevin was the best.”</blockquote>
        <a href="https://greenwood-homes.com/testimonials/">Read client accounts <Arrow /></a>
        <span className="brass-pin right" aria-hidden="true" />
      </section>

      <section className="license-docket" aria-label="Greenwood Homes contractor licenses">
        <div className="license-intro">
          <span>Building since</span>
          <strong>1998</strong>
        </div>
        <dl>
          <div><dt>California</dt><dd>844360</dd></div>
          <div><dt>Nevada</dt><dd>75871</dd></div>
          <div><dt>Hawaii</dt><dd>30129</dd></div>
          <div><dt>Idaho</dt><dd>59886</dd></div>
          <div><dt>Utah</dt><dd>14013486-5501</dd></div>
        </dl>
      </section>

      <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="section-heading">
          <h2 id="portfolio-title">A record you can walk through.</h2>
          <p>Completed custom homes across mountain, lake, and island settings. Each one answers its site differently.</p>
          <a href="https://greenwood-homes.com/portfolio/">Explore the full portfolio <Arrow /></a>
        </div>
        <div className="project-strip">
          {projects.map((project) => (
            <a className="project" href={project.href} key={project.name}>
              <img alt={`${project.name}, a Greenwood Homes project in ${project.place}`} src={project.image} />
              <span><b>{project.name}</b><small>{project.place}</small></span>
            </a>
          ))}
        </div>
      </section>

      <section className="awards" aria-labelledby="awards-title">
        <div className="awards-heading">
          <img alt="Tahoe Quarterly" src="/images/tq-logo-med-ivory-c176412731.png" />
          <h2 id="awards-title">The work, recognized.</h2>
          <p>Seven Tahoe Quarterly honors across mountain homes, craftsmanship, legacy, and interior design.</p>
        </div>
        <div className="award-record">
          {awards.map((award) => {
            const content = <><span>{award.year}</span><strong>{award.name}</strong><small>{award.detail ?? "View awarded work"}</small><Arrow /></>;
            return award.href
              ? <a href={award.href} key={`${award.year}-${award.name}`}>{content}</a>
              : <div key={`${award.year}-${award.name}`}>{content}</div>;
          })}
        </div>
      </section>

      <section className="approach" id="approach" aria-labelledby="approach-title">
        <div className="approach-photo" role="img" aria-label="Lake Tahoe shoreline" />
        <div className="approach-copy paper-sheet">
          <h2 id="approach-title">The plan is part of the craft.</h2>
          <p>Greenwood can join at project inception or after plans are complete. Pre-construction aligns feasibility, budget, schedule, systems, constructability, and risk before building begins.</p>
          <ol>
            <li><b>Plan</b><span>Pre-construction budget, timeline, and review.</span></li>
            <li><b>Build</b><span>Construction management with the owner, architect, and designer.</span></li>
            <li><b>Stand behind it</b><span>Post-construction support, open communication, and warranty.</span></li>
          </ol>
          <a href="https://greenwood-homes.com/about/">See how Greenwood works <Arrow /></a>
        </div>
      </section>

      <section className="team" id="team" aria-labelledby="team-title">
        <div className="team-copy">
          <h2 id="team-title">A regional team. One standard.</h2>
          <p>Project managers, superintendents, coordinators, and craftspeople bring local knowledge to work across California, Nevada, Hawaii, Idaho, and Utah.</p>
          <a href="https://greenwood-homes.com/team/">Meet the team <Arrow /></a>
        </div>
        <div className="portrait-stack" aria-label="Greenwood Homes team members">
          <figure><img alt="Kevin Hanna, President and CEO" src="/images/kevin-hanna_4x4_2025-04_2-47053f6700.jpg" /><figcaption>Kevin Hanna <span>President, CEO</span></figcaption></figure>
          <figure><img alt="Adam Jackson, Project Manager" src="/images/adam_headshot_6x6-b1585dad7e.jpeg" /><figcaption>Adam Jackson <span>Project Manager</span></figcaption></figure>
          <figure><img alt="Javier Osornio-Rivera, Superintendent" src="/images/javier500-b528c0854b.jpg" /><figcaption>Javier Osornio-Rivera <span>Superintendent</span></figcaption></figure>
        </div>
      </section>

      <section className="contact-close">
        <div>
          <h2>Bring Greenwood into the conversation.</h2>
          <p>Whether you have a site, a set of plans, or the beginning of an idea, start with the people who will help build it.</p>
        </div>
        <a className="close-cta pinned" href="https://greenwood-homes.com/contact/">Start a conversation <Arrow /></a>
      </section>

      <footer>
        <p>Greenwood Homes, Inc. · 940 Southwood Blvd. Suite 101 · Incline Village, Nevada 89451</p>
        <a href="tel:+17758310188">775.831.0188</a>
        <p>CA 844360 · NV 75871 · HI 30129 · ID 59886 · UT 14013486-5501</p>
      </footer>
    </main>
  );
}
