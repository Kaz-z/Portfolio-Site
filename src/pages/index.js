import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

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
  {
    text: "Remedy Roots",
    url: "remedy-roots",
    description:
      "A platform to discover prophetic remedies for health and wellbeing",
    icon: "🌿",
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
    url: "https://twitter.com/Kaz_Zia",
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

const IndexPage = () => {
  const [projectsRef, isProjectsIntersecting, hasProjectsIntersected] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-100px 0px'
  })

  return (
  <Layout isHomePage={true}>
    {/* Full Viewport Hero Section */}
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <StaticImage
          src="../images/pixelated-home-image.webp"
          loading="eager"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Kaazim Zia"
          style={{ 
            marginBottom: `var(--space-6)`,
            background: 'transparent'
          }}
          className={styles.headerImage}
          backgroundColor="transparent"
        />
        <h1 className={styles.heroTitle}>
          Kaazim Zia
        </h1>
        <p className={styles.heroSubtitle}>
          Full Stack Developer building software that aligns with my value system.
        </p>
        <div className={styles.heroSocialLinks}>
          {moreLinks.map((link, i) => (
            <a key={link.url} href={`${link.url}`} title={link.text}>
              {link.text === 'Twitter' && '𝕏'}
              {link.text === 'Email' && '📧'}
              {link.text === 'Calendly' && '📅'}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        ↓ Scroll to explore my work
      </div>
    </section>

    {/* Projects Content Section */}
    <section className={styles.contentSection}>
      <div className={styles.projectsSection} ref={projectsRef}>
        <h2 className={`${styles.sectionTitle} ${hasProjectsIntersected ? styles.animate : ''}`}>
          Featured Projects
        </h2>
        <ul className={styles.list}>
        {links.map((link, index) => (
          <li 
            key={link.url} 
            className={`${styles.listItem} ${hasProjectsIntersected ? styles.animate : ''}`}
          >
            <a
              className={styles.listItemCard}
              href={`${link.url}`}
            >
              <div className={styles.listItemLink}>
                {link.text} {link.icon}
              </div>
              <p className={styles.listItemDescription}>{link.description}</p>
            </a>
          </li>
        ))}
        </ul>
      </div>
      
      {/* Footer */}
      <footer
        style={{
          marginTop: `var(--space-12)`,
          paddingTop: `var(--space-8)`,
          paddingBottom: `var(--space-6)`,
          fontSize: `var(--font-sm)`,
          color: `var(--color-text-secondary)`,
          borderTop: `1px solid var(--color-border)`,
          textAlign: `center`,
        }}
      >
        © {new Date().getFullYear()} Kaazim Zia
      </footer>
    </section>
  </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
