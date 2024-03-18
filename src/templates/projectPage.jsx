import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ProjectPage({ data: { mdx }, children }) {
  console.log(mdx)
  return (
    <Layout>
      <h1>
        <a href={mdx.frontmatter.link} target="_blank" rel="noopener noreferrer">{mdx.frontmatter.title}</a>
      </h1>
      <div>{children}</div>
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
