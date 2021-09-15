import { PureComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

type Props = {}
  & PropsFromRedux

class HomePage extends PureComponent<Props> {
  render () {
    return (
      <>
        <h1>Home Page</h1>
      </>
    )
  }
}

const connector = connect()

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomePage)
