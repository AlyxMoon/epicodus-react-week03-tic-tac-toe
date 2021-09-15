import { PureComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { ApplicationState } from '../services/store'

import UltimateBoard from '../components/UltimateBoard'

type Props = {}
  & PropsFromRedux

class HomePage extends PureComponent<Props> {
  render () {
    return (
      <>
        <h1>Play!</h1>
        
        <p> 
          Current Player: {this.props.activePlayer}
        </p>

        <UltimateBoard />
      </>
    )
  }
}

const connector = connect(
  (state: ApplicationState) => ({
    activePlayer: state.game.activePlayer,
  }),
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomePage)
