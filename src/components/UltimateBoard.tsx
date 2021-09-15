import { PureComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { ApplicationState, gameModule } from '../services/store'

class UltimateBoard extends PureComponent<PropsFromRedux> {
  render () {
    return (
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
                onClick={() => this.props.selectCell(i, j)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

const connector = connect(
  (state: ApplicationState) => ({
    boards: state.game.boards,
  }),
  gameModule.actionCreators,
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UltimateBoard)
