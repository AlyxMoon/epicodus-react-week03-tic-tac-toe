import GamePage from './pages/Game'
import HomePage from './pages/Home'

export interface PageRoute {
  path: string[],
  component: any,
}

const routes: PageRoute[] = [
  {
    path: [
      '/'
    ],
    component: HomePage,
  },
  {
    path: [
      '/game',
    ],
    component: GamePage,
  },
]

export default routes
