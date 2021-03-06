import Vue from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { ISettings } from '~/interfaces/Settings' 
import shopApi from '~/api/shop'

export interface SettingsState {
    Settings : ISettings[];
    SettingsIsLoading : boolean;
}
export interface ISettingsP {
    Settings : ISettings[]; 
}



function getDefaultState (): SettingsState {
    return {
        Settings: [], 
        SettingsIsLoading: true, 
    }
}
export const state = getDefaultState


export const mutations: MutationTree<SettingsState> = {
    fetchSettings (state, payload: ISettingsP) {  
        state.SettingsIsLoading = false
        state.Settings = payload.Settings
    },
}


export const actions: ActionTree<SettingsState, {}> = { 
    async fetchSettings ({ commit }): Promise<void> {  
        let request: Promise<ISettings[]> 
        request = shopApi.getSettings()
        const Settings = await request  
        commit('fetchSettings', { Settings } )
    },
}
 
export const getters: GetterTree<SettingsState, {}> = {
    isLoading: (store) => {
        return store.SettingsIsLoading ||  !store.Settings
    },
    getSettingBySlug: (store) => (slug: string) => { 
        return store.Settings.find((e : any) =>  e.slug == slug  )
    },

}