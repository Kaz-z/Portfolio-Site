import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "./projectPage.module.css"

export default function ProjectPage({ data: { mdx }, children }) {
  console.log(mdx)
  return (
    <Layout>
      <div className={styles.projectContainer}>
        <h1 className={styles.projectTitle}>
          <a href={mdx.frontmatter.link} target="_blank" rel="noopener noreferrer">{mdx.frontmatter.title}</a>
        </h1>
        <div className={styles.projectContent}>{children}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MdxPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        link
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`
