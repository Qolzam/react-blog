// - Import react components
import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'

// - Import API
import * as AuthAPI from 'AuthAPI'


export var PrivateRoute = ({component: Component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={(props) => AuthAPI.isAuthorized()
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
        : <Redirect to='/' />}
    />
  )
}
