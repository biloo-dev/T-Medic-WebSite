<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'

@Component({
    middleware ({ redirect, $url,$auth }: Context) { 
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        } 
        return redirect(
            $url.lang($url.accountDashboard())
        )
    }
})
export default class Page extends Vue { 
    created(){
        console.log('this is test To Dispatch ........>>>>>>>>>>>>>')
    }
}

</script>
