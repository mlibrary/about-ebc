import React from "react"

const CallToAction = ({callToAction}) => {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-md-6">
          <p>{callToAction.description}</p>
        </div>
        <div className="col-md-6 text-center">
          <a className="btn btn-primary" href={callToAction.buttonUrl}>{callToAction.buttonLabel}</a>
        </div>
      </div>
    </div>
  )
}


export default CallToAction
