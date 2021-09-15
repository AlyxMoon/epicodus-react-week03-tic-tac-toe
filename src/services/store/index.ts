
export interface ApplicationState {

}

export interface AppThunkAction<TAction> {
  (
    dispatch: (action: TAction) => void,
    getState: () => ApplicationState
  ): void,
}

export const reducers = {}
