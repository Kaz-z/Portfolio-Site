import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, isHomePage = false }) => {
  if (isHomePage) {
    return null; // Hide header on homepage for full-screen hero
  }
  
  return (
    <header
      style={{
        background: `rgba(255, 255, 255, 0.95)`,
        backdropFilter: `blur(10px)`,
        borderBottom: `1px solid rgba(0, 0, 0, 0.08)`,
        position: `sticky`,
        top: 0,
        zIndex: 100,
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`,
          fontWeight: `600`,
          color: `var(--color-text)`,
          letterSpacing: `-0.02em`,
          transition: `color 0.2s ease`,
        }}
      >
        {siteTitle}
      </Link>
    </header>
  )
}

export default Header
