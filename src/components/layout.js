/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, isHomePage = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={'Home'} isHomePage={isHomePage} />
      <main>
        {children}
      </main>
      {!isHomePage && (
        <footer
          style={{
            marginTop: `var(--space-12)`,
            paddingTop: `var(--space-8)`,
            paddingBottom: `var(--space-6)`,
            fontSize: `var(--font-sm)`,
            color: `var(--color-text-secondary)`,
            borderTop: `1px solid var(--color-border)`,
            textAlign: `center`,
            maxWidth: `var(--size-content)`,
            margin: `var(--space-12) auto 0 auto`,
            padding: `var(--space-8) var(--size-gutter) var(--space-6) var(--size-gutter)`,
          }}
        >
          © {new Date().getFullYear()} Kaazim Zia.
        </footer>
      )}
    </>
  )
}

export default Layout
