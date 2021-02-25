/* eslint-disable @typescript-eslint/no-unused-vars,arrow-body-style */
// noinspection ES6UnusedImports
// import qs from 'query-string';
import { $axios } from '~/utils/api'
import { getCategories, getCategoryBySlug } from '~/fake-server/endpoints/categories'
import { IShopCategory } from '~/interfaces/category'
import { IProduct, IProductsList } from '~/interfaces/product'
import { IFilterValues, IListOptions } from '~/interfaces/list'
import {
    getDiscountedProducts,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductBySlug,
    getProductsList,
    getRelatedProducts,
    getSuggestions,
    getTopRatedProducts
} from '~/fake-server/endpoints/products'

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
interface AxiosRequestConfig {
    options?: IListOptions;
}
const shopApi = {
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
    getCategoryBySlug: (slug: string, options: GetCategoryBySlugOptions = {}): Promise<IShopCategory> => {
        
        return getCategoryBySlug(slug, options)
    },
    /**
     * Returns product.
     */
    getProductBySlug: (slug: string): Promise<IProduct> => {
        
        return getProductBySlug(slug)
    },
    /**
     * Returns array of related products.
     */
    getRelatedProducts: (slug: string, options: GetRelatedProductsOptions = {}): Promise<IProduct[]> => {
         

        // This is for demonstration purposes only. Remove it and use the code above.
        return getRelatedProducts(slug, options)
    },
    /**
     * Return products list.
     */
    
    getProductsList: async (options: IListOptions = {}, filters: IFilterValues = {}): Promise<IProductsList> => {
       
        console.log('getProductsList(options, filters)',await getProductsList(options, filters))
        console.log('{ options, filters}',  { options, filters})
        let data = await $axios.$post('getProductsList',{ options, filters})
        // return data
        return getProductsList(options, filters)
    },
    /**
     * Returns array of featured products.
     */
    getFeaturedProducts: async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getFeaturedProducts', { options })
        return data
        return getFeaturedProducts(options)
    },
    /**
     * Returns array of latest products.
     */
    getLatestProducts : async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getLatestProducts', { options })
        return data 
        return getLatestProducts(options)
    },
    /**
     * Returns an array of top rated products.
     */
    getTopRatedProducts: async  (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getTopRatedProducts', { options })
        return data
        return getTopRatedProducts(options)
    },
    /**
     * Returns an array of discounted products.
     */
    getDiscountedProducts: async  (options: GetProductsOptions = {}): Promise<IProduct[]> => {
         let data = await $axios.$post('getDiscountedProducts', { options })
        return data
        return getDiscountedProducts(options)
    },
    /**
     * Returns an array of most popular products.
     */
    getPopularProducts: async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        let data = await $axios.$post('getPopularProducts', { options })
        return data
        return getPopularProducts(options)
    },
    
    /**
     * Returns search suggestions.
     */
    getSuggestions: (query: string, options: GetSuggestionsOptions = {}): Promise<IProduct[]> => {
         
        return getSuggestions(query, options)
    }
}

export default shopApi
