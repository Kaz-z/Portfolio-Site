import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Muzdex",
    url: "muzdex",
    description:
      "A platform to connect consumers and muslim owned businesses worldwide to promote economic growth and social impact.",
    icon: "🌐",
  },
  {
    text: "Jummah Mode",
    url: "jummah-mode",
    description:
      "An app that helps you focus in salah by automatically silencing your phone when you enter your masjid",
    icon: "🕌",
  },
  {
    text: "AI Sheikh",
    url: "ai-sheikh",
    description:
      "Islamic expert to help you find answers quicker backed by an IslamQA trained knowledgebase",
    icon: "📖",
  },
  // {
  //   text: "Build and Host",
  //   url: "https://www.gatsbyjs.com/cloud",
  //   description:
  //     "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  // },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  {
    text: "Twitter",
    url: "https:/twitter.com/Kaz_Zia",
  },
  {
    text: "Email",
    url: "mailto:kaazimzia32@gmail.com",
  },
  {
    text: "Calendly",
    url: "https://calendly.com/kaazimzia/30min",
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/pixelated-home-image.webp"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
        className={styles.headerImage}
      />
      <h1>
        I'm Kaazim - <b>A Full Stack Web Dev</b>
      </h1>
      <p className={styles.intro}>
        {/* <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br /> */}
        I'm a passionate Software Engineer specializing in turning complex problems into elegant, scalable solutions. With a knack for Javascript, I build software that aligns with my value system
      </p>
    </div>
    <div className={styles.textCenter}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}`}
          >
            {link.text} {link.icon}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
