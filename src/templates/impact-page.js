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
        <section className="cards-container">
          <h2>Stories of Impact</h2>
          <StoryList stories={stories} />
          <Link to="/stories" className="btn btn-secondary">
              Read More Stories
          </Link>
        </section>
        <section>
          <div className="readership-map">
            <ReactMarkdown source={readershipMapDescription} />
            <div className="readership-map-embed">
              <iframe title="UMP EBC Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.view=132442623"></iframe>
            </div>
          </div>
          <div className="google-data-studio">
            <ReactMarkdown source={googleDataStudioDescription} />
            <div className="embed-responsive embed-responsive-1by1">
              <iframe title="UMP EBC Usage Report" className="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/1fFXJLWMpoGSz_RNTDCKDroEAxjk-wRHw/page/9LCE"></iframe>
            </div>
          </div>
          <div className="google-data-studio-oa">
            <h2>Open Access Ebooks</h2>
            <p>This report is created by the <a href="https://educopia.org/data_trust/" target="_blank">Open Access Ebook Usage Trust</a> (OAeBU) and represents usage across a number of different sources platforms. For more information, see <a href="https://tools.lib.umich.edu/confluence/display/FPS/UMP+EBC+Usage+Statistics+FAQ" target="_blank">our FAQ</a></p>
            <div className="embed-responsive embed-responsive-1by1">
              <iframe title="UMP EBC Open Access Usage" className="embed-responsive-item" src="https://datastudio.google.com/embed/u/0/reporting/9b42ed06-ab37-4bb5-9215-4ea8c3ee70ec/page/9i1ZC"></iframe>
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
