import { PureComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { NavLink } from 'react-router-dom'

type Props = {}
  & PropsFromRedux

class HomePage extends PureComponent<Props> {
  render () {
    return (
      <>
        <h1>Home Page</h1>

        <NavLink
          to='/game'
        >Start a Game!</NavLink>

        <p>This is ultimate tic-tac-toe. If you don't know about it, <a href='https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe' target="_blank">you can find out more info here</a>.</p>
      </>
    )
  }
}

const connector = connect()

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomePage)
