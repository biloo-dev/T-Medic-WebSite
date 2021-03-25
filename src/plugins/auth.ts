import { Context } from '@nuxt/types'  
export default function(context : Context) {  
 context.$auth.onRedirect((to : string) => {  
     return context.$url.lang(to) 
 }) 
 context.$auth.$storage.watchState('loggedIn', newValue => {
     if(!newValue) context.store.dispatch('profile/logout') 
     console.log('is Loged in Or Out > :',newValue)
  })


}