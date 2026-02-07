"use client";

import { useState } from "react";
import type { Pub } from "@/data/pubs";

const tabs = ["Info", "Sun & Heaters", "Menu", "Reviews"] as const;

type Tab = (typeof tabs)[number];

type PubTabsProps = {
  pub: Pub;
};

export default function PubTabs({ pub }: PubTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Info");

  return (
    <section>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            type="button"
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-panel">
        {activeTab === "Info" ? (
          <div className="info-grid">
            <div>
              <strong>Address:</strong> {pub.address}
            </div>
            {pub.notes ? (
              <div>
                <strong>Notes:</strong> {pub.notes}
              </div>
            ) : null}
          </div>
        ) : null}

        {activeTab === "Sun & Heaters" ? (
          <div className="info-grid">
            <div>
              <strong>Garden:</strong> {pub.gardenOrientation}
            </div>
            {pub.terraceOrientation ? (
              <div>
                <strong>Terrace:</strong> {pub.terraceOrientation}
              </div>
            ) : null}
            <div>
              <strong>Heaters:</strong> {pub.heaters}
            </div>
            <div>
              <strong>Needs verification:</strong>{" "}
              {pub.needsVerification ? "Yes" : "No"}
            </div>
            {pub.notes ? (
              <div>
                <strong>Notes:</strong> {pub.notes}
              </div>
            ) : null}
          </div>
        ) : null}

        {activeTab === "Menu" ? (
          <div className="info-grid">Coming soon.</div>
        ) : null}

        {activeTab === "Reviews" ? (
          <div className="info-grid">Coming soon.</div>
        ) : null}
      </div>
    </section>
  );
}
