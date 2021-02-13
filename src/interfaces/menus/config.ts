 
import { ISubmenu } from './submenu' 

interface SlideImage {
  ltr: string
  rtl: string
}

export interface ICarousel {
  title: string
  text: string
  imageClassic: SlideImage
  imageFull: SlideImage
  imageMobile: SlideImage
}
  
export interface IDepartement {
  title: string,
  url: string,
  submenu : ISubmenu 
}
