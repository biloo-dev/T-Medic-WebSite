 
import { Context } from '@nuxt/types' 
import { $axios } from '~/utils/api'

export default async function ({ isHMR, app, store, route, params, error, redirect }: Context) {
    

    console.log('store :>> ',await store.state);
    // If middleware is called from hot module replacement, ignore it
    if (isHMR) { return }
    let token = ""
    // $axios.setToken(token, 'Bearer')
    // let data = await $axios.$post('/users/editProfile', )
    
    // Set locale
    // store.commit('locale/set',  ) 
    // return redirect('/')
   
}
