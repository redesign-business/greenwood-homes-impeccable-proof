"use client";

import { useState } from "react";

const proofs = [
  {
    tab: "Established",
    title: "Built on a long record.",
    fact: "Since 1998",
    body: "A licensed general contractor with offices in Nevada, Idaho, and Hawaii.",
  },
  {
    tab: "Portfolio",
    title: "The work is the evidence.",
    fact: "50+ custom homes",
    body: "A completed portfolio spanning Lake Tahoe, Idaho, and Hawaii.",
  },
  {
    tab: "Craft",
    title: "Recognized in the details.",
    fact: "7 Tahoe Quarterly honors",
    body: "Mountain Home, Craftsmanship, Legacy Home, and Interior Design recognition from 2014 through 2025.",
  },
  {
    tab: "Trust",
    title: "The experience holds up, too.",
    fact: "12 client accounts",
    body: "Clients repeatedly cite quality, communication, integrity, and care long after completion.",
  },
  {
    tab: "Services",
    title: "From first study to follow-through.",
    fact: "6 connected services",
    body: "Custom building, renovation, pre-construction, management, sustainability, and post-construction support.",
  },
  {
    tab: "Team",
    title: "People close to the work.",
    fact: "Regional leadership",
    body: "Project managers, superintendents, coordinators, and craftspeople working across Greenwood’s regions.",
  },
  {
    tab: "Partnership",
    title: "Built with you, not around you.",
    fact: "Owner + architect + builder",
    body: "Close collaboration through every phase, with lasting support after the keys change hands.",
  },
];

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

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 16">
      <path d="M1 8h27M21 1l7 7-7 7" />
    </svg>
  );
}

function DetailDrawing() {
  return (
    <svg className="detail-drawing" aria-hidden="true" viewBox="0 0 240 360">
      <g fill="none" stroke="currentColor">
        <path d="M32 321V122l78-54 93 52v201M18 321h204M32 122h171M110 68v253M82 88l28 33 30-32M69 149h41M69 175h41M69 201h41M69 227h41M69 253h41" />
        <path d="M140 120v201M169 120v201M203 120v201M110 149h93M110 201h93M110 253h93" strokeDasharray="4 5" />
        <path d="M15 111h48M15 105v12M63 105v12M216 90v54M210 90h12M210 144h12" />
      </g>
      <g className="drawing-labels">
        <text x="16" y="98">SITE / MATERIAL / DETAIL</text>
        <text x="146" y="337">NOT TO SCALE</text>
      </g>
    </svg>
  );
}

export default function Home() {
  const [activeProof, setActiveProof] = useState(0);
  const active = proofs[activeProof];

  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Greenwood Homes, home">
          Greenwood Homes
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
          <p>Custom homes, professionally delivered.</p>
          <h1 id="hero-title">Homes that hold their ground.</h1>
        </div>

        <div className="hero-photo" role="img" aria-label="Cutting Edge Modern custom home in Lake Tahoe" />

        <div className="proof-cabinet" aria-label="Seven kinds of Greenwood Homes proof">
          <div className="proof-tabs" role="tablist" aria-orientation="vertical">
            {proofs.map((proof, index) => (
              <button
                aria-controls="proof-panel"
                aria-selected={activeProof === index}
                className={activeProof === index ? "active" : ""}
                id={`proof-tab-${index}`}
                key={proof.tab}
                onClick={() => setActiveProof(index)}
                onKeyDown={(event) => {
                  const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
                  if (!keys.includes(event.key)) return;
                  event.preventDefault();
                  const next = event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? proofs.length - 1
                      : (index + (event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1) + proofs.length) % proofs.length;
                  setActiveProof(next);
                  document.getElementById(`proof-tab-${next}`)?.focus();
                }}
                role="tab"
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {proof.tab}
              </button>
            ))}
          </div>
          <a className="hero-cta pinned" href="https://greenwood-homes.com/contact/">
            Start a conversation <Arrow />
          </a>
          <div
            aria-labelledby={`proof-tab-${activeProof}`}
            className="proof-sheet"
            id="proof-panel"
            key={activeProof}
            role="tabpanel"
          >
            <span className="brass-pin" aria-hidden="true" />
            <div className="proof-copy">
              <p className="proof-count">Proof {String(activeProof + 1).padStart(2, "0")} / 07</p>
              <h2>{active.title}</h2>
              <strong>{active.fact}</strong>
              <p>{active.body}</p>
            </div>
            <DetailDrawing />
          </div>
        </div>
      </section>

      <section className="testimony paper-sheet" aria-label="Client testimony">
        <span className="brass-pin left" aria-hidden="true" />
        <blockquote>“We have built 5 homes over our lives, in Texas, Lake Tahoe and Hawaii, and our experience with Kevin was the best.”</blockquote>
        <a href="https://greenwood-homes.com/testimonials/">Read client accounts <Arrow /></a>
        <span className="brass-pin right" aria-hidden="true" />
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
