import { initializeAxios } from '~/utils/api' 
 
const accessor = ({ $axios } : { $axios: any }) => {
  initializeAxios($axios)
}

export default accessor