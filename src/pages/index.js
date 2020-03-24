import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div>
          <Img fluid={data.img.childImageSharp.fluid} />
        </div>
      </div>
      <Link to="/page-2/">Voir le produit</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "photo-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
