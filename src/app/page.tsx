"use client";

import Link from "next/link";
import { useState } from "react";
import { pubs, type Pub } from "@/data/pubs";

export default function HomePage() {
  const [mode, setMode] = useState<"Sun" | "Heaters">("Sun");
  const [selectedPub, setSelectedPub] = useState<Pub | null>(null);

  const handleToggle = () => {
    setMode((current) => (current === "Sun" ? "Heaters" : "Sun"));
  };

  return (
    <main>
      <header className="header">
        <div>
          <h1>Sunny Pints</h1>
          <p>Hanwell beta</p>
        </div>
        <button className="toggle" type="button" onClick={handleToggle}>
          <span>Sun / Heaters</span>
          <span>({mode})</span>
        </button>
      </header>

      <section className="map-panel">Map will go here</section>

      <section className="list">
        <h2>Pubs nearby</h2>
        <ul className="pub-list">
          {pubs.map((pub) => (
            <li key={pub.slug}>
              <button
                className="pub-card"
                type="button"
                onClick={() => setSelectedPub(pub)}
              >
                <div className="pub-name">{pub.name}</div>
                <div className="pub-address">{pub.address}</div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {selectedPub ? (
        <div className="bottom-sheet" role="dialog" aria-modal="false">
          <div className="sheet-content">
            <div>
              <div className="pub-name">{selectedPub.name}</div>
              <div className="pub-address">{selectedPub.address}</div>
            </div>
            <Link className="details-button" href={`/pub/${selectedPub.slug}`}>
              Details
            </Link>
            <button
              className="close-button"
              type="button"
              onClick={() => setSelectedPub(null)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
