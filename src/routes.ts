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
]

export default routes
