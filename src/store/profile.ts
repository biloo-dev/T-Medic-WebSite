import Vue from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { IUser, IData,IProfile,IAddresse, IForm} from '~/interfaces/User' 
import shopApi from '~/api/shop'
import { ISubOrders ,IOrders,IOrderFilters } from '~/interfaces/order'

export interface ProfileState {
    profile : IProfile;
    orders : IOrders[];
    order : IOrders  | {};
    isLoading : boolean; 
}
   
  
function getDefaultState (): ProfileState {
    return {
        profile: {}, 
        orders: [], 
        order: {}, 
        isLoading: true,  
    }
}
export const state = getDefaultState
 
export const mutations: MutationTree<ProfileState> = {
    getProfile (state, payload: IProfile) {    
        state.profile = payload    
        state.isLoading = false 
    }, 
    getOrders (state, payload: IOrders[]) {    
        state.isLoading = true 
        state.orders = payload    
        state.isLoading = false 
    }, 
    getOrder (state, payload: IOrders) {    
        state.isLoading = true 
        state.order = payload    
        state.isLoading = false 
    }, 
}


export const actions: ActionTree<ProfileState, {}> = { 
    async deleteAddress ({ commit },id:number): Promise<void> {
        try {   
            let request: Promise<any> 
            request = shopApi.deleteAddress(id)
            const isDeleted = await request
            if (isDeleted) {
                await this.$auth.fetchUser()
                await this.app.$Swal.success("successfuly delete Address")  
            } 
            return isDeleted
        } catch (err) {  
            console.log('errr' , err)
        }
    }, 
    async savePassword ({ commit },data:IForm): Promise<void> {  
        try {   
            let request: Promise<any> 
            request = shopApi.savePassword(data)
            const password = await request   
            if (password) {
                await this.$auth.fetchUser()
                await this.app.$Swal.success("successfuly change password") 
                await this.$auth.logout()
                this.app.$url.lang("/")
            } 
            return password
        } catch (err) {  
            console.log('errr' , err)
        }
    }, 
    async saveAddress ({ commit },data:IAddresse): Promise<void> {  
        try {   
            let request: Promise<IAddresse> 
            request = shopApi.saveAddress(data)
            const Addresse = await request    
            if (Addresse) {
                await this.$auth.fetchUser()
                this.app.$Swal.success("successfuly Saved address") 
            }  
        } catch (err) {  
            console.log('errr' , err)
        }
    }, 
    async getOrdrts ({ commit },data:IOrderFilters): Promise<void> {  
        try {   
            let request: Promise<IOrders[]> 
            request = shopApi.getOrders(data)
            const Orders = await request    
            commit('getOrders', Orders )  
        } catch (err) {  
            console.log('errr' , err)
        }
    }, 
    async logout ({ commit }): Promise<void> {  
        try {   
            let request: Promise<boolean> 
            request = shopApi.logout()
            const Islogout = await request
            if (Islogout) {
                // await this.$auth.fetchUser()
                this.app.$Swal.error("successfuly Saved profile") 
            }

        } catch (err) {  
            console.log('errr' , err)
        }
    }, 
    async getOrdrtById ({ commit },id:number): Promise<void> {  
        try {   
            let request: Promise<IOrders> 
            request = shopApi.getOrderById(id)
            const Order = await request    
            commit('getOrder', Order )  
        } catch (err) {  
            console.log('errr' , err)
        }
    }, 
    async editProfile ({ commit },payload : IProfile): Promise<void> {  
        try {   
            let request: Promise<IProfile> 
            // let token = this.app.$auth.strategy.token.get();
            request = shopApi.editProfile(payload)
            const profile = await request      
            if (profile) {
                await this.$auth.fetchUser()
                this.app.$Swal.success("successfuly Saved profile") 
            }
        } catch (err) {  
             
        }
    }, 
}
 
export const getters: GetterTree<ProfileState, {}> = {
    isLoading: (store) => {
        return store.isLoading || !store.profile
    }, 
    getProfile: (store) => { 
        return store.profile
    },
    getOrdrts: (store) => { 
        return store.orders
    },
    getDefaultAddress: (store) => {
        if (store.profile.addresse) {
             return store.profile.addresse.find((e: any) => e.default == true)
        } 
        return {}
    }, 

}