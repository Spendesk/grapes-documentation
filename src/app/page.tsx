import { Avatar, Icon, Button, type IconName } from "@dev-spendesk/grapes";
import Link from "next/link";

import { getSortedProps } from "@/lib/props-table/utils";

import "./homepage.css";

const iconProps = getSortedProps("Icon");
const nameProp = iconProps.find((prop) => prop.name === "name");
const collator = new Intl.Collator("en-US");
const icons = nameProp?.type.value
  ?.map((name) => name.value.replace(/\"/g, ""))
  .sort(collator.compare) as IconName[];

export default function Home() {
  return (
    <div className="home-content">
      <main>
        <section className="hero">
          <div className="title">
            <h1>A bunch of grapes</h1>
            <p className="body-l">
              We&apos;re convinced that anyone who uses our products should
              easily and quickly recognize the value of Spendesk while using the
              platform and be delighted by the experience, feeling a sense of
              accomplishment and empowerment.
            </p>
            <Link href="/docs/guide" className="hero-cta">
              <span className="initial">Get Started</span>
              <span className="hover">Let&apos;s go</span>
              <Icon name="arrow-right" className="arrow" aria-hidden="true" />
            </Link>
          </div>
          <div className="card">
            <div className="snowflake-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.237 355.927l-66.574-38.54 59.448-10.327c5.846-1.375 10.609-5.183 13.458-10.13 2.48-4.307 3.506-9.478 2.524-14.651-2.11-11.115-12.686-18.039-23.621-15.467l-85.423 31.115L255.914 256l82.136-41.926 85.423 31.115c10.936 2.572 21.512-4.352 23.621-15.467 2.111-11.115-5.046-22.209-15.981-24.781l-59.448-10.327 66.573-38.54c9.54-5.523 12.615-18.092 6.867-28.074-5.748-9.982-18.14-13.596-27.68-8.074l-66.574 38.54 20.805-56.787c3.246-10.782-2.758-22.542-13.413-26.268-10.654-3.725-21.922 1.997-25.168 12.779l-15.838 89.735-72.423 41.926V136l69.585-58.621c7.689-8.21 6.997-20.856-1.548-28.245-8.545-7.391-21.705-6.723-29.394 1.486l-38.644 46.46V20c0-11.046-9.318-20-20.813-20s-20.813 8.954-20.813 20v77.08l-38.644-46.46c-7.689-8.21-20.849-8.876-29.394-1.486-8.544 7.389-9.236 20.035-1.547 28.245L203.187 136v83.853l-72.423-41.926-15.838-89.736c-3.247-10.782-14.515-16.504-25.169-12.779-10.656 3.725-16.659 15.486-13.413 26.268l20.805 56.787-66.573-38.54c-9.54-5.523-21.933-1.908-27.68 8.074s-2.673 22.551 6.867 28.074l66.574 38.54-59.449 10.328C5.953 207.515-1.202 218.609.907 229.724c2.11 11.114 12.686 18.038 23.622 15.466l85.422-31.115L192.086 256l-82.136 41.926-85.423-31.115c-10.936-2.572-21.511 4.352-23.622 15.466-2.109 11.113 5.046 22.209 15.981 24.781l59.449 10.328-66.574 38.54C.223 361.449-2.852 374.018 2.896 384s18.14 13.597 27.68 8.074l66.574-38.54-20.805 56.786c-1.735 5.764-.828 11.805 2.02 16.751 2.48 4.307 6.433 7.784 11.392 9.517 10.655 3.725 21.923-1.997 25.169-12.779l15.838-89.736 72.423-41.926V376l-69.585 58.621c-7.69 8.21-6.997 20.855 1.547 28.245 8.544 7.388 21.705 6.723 29.394-1.487l38.644-46.46V492c0 11.046 9.318 20 20.813 20s20.813-8.954 20.813-20v-77.081l38.644 46.46c4.111 4.389 9.782 6.621 15.478 6.621 4.96 0 9.939-1.694 13.916-5.134 8.545-7.39 9.237-20.035 1.548-28.245L244.813 376v-83.853l72.423 41.926 15.838 89.736c3.246 10.782 14.514 16.504 25.168 12.779 10.653-3.726 16.659-15.487 13.412-26.268l-20.805-56.787 66.574 38.54c9.54 5.523 21.933 1.908 27.68-8.074 5.749-9.981 2.675-22.55-6.866-28.072z" />
              </svg>
            </div>
            <h3>New version 1.x</h3>
            <Button
              component="a"
              href="/docs/guide/codemods"
              text="Upgrade guide"
              variant="secondaryNeutral"
            />
          </div>
        </section>
        <section>
          <h2>
            Provide a <span className="highlight">consistent</span> experience
            to anyone
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
      <div className="icon-separator">
        <div className="icon-set">
          {icons.map((icon) => (
            <Icon key={icon} size="l" name={icon} />
          ))}
        </div>
      </div>
      <footer>
        <section>
          <h2>
            Meet the <span className="highlight">team</span>
          </h2>
          <p className="body-l text-content-primary">
            Amazing people who lead the design system full-time. A question or
            an issue? come chat with our core team on.
          </p>

          <ul className="team">
            <li>
              <Avatar src="/marie-aline.webp" text="Marie-Aline" size="xl" />
              <p>Marie-Aline</p>
              <small>Product Designer</small>
            </li>
            <li>
              <Avatar src="/pauline.webp" text="Pauline" size="xl" />
              <p>Pauline</p>
              <small>Frontend Engineer</small>
            </li>
            <li>
              <Avatar src="/thibault.webp" text="Thibault" size="xl" />
              <p>Thibault</p>
              <small>Fullstack Engineer</small>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
