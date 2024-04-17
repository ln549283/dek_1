import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { publicPath } from '../../vue.config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  base: publicPath,

})

export default function (app) {
  app.use(router)
}
export { router }
