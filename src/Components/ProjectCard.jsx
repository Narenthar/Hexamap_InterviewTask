import React from 'react'
import "../Styles/Projects.css"
import {Container, Row, Col} from "react-bootstrap";


export const ProjectCard = (props) => {
  return (
    <Container className='project-con' >
      <Row className=''>
        <Col className='project-col col-md-12 col-xs-12'>
          <div className='project-image-section' ><img className='project-image' src={props.image} alt="project"/></div>
          <div className='project-card'>
          <p className='project-title'>{props.title}</p>
        <p className='project-desc'>{props.description}</p>
        <div className='project-btn' ><a className='project-link'  href={props.link} target="_blank" rel="noreferrer" >Visit</a></div>
          </div>
          
          
        </Col>
      
      </Row>
        
    </Container>
  )
}
