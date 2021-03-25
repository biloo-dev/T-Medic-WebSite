<style>
    table#table-orders .flip-list-move {
        transition: transform 1s;
    }
</style>
<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5 v-if="isFactor == '1'">{{ $t('profile.OrderHistory')}}</h5>
                <h5 v-else-if="isFactor == '0'">{{ $t('profile.FacturHistory')}}</h5>
                <h5 v-else>{{ $t('profile.AllOrderHistory')}}</h5>
            </div>
            <div class="card-divider" /> 
            <div class="card-table">
                <div class="table-responsive-sm">
                    <b-table outlined small sticky-header  hover primary-key="id" 
                            :tbody-transition-props="transProps" 
                            id="table-orders" :items="orders.data" 
                            :fields="fields"
                            :busy="isLoading"
                            show-empty
                    >
                        <template #empty="scope">
                            <h6 class="text-center">
                                {{ $t('profile.ThereAreNoRecordsToShow') }} 
                                <svg height="100" viewBox="0 0 64 64" width="100" style="margin: 10px auto;" xmlns="http://www.w3.org/2000/svg"><g id="outline"><path d="m29 10h2v2h-2z"/><path d="m33 10h2v2h-2z"/><path d="m32 16a2 2 0 0 1 2 2h2a4 4 0 0 0 -8 0h2a2 2 0 0 1 2-2z"/><path d="m40 2h-16v7a4 4 0 0 0 0 8v5h16v-5a4 4 0 0 0 0-8zm-14 2h12v2h-12zm-4 9a2 2 0 0 1 2-2v4a2 2 0 0 1 -2-2zm20 0a2 2 0 0 1 -2 2v-4a2 2 0 0 1 2 2zm-4 7h-12v-12h12z"/><path d="m45.857 48.485a1 1 0 0 0 -.486-.414l-4.371-1.748v-12.909l.845-.844 5.323 7.985a1 1 0 0 0 .663.43.965.965 0 0 0 .169.015 1 1 0 0 0 .6-.2l7.733-5.8h1.667a3 3 0 0 0 0-6h-4a1 1 0 0 0 -.625.219l-4.148 3.319-3.395-5.093a2 2 0 0 0 -.293-.279c-.02-.013-.115-.072-.145-.085l-7-3a.985.985 0 0 0 -.394-.081h-12a.985.985 0 0 0 -.394.081l-7 3c-.03.013-.125.072-.145.085a2 2 0 0 0 -.293.279l-3.395 5.093-4.148-3.319a1 1 0 0 0 -.625-.219h-4a3 3 0 0 0 0 6h1.667l7.733 5.8a1 1 0 0 0 .6.2.965.965 0 0 0 .169-.015 1 1 0 0 0 .663-.43l5.323-7.985.845.844v12.909l-4.371 1.748a1 1 0 0 0 -.486.414l-3.038 5.068a3.145 3.145 0 0 0 1.448 4.347 2.488 2.488 0 0 0 1.108.264 3.832 3.832 0 0 0 2.848-1.634 10.968 10.968 0 0 0 1.079-1.53h1.412v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6h1.412a10.968 10.968 0 0 0 1.079 1.525 3.832 3.832 0 0 0 2.848 1.634 2.488 2.488 0 0 0 1.108-.264 3.159 3.159 0 0 0 1.41-4.41zm2.99-13.5a1.007 1.007 0 0 0 .778-.207l4.726-3.778h3.649a1 1 0 0 1 0 2h-2a1 1 0 0 0 -.6.2l-7.154 5.365-4.959-7.438 1.558-1.558 3.323 4.986a1 1 0 0 0 .679.433zm-14.715-8.985-2.132 3.2-2.132-3.2zm-18.378 12.565-7.154-5.365a1 1 0 0 0 -.6-.2h-2a1 1 0 0 1 0-2h3.649l4.726 3.781a1 1 0 0 0 1.457-.226l3.323-4.986 1.558 1.558zm5-10.228 5.451-2.337h1.26l3.7 5.555a1 1 0 0 0 1.664 0l3.706-5.555h1.265l5.453 2.337-3.375 3.376-2.318-1.545-1.11 1.664 2.55 1.703v12.465h-14v-12.465l2.555-1.7-1.11-1.664-2.318 1.545zm-3.3 27.768a1.126 1.126 0 0 1 -.59-1.59l2.821-4.715 4.507-1.8h2.808v3a2 2 0 0 1 -2 2h-2.132l.964-1.445-1.664-1.11s-3.979 6.031-4.721 5.66zm7.546-1.105a4 4 0 0 0 4-4v-3h2v12h-6zm14 5h-6v-12h2v3a4 4 0 0 0 4 4zm7.553-3.9c-.78.381-4.721-5.66-4.721-5.66l-1.664 1.11.964 1.45h-2.132a2 2 0 0 1 -2-2v-3h2.808l4.508 1.8 2.789 4.643a1.147 1.147 0 0 1 -.552 1.662z"/><path d="m59 41.586-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l2-2-1.414-1.414z"/><path d="m16 23a1 1 0 0 0 .707-.293l2-2-1.414-1.414-1.293 1.293-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 .707.293z"/><path d="m9.707 25.707 2-2-1.414-1.414-1.293 1.293-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0z"/><path d="m58 46a7.778 7.778 0 0 1 -.684 3.523c-1.522-2.407-3.159-2.748-4.031-2.688a2.973 2.973 0 0 0 -2.632 1.894 2.757 2.757 0 0 0 .64 2.978 5.019 5.019 0 0 0 5.293 1.111 1.479 1.479 0 0 1 -.189 1.1c-.814 1.172-3.914 1.241-5.288 1.09l-.219 1.988a14.036 14.036 0 0 0 1.489.074c1.733 0 4.464-.294 5.658-2.007a3.728 3.728 0 0 0 .288-3.488c.895-1.015 1.675-2.72 1.675-5.575zm-5.293 4.293a.743.743 0 0 1 -.188-.842.974.974 0 0 1 .861-.619h.053c.767 0 1.646.781 2.413 2.129a3.011 3.011 0 0 1 -3.139-.668z"/><path d="m31 34h2v2h-2z"/><path d="m31 38h2v2h-2z"/><path d="m31 42h2v2h-2z"/></g></svg>
                                <!-- <i class="fas fa-file-prescription mx-2" style="font-size:22px;color:red"></i> -->
                            </h6> 
                        </template> 
                        <template #table-busy>
                            <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>{{ $t('general.loading') }}...</strong>
                            </div>
                        </template>
                         <template #cell(id)="data"> 
                            <AppLink :to="$url.accountOrder({ id: data.item.id })">
                                #{{ $Swal.increment(data.item.id) }}
                            </AppLink>
                        </template>
                         <template #cell(created_at)="data">  
                                {{ $Swal.fromNow(data.item.created_at) }} 
                        </template>
                         <template #cell(isFactor)="data">  
                             <i :class="data.item.isFactor == 1 ? 'fas fa-file-invoice text-success' : 'fas fa-paste text-info'"></i>
                               
                        </template>
                         <template #cell(status)="data"> 
                            <h5 v-if="$Swal.st(data.item.status)">
                                <b-badge :class="$i18n.locale == 'ar' ? 'text-right' : 'text-left'" :variant="$Swal.st(data.item.status).color">
                                    <i :class="$Swal.st(data.item.status).icon" class="px-2"></i>
                                    {{ $Swal.st(data.item.status).title }}
                                </b-badge>
                            </h5>
                        </template>
                         <template #cell(totla_ttc)="data"> 
                                <strong class=" tex-info" style="font-size:18px">
                                    {{ $price(data.item.totla_ttc) }}
                                </strong>
                                {{ $t('general.for') }}
                                ({{ data.item.subOrder.length }})
                                {{ $t('general.item(s)') }}  
                        </template>
                        <template #head()="scope">
                            <div class="text-nowrap"> 
                             {{ $t('profile.'+scope.label.toLowerCase()) }}
                            </div>
                        </template>
                    </b-table>
                    
                </div>
            </div>
            <div class="card-divider" />
            <div class="card-footer">
                <b-row align-h="center">
                    <b-col cols="4">
                    <div class="view-options__legend">
                        {{ $t('shop.productsView.Showing') }} ({{ page }} — {{ orders.perPage }}) {{ $t('shop.productsView.of') }} {{ orders.total }} {{ $t('profile.orders')}}
                    </div> 
                    </b-col>
                    <b-col cols="2">
                        <div class="form-group"> 
                            <select id="select-default" @change="initOrders()"  v-model="limit" class="form-control">
                                <option :value="option.value" v-for="option in options" :key="option.value">{{ option.text }}</option> 
                            </select>
                        </div>
                        
                    </b-col>
                    <b-col cols="6"> 
                            <b-pagination v-model="page":total-rows="orders.total" 
                                            :per-page="orders.perPage"
                                            first-number last-number  
                                            @input="setPage"  
                                            align="center">
                                            <template #first-text>
                                                <span class="text-danger mx-2">{{ $t('profile.first') }}</span>
                                                <i :class="'fas fa-angle-double-' + ($i18n.locale == 'ar' ? 'left' : 'right')"></i>
                                            </template>
                                            <template #prev-text>
                                                <i :class="'fas fa-chevron-' + ($i18n.locale == 'ar' ? 'right' : 'left') +' mx-2'"></i>
                                                <span class="text-danger">{{ $t('profile.prev') }}</span>
                                            </template>
                                            <template #next-text>
                                                <span class="text-danger mx-2">{{ $t('profile.next') }}</span>
                                                <i :class="'fas fa-chevron-' + ($i18n.locale == 'ar' ? 'left' : 'right')"></i>
                                            </template>
                                            <template #last-text>
                                                <i :class="'fas fa-angle-double-' + ($i18n.locale == 'ar' ? 'right' : 'left') +' mx-2'"></i>
                                                <span class="text-danger">{{ $t('profile.last') }}</span>
                                            </template>
                            </b-pagination> 
                    </b-col>
                </b-row>
                <!-- <Pagination :current="page" :total="orders.lastPage" @page-change="setPage" /> -->
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts"> 
import { Vue, Component,Watch } from 'vue-property-decorator'
import { IOrderSummary } from '~/interfaces/order'
import Pagination from '~/components/shared/pagination.vue'
import AppLink from '~/components/shared/app-link.vue'
import AccountLayout from '~/components/account/account-layout.vue' 
import { Context } from '@nuxt/types'
import { RootState } from '~/store'
import { State } from 'vuex-class' 
import { IOrders } from '~/interfaces/order'
interface Fields {
    key? : string;
    label? : string;
    sortable? : boolean;
    variant? : string;
}
interface IOption {
   value: number, 
   text: string
}
@Component({
    components: { Pagination, AppLink, AccountLayout }, 
     head(){ return { title: this.$t('profile.OrderHistory').toString() }}, 
     middleware ({ redirect, $url,$auth }: Context) {
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        }
    },
    async asyncData ({ store, query }): Promise<object | void> {
       
    }
})
export default class Page extends Vue {
    @State((state: RootState) => state.profile.orders) orders!: IOrders  
    isLoading : boolean = true  
    page: number = 1 
    transProps: {  name: string } =  {  name: 'flip-list' }
    limit : number = 5 
    status : number = 0  
    isFactor : boolean | number = false  
    sort : string = 'asec' 
    options: IOption[] = [
          { value: 5, text: '5' },
          { value: 10, text: '10' },
          { value: 20, text: '20' },
          { value: 50, text: '50' },
          { value: 100, text: '100' }
    ]
    fields:Fields[] = [
          {
            key: 'id',
            label: 'Order',
            sortable: true
          },
          {
            key: 'created_at',
            label: 'Date',
            sortable: true
          },
          {
            key: 'status',
            label: 'Status',
            sortable: true  
          },  
          {
            key: 'totla_ttc',
            label: 'Total',
            sortable: true
          },
          {
            key: 'isFactor',
            label: 'Type',
            sortable: true
          }  
        ]
    setPage (page: number) {
        this.page = page 
        this.initOrders()
    }
    async initOrders(){
        this.isLoading = true 
       await  this.$store.dispatch('profile/getOrdrts',{
            page : this.page,
            limit : this.limit,
            status : this.status,
            sort : this.sort,
            isFactor : this.isFactor,
        })
        this.isLoading = false
    } 
     
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal: any) { 
        let type = newVal.query ? Object.keys(newVal.query)[0] : false
        this.isFactor = type && type == "Factur" ? 1 : ( type && type == "Order" ? 0 : false) 
        this.initOrders() 
    } 
    created(){  
        this.initOrders()
    }
}

</script>
