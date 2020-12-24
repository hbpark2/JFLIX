import React from 'react'
import {HashRouter as Router, Route, Redirect, Switch, useLocation, useHistory} from 'react-router-dom'
import Home from 'Routes/Home'
import TV from 'Routes/TV'
import Search from 'Routes/Search'
import Header from 'Components/Header'
import Detail from 'Routes/Detail'
import TestThree from 'Routes/TestThree'
import {animated, useTransition} from 'react-spring'

export default () => {
  const location = useLocation()
  const history = useHistory()
  const referrer = document.location
  // console.log(location);
  // console.log(history);
  console.log(referrer)
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      transform: 'translate(100%,0)',
    },
    enter: {opacity: 1, transform: 'translate(0%,0)'},
    leave: {opacity: 0, transform: 'translate(-50%,0)'},
  })
  return (
    <>
      <Header></Header>
      {transitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Route path="/test" component={TestThree} />
            <Redirect from="*" to="/" />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}
