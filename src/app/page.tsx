import { Avatar, Icon } from "@dev-spendesk/grapes";
import Image from "next/image";
import Link from "next/link";

import "./homepage.css";

export default function Home() {
  return (
    <main className="home-content">
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-wrapper">
          <h1>
            A bunch of <span>grapes</span>
          </h1>
          <p className="body-l">
            We&apos;re convinced that anyone who uses our products should easily
            and quickly recognize the value of Spendesk while using the platform
            and be delighted by the experience, feeling a sense of
            accomplishment and empowerment.
          </p>
          <Link href="/docs/getting-started" className="hero-cta">
            <span className="initial">Get Started</span>
            <span className="hover">Let&apos;s go</span>
            <Icon name="arrow-right" className="arrow" />
          </Link>
        </div>
      </div>

      <section>
        <h2>
          Provide a <span className="highlight">consistent</span> experience to
          anyone
        </h2>
        <p className="body-l text-neutral-dark">
          Users should have this experience across devices and form factors.
          They should also feel that Spendesk honors the conventions of the
          device, feel native to the country and culture within which it is
          used.
        </p>
        <div className="features">
          <Link className="feature-item" href="/docs/tokens" id="card2">
            <div>
              <h3 className="body-xl">
                Design Tokens <Icon name="external" />
              </h3>
              <p className="body-l mt-xs">
                Explore our colors, spacing system and typography
              </p>
            </div>
            <Image
              width={150}
              height={150}
              src="/icon.svg"
              alt="grapes"
              className="illustration"
            />
          </Link>
          <Link href="#" className="feature-item" id="card1">
            <div>
              <h3 className="body-xl">
                Design Guidelines <Icon name="external" />
              </h3>
              <p className="body-l mt-xs">Coming soon</p>
            </div>
            <Image
              width={150}
              height={150}
              src="/icon.svg"
              alt="grapes"
              className="illustration"
            />
          </Link>
          <Link
            className="expand feature-item"
            href="/docs/components"
            id="card3"
          >
            <div>
              <h3 className="body-xl">
                Components <Icon name="external" />
              </h3>
              <p className="body-l mt-xs">
                Grapes provides React components to build your project faster
                and more consistently
              </p>
            </div>
            <Image
              width={150}
              height={150}
              src="/icon.svg"
              alt="grapes"
              className="illustration"
            />
          </Link>
        </div>
      </section>

      <section>
        <h2>
          Meet the <span className="highlight">team</span>
        </h2>
        <p className="body-l text-neutral-dark">
          Amazing people who lead the design system full-time. A question or an
          issue? come chat with our core team on.
        </p>

        <ul className="team">
          <li>
            <Avatar src="/marie-aline.webp" text="Marie-Aline" size="l" />
            <p>Marie-Aline</p>
            <small>Product Designer</small>
          </li>
          <li>
            <Avatar src="/pauline.webp" text="Pauline" size="l" />
            <p>Pauline</p>
            <small>Frontend Engineer</small>
          </li>
          <li>
            <Avatar src="/thibault.webp" text="Thibault" size="l" />
            <p>Thibault</p>
            <small>Fullstack Engineer</small>
          </li>
        </ul>
      </section>
    </main>
  );
}
