import { Router,createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const options= {
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes)
}
const router: Router = createRouter(options);
export default router
