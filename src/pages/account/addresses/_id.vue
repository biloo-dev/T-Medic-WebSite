<template>
   <div>
        <loading v-if="isLoading" />
        <AccountLayout v-else>
            <div class="card">
                <div class="card-header">
                    <h5>{{ isAdd ? $t('profile.addNewAddress') : $t('profile.EditAddress') }}</h5>
                </div>
                <div class="card-divider" />
                <div class="card-body">
                    <div class="row no-gutters">
                        <div class="col-12 col-lg-12 col-xl-12">
                            <b-card no-body  > 
                                <b-tabs  v-model="tabIndex" small card content-class="mx-0 my-0 border-top border-gray" >  
                                    <b-tab :active="$i18n.locale == 'fr'" :title="$t('profile.title_fr')">
                                        <template #title>
                                            <img width="20" src="~/static/images/languages/fr.png" />
                                            {{ $t('profile.title_fr') }}
                                        </template>
                                        <b-card-text>
                                            <div class="form-group">
                                                <label for="profile-first-name">{{ $t('fields.address_fr') }}</label>  
                                                <b-form-textarea
                                                 v-model="form.address_fr"  
                                                    id="textarea-auto-height"
                                                    :placeholder="$t('fields.address_fr')"
                                                    rows="6"
                                                    max-rows="8"
                                                ></b-form-textarea>
                                            </div> 
                                        </b-card-text>
                                    </b-tab> 
                                    <b-tab :active="$i18n.locale == 'ar'" :title="$t('profile.title_ar')">
                                        <template #title>
                                            <img width="20"  src="~/static/images/languages/dz.png" />
                                            {{ $t('profile.title_ar') }}
                                        </template>
                                        <b-card-text>
                                            <div class="form-group">
                                                <label for="profile-first-name">{{ $t('fields.address_ar') }}</label> 
                                                <b-form-textarea
                                                    v-model="form.address_ar"  
                                                    type="text"
                                                    rows="6"
                                                    class="form-control"
                                                    :placeholder="$t('fields.address_ar')"
                                                ></b-form-textarea>
                                            </div> 
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab  :active="$i18n.locale == 'en'" title="">
                                        <template #title>
                                            <img  width="20" src="~/static/images/languages/us.png" />
                                            {{ $t('profile.title_en') }}
                                        </template>
                                        <b-card-text>
                                            <div class="form-group">
                                                <label for="profile-first-name">{{ $t('fields.address_en') }}</label> 
                                                <b-form-textarea
                                                    v-model="form.address_en"  
                                                    type="text"
                                                    rows="6"
                                                    class="form-control"
                                                    :placeholder="$t('fields.address_en')"
                                                ></b-form-textarea>
                                            </div> 
                                        </b-card-text>
                                    </b-tab>
                                </b-tabs> 
                            </b-card> 
                            <br/>
                            <div class="form-group">
                                <label for="checkout-company-name">
                                    {{ $t('profile.wilayaSearch') }}
                                </label>
                                <v-select :options="wilayas"    
                                            data-style="btn-danger"
                                        v-model="form.wilaya_id"
                                        :labelSearchPlaceholder="$t('profile.wilayaSearch')" 
                                        :labelNotFound="$t('profile.labelNotFound')"  
                                        :textProp="'name_'+$i18n.locale" 
                                        valueProp="id" searchable />  
                            </div>  
                            <div class="form-group">
                                <label for="checkout-company-name">
                                    {{ $t('profile.dairaSearch') }}  
                                </label>
                                <v-select :options="dairasFilter" 
                                            v-model="form.daira_id"
                                            :labelSearchPlaceholder="$t('profile.dairaSearch')" 
                                            :labelNotFound="$t('profile.labelNotFound')"  
                                            :textProp="'name_'+$i18n.locale" 
                                            valueProp="id" searchable />  
                            </div> 
                            <div class="form-group">
                                <label for="checkout-company-name">
                                    {{ $t('profile.communeSearch') }}  
                                </label>
                                <v-select :options="communesFilter"   
                                            v-model="form.commune_id"
                                            :labelSearchPlaceholder="$t('profile.communeSearch')" 
                                            :labelNotFound="$t('profile.labelNotFound')"  
                                            :textProp="'name_'+$i18n.locale" 
                                            valueProp="id" searchable />  
                            </div>
                            
                            <div class="form-group mt-3 mb-0">
                                <button v-if="isAdd" class="btn btn-primary" type="button" @click="saveAddress">
                                    <i class="fas fa-save mx-1"></i>
                                    {{ $t('profile.saveAddress') }}
                                </button>
                                <button v-else class="btn btn-success" type="button" @click="saveAddress">
                                    <i class="fas fa-edit mx-1"></i>
                                    {{ $t('profile.updateAddress') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AccountLayout>
   </div>
</template>

<script lang="ts">
 import loading from '~/components/blocks/block-loader.vue' 
import { Vue, Component,Watch } from 'vue-property-decorator'
import AccountLayout from '~/components/account/account-layout.vue'
import { Context } from '@nuxt/types'
import { IAddresse, IWilaya, ICommune, IDaira} from '~/interfaces/User' 
import shopApi from '~/api/shop'
@Component({
    components: { AccountLayout,loading  }, 
    head(){ return { title: this.$t('profile.EditAddress').toString() }}, 
    async asyncData (context: Context) { 

         const allWilaya = await shopApi.getWilaya() 
         
        return {
            isLoading : true,
            wilayas : allWilaya.wilayas,
            communes : allWilaya.communes,
            dairas : allWilaya.dairas
        }
    },
     middleware ({ redirect, $url,$auth }: Context) {
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        }
    }
})
export default class Page extends Vue {
    isLoading : boolean = true
    isAdd : boolean = false 
    wilayas :IWilaya[] = []
    communes :ICommune[] = []
    communesFilter :ICommune[] = []
    dairas :IDaira[] = [] 
    dairasFilter :IDaira[] = [] 
    tabIndex : number = 0
    form : IAddresse = {  
        wilaya_id : { 
            id: 0, 
            name_en: "Select a state", 
            name_fr: "sélectionnez la wilaya", 
            name_ar: "حدد الولاية",  
        },
        commune_id : { 
            id: 0, 
            name_en: "Choose a city", 
            name_fr: "sélectionnez la commune", 
            name_ar: "اختر المدينة",  
        },
        daira_id : {  
            id: 0,
            name_en: "Choose the circle", 
            name_fr: "sélectionnez la daira", 
            name_ar: "اختر الدائرة",  
        }
    }
    async saveAddress(){
        this.isLoading = true
        await this.$store.dispatch('profile/saveAddress',this.form)
        this.isLoading = false
        // this.$url.accountAddresses()
    }
    async selectAddress(){
        let id = this.$route.params.id 
        if(id == "addNew"){
            this.isAdd = true
        }else if(this.$auth.user){
            this.isAdd = false
            let ards = await JSON.parse(JSON.stringify(this.$auth.user.addresse))
            this.form = await ards.find((e:any) => e.id == id)
            this.form.wilaya_id = this.form.wilaya
            this.form.commune_id = this.form.commune 
            this.form.daira_id = this.form.daira 
        }
        this.isLoading = false
    } 
    async mounted(){ 
        await this.selectAddress()
    }
    @Watch('form.wilaya_id')
    onWilayasChange(){
        this.dairasFilter = []
        let id = this.form.wilaya_id.id  
        if(this.isAdd){
            this.form.daira_id = { 
                id: 0, 
                name_en: "Choose a city", 
                name_fr: "sélectionnez la commune", 
                name_ar: "اختر المدينة",  
            }
        }
        this.dairasFilter = id != 0 ? this.dairas.filter(e => e.wilaya_id == id) : []
    }
    @Watch('form.daira_id')
    onDaira_idChange(){ 
        let id = this.form.daira_id.id  
        if(this.isAdd){
            this.form.commune_id = {  
                id: 0,
                name_en: "Choose the circle", 
                name_fr: "sélectionnez la daira", 
                name_ar: "اختر الدائرة",  
            }  
        }
        this.communesFilter = id != 0 ? this.communes.filter(e => e.daira_id == id) : []
    }
 }

</script>
/* 
 
default:"1"    

 */