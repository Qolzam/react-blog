import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Summary = () => (
  <Card fluid>
    <Image src={require('../dist/images/15.jpg')} />
    <Card.Content>
      <Card.Header>
        Nguyen Thuy
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Born in 1988
        </span>
      </Card.Meta>
      <Card.Description>
       Thuy is a lovely girl following her happiness.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
       Contact Me
      </a>
    </Card.Content>
  </Card>
)

export default Summary
