import React from 'react'
import { Container, Description, Title } from './styled'

function JonInfo({title,description}) {
  return (
    <Container>
         <Title>{title}</Title>
         <Description>{description}</Description>
    </Container>
  )
}

export default JonInfo
