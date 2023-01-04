import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Sobre() {
  return (
    <Container style={{ marginTop: "1rem" }}>
        <Row
          style={{
            borderTop: "3px solid #FAD82D",
            padding: "5px 0px",
            marginTop: ".5rem",
          }}
        >
         <h2 style={{color:"#fff"}}>Sobre</h2>
        </Row>
      </Container>
  )
}

export default Sobre