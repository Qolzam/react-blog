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

          <Card.Description>
            {this.props.summary}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

                  <a href={`mailto:${ this.props.contact }?Subject=Hello%20Green`} target="_top">  <Icon name='user'/>Contact Me</a>

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
    avatar: state.user.avatar,
    summary: state.user.summary,
    contact: state.user.contact || state.user.email
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Summary)
