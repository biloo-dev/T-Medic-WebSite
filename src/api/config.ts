import axios from "axios";   
import { ICarousel, IDepartement } from '~/interfaces//menus/config'
// let url = 'http://161.35.124.15/api/'
let url = 'http://127.0.0.1:3333/api/'
const Config = {

  getDepartment: async (): Promise<[]> => {
    let { data } = await axios.get(`${url}getConfig`) 
    return data.config
  },
  getCarousel: async (): Promise<[]> => {
    let { data } = await axios.get(`${url}getConfig`)  
    return data.Carousel
  }
}
export default Config