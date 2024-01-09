import { Avatar, Icon } from "@dev-spendesk/grapes";
import Image from "next/image";
import Link from "next/link";
import { LogoGithub } from "@/lib/logo-github/logo-github";

import "./homepage.css";

export default function Home() {
  return (
    <div className="home-root">
      <header className="home-header">
        <div className="home-header-wrapper">
          <Image
            width={160}
            height={40}
            src="/logo.svg"
            alt="Grapes"
            className="img-grapes"
          />
          <LogoGithub />
        </div>
      </header>
      <main className="home-content">
        <div className="hero">
          <div className="text">
            <h1>
              A bunch of <span>grapes</span>
            </h1>
            <p className="body-l">
              We&apos;re convinced that anyone who uses our products should
              easily and quickly recognize the value of Spendesk while using the
              platform and be delighted by the experience, feeling a sense of
              accomplishment and empowerment.
            </p>
            <Link href="/docs/getting-started" className="primaryLink">
              <span className="initial">Get Started</span>
              <span className="hover">Let&apos;s go</span>
              <Icon name="arrow-right" className="arrow" />
            </Link>
          </div>
          <div className="side"></div>
        </div>

        <section>
          <h2>
            Provide a <span className="highlight">consistent</span> experience
            to anyone
          </h2>
          <p className="body-l text-neutral-dark">
            Users should have this experience across devices and form factors.
            They should also feel that Spendesk honors the conventions of the
            device, feel native to the country and culture within which it is
            used.
          </p>

          <div className="grid">
            <Link href="/docs/design" className="item" id="card1">
              <div>
                <h3 className="body-xl">
                  Design Guidelines <Icon name="external" />
                </h3>
                <p className="body-l mt-xs">
                  Maiores quo qui dolorem qui. Culpa soluta ipsum voluptatem
                  odit est.
                </p>
              </div>
              <Image
                width={150}
                height={150}
                src="/grapes.png"
                alt="grapes"
                className="illustration"
              />
            </Link>
            <Link className="item" href="/docs/design/tokens" id="card2">
              <div>
                <h3 className="body-xl">
                  Design Token <Icon name="external" />
                </h3>
                <p className="body-l mt-xs">Coming Soon</p>
              </div>
              <Image
                width={150}
                height={150}
                src="/grapes.png"
                alt="grapes"
                className="illustration"
              />
            </Link>
            <Link className="expand item" href="/docs/components" id="card3">
              <Image
                width={150}
                height={150}
                src="/grapes.png"
                alt="grapes"
                className="illustration"
              />
              <div>
                <h3 className="body-xl">
                  Components <Icon name="external" />
                </h3>
                <p className="body-l mt-xs">
                  Amet nostrum expedita repellendus dignissimos tempore
                  officiis.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section>
          <h2>
            Meet the <span className="highlight">team</span>
          </h2>
          <p className="body-l text-neutral-dark">
            Amazing people who lead the design system full-time. A question or
            an issue? come chat with our core team on.
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
              <small>Product Designer</small>
            </li>
            <li>
              <Avatar src="/thibault.webp" text="Thibault" size="l" />
              <p>Thibault</p>
              <small>Product Designer</small>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
