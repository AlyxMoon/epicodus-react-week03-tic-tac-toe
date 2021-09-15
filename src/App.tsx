import { PureComponent } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'

import routes, { PageRoute } from './routes'

interface Props extends PropsFromRedux {
  routes?: PageRoute[],
}

export class App extends PureComponent<Props> {
  public render () {
    const Routes: JSX.Element[] = routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={true}
      >
        <route.component />
      </Route>
    ))

    return (
      <div className="app">
        <main>
          <BrowserRouter>
            <Switch>
              {Routes}
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

const connector = connect()

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)
