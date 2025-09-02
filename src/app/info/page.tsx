import React from "react";
import c from "./info.module.css";

const Info = () => {
  return (
    <div className={c.infoPage}>
      <div className={c.infoPageContent}>
        <div className={c.infoContainer}>
          <div className={c.infoHeader}>
            <h1 className={c.infoTitle}>About City Events Radar</h1>
            <p className={c.infoSubtitle}>
              Your ultimate guide to discovering amazing events in your city
            </p>
          </div>

          <div className={c.infoContent}>
            <div className={c.infoSection}>
              <div className={c.sectionIcon}>❤️</div>
              <h2>
                Special thanks to{" "}
                <a
                  href="https://www.ticketmaster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={c.ticketmasterLink}
                >
                  Ticketmaster
                </a>
              </h2>
              <p>
                My pet project would not be possible without the extensive event
                data provided by Ticketmaster. Their API allows me to offer a
                wide range of events with accurate details and real-time
                availability.
              </p>
            </div>

            <div className={c.infoSection}>
              <div className={c.sectionIcon}>🔍</div>
              <h2>How It Works</h2>
              <p>
                The website connects to the Ticketmaster API and automatically
                fetches the latest events. It organizes them into a clean,
                easy-to-browse interface with filters by city, date, and
                category.
              </p>
            </div>

            <div className={c.infoSection}>
              <div className={c.sectionIcon}>🎫</div>
              <h2>Easy Booking</h2>
              <p>
                When you find an event you love, you&apos;ll be redirected to the
                official ticketing platform where you can securely purchase your
                tickets. No hidden fees, no complicated processes.
              </p>
            </div>
          </div>

          <div className={c.statsSection}>
            <div className={c.stat}>
              <div className={c.statNumber}>10,000+</div>
              <div className={c.statLabel}>Events Discovered</div>
            </div>
            <div className={c.stat}>
              <div className={c.statNumber}>50+</div>
              <div className={c.statLabel}>Cities Covered</div>
            </div>
            <div className={c.stat}>
              <div className={c.statNumber}>24/7</div>
              <div className={c.statLabel}>Real-time Updates</div>
            </div>

            <div className={c.statsNote}>
              <p>*According to Ticketmaster</p>
            </div>
          </div>

          <div className={c.contactSection}>
            <h2>Contact developer</h2>
            <p>
              Have questions or suggestions? I&apos;d love to hear from you!
            </p>
            <div className={c.contactInfo}>
              <div className={c.contactItem}>
                <span className={c.contactIcon}>🌐</span>
                <a href="https://unk-pn.ru" target="_blank">
                  unk-pn.ru
                </a>
              </div>
              <div className={c.contactItem}>
                <span className={c.contactIcon}>✈️</span>
                <a href="https://t.me/unkpn_dev" target="_blank">
                  @unkpn_dev
                </a>
              </div>
              <div className={c.contactItem}>
                <span className={c.contactIcon}>👨🏻‍💻</span>
                <a href="https://github.com/unk-pn" target="_blank">
                  unk-pn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
