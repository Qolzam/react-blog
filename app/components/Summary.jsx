// - Import react components
import React, {Component} from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'


// - Create Summary component class
export class Summary extends Component {

  // Render DOM
  render() {
    return (

      <Card fluid>
        <Image src={this.props.avatar}/>
        <Card.Content>
          <Card.Header>
           {this.props.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
           Born in October
            </span>
          </Card.Meta>
          <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user'/>
            Contact Me
          </a>

        </Card.Content>
      </Card>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  return{

  }
}

// - Map state to props
const mapStateToProps = (state,ownProps) =>{
  return{
    name: state.user.fullName,
    avatar: state.user.avatar
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Summary)
