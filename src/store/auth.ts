import Vue from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { IUser, IData } from '~/interfaces/User' 
import shopApi from '~/api/shop'

export interface AuthState {
    user : IUser[];
    isLoading : boolean;
    isLogin : boolean;
    token?: string;
}

export interface IUserP {
    user : IUser[]; 
}

function getDefaultState (): AuthState {
    return {
        user: [], 
        isLoading: true, 
        isLogin: false, 
        token : ''
    }
}
export const state = getDefaultState


export const mutations: MutationTree<AuthState> = {
    Login (state, payload: IUserP) {  
        state.isLogin = true
        state.isLoading = false
        state.user = payload.user
        // state.token = payload.token
    },
}


export const actions: ActionTree<AuthState, {}> = { 
    async Login ({ commit },data : IData): Promise<void> {  
        try {
            let request: Promise<IUser[]> 
            request = shopApi.Login(data)
            const user = await request  
            commit('Login', {user} )
        } catch (err) {
            console.log('err :>> ', err);
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
    getUser: (store) => (slug: string) => { 
        return store.user
    },

}