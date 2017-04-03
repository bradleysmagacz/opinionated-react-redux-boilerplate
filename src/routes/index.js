import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import DashboardRoute from './Dashboard'
import LoginRoute from './Counter'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    DashboardRoute(store),
    LoginRoute(store)
  ]
})

export default createRoutes
