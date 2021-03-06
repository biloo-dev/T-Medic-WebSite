import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _547af0e0 = () => interopDefault(import('..\\src\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _5c456f0e = () => interopDefault(import('..\\src\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _0ae690fe = () => interopDefault(import('..\\src\\pages\\offcanvas-cart.vue' /* webpackChunkName: "pages/offcanvas-cart" */))
const _03d3da5e = () => interopDefault(import('..\\src\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _ed6e045c = () => interopDefault(import('..\\src\\pages\\account\\addresses\\index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _cc5052bc = () => interopDefault(import('..\\src\\pages\\account\\dashboard.vue' /* webpackChunkName: "pages/account/dashboard" */))
const _1e2293f7 = () => interopDefault(import('..\\src\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _5ae54b5b = () => interopDefault(import('..\\src\\pages\\account\\orders\\index.vue' /* webpackChunkName: "pages/account/orders/index" */))
const _1fc8bd7d = () => interopDefault(import('..\\src\\pages\\account\\password.vue' /* webpackChunkName: "pages/account/password" */))
const _1afa48b7 = () => interopDefault(import('..\\src\\pages\\account\\profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _4e7778c0 = () => interopDefault(import('..\\src\\pages\\blog\\category-classic.vue' /* webpackChunkName: "pages/blog/category-classic" */))
const _1fd107f0 = () => interopDefault(import('..\\src\\pages\\blog\\category-grid.vue' /* webpackChunkName: "pages/blog/category-grid" */))
const _35dbd350 = () => interopDefault(import('..\\src\\pages\\blog\\category-left-sidebar.vue' /* webpackChunkName: "pages/blog/category-left-sidebar" */))
const _2d573560 = () => interopDefault(import('..\\src\\pages\\blog\\category-list.vue' /* webpackChunkName: "pages/blog/category-list" */))
const _20bb2be2 = () => interopDefault(import('..\\src\\pages\\blog\\post-classic.vue' /* webpackChunkName: "pages/blog/post-classic" */))
const _247c36ef = () => interopDefault(import('..\\src\\pages\\blog\\post-full.vue' /* webpackChunkName: "pages/blog/post-full" */))
const _4ef2f71e = () => interopDefault(import('..\\src\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _469160aa = () => interopDefault(import('..\\src\\pages\\shop\\catalog\\index.vue' /* webpackChunkName: "pages/shop/catalog/index" */))
const _def27c0e = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-3-columns-sidebar.vue' /* webpackChunkName: "pages/shop/category-grid-3-columns-sidebar" */))
const _29238be1 = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-4-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-4-columns-full" */))
const _24952400 = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-5-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-5-columns-full" */))
const _253c018c = () => interopDefault(import('..\\src\\pages\\shop\\category-list.vue' /* webpackChunkName: "pages/shop/category-list" */))
const _774bbd2d = () => interopDefault(import('..\\src\\pages\\shop\\category-right-sidebar.vue' /* webpackChunkName: "pages/shop/category-right-sidebar" */))
const _61cea4ea = () => interopDefault(import('..\\src\\pages\\shop\\checkout\\index.vue' /* webpackChunkName: "pages/shop/checkout/index" */))
const _b1ad30b8 = () => interopDefault(import('..\\src\\pages\\shop\\compare.vue' /* webpackChunkName: "pages/shop/compare" */))
const _07413314 = () => interopDefault(import('..\\src\\pages\\shop\\product-columnar.vue' /* webpackChunkName: "pages/shop/product-columnar" */))
const _c5c50886 = () => interopDefault(import('..\\src\\pages\\shop\\product-sidebar.vue' /* webpackChunkName: "pages/shop/product-sidebar" */))
const _cee84fa8 = () => interopDefault(import('..\\src\\pages\\shop\\product-standard.vue' /* webpackChunkName: "pages/shop/product-standard" */))
const _33169c0b = () => interopDefault(import('..\\src\\pages\\shop\\track-order.vue' /* webpackChunkName: "pages/shop/track-order" */))
const _284fe016 = () => interopDefault(import('..\\src\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _48b93580 = () => interopDefault(import('..\\src\\pages\\site\\about-us.vue' /* webpackChunkName: "pages/site/about-us" */))
const _396f34f8 = () => interopDefault(import('..\\src\\pages\\site\\components.vue' /* webpackChunkName: "pages/site/components" */))
const _f99fc266 = () => interopDefault(import('..\\src\\pages\\site\\contact-us.vue' /* webpackChunkName: "pages/site/contact-us" */))
const _50045ca9 = () => interopDefault(import('..\\src\\pages\\site\\contact-us-alt.vue' /* webpackChunkName: "pages/site/contact-us-alt" */))
const _7159e7a4 = () => interopDefault(import('..\\src\\pages\\site\\faq.vue' /* webpackChunkName: "pages/site/faq" */))
const _1835a1d4 = () => interopDefault(import('..\\src\\pages\\site\\not-found.vue' /* webpackChunkName: "pages/site/not-found" */))
const _4442bfd6 = () => interopDefault(import('..\\src\\pages\\site\\terms.vue' /* webpackChunkName: "pages/site/terms" */))
const _71607291 = () => interopDefault(import('..\\src\\pages\\site\\typography.vue' /* webpackChunkName: "pages/site/typography" */))
const _0eeb7ffc = () => interopDefault(import('..\\src\\pages\\shop\\checkout\\success.vue' /* webpackChunkName: "pages/shop/checkout/success" */))
const _68404cba = () => interopDefault(import('..\\src\\pages\\account\\addresses\\_id.vue' /* webpackChunkName: "pages/account/addresses/_id" */))
const _13172efa = () => interopDefault(import('..\\src\\pages\\account\\orders\\_id.vue' /* webpackChunkName: "pages/account/orders/_id" */))
const _44dabf62 = () => interopDefault(import('..\\src\\pages\\shop\\catalog\\_slug.vue' /* webpackChunkName: "pages/shop/catalog/_slug" */))
const _2a2f2d36 = () => interopDefault(import('..\\src\\pages\\shop\\products\\_slug.vue' /* webpackChunkName: "pages/shop/products/_slug" */))
const _40a94e72 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _547af0e0,
    name: "account"
  }, {
    path: "/home-two",
    component: _5c456f0e,
    name: "home-two"
  }, {
    path: "/offcanvas-cart",
    component: _0ae690fe,
    name: "offcanvas-cart"
  }, {
    path: "/shop",
    component: _03d3da5e,
    name: "shop"
  }, {
    path: "/account/addresses",
    component: _ed6e045c,
    name: "account-addresses"
  }, {
    path: "/account/dashboard",
    component: _cc5052bc,
    name: "account-dashboard"
  }, {
    path: "/account/login",
    component: _1e2293f7,
    name: "account-login"
  }, {
    path: "/account/orders",
    component: _5ae54b5b,
    name: "account-orders"
  }, {
    path: "/account/password",
    component: _1fc8bd7d,
    name: "account-password"
  }, {
    path: "/account/profile",
    component: _1afa48b7,
    name: "account-profile"
  }, {
    path: "/blog/category-classic",
    component: _4e7778c0,
    name: "blog-category-classic"
  }, {
    path: "/blog/category-grid",
    component: _1fd107f0,
    name: "blog-category-grid"
  }, {
    path: "/blog/category-left-sidebar",
    component: _35dbd350,
    name: "blog-category-left-sidebar"
  }, {
    path: "/blog/category-list",
    component: _2d573560,
    name: "blog-category-list"
  }, {
    path: "/blog/post-classic",
    component: _20bb2be2,
    name: "blog-post-classic"
  }, {
    path: "/blog/post-full",
    component: _247c36ef,
    name: "blog-post-full"
  }, {
    path: "/shop/cart",
    component: _4ef2f71e,
    name: "shop-cart"
  }, {
    path: "/shop/catalog",
    component: _469160aa,
    name: "shop-catalog"
  }, {
    path: "/shop/category-grid-3-columns-sidebar",
    component: _def27c0e,
    name: "shop-category-grid-3-columns-sidebar"
  }, {
    path: "/shop/category-grid-4-columns-full",
    component: _29238be1,
    name: "shop-category-grid-4-columns-full"
  }, {
    path: "/shop/category-grid-5-columns-full",
    component: _24952400,
    name: "shop-category-grid-5-columns-full"
  }, {
    path: "/shop/category-list",
    component: _253c018c,
    name: "shop-category-list"
  }, {
    path: "/shop/category-right-sidebar",
    component: _774bbd2d,
    name: "shop-category-right-sidebar"
  }, {
    path: "/shop/checkout",
    component: _61cea4ea,
    name: "shop-checkout"
  }, {
    path: "/shop/compare",
    component: _b1ad30b8,
    name: "shop-compare"
  }, {
    path: "/shop/product-columnar",
    component: _07413314,
    name: "shop-product-columnar"
  }, {
    path: "/shop/product-sidebar",
    component: _c5c50886,
    name: "shop-product-sidebar"
  }, {
    path: "/shop/product-standard",
    component: _cee84fa8,
    name: "shop-product-standard"
  }, {
    path: "/shop/track-order",
    component: _33169c0b,
    name: "shop-track-order"
  }, {
    path: "/shop/wishlist",
    component: _284fe016,
    name: "shop-wishlist"
  }, {
    path: "/site/about-us",
    component: _48b93580,
    name: "site-about-us"
  }, {
    path: "/site/components",
    component: _396f34f8,
    name: "site-components"
  }, {
    path: "/site/contact-us",
    component: _f99fc266,
    name: "site-contact-us"
  }, {
    path: "/site/contact-us-alt",
    component: _50045ca9,
    name: "site-contact-us-alt"
  }, {
    path: "/site/faq",
    component: _7159e7a4,
    name: "site-faq"
  }, {
    path: "/site/not-found",
    component: _1835a1d4,
    name: "site-not-found"
  }, {
    path: "/site/terms",
    component: _4442bfd6,
    name: "site-terms"
  }, {
    path: "/site/typography",
    component: _71607291,
    name: "site-typography"
  }, {
    path: "/shop/checkout/success",
    component: _0eeb7ffc,
    name: "shop-checkout-success"
  }, {
    path: "/account/addresses/:id",
    component: _68404cba,
    name: "account-addresses-id"
  }, {
    path: "/account/orders/:id",
    component: _13172efa,
    name: "account-orders-id"
  }, {
    path: "/shop/catalog/:slug",
    component: _44dabf62,
    name: "shop-catalog-slug"
  }, {
    path: "/shop/products/:slug?",
    component: _2a2f2d36,
    name: "shop-products-slug"
  }, {
    path: "/",
    component: _40a94e72,
    name: "index"
  }, {
    path: "/:lang/account",
    component: _547af0e0,
    name: "lang-account"
  }, {
    path: "/:lang/home-two",
    component: _5c456f0e,
    name: "lang-home-two"
  }, {
    path: "/:lang/offcanvas-cart",
    component: _0ae690fe,
    name: "lang-offcanvas-cart"
  }, {
    path: "/:lang/shop",
    component: _03d3da5e,
    name: "lang-shop"
  }, {
    path: "/:lang/account/addresses",
    component: _ed6e045c,
    name: "lang-account-addresses"
  }, {
    path: "/:lang/account/dashboard",
    component: _cc5052bc,
    name: "lang-account-dashboard"
  }, {
    path: "/:lang/account/login",
    component: _1e2293f7,
    name: "lang-account-login"
  }, {
    path: "/:lang/account/orders",
    component: _5ae54b5b,
    name: "lang-account-orders"
  }, {
    path: "/:lang/account/password",
    component: _1fc8bd7d,
    name: "lang-account-password"
  }, {
    path: "/:lang/account/profile",
    component: _1afa48b7,
    name: "lang-account-profile"
  }, {
    path: "/:lang/blog/category-classic",
    component: _4e7778c0,
    name: "lang-blog-category-classic"
  }, {
    path: "/:lang/blog/category-grid",
    component: _1fd107f0,
    name: "lang-blog-category-grid"
  }, {
    path: "/:lang/blog/category-left-sidebar",
    component: _35dbd350,
    name: "lang-blog-category-left-sidebar"
  }, {
    path: "/:lang/blog/category-list",
    component: _2d573560,
    name: "lang-blog-category-list"
  }, {
    path: "/:lang/blog/post-classic",
    component: _20bb2be2,
    name: "lang-blog-post-classic"
  }, {
    path: "/:lang/blog/post-full",
    component: _247c36ef,
    name: "lang-blog-post-full"
  }, {
    path: "/:lang/shop/cart",
    component: _4ef2f71e,
    name: "lang-shop-cart"
  }, {
    path: "/:lang/shop/catalog",
    component: _469160aa,
    name: "lang-shop-catalog"
  }, {
    path: "/:lang/shop/category-grid-3-columns-sidebar",
    component: _def27c0e,
    name: "lang-shop-category-grid-3-columns-sidebar"
  }, {
    path: "/:lang/shop/category-grid-4-columns-full",
    component: _29238be1,
    name: "lang-shop-category-grid-4-columns-full"
  }, {
    path: "/:lang/shop/category-grid-5-columns-full",
    component: _24952400,
    name: "lang-shop-category-grid-5-columns-full"
  }, {
    path: "/:lang/shop/category-list",
    component: _253c018c,
    name: "lang-shop-category-list"
  }, {
    path: "/:lang/shop/category-right-sidebar",
    component: _774bbd2d,
    name: "lang-shop-category-right-sidebar"
  }, {
    path: "/:lang/shop/checkout",
    component: _61cea4ea,
    name: "lang-shop-checkout"
  }, {
    path: "/:lang/shop/compare",
    component: _b1ad30b8,
    name: "lang-shop-compare"
  }, {
    path: "/:lang/shop/product-columnar",
    component: _07413314,
    name: "lang-shop-product-columnar"
  }, {
    path: "/:lang/shop/product-sidebar",
    component: _c5c50886,
    name: "lang-shop-product-sidebar"
  }, {
    path: "/:lang/shop/product-standard",
    component: _cee84fa8,
    name: "lang-shop-product-standard"
  }, {
    path: "/:lang/shop/track-order",
    component: _33169c0b,
    name: "lang-shop-track-order"
  }, {
    path: "/:lang/shop/wishlist",
    component: _284fe016,
    name: "lang-shop-wishlist"
  }, {
    path: "/:lang/site/about-us",
    component: _48b93580,
    name: "lang-site-about-us"
  }, {
    path: "/:lang/site/components",
    component: _396f34f8,
    name: "lang-site-components"
  }, {
    path: "/:lang/site/contact-us",
    component: _f99fc266,
    name: "lang-site-contact-us"
  }, {
    path: "/:lang/site/contact-us-alt",
    component: _50045ca9,
    name: "lang-site-contact-us-alt"
  }, {
    path: "/:lang/site/faq",
    component: _7159e7a4,
    name: "lang-site-faq"
  }, {
    path: "/:lang/site/not-found",
    component: _1835a1d4,
    name: "lang-site-not-found"
  }, {
    path: "/:lang/site/terms",
    component: _4442bfd6,
    name: "lang-site-terms"
  }, {
    path: "/:lang/site/typography",
    component: _71607291,
    name: "lang-site-typography"
  }, {
    path: "/:lang/shop/checkout/success",
    component: _0eeb7ffc,
    name: "lang-shop-checkout-success"
  }, {
    path: "/:lang/account/addresses/:id",
    component: _68404cba,
    name: "lang-account-addresses-id"
  }, {
    path: "/:lang/account/orders/:id",
    component: _13172efa,
    name: "lang-account-orders-id"
  }, {
    path: "/:lang/shop/catalog/:slug",
    component: _44dabf62,
    name: "lang-shop-catalog-slug"
  }, {
    path: "/:lang/shop/products/:slug?",
    component: _2a2f2d36,
    name: "lang-shop-products-slug"
  }, {
    path: "/:lang/",
    component: _40a94e72,
    name: "lang-index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
