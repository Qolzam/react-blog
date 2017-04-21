import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='smile' />
    Read More
  </a>
)

const Post = () => (
  <Card fluid
    image= {require('../dist/images/22.jpg')}
    header='Nguyen Thuy'
    meta='March 30 at 9:58pm'
    description="My love story was out of my imagination. Cupid shot me when I was in pursuit of my dream named Silk road. As a result, instead of exploring an ancient network of trade routes, I followed the call of love. Will you marry me, Green?"
    extra={extra}
  />
)

export default Post
