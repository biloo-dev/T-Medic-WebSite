import Vue from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { IUser, IData } from '~/interfaces/User' 
import shopApi from '~/api/shop'
import { $axios } from '~/utils/api' 
export interface AuthState {
    user : IUser[];
    isLoading : boolean;
    isLogin : boolean;
    token?: string;
    refreshToken?: string;
}
 
export interface IUserP {
    user : IUser[]; 
    token?: string;
    refreshToken?: string;
}

function getDefaultState (): AuthState {
    return {
        user: [], 
        isLoading: false, 
        isLogin: false, 
        refreshToken : '',
        token : ''
    }
}
export const state = getDefaultState


export const mutations: MutationTree<AuthState> = {
    Login (state, payload: IUserP) {  
        console.log('payload.refreshToken ',payload.refreshToken )
        state.user = payload.user
        state.token = payload.token 
        state.refreshToken = payload.refreshToken 
        $axios.setHeader('Authorization', 'Bearer ' + payload.token )
        state.isLogin = true
        state.isLoading = false 
    },
    logout (state) { 
         let request: Promise<IUser[]> 
        request = shopApi.logout(state.refreshToken) 
        console.log(request)
        state.user = []
        state.isLoading = false
        state.isLogin = false
        state.token = ""
        $axios.setHeader('Authorization','')
    },
    setLoading (state, payload: boolean) {   
        // setTimeout(() => {
            state.isLoading = payload 
        // }, 1000);
    },
}


export const actions: ActionTree<AuthState, {}> = { 
    async login ({ commit },data : IData): Promise<void> {  
        try {
            commit('setLoading', true ) 
            let request: Promise<IUser[]> 
            request = shopApi.Login(data)
            const user = await request   
            commit('Login', user ) 
            commit('setLoading', false ) 

        } catch (err) {
            commit('setLoading', false )   
        }
    },
    async logout ({ commit }): Promise<void> {  
        try {
            commit('setLoading', true )  
            commit('logout')  
            commit('setLoading', false )  
        } catch (err) {
            commit('setLoading', false )   
        }
    },
}
 
export const getters: GetterTree<AuthState, {}> = {
    isLoading: (store) => {
        return store.isLoading ||  !store.user
    },
    isLogin: (store) => {
        return store.isLogin
    },
    getUser: (store) => { 
        return store.user
    },
    getToken: (store) => { 
        return store.token
    },

}