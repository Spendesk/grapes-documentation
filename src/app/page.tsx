import { Avatar, Icon } from "@dev-spendesk/grapes";
import Link from "next/link";
import "./homepage.css";

export default function Home() {
  return (
    <div className="root">
      <header>
        <div>
          <img src="/logo.svg" alt="Grapes" />
          <a
            href="https://github.com/Spendesk/Grapes"
            className="text-complementary"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 98 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="text">
            <h1>
              A bunch of <span>grapes</span>
            </h1>
            <p className="body-l">
              We're convinced that anyone who uses our products should easily
              and quickly recognize the value of Spendesk while using the
              platform and be delighted by the experience, feeling a sense of
              accomplishment and empowerment.
            </p>
            <Link href="/docs/getting-started" className="primaryLink">
              <span className="initial">Get Started</span>
              <span className="hover">Let's go</span>
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
              <img src="/grapes.png" alt="grapes" className="illustration" />
            </Link>
            <Link className="item" href="/docs/design/tokens" id="card2">
              <div>
                <h3 className="body-xl">
                  Design Token <Icon name="external" />
                </h3>
                <p className="body-l mt-xs">Coming Soon</p>
              </div>
              <img src="/grapes.png" alt="grapes" className="illustration" />
            </Link>
            <Link className="expand item" href="/docs/components" id="card3">
              <img src="/grapes.png" alt="grapes" className="illustration" />
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
