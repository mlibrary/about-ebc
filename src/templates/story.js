import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import {graphql} from "gatsby"
import Image from 'gatsby-image'

const Story = ({data}) => {
  const { html } = data.markdownRemark
  const { title, summary, storyImage } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <Image fluid={storyImage.childImageSharp.fluid} alt={`${title}`} className="card-img" />
            <br />
            <h1 className="mb-3">{title}</h1>
            <div className="summary">
              <p>{summary}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      summary
      date(formatString: "MMMM Do, YYYY")
      storyImage {
        childImageSharp {
          fluid { 
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default Story