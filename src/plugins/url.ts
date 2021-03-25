import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { Context, Plugin } from '@nuxt/types'
import { IProduct } from '~/interfaces/product'
import { IUserAddress } from '~/interfaces/address'
import { IOrder } from '~/interfaces/order'
import { ICategory, IShopCategory } from '~/interfaces/category'

function make (context: Context) {
    return {
        home () { 
            return '/'
        },
        category (category: ICategory) {
            if (category.type === 'shop') {
                return context.$url.shopCategory(category)
            }

            return ''
        },
        blogCategory () {
            return ''
        },
        shopCategory (category: IShopCategory) {
            return `/shop/catalog/${category.slug}`
        },
        compare () {
            return '/shop/compare'
        },
        catalog () {
            return '/shop/catalog'
        },
        product (product: Pick<IProduct, 'slug'>) {
            return `/shop/products/${product.slug}`
        },
        cart () {
            return '/shop/cart'
        },
        checkout () {
            return '/shop/checkout'
        },
        wishlist () {
            return '/shop/wishlist'
        },
        trackOrder () {
            return '/shop/track-order'
        },
        signIn () {
            return '/account/login'
        },
        signUp () {
            return '/account/login'
        },
        signOut () {
            return '/account'
        },
        account () {
            return '/account'
        },
        accountDashboard () {
            return '/account/dashboard'
        },
        accountProfile () {
            return '/account/profile'
        },
        accountOrders (isFactur : string) { 
            if(isFactur) return '/account/orders?'+isFactur
            return '/account/orders'
        },
        accountOrder (order: Pick<IOrder, 'id'>) {
            return `/account/orders/${order.id}`
        },
        accountAddresses () {
            return '/account/addresses'
        },
        accountAddressesadd () {
            return '/account/addresses/addNew'
        },
        accountAddress (address: Pick<IUserAddress, 'id'>) {
            return `/account/addresses/${address.id}`
        },
        accountPassword () {
            return '/account/password'
        },
        lang (path: string) {
            const locale = context.store.state.locale.current

            if (path[0] !== '/') {
                path = `/${path}`
            }

            if (!context.app.i18n) {
                return path
            }

            const i18n = context.app.i18n as VueI18n.I18nOptions

            if (locale === i18n.fallbackLocale) {
                return path
            }

            return `/${locale}${path}`
        },
        isExternal (path: string): boolean {
            return /^(https?:)?\/\//.test(path)
        },
        anyLink (path: string) {
            return context.$url.isExternal(path) ? path : this.base(context.$url.lang(path))
        },
        blog () {
            return '/blog/category-classic'
        },
        blogPost () {
            return '/blog/post-classic'
        },
        about () {
            return '/site/about-us'
        },
        contacts () {
            return '/site/contact-us-alt'
        },
        terms () {
            return '/site/terms'
        }, 
        ext(url :string) {
            let check = (url = url.substr(1 + url.lastIndexOf("/")).split('?')[0]).split('#')[0].substr(url.lastIndexOf("."))
            return check[0] == "."
        },
        base (url: string) {  
            if (url && url[0] === '/') {
                if (url.substr(1)) {
                    return this.ext(url) ? 'http://127.0.0.1:3333/api/getImg' + context.base + url.substr(1) : context.base + url.substr(1)
                    // return 'http://161.35.124.15/api/getImg'+ context.base + url.substr(1)
                } 
            } 
            return url
        },
        img (url: string) {   
            return this.base(url)
        },
        parse(str :string){ 
            let obj = typeof str == "string" ? JSON.parse(str) : str
            return obj[0]
        },
        getName(local : string ,obj : any){ 
            if (obj && local == 'ar') {
                return obj.name_ar
            }else if(obj){
                return obj.name_fr
            } 
            return '' 
        },
        currentSlug(catSlug : any ,params : any){ 
            if (catSlug && params && catSlug.slug == params.slug) {
                return 'active-cat' 
            } 
            return ''
        },
        isInt(str : any) {
            return !isNaN(str) && Number.isInteger(parseFloat(str));
        },
       
       
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $url: ReturnType<typeof make> & Context
    }
}

declare module '@nuxt/types' {
    interface Context {
        $url: ReturnType<typeof make> & Context
    }
}

const plugin: Plugin = (context, inject) => {
    inject('url', make(context))
}

export default plugin
