import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <Img fluid={data.img.childImageSharp.fluid} />
      <button
        class="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-name="The Starry Night"
      >
        Add to cart
      </button>
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

export default SecondPage
