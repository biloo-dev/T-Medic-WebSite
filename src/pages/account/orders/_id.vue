<template>
    <div>
        <loading v-if="isLoading" />
        <AccountLayout v-else> 
            <div class="card">
                <div class="order-header">
                    <div class="order-header__actions">
                        <AppLink :to="$url.accountOrders()" class="btn btn-xs btn-secondary">
                            {{ $t('profile.BackToList')}}
                        </AppLink>
                    </div>

                    <h2 class="order-header__title">
                        {{ orders.isFactor == 0 ? $t('profile.bonCommand') : $t('profile.facteur') + " " + $t('profile.num') }} : {{ $Swal.increment(orders.id) }}
                    </h2>
    
                    <div class="order-header__subtitle">
                        {{ $t('profile.WasPlacedOn')}}
                        <mark class="order-header__date">{{ $Swal.formatDate(order.date) }}</mark>
                        {{ $t('profile.andIsCurrently')}}
                        <mark class="order-header__status" v-if="$Swal.st(orders.status)">
                            <b-badge :class="$i18n.locale == 'ar' ? 'text-right' : 'text-left'" :variant="$Swal.st(orders.status).color">
                                <i :class="$Swal.st(orders.status).icon" class="px-2"></i>
                                {{ $Swal.st(orders.status).title }}
                            </b-badge>
                        </mark>
                    </div>
                <div class="row mt-3 no-gutters mx-n2">
                    <div class="col-sm-6 col-12 px-2">
                        <AddressCard v-if="orders.address" :address="orders.address" featured badge="Shipping Address" badge-muted />
                    </div>
                    <div class="col-sm-6 col-12 px-2 mt-sm-0 mt-3">
                        <AddressCard v-if="orders.address" :address="orders.address" featured badge="Billing Address" badge-muted />
                    </div>
                </div>
                </div>
                <div class="card-divider" />  
                <div class="card-table">
                    <div class="table-responsive-sm mb-0">
                        <table  class="table table-striped table-bordered table-hover">
                            <thead  class="thead-light">
                                <tr>
                                    <th>{{ $t('profile.ref')}}</th>
                                    <th>{{ $t('profile.desgnation')}}</th>
                                    <th>{{ $t('profile.qty')}}</th>
                                    <th>{{ $t('general.Price')}}</th>
                                    <th>{{ $t('profile.tva')}}</th>
                                    <th>{{ $t('profile.total')}}</th>
                                </tr>
                            </thead>
                            <tbody class="card-table__body card-table__body--merge-rows">
                                <tr v-for="item in orders.subOrder" :key="item.id">
                                    <td>{{ $Swal.increment(item.id) }}</td>
                                    <td>{{ item.products['name_'+$i18n.locale] }}</td>
                                    <td>{{ item.qty }}</td>
                                    <td>{{ $price(item.products.price) }}</td>
                                    <td>{{  orders.isFactor == 1 ? item.products.tva.description  : '0%' }}</td>
                                    <td>{{ $price(item.totla_ttc) }}</td>
                                </tr>
                            </tbody>
                            <tbody class="card-table__body card-table__body--merge-rows" >
                                <tr>
                                    <th colspan="2">{{ $t('profile.totalHt') }}</th> 
                                    <td colspan="2">{{ $price(orders.totla_ht) }}</td>
                                </tr>
                                <tr>
                                    <th colspan="2">{{ $t('profile.totalTva') }}</th>
                                    <td colspan="2">{{ $price(orders.totla_tva) }}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="2">{{ $t('profile.totalTtc') }}</th>
                                    <td colspan="2">{{ $price(orders.totla_ttc ) }}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div> 
        </AccountLayout>
    </div>
</template>

<script lang="ts">
import loading from '~/components/blocks/block-loader.vue'
import { Vue, Component } from 'vue-property-decorator'
import { IOrder } from '~/interfaces/order'
import AppLink from '~/components/shared/app-link.vue'
import AddressCard from '~/components/shared/address-card.vue'
import AccountLayout from '~/components/account/account-layout.vue'
import dataAccountOrderDetails from '~/data/accountOrderDetails'
import { Context } from '@nuxt/types'
import { RootState } from '~/store'
import { Getter,State } from 'vuex-class' 
import { ISubOrders ,IOrders,IOrderFilters } from '~/interfaces/order'
import { IUser, IData,IProfile,IAddresse } from '~/interfaces/User' 
@Component({
    components: { AppLink, AddressCard, AccountLayout,loading  }, 
    head(){ return { title: this.$t('profile.OrderDetails').toString() }}, 
     middleware ({ redirect, $url,$auth }: Context) {
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        }
    }
})
export default class Page extends Vue {
    order: IOrder = dataAccountOrderDetails
    @State((state: RootState) => state.profile.order) orders!: IOrders
    isLoading :boolean = false
    async getOrder(){
        this.isLoading = true
        let id = this.$route.params.id 
        await this.$store.dispatch('profile/getOrdrtById', id)  
        this.isLoading = false
    }
    created(){
        this.getOrder()
    }
    mounted(){
        console.log('this.order',this.orders)
    }
    increment(num : string) : string { 
        let order = "0000"
        let inc = order.substring(num.length);
        return inc + num
    }  
}

</script>
