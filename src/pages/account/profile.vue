
<style scooped>
.card-header{
    padding : 0.7rem 2rem !important
}
</style>
<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>{{ $t('profile.EditProfile') }}</h5> 
            </div>
            <div class="card-divider" />  
            <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-12 col-xl-12">
                        <b-card > 
                             <div class="row no-gutters">
                                <div class="col-12 col-lg-6 col-xl-8">
                                    <b-card no-body  > 
                                    <b-tabs  v-model="tabIndex" small card content-class="mx-0 my-0 border-top border-gray" >  
                                        <b-tab :active="$i18n.locale == 'fr'" :title="$t('profile.title_fr')">
                                            <template #title>
                                                <img width="20" src="~/static/images/languages/fr.png" />
                                                {{ $t('profile.title_fr') }}
                                            </template>
                                            <b-card-text>
                                                <div class="form-group">
                                                    <label for="profile-first-name">{{ $t('fields.firstName_fr') }}</label> 
                                                    <input
                                                        v-model="form.firstName_fr"  
                                                        type="text"
                                                        class="form-control"
                                                        :placeholder="$t('fields.firstName_fr')"
                                                    >
                                                </div>
                                                <div class="form-group">
                                                    <label for="profile-last-name">{{ $t('fields.lastName_fr') }}</label>
                                                    <input
                                                        v-model="form.lastName_fr" 
                                                        type="text"
                                                        class="form-control"
                                                        :placeholder="$t('fields.lastName_fr')"
                                                    >
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
                                                    <label for="profile-first-name">{{ $t('fields.firstName_ar') }}</label> 
                                                    <input
                                                        v-model="form.firstName_ar"  
                                                        type="text"
                                                        class="form-control"
                                                        :placeholder="$t('fields.firstName_ar')"
                                                    >
                                                </div>
                                                <div class="form-group">
                                                    <label for="profile-last-name">{{ $t('fields.lastName_en') }}</label>
                                                    <input
                                                        v-model="form.lastName_ar" 
                                                        type="text"
                                                        class="form-control"
                                                        :placeholder="$t('fields.lastName_en')"
                                                    >
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
                                                    <label for="profile-first-name">{{ $t('fields.firstName_en') }}</label> 
                                                    <input
                                                        v-model="form.firstName_en"  
                                                        type="text"
                                                        class="form-control"
                                                        :placeholder="$t('fields.firstName_en')"
                                                    >
                                                </div>
                                                <div class="form-group">
                                                    <label for="profile-last-name">{{ $t('fields.lastName_ar') }}</label>
                                                    <input
                                                        v-model="form.lastName_en" 
                                                        type="text"
                                                        class="form-control"
                                                        :placeholder="$t('fields.lastName_ar')"
                                                    >
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                    </b-tabs> 
                                </b-card> 
                             </div>
                            <div class="col-12 col-lg-6 col-xl-4">
                                <b-card no-body  > 
                                    <div class="d-flex justify-content-center">
                                        <div class="profile-card__avatar change_avatar" @click="$refs.img.click()" style="width: 200px;height: 200px; cursor:pointer;"> 
                                            <img :src="$url.img(form.img)" width="100%" hieght="100%" alt="">
                                        </div> 
                                        <input v-show="false" accept="image/*" class="hidden" ref="img" type="file" @input="selectImg">
                                    </div>
                                    <template #footer>
                                        <small class="text-muted">{{ $t('profile.footerImg') }}</small>
                                    </template>
                                </b-card>  
                            </div> 
                        </div> 
                        <div class="form-group">
                            <label for="profile-email"> </label>
                           <b-form-group :label="$t('profile.sexe')" v-slot="{ ariaDescribedby }">
                            <b-form-radio-group v-model="form.sexe" :aria-describedby="ariaDescribedby" name="radio-inline">
                                <b-form-radio :value="0">{{ $t('profile.male') }}</b-form-radio>
                                <b-form-radio :value="1">{{ $t('profile.female') }}</b-form-radio>
                            </b-form-radio-group>
                            </b-form-group>
                        </div>
                        <div class="form-group">
                            <label for="profile-email">{{ $t('profile.EmailAddress') }}</label>
                            <input
                                v-model="form.email" 
                                type="email"
                                class="form-control"
                                :placeholder="$t('profile.EmailAddress')"
                            >
                        </div>
                        <div class="form-group">
                            <label for="profile-phone">{{ $t('profile.PhoneNumber') }} (1)</label>
                            <input
                                v-model="form.phone1" 
                                type="text"
                                class="form-control"
                                :placeholder="$t('profile.PhoneNumber') + ' (1)'"
                            >
                        </div>
                        <div class="form-group">
                            <label for="profile-phone">{{ $t('profile.PhoneNumber') }} (2)</label>
                            <input
                                v-model="form.phone2" 
                                type="text"
                                class="form-control"
                                :placeholder="$t('profile.PhoneNumber') + ' (2)'"
                            >
                        </div>
                         
                        <div class="form-group mt-5 mb-0">
                            <button type="button" class="btn btn-primary" @click="editProfile">
                               {{ $t('profile.saveProfile') }}
                            </button>
                        </div>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}
import { Context } from '@nuxt/types'

import { RootState } from '~/store'
import { Vue, Component } from 'vue-property-decorator'
import AccountLayout from '~/components/account/account-layout.vue'
import { IUser, IData,IProfile,IAddresse } from '~/interfaces/User' 
import { Getter,State } from 'vuex-class' 
@Component({
    components: { AccountLayout },
    head: { title: 'Profile' },
    middleware ({ redirect, $url,$auth }: Context) { 
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        }
    }
})

export default class Page extends Vue {    
    @Getter('locale/all') locales! : any 
    form  : any = {}
    imageFile : File = {} as File
    data(){
        return {
            options: [
                  { text: 'male', value: 0 },
                  { text: 'female', value: 1 }, 
                ],
            tabIndex : 0
        }
    }
    created(){  
        this.form = { ...this.$auth.user}
    }
    selectImg(event? : HTMLInputEvent):void{ 
      if(event && event.target && event.target.files){
          const file = event.target.files[0];
          this.imageFile = file;
          this.form.img = URL.createObjectURL(file);
      }
    }
    editProfile(){ 
        let formData = new FormData();
        formData.append("form", JSON.stringify(this.form));
        formData.append("image", this.imageFile);
        this.$store.dispatch('profile/editProfile',formData)
    }
}

</script>
