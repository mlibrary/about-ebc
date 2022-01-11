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
        
        <section className="cards-container">
          <h2 className="mb-4">Stories of Impact</h2>
          <StoryList stories={stories} />
          <Link to="/stories" className="btn btn-secondary mt-4 float-right">
              Read More Stories
          </Link>
        </section>
        <section>
          <div className="readership-map">
            <ReactMarkdown source={readershipMapDescription} />
            <div className="readership-map-embed">
              <iframe title="Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.view=132442623"></iframe>
            </div>
          </div>
          <div className="google-data-studio-oa">
            <h2>Open Access Book Usage</h2>
            <p>This report is created by the <a href="https://educopia.org/data_trust/" target="_blank" rel="noreferrer">Open Access Ebook Usage Trust</a> (OAeBU) and represents usage across a number of different sources platforms. For more information, see <a href="https://mpub.atlassian.net/wiki/spaces/FPS/pages/66453810/UMP+EBC" target="_blank" rel="noreferrer">our FAQ</a></p>
            <div className="embed-responsive embed-responsive-1by1">
              <iframe title="Open Access Book Usage" className="embed-responsive-item" src="https://oaebu-u-m-press.observatory.academy/s/u-m-press/app/dashboards#/view/f6de4970-0686-11ec-a271-a937a93ef099?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2006-01-01',to:now%2B2y))&embed=true"></iframe>
            </div>
          </div>
          <div className="google-data-studio">
            <ReactMarkdown source={googleDataStudioDescription} />
            <div className="embed-responsive embed-responsive-1by1">
              <iframe title="All Book Usage Report" className="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/1fFXJLWMpoGSz_RNTDCKDroEAxjk-wRHw/page/9LCE"></iframe>
            </div>
          </div>
        </section>
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
            storyImage
          }
          frontmatter {
            title
            summary  
          }
        }
      }
    }
  }
`

export default Impact
