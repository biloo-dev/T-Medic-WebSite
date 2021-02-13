import Vue from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { ICarousel, IDepartement } from '~/interfaces//menus/config'   
import shopApi from '~/api/config'

export interface ConfigState {
  init: boolean; 
  carouselIsLoading: boolean;
  carousel: ICarousel | []; 
  departmentIsLoading: boolean;
  department: IDepartement | [];  
}
export interface ConfigInitPayload {
  carousel: ICarousel | [];
  department: IDepartement | [];  
}

function getDefaultState(): ConfigState  {
  return {
    init: false,  
    carouselIsLoading: true,
    carousel: [],
    departmentIsLoading: true,
    department:[], 
  }
}

export const state = getDefaultState

// noinspection JSUnusedGlobalSymbols
export const mutations: MutationTree<ConfigState> = {
  init(state) {
    state.init = true 
  },
  fetchCarouselSuccess(state, payload) {
    state.init = true 
    state.carousel =  payload.carousel
    state.carouselIsLoading = false 
  },
  fetchDepartmentSuccess(state, payload) {
    state.init = true 
    state.department = payload.department 
    state.departmentIsLoading = false 
  }, 
} 

// noinspection JSUnusedGlobalSymbols
export const actions: ActionTree<ConfigState, {}> = {
  async init({ dispatch, commit }): Promise<void> {
    console.log('hi how are ytoy')
    dispatch('fetchCarousel'),
    dispatch('fetchDepartment')
    commit('init') 
  
  },
  async fetchCarousel({ commit }): Promise<void> { 
    let request: Promise<ICarousel | []> 
        request =  shopApi.getCarousel() 
    const Carousel = await request 
    console.log('fetchCarouselSuccess',Carousel)
    commit('fetchCarouselSuccess', { Carousel }) 
  },
  async fetchDepartment({ commit }): Promise<void> { 
    let request : Promise<IDepartement | []> 
        request = shopApi.getDepartment() 
    const Department = await request 
    commit('fetchDepartmentSuccess', { Department })
  }, 
}

// noinspection JSUnusedGlobalSymbols
export const getters: GetterTree<ConfigState, {}> = {
  isLoading: (store) => {
    return store.carouselIsLoading || (store.departmentIsLoading && !store.carousel && !store.department)
  },
  carousel: (store) => {
     return store.carousel
  },
  carouselIsLoading: (store) => {
    return store.carouselIsLoading
  },
  department(store) {
    return store.department
  },
  departmentIsLoading(store) {
    return store.departmentIsLoading
  }, 
}
