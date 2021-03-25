/* eslint-disable @typescript-eslint/no-unused-vars,arrow-body-style */
// noinspection ES6UnusedImports
// import qs from 'query-string';
import { $axios } from '~/utils/api' 
import { IShopCategory } from '~/interfaces/category'
import { ISettings } from '~/interfaces/Settings'
import { IUser, IData ,IProfile,IAllAdress , IAddresse,IForm} from '~/interfaces/User'
import { IProduct, IProductsList } from '~/interfaces/product'
import { IFilterValues, IListOptions } from '~/interfaces/list'
import { ISubOrders ,IOrders,IOrderFilters } from '~/interfaces/order' 
export interface GetCategoriesOptions {
    depth?: number;
}

export interface GetCategoryBySlugOptions {
    depth?: number;
}

export interface GetRelatedProductsOptions {
    limit?: number;
}

export interface GetProductsOptions {
    limit?: number;
    category?: string;
}

export type GetSuggestionsOptions = {
    limit?: number;
    category?: string;
};
// let url = 'http://161.35.124.15/api/'
// let url = 'http://127.0.0.1:3333/api/'

 

const shopApi = {
    /**
     * Returns array of Login.
     */
    newsletter: async (email : string): Promise<boolean> => {
        let data = await $axios.$post('/newsletter', email)
        return data 
    },

    proceedToCheckout: async (form : IOrders): Promise<any> => {  
        let data = await $axios.$post('/orders/proceedToCheckout',form)  
        return data 
    },

    /**
     * Returns array of Login.
     */
    savePassword: async (form : IForm): Promise<any> => {  
        let data = await $axios.$post('/users/password',form)  
        return data 
    },
    
    deleteAddress: async (id : number): Promise<any> => {
        let data = await $axios.$post('/users/deleteAddress',{ id : id })
        return data 
    },

    saveAddress: async (form : IAddresse): Promise<IAddresse> => {  
        let data = await $axios.$post('/users/saveAddress',form)  
        return data 
    },

    getWilaya: async (): Promise<IAllAdress> => {  
        let data = await $axios.$post('/settings/allAdress')  
        return data 
    },

    getOrders: async (filters : IOrderFilters): Promise<IOrders[]> => {  
        let data = await $axios.$post('/orders/orders',filters)  
        return data 
    },

    getOrderById: async (id : number): Promise<IOrders> => {  
        let data = await $axios.$post('/orders/orderById',{id})  
        return data 
    },

    
    getProfile: async (): Promise<IProfile> => {   
        let data = await $axios.$post('/users/profile')  
        return data 
    },

    editProfile: async (form : IProfile): Promise<IProfile> => {   
        let data = await $axios.$post('/users/editProfile',form)  
        return data 
    },
    /**
     * Returns array of Login.
     */
    Login: async (credentials : IData): Promise<IUser[]> => { 
        let data = await $axios.$post('login',credentials)  
        return data 
    },

    /**
     * logout.
     */
    logout: async (): Promise<boolean> => { 
        let data = await $axios.$post('logout')   
        return data 
    },
    /**
     * Returns array of Settings.
     */
    getSettings: async (): Promise<ISettings[]> => {
         
        let data = await $axios.$post('getSettings')  
        return data 
    },
    /**
     * Returns array of categories.
     */
    getCategories: async (options: GetCategoriesOptions = {}): Promise<[]> => {
         
        let data = await $axios.$post('categorys', { options })  
        return data 
    },
    /**
     * Returns an array of most popular products.
     */
    getPopularCategories: async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getPopularCategories', { options })
        return data
        // return getPopularProducts(options)
    },
    /**
     * Returns category by slug.
     */
    getCategoryBySlug: async (slug: string, options: GetCategoryBySlugOptions = {}): Promise<IShopCategory> => {
         
        let data = await $axios.$post('getCategoryBySlug', { slug, options })
        return data
        // return getCategoryBySlug(slug, options)
    },
    /**
     * Returns product.
     */
    getProductBySlug: async (slug: string): Promise<IProduct> => {
        let data = await $axios.$post('getProductBySlug', { slug })
        return data
 
    },
    /**
     * Returns array of related products.
     */
    getRelatedProducts: async (slug: string, options: GetRelatedProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getRelatedProducts', { slug, options}) 
        return data

        // This is for demonstration purposes only. Remove it and use the code above. 
    },
    /**
     * Return products list.
     */
    
    getProductsList: async (options: IListOptions = {}, filters: IFilterValues = {}): Promise<IProductsList> => {
        let data = await $axios.$post('getProductsList',{ options, filters}) 
         return data
     },
    /**
     * Returns array of featured products.
     */
    getFeaturedProducts: async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getFeaturedProducts', { options })
        return data
        // return getFeaturedProducts(options)
    },
    /**
     * Returns array of latest products.
     */
    getLatestProducts : async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getLatestProducts', { options })
        return data 
        // return getLatestProducts(options)
    },
    /**
     * Returns an array of top rated products.
     */
    getTopRatedProducts: async  (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getTopRatedProducts', { options })
        return data
        // return getTopRatedProducts(options)
    },
    /**
     * Returns an array of discounted products.
     */
    getDiscountedProducts: async  (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getDiscountedProducts', { options })
        return data
        // return getDiscountedProducts(options)
    },
    /**
     * Returns an array of most popular products.
     */
    getPopularProducts: async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getPopularProducts', { options })
        return data
        // return getPopularProducts(options)
    },
    
    /**
     * Returns search suggestions.
     */
    getSuggestions: async (query: string, options: GetSuggestionsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getSuggestions', {query, options })
        return data
        // return getSuggestions(query, options)
    }
}

export default shopApi
