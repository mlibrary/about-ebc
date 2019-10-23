import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Book from "./book"

export const bookQuery = graphql`
  query {
    allMarkdownRemark (
      filter: {
        frontmatter: { templateKey: { eq: "book" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            description
            readLink
            buyLink
            cover {
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

const BookList = () => {
  const data = useStaticQuery(bookQuery)

  return (
    <section>
      <h2>Books</h2>
      <div class="row">
        {
          data.allMarkdownRemark.edges.map(({node}) => {
            return (
              <div class="col-3">
                <Book book={node.frontmatter} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BookList