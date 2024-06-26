import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _50c72768 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _517111bf = () => interopDefault(import('../pages/resume/index.vue' /* webpackChunkName: "pages/resume/index" */))
const _e0a021a4 = () => interopDefault(import('../pages/shelf/index.vue' /* webpackChunkName: "pages/shelf/index" */))
const _4b0910b3 = () => interopDefault(import('../pages/shelf/topics/_slug.vue' /* webpackChunkName: "pages/shelf/topics/_slug" */))
const _e40d6434 = () => interopDefault(import('../pages/shelf/_slug.vue' /* webpackChunkName: "pages/shelf/_slug" */))
const _46de3b93 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/portfolio",
    component: _50c72768,
    name: "portfolio"
  }, {
    path: "/resume",
    component: _517111bf,
    name: "resume"
  }, {
    path: "/shelf",
    component: _e0a021a4,
    name: "shelf"
  }, {
    path: "/shelf/topics/:slug?",
    component: _4b0910b3,
    name: "shelf-topics-slug"
  }, {
    path: "/shelf/:slug",
    component: _e40d6434,
    name: "shelf-slug"
  }, {
    path: "/",
    component: _46de3b93,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
