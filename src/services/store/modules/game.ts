import { Action, Reducer } from 'redux'
import { AppThunkAction } from '../'

const playerMarkMap: {
  [key: number]: '' | 'X' | 'O',
} = {
  0: '',
  1: 'X',
  2: 'O',
}

export interface State {
  boards: string[][],
  boardVictories: (0 | 1 | 2)[]
  currentBoard: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
  activePlayer: 1 | 2,
}

const unloadedState: State = {
  boards: [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ],
  boardVictories: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  currentBoard: 4,
  activePlayer: 1,
}

interface ActionResetGame {
  type: 'RESET_GAME',
}

interface ActionMarkCell {
  type: 'SET_BOARD_AT_INDEX',
  data: {
    boardIndex: number,
    cellIndex: number,
    mark: '' | 'X' | 'O', 
  },
}

interface ActionToggleActivePlayer {
  type: 'TOGGLE_ACTIVE_PLAYER',
}

type KnownActions = ActionResetGame | ActionMarkCell | ActionToggleActivePlayer

export const actionCreators = {
  resetGame: (): AppThunkAction<KnownActions> => async (dispatch, getState) => {
    dispatch({ type: 'RESET_GAME' })
  },
  selectCell: (boardIndex: number, cellIndex: number): AppThunkAction<KnownActions> => async (dispatch, getState) => {
    dispatch({ 
      type: 'SET_BOARD_AT_INDEX',
      data: {
        boardIndex,
        cellIndex,
        mark: playerMarkMap[getState().game.activePlayer],
      },
    })

    dispatch({
      type: 'TOGGLE_ACTIVE_PLAYER',
    })
  },
}

export const reducer: Reducer<State> = (
  state: State | undefined,
  incomingAction: Action,
): State => {
  if (!state) return unloadedState
  const action = incomingAction as KnownActions

  switch (action.type) {
    case 'RESET_GAME':
      return unloadedState
    case 'SET_BOARD_AT_INDEX':
      return {
        ...state,
        boards: state.boards.map((board, boardIndex) => {
          if (boardIndex !== action.data.boardIndex) return board
          return board.map((cell, cellIndex) => {
            if (cellIndex !== action.data.cellIndex) return cell
            return action.data.mark
          })
        }),
      }
    case 'TOGGLE_ACTIVE_PLAYER':
      return {
        ...state,
        activePlayer: state.activePlayer === 1 ? 2 : 1,
      }
  }

  return state
}
