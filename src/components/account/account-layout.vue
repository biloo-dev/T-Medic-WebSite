<template>
    <div>
        <PageHeader
            :title="$t('profile.'+title)"
            :breadcrumb="crumbs"
        />

        <div class="block">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3 d-flex">
                        <div class="account-nav flex-grow-1">
                            <h4 class="account-nav__title">
                                {{ $t('profile.Navigation') }}
                            </h4>
                            <ul>
                                <NuxtLink
                                    v-for="(item, index) in items"
                                    v-slot="{ isActive }"
                                    :key="index"
                                    :to="$url.lang(item.link)"
                                    :exact="true"
                                >
                                    <li
                                        :class="[
                                            'account-nav__item',
                                            {'account-nav__item--active': isActive}
                                        ]"
                                    >
                                        <AppLink :to="item.link">
                                            <i :class="item.icon" class="mx-2"></i>
                                            {{ $t('profile.'+item.title) }}
                                        </AppLink>
                                    </li>
                                </NuxtLink>
                                <li class="account-nav__item" > 
                                    <b-button variant="link"  @click="$Swal.logout()">
                                        <i  class="fas fa-sign-out-alt mx-2"></i>
                                        {{ $t('profile.Logout') }} 
                                    </b-button>  
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component,Watch } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import AppLink from '~/components/shared/app-link.vue'
 const titleCase = require('ap-style-title-case') 
interface ICrumbs {
    url?: string | undefined;
    title? : string  | undefined
}

@Component({
    components: { PageHeader, AppLink }
})
export default class AccountLayout extends Vue {
    data () {
        return {
            items: [
                { icon : 'fas fa-solar-panel', title: 'dashboard', link: this.$url.accountDashboard() },
                { icon : 'fas fa-user-edit', title: 'EditProfile', link: this.$url.accountProfile() },
                { icon : 'fas fa-history', title: 'OrderHistory', link: this.$url.accountOrders("Order")},
                { icon : 'fas fa-calendar-week', title: 'FacturHistory', link: this.$url.accountOrders("Factur")},
                // { icon : 'fas fa-calendar-week', title: 'FacturHistory', link: this.$url.accountOrders()},
                { icon : 'fas fa-address-card', title: 'addresses', link: this.$url.accountAddresses() }, 
                { icon : 'fas fa-key', title: 'password', link: this.$url.accountPassword() },
                // { title: 'Logout', link: this.logout() }
            ]
        }
    } 
    crumbs = [] as ICrumbs[]
    title = ""
    @Watch('$route', { immediate: true, deep: true })
    urlChanged () { 
        const pathArray = this.$route.path.split('/')   
        this.title = this.checkLatest(pathArray)  
        let langs = ['ar',"fr","en"]
         this.crumbs =  pathArray.reduce((breadcrumbArray :  ICrumbs[], path, idx) => { 
             if(langs.includes(path) || this.$url.isInt(path)) pathArray.splice(idx ,1)
             if(!langs.includes(path) &&  !this.$url.isInt(path)){
                let to = pathArray[idx - 1] ? '/' + pathArray[idx - 1] + '/' + path  : '/' + path 
                let title = !path ? this.$t('header.Home').toString() : this.$t('profile.' + path).toString()   
                breadcrumbArray.push({
                    url: to,
                    title: title
                }) 
             } 
            return breadcrumbArray
        }, []) 
    }
    checkLatest(arry : any) : string{ 
        return this.$url.isInt(arry[arry.length -1]) ? arry[arry.length -2] : arry[arry.length -1]
    }
     logout(){
        
    }
}

</script>
