import { PureComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { ApplicationState, gameModule } from '../services/store'

type Props = {}
  & PropsFromRedux

class HomePage extends PureComponent<Props> {
  render () {
    return (
      <>
        <h1>Play!</h1>

        <div className='game-boards'>
          {this.props.boards.map((board, i) => (
            <div 
              className='game-board'
              key={i}
            >
              {board.map((cell, j) => (
                <div 
                  className='game-board-cell'
                  key={j}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    )
  }
}

const connector = connect(
  (state: ApplicationState) => state.game,
  gameModule.actionCreators,
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomePage)
