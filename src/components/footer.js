import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  quickLinks: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "quick-link" } }
    },
    sort: {
      fields: frontmatter___order,
      order: ASC
    },
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          pageUrl
        }
      }
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const quickLinks = data.quickLinks.edges
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <section className="col-md-2">
            <a href="/" className="text-light"><img src="/assets/HEB-RED-NOBG.svg" alt="ACLS Humanities Ebook" height="100" width="auto" className="block" /></a>
            <small className="d-block pt-2"><a className="text-light" href="/contact">Contact Us</a></small>      
            <p className="social">
              <a href="https://twitter.com/ACLS_HEB"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link tw" aria-hidden="false"><title>Twitter</title><path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"></path></svg></a>
            </p>  
          </section>
          <section className="col-md-3 partners">
            <div>
              <a className="pr-5" href="https://acls.org"><img src="/assets/acls-logo.png" alt="ACLS" /></a>
              <a href="https://www.publishing.umich.edu"><img src="/assets/mpub-logo-white.png" alt="Michigan Publishing"/></a>
            </div> 
            <div>
              <p className="text-light proxima-nova pt-4">ACLS HEB is a partnership between ACLS and Michigan Publishing</p>
            </div>           
          </section>
          <section className="col-md-2">
            <h2 className="text-light">ACLS HEB</h2>
              <ul className="list-unstyled">
                <li><a className="text-light" href="https://fulcrum.org/heb">Browse and Search</a></li>
                <li><a className="text-light" href="/about">About ACLS HEB</a></li>
                <li><a className="text-light" href="/impact">Impact and Usage</a></li>
              </ul>
          </section>
          <section className="col-md-2">
            <h2 className="text-light">Information For</h2>
              <ul className="list-unstyled">
                <li></li>
                <li></li>
                <li></li>
              </ul>
          </section>
          <section className="col-md-2">
            <h2 className="text-light">Quicklinks</h2>
            <ul className="list-unstyled">
              {
                quickLinks.map(({node}) => {
                  return (
                    <li>
                      <a key={node.id} href={node.frontmatter.pageUrl} className="text-light">{node.frontmatter.title}</a>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
          <small className="text-light d-block mb-3">© {year} ACLS Humanities Ebook · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="/terms">Terms of Service</a></small>    
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
