// - Import react components
import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'



export var PrivateRoute = ({component: Component, pashm, ...rest}) => {
  console.log('pashm on prRo : ',pashm);
  return (
    <Route
      {...rest}
      render={(props) => pashm === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export var PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}
