import { Icon } from "@dev-spendesk/grapes";
import Link from "next/link";

import "./homepage.css";

export default function Home() {
  return (
    <div className="home-content">
      <main>
        <section className="hero">
          <h1>A bunch of grapes</h1>
          <p className="body-l">
            We&apos;re convinced that anyone who uses our products should easily
            and quickly recognize the value of Spendesk while using the platform
            and be delighted by the experience, feeling a sense of
            accomplishment and empowerment.
          </p>
          <Link href="/docs/guide" className="hero-cta">
            <span className="initial">Get Started</span>
            <span className="hover">Let&apos;s go</span>
            <Icon name="arrow-right" className="arrow" aria-hidden="true" />
          </Link>
        </section>
        <section>
          <h2>
            Provide a{" "}
            <span className="text-content-brand-default">consistent</span>{" "}
            experience to anyone
          </h2>
          <p className="body-l text-content-primary">
            Users should have this experience across devices and form factors.
            They should also feel that Spendesk honors the conventions of the
            device, feel native to the country and culture within which it is
            used.
          </p>
          <div className="features">
            <Link className="feature-item" href="/docs/tokens">
              <h3>Design Tokens</h3>
              <p>Explore our colors, spacing system and typography</p>
              <Icon name="arrow-right" size="xl" />
            </Link>
            <Link className="feature-item" href="/docs/components">
              <h3>Components</h3>
              <p>
                Grapes provides React components to build your project faster
                and more consistently
              </p>
              <Icon name="arrow-right" size="xl" />
            </Link>
            <Link className="feature-item" href="/docs/components/icon">
              <h3>Icons</h3>
              <p>Over 110 carefully designed icons</p>
              <Icon name="arrow-right" size="xl" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
