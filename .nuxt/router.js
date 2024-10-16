import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _517b78b4 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _0a4808a5 = () => interopDefault(import('../pages/resume/index.vue' /* webpackChunkName: "pages/resume/index" */))
const _2a4b8388 = () => interopDefault(import('../pages/shelf/index.vue' /* webpackChunkName: "pages/shelf/index" */))
const _4f28c319 = () => interopDefault(import('../pages/shelf/topics/_slug.vue' /* webpackChunkName: "pages/shelf/topics/_slug" */))
const _2894e240 = () => interopDefault(import('../pages/shelf/_slug.vue' /* webpackChunkName: "pages/shelf/_slug" */))
const _dd22c926 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _517b78b4,
    name: "portfolio"
  }, {
    path: "/resume",
    component: _0a4808a5,
    name: "resume"
  }, {
    path: "/shelf",
    component: _2a4b8388,
    name: "shelf"
  }, {
    path: "/shelf/topics/:slug?",
    component: _4f28c319,
    name: "shelf-topics-slug"
  }, {
    path: "/shelf/:slug",
    component: _2894e240,
    name: "shelf-slug"
  }, {
    path: "/",
    component: _dd22c926,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
