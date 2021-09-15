import { Action, Reducer } from 'redux'
import { AppThunkAction } from '../'

export interface State {
  boards: string[][],
  boardVictories: (0 | 1 | 2)[]
  currentBoard: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
  currentPlayer: 1 | 2,
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
  currentPlayer: 1,
}

interface ActionResetGame {
  type: 'RESET_GAME',
}

type KnownActions = ActionResetGame

export const actionCreators = {
  resetGame: (): AppThunkAction<KnownActions> => async (dispatch, getState) => {
    dispatch({ type: 'RESET_GAME' })
  }
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
  }

  return state
}