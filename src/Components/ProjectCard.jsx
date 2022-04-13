
import React from 'react'

export const ProjectCard = (props) => {
  return (
    <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noreferrer" >Visit</a>
    </div>
  )
}
