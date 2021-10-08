import React from "react"
import {Link} from "gatsby"
import Image from 'gatsby-image'

const StoryCard = ({story}) => {
  const {title, summary, storyImage} = story.frontmatter
  const slug = story.fields.slug

  return (
    <div className="card col-md-5 mb-3">
      <Link to={slug}>
      <Image fluid={storyImage.childImageSharp.fluid} alt={`${title}`} className="card-img" />
      <div className="card-body row">
        <div className="col-sm-12">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{summary}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default StoryCard