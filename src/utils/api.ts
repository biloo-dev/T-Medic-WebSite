import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance 
export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  // axiosInstance.setBaseURL('http://161.35.124.15/api/') 
  
  $axios = axiosInstance
}

export { $axios }