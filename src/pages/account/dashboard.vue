<template>
    <div>
        <loading v-if="!address() && isLoading" />
        <AccountLayout v-else>
            <div class="dashboard">
                <div class="dashboard__profile card profile-card">
                    <div class="card-body profile-card__body">
                        <div class="profile-card__avatar"> 
                            <img :src="$url.img($auth.user.img)" alt="">
                        </div>
                        <div class="profile-card__name">
                            {{ $auth.user['firstName_'+$i18n.locale]  }} 
                        </div>
                        <div class="profile-card__email">
                            {{ $auth.user['lastName_'+$i18n.locale] }}
                        </div>
                        <div class="profile-card__edit">
                            <AppLink :to="$url.accountProfile()" class="btn btn-secondary btn-sm">
                                {{ $t('profile.EditProfile') }}
                            </AppLink>
                        </div>
                    </div>
                </div>    
                <AddressCard  v-if="address()"
                    :address="address()"
                    class="dashboard__address"
                    featured
                    :badge="address().default ? $t('profile.DefaultAddress') : ''"
                >
                    <AppLink :to="$url.accountAddress({ id: address().id })">
                        {{ $t('profile.EditAddress') }}
                    </AppLink>
                </AddressCard> 
                <div class="dashboard__orders card">
                    <div class="card-header">
                        <h5>{{ $t('profile.RecentOrders') }}</h5>
                    </div>
                    <div class="card-divider" />
                    <div class="card-table">
                        <div class="table-responsive-sm mb-0">
                            <table>
                                <thead>
                                    <tr>
                                        <th>{{ $t('general.Order') }}</th>
                                        <th>{{ $t('general.Date') }}</th>
                                        <th>{{ $t('general.Status') }}</th>
                                        <th>{{ $t('general.Total') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="order in orders.data" :key="order.id">
                                        <td>
                                            <AppLink :to="$url.accountOrder({ id: 5 })">
                                                #{{ $Swal.increment(order.id) }}
                                            </AppLink>
                                        </td>
                                        <td>{{ $Swal.fromNow(order.created_at) }}</td>
                                        <td>
                                            <h5 v-if="$Swal.st(order.status)">
                                                <b-badge style="width: 90%;" :class="$i18n.locale == 'ar' ? 'text-right' : 'text-left'" :variant="$Swal.st(order.status).color">
                                                    <i :class="$Swal.st(order.status).icon" class="px-2"></i>
                                                    {{ $Swal.st(order.status).title }}
                                                </b-badge>
                                            </h5>
                                        </td>
                                        <td>  
                                            <strong class=" tex-info" style="font-size:18px">
                                                {{ $price(order.totla_ttc) }}
                                            </strong>
                                            {{ $t('general.for') }}
                                            ({{ order.subOrder.length }})
                                            {{ $t('general.item(s)') }} 
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AccountLayout>

    </div>
</template>

<script lang="ts"> 
import { Context } from '@nuxt/types'  
import { IUser, IData,IProfile,IAddresse } from '~/interfaces/User' 
import { Vue, Component,Watch } from 'vue-property-decorator'  
import AppLink from '~/components/shared/app-link.vue'
import loading from '~/components/blocks/block-loader.vue'
import AddressCard from '~/components/shared/address-card.vue'
import AccountLayout from '~/components/account/account-layout.vue'  
import { RootState } from '~/store'
import { Getter,State } from 'vuex-class' 
import { IOrders } from '~/interfaces/order'

@Component({
    components: { AppLink, AddressCard, AccountLayout,loading },
    head(){ return { title: this.$t('profile.dashboard').toString() }}, 
    middleware ({ redirect, $url,$auth }: Context) {
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        }
    }
})

export default class Page extends Vue {   
    @State((state: RootState) => state.profile.orders) orders!: IOrders  
    isLoading : boolean = false
    address() : IAddresse | void {  
        if(this.$auth.user && this.$auth.user.addresse){ 
            let adrs : IAddresse[] =JSON.parse(JSON.stringify(this.$auth.user.addresse)) 
            return adrs.find((e: any) => e.default == true)
        }  
    }
    async initOrders(){
        this.isLoading = true 
       await  this.$store.dispatch('profile/getOrdrts',{ 
            limit : 5, 
            sort : "desc" 
        })
        this.isLoading = false
    } 
    created(){
        this.initOrders()
        console.log('$auth busy',this.$auth.busy)
    }
}

</script>
