import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ed0c40b = () => interopDefault(import('..\\src\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _8da0d038 = () => interopDefault(import('..\\src\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _763aeaa8 = () => interopDefault(import('..\\src\\pages\\offcanvas-cart.vue' /* webpackChunkName: "pages/offcanvas-cart" */))
const _1df811c7 = () => interopDefault(import('..\\src\\pages\\account\\addresses\\index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _5d2bc766 = () => interopDefault(import('..\\src\\pages\\account\\dashboard.vue' /* webpackChunkName: "pages/account/dashboard" */))
const _2f0f31bc = () => interopDefault(import('..\\src\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _4f36c386 = () => interopDefault(import('..\\src\\pages\\account\\orders\\index.vue' /* webpackChunkName: "pages/account/orders/index" */))
const _19519672 = () => interopDefault(import('..\\src\\pages\\account\\password.vue' /* webpackChunkName: "pages/account/password" */))
const _b1b005bc = () => interopDefault(import('..\\src\\pages\\account\\profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _42c8f0eb = () => interopDefault(import('..\\src\\pages\\blog\\category-classic.vue' /* webpackChunkName: "pages/blog/category-classic" */))
const _aa642886 = () => interopDefault(import('..\\src\\pages\\blog\\category-grid.vue' /* webpackChunkName: "pages/blog/category-grid" */))
const _0a4c010d = () => interopDefault(import('..\\src\\pages\\blog\\category-left-sidebar.vue' /* webpackChunkName: "pages/blog/category-left-sidebar" */))
const _2fe4b5d6 = () => interopDefault(import('..\\src\\pages\\blog\\category-list.vue' /* webpackChunkName: "pages/blog/category-list" */))
const _584d718d = () => interopDefault(import('..\\src\\pages\\blog\\post-classic.vue' /* webpackChunkName: "pages/blog/post-classic" */))
const _b63e6db8 = () => interopDefault(import('..\\src\\pages\\blog\\post-full.vue' /* webpackChunkName: "pages/blog/post-full" */))
const _3482a51c = () => interopDefault(import('..\\src\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _3aae30d6 = () => interopDefault(import('..\\src\\pages\\shop\\catalog\\index.vue' /* webpackChunkName: "pages/shop/catalog/index" */))
const _d8d2e324 = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-3-columns-sidebar.vue' /* webpackChunkName: "pages/shop/category-grid-3-columns-sidebar" */))
const _b1f9c8e8 = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-4-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-4-columns-full" */))
const _6b94fdab = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-5-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-5-columns-full" */))
const _401b1d7e = () => interopDefault(import('..\\src\\pages\\shop\\category-list.vue' /* webpackChunkName: "pages/shop/category-list" */))
const _0d61add0 = () => interopDefault(import('..\\src\\pages\\shop\\category-right-sidebar.vue' /* webpackChunkName: "pages/shop/category-right-sidebar" */))
const _941bf800 = () => interopDefault(import('..\\src\\pages\\shop\\checkout\\index.vue' /* webpackChunkName: "pages/shop/checkout/index" */))
const _08870319 = () => interopDefault(import('..\\src\\pages\\shop\\compare.vue' /* webpackChunkName: "pages/shop/compare" */))
const _1e9e42be = () => interopDefault(import('..\\src\\pages\\shop\\product-columnar.vue' /* webpackChunkName: "pages/shop/product-columnar" */))
const _f8125b9c = () => interopDefault(import('..\\src\\pages\\shop\\product-sidebar.vue' /* webpackChunkName: "pages/shop/product-sidebar" */))
const _e6455f52 = () => interopDefault(import('..\\src\\pages\\shop\\product-standard.vue' /* webpackChunkName: "pages/shop/product-standard" */))
const _2c9f7500 = () => interopDefault(import('..\\src\\pages\\shop\\track-order.vue' /* webpackChunkName: "pages/shop/track-order" */))
const _1ab4997e = () => interopDefault(import('..\\src\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _b40d8f2a = () => interopDefault(import('..\\src\\pages\\site\\about-us.vue' /* webpackChunkName: "pages/site/about-us" */))
const _74c62d3a = () => interopDefault(import('..\\src\\pages\\site\\components.vue' /* webpackChunkName: "pages/site/components" */))
const _0f5dd338 = () => interopDefault(import('..\\src\\pages\\site\\contact-us.vue' /* webpackChunkName: "pages/site/contact-us" */))
const _27c838d8 = () => interopDefault(import('..\\src\\pages\\site\\contact-us-alt.vue' /* webpackChunkName: "pages/site/contact-us-alt" */))
const _74518599 = () => interopDefault(import('..\\src\\pages\\site\\faq.vue' /* webpackChunkName: "pages/site/faq" */))
const _7449c14b = () => interopDefault(import('..\\src\\pages\\site\\not-found.vue' /* webpackChunkName: "pages/site/not-found" */))
const _016694ca = () => interopDefault(import('..\\src\\pages\\site\\terms.vue' /* webpackChunkName: "pages/site/terms" */))
const _04e3b208 = () => interopDefault(import('..\\src\\pages\\site\\typography.vue' /* webpackChunkName: "pages/site/typography" */))
const _b66de59e = () => interopDefault(import('..\\src\\pages\\shop\\checkout\\success.vue' /* webpackChunkName: "pages/shop/checkout/success" */))
const _03c44c22 = () => interopDefault(import('..\\src\\pages\\account\\addresses\\_id.vue' /* webpackChunkName: "pages/account/addresses/_id" */))
const _dae82124 = () => interopDefault(import('..\\src\\pages\\account\\orders\\_id.vue' /* webpackChunkName: "pages/account/orders/_id" */))
const _3e1b7366 = () => interopDefault(import('..\\src\\pages\\shop\\catalog\\_slug.vue' /* webpackChunkName: "pages/shop/catalog/_slug" */))
const _5c7c804c = () => interopDefault(import('..\\src\\pages\\shop\\products\\_slug.vue' /* webpackChunkName: "pages/shop/products/_slug" */))
const _1abb8d88 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/account",
    component: _1ed0c40b,
    name: "account"
  }, {
    path: "/home-two",
    component: _8da0d038,
    name: "home-two"
  }, {
    path: "/offcanvas-cart",
    component: _763aeaa8,
    name: "offcanvas-cart"
  }, {
    path: "/account/addresses",
    component: _1df811c7,
    name: "account-addresses"
  }, {
    path: "/account/dashboard",
    component: _5d2bc766,
    name: "account-dashboard"
  }, {
    path: "/account/login",
    component: _2f0f31bc,
    name: "account-login"
  }, {
    path: "/account/orders",
    component: _4f36c386,
    name: "account-orders"
  }, {
    path: "/account/password",
    component: _19519672,
    name: "account-password"
  }, {
    path: "/account/profile",
    component: _b1b005bc,
    name: "account-profile"
  }, {
    path: "/blog/category-classic",
    component: _42c8f0eb,
    name: "blog-category-classic"
  }, {
    path: "/blog/category-grid",
    component: _aa642886,
    name: "blog-category-grid"
  }, {
    path: "/blog/category-left-sidebar",
    component: _0a4c010d,
    name: "blog-category-left-sidebar"
  }, {
    path: "/blog/category-list",
    component: _2fe4b5d6,
    name: "blog-category-list"
  }, {
    path: "/blog/post-classic",
    component: _584d718d,
    name: "blog-post-classic"
  }, {
    path: "/blog/post-full",
    component: _b63e6db8,
    name: "blog-post-full"
  }, {
    path: "/shop/cart",
    component: _3482a51c,
    name: "shop-cart"
  }, {
    path: "/shop/catalog",
    component: _3aae30d6,
    name: "shop-catalog"
  }, {
    path: "/shop/category-grid-3-columns-sidebar",
    component: _d8d2e324,
    name: "shop-category-grid-3-columns-sidebar"
  }, {
    path: "/shop/category-grid-4-columns-full",
    component: _b1f9c8e8,
    name: "shop-category-grid-4-columns-full"
  }, {
    path: "/shop/category-grid-5-columns-full",
    component: _6b94fdab,
    name: "shop-category-grid-5-columns-full"
  }, {
    path: "/shop/category-list",
    component: _401b1d7e,
    name: "shop-category-list"
  }, {
    path: "/shop/category-right-sidebar",
    component: _0d61add0,
    name: "shop-category-right-sidebar"
  }, {
    path: "/shop/checkout",
    component: _941bf800,
    name: "shop-checkout"
  }, {
    path: "/shop/compare",
    component: _08870319,
    name: "shop-compare"
  }, {
    path: "/shop/product-columnar",
    component: _1e9e42be,
    name: "shop-product-columnar"
  }, {
    path: "/shop/product-sidebar",
    component: _f8125b9c,
    name: "shop-product-sidebar"
  }, {
    path: "/shop/product-standard",
    component: _e6455f52,
    name: "shop-product-standard"
  }, {
    path: "/shop/track-order",
    component: _2c9f7500,
    name: "shop-track-order"
  }, {
    path: "/shop/wishlist",
    component: _1ab4997e,
    name: "shop-wishlist"
  }, {
    path: "/site/about-us",
    component: _b40d8f2a,
    name: "site-about-us"
  }, {
    path: "/site/components",
    component: _74c62d3a,
    name: "site-components"
  }, {
    path: "/site/contact-us",
    component: _0f5dd338,
    name: "site-contact-us"
  }, {
    path: "/site/contact-us-alt",
    component: _27c838d8,
    name: "site-contact-us-alt"
  }, {
    path: "/site/faq",
    component: _74518599,
    name: "site-faq"
  }, {
    path: "/site/not-found",
    component: _7449c14b,
    name: "site-not-found"
  }, {
    path: "/site/terms",
    component: _016694ca,
    name: "site-terms"
  }, {
    path: "/site/typography",
    component: _04e3b208,
    name: "site-typography"
  }, {
    path: "/shop/checkout/success",
    component: _b66de59e,
    name: "shop-checkout-success"
  }, {
    path: "/account/addresses/:id",
    component: _03c44c22,
    name: "account-addresses-id"
  }, {
    path: "/account/orders/:id",
    component: _dae82124,
    name: "account-orders-id"
  }, {
    path: "/shop/catalog/:slug",
    component: _3e1b7366,
    name: "shop-catalog-slug"
  }, {
    path: "/shop/products/:slug?",
    component: _5c7c804c,
    name: "shop-products-slug"
  }, {
    path: "/",
    component: _1abb8d88,
    name: "index"
  }, {
    path: "/:lang/account",
    component: _1ed0c40b,
    name: "lang-account"
  }, {
    path: "/:lang/home-two",
    component: _8da0d038,
    name: "lang-home-two"
  }, {
    path: "/:lang/offcanvas-cart",
    component: _763aeaa8,
    name: "lang-offcanvas-cart"
  }, {
    path: "/:lang/account/addresses",
    component: _1df811c7,
    name: "lang-account-addresses"
  }, {
    path: "/:lang/account/dashboard",
    component: _5d2bc766,
    name: "lang-account-dashboard"
  }, {
    path: "/:lang/account/login",
    component: _2f0f31bc,
    name: "lang-account-login"
  }, {
    path: "/:lang/account/orders",
    component: _4f36c386,
    name: "lang-account-orders"
  }, {
    path: "/:lang/account/password",
    component: _19519672,
    name: "lang-account-password"
  }, {
    path: "/:lang/account/profile",
    component: _b1b005bc,
    name: "lang-account-profile"
  }, {
    path: "/:lang/blog/category-classic",
    component: _42c8f0eb,
    name: "lang-blog-category-classic"
  }, {
    path: "/:lang/blog/category-grid",
    component: _aa642886,
    name: "lang-blog-category-grid"
  }, {
    path: "/:lang/blog/category-left-sidebar",
    component: _0a4c010d,
    name: "lang-blog-category-left-sidebar"
  }, {
    path: "/:lang/blog/category-list",
    component: _2fe4b5d6,
    name: "lang-blog-category-list"
  }, {
    path: "/:lang/blog/post-classic",
    component: _584d718d,
    name: "lang-blog-post-classic"
  }, {
    path: "/:lang/blog/post-full",
    component: _b63e6db8,
    name: "lang-blog-post-full"
  }, {
    path: "/:lang/shop/cart",
    component: _3482a51c,
    name: "lang-shop-cart"
  }, {
    path: "/:lang/shop/catalog",
    component: _3aae30d6,
    name: "lang-shop-catalog"
  }, {
    path: "/:lang/shop/category-grid-3-columns-sidebar",
    component: _d8d2e324,
    name: "lang-shop-category-grid-3-columns-sidebar"
  }, {
    path: "/:lang/shop/category-grid-4-columns-full",
    component: _b1f9c8e8,
    name: "lang-shop-category-grid-4-columns-full"
  }, {
    path: "/:lang/shop/category-grid-5-columns-full",
    component: _6b94fdab,
    name: "lang-shop-category-grid-5-columns-full"
  }, {
    path: "/:lang/shop/category-list",
    component: _401b1d7e,
    name: "lang-shop-category-list"
  }, {
    path: "/:lang/shop/category-right-sidebar",
    component: _0d61add0,
    name: "lang-shop-category-right-sidebar"
  }, {
    path: "/:lang/shop/checkout",
    component: _941bf800,
    name: "lang-shop-checkout"
  }, {
    path: "/:lang/shop/compare",
    component: _08870319,
    name: "lang-shop-compare"
  }, {
    path: "/:lang/shop/product-columnar",
    component: _1e9e42be,
    name: "lang-shop-product-columnar"
  }, {
    path: "/:lang/shop/product-sidebar",
    component: _f8125b9c,
    name: "lang-shop-product-sidebar"
  }, {
    path: "/:lang/shop/product-standard",
    component: _e6455f52,
    name: "lang-shop-product-standard"
  }, {
    path: "/:lang/shop/track-order",
    component: _2c9f7500,
    name: "lang-shop-track-order"
  }, {
    path: "/:lang/shop/wishlist",
    component: _1ab4997e,
    name: "lang-shop-wishlist"
  }, {
    path: "/:lang/site/about-us",
    component: _b40d8f2a,
    name: "lang-site-about-us"
  }, {
    path: "/:lang/site/components",
    component: _74c62d3a,
    name: "lang-site-components"
  }, {
    path: "/:lang/site/contact-us",
    component: _0f5dd338,
    name: "lang-site-contact-us"
  }, {
    path: "/:lang/site/contact-us-alt",
    component: _27c838d8,
    name: "lang-site-contact-us-alt"
  }, {
    path: "/:lang/site/faq",
    component: _74518599,
    name: "lang-site-faq"
  }, {
    path: "/:lang/site/not-found",
    component: _7449c14b,
    name: "lang-site-not-found"
  }, {
    path: "/:lang/site/terms",
    component: _016694ca,
    name: "lang-site-terms"
  }, {
    path: "/:lang/site/typography",
    component: _04e3b208,
    name: "lang-site-typography"
  }, {
    path: "/:lang/shop/checkout/success",
    component: _b66de59e,
    name: "lang-shop-checkout-success"
  }, {
    path: "/:lang/account/addresses/:id",
    component: _03c44c22,
    name: "lang-account-addresses-id"
  }, {
    path: "/:lang/account/orders/:id",
    component: _dae82124,
    name: "lang-account-orders-id"
  }, {
    path: "/:lang/shop/catalog/:slug",
    component: _3e1b7366,
    name: "lang-shop-catalog-slug"
  }, {
    path: "/:lang/shop/products/:slug?",
    component: _5c7c804c,
    name: "lang-shop-products-slug"
  }, {
    path: "/:lang/",
    component: _1abb8d88,
    name: "lang-index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
