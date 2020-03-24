import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>The Starry Night</h1>
      <Img fluid={data.img.childImageSharp.fluid} />
      <button
        class="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="https://5e7a21d57841f371b3f2c9dc--hardcore-lamport-91a9ed.netlify.com/page-2/"
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
