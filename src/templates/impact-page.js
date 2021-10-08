import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import StoryList from '../components/stories/storyList'
import {graphql, Link} from 'gatsby'
import ReactMarkdown from "react-markdown"

const Impact = ({data}) => {
  const {
    title,
    readershipMapDescription,
    googleDataStudioDescription
  } = data.markdownRemark.frontmatter

  const stories = data.stories.edges

  // When we have markdown in the frontmatter, we need to process it
  // with ReactMarkdown (or something) or something similar.
  // When it's in the "html"/not frontmatter, we would "dangerouslySetInnerHTML"

  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <Title title={title} />
        <section>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor commodo ullamcorper a lacus. Aliquam ultrices sagittis orci a scelerisque purus semper. Libero enim sed faucibus turpis. Elementum tempus egestas sed sed risus pretium quam. Est lorem ipsum dolor sit amet consectetur. Tempus iaculis urna id volutpat lacus laoreet non. Leo vel fringilla est ullamcorper eget nulla facilisi. Diam donec adipiscing tristique risus nec. Quisque egestas diam in arcu cursus euismod quis. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Erat imperdiet sed euismod nisi porta lorem. Ornare arcu dui vivamus arcu. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.</p>
        </section>
        <section className="cards-container container">
          <h3>Stories of Impact</h3>
          <StoryList stories={stories} />
          <Link to="/stories" className="nav-link text-dark">
              Read More Stories
          </Link>
        </section>
        <div className="readership-map">
          <ReactMarkdown source={readershipMapDescription} />
          <div className="readership-map-embed">
            <iframe title="ACLS HEB Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.view=22140843"></iframe>
          </div>
        </div>
        <div className="google-data-studio">
          <ReactMarkdown source={googleDataStudioDescription} />
          <div className="embed-responsive embed-responsive-1by1">
            <iframe title="ACLS HEB Usage Report" className="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/1QyXFnCGW2UCxC0UBhToAtLfanWC9w00-/page/9LCE"></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query impactPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      frontmatter{
        title
        readershipMapDescription
        googleDataStudioDescription
      }
    },
    stories: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "story"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 2) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
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
    }
  }
`

export default Impact
