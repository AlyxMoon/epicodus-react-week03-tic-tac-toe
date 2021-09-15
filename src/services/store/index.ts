import * as game from './modules/game'

export const gameModule = game

export interface ApplicationState {
  game: game.State,
}

export interface AppThunkAction<TAction> {
  (
    dispatch: (action: TAction) => void,
    getState: () => ApplicationState
  ): void,
}

export const reducers = {
  game: game.reducer,
}
