<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>{{ $t('profile.ChangePassword') }}</h5>
            </div>
            <div class="card-divider" />
            <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-7 col-xl-6">
                        <div class="form-group">
                            <label for="password-current">{{ $t('profile.CurrentPassword') }}</label>
                            <b-form-input
                                @input="validOldPassword()"
                                v-model="form.oldPassword"
                                id="password-current"
                                class="form-control"
                                type="password" :state="validoldPassword"
                                :placeholder="$t('profile.CurrentPassword')"
                            ></b-form-input>
                            <b-form-invalid-feedback :state="validoldPassword">
                                {{ msgoldPassword }}
                            </b-form-invalid-feedback> 
                        </div>
                        <div class="form-group">
                            <label for="password-new">{{ $t('profile.NewPassword') }}</label>
                           <b-form-input
                                @input="validNewPassword()"
                                v-model="form.newPassword"
                                id="password-new"
                                class="form-control"
                                type="password"
                                :placeholder="$t('profile.NewPassword')" :state="validnewPassword"
                             ></b-form-input>
                            <b-form-invalid-feedback :state="validnewPassword">
                                {{  msgnewPassword }}
                            </b-form-invalid-feedback> 
                        </div>
                        <div class="form-group">
                            <label for="password-confirm">{{ $t('profile.ReenterNewPassword') }}</label>
                            <b-form-input
                                @input="validConfirmPassword()"
                                v-model="form.confirmPassword"
                                id="password-confirm"
                                class="form-control"
                                type="password" :state="validconfirmPassword"
                                :placeholder="$t('profile.ReenterNewPassword')"
                             ></b-form-input> 
                            <b-form-invalid-feedback :state="validconfirmPassword">
                                {{  msgconfirmPassword }}
                            </b-form-invalid-feedback> 
                        </div>

                        <div class="form-group mt-5 mb-0">
                            <button type="button" class="btn btn-primary" @click="savePassword" :disabled="!(validoldPassword && validnewPassword && validconfirmPassword)">
                                <i class="fas fa-key mx-2"></i>
                                {{ $t('profile.Change') }} 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">
import { IForm } from '~/interfaces/User' 
import { Vue, Component } from 'vue-property-decorator'
import AccountLayout from '~/components/account/account-layout.vue'
import { Context } from '@nuxt/types'
 
@Component({
    components: { AccountLayout },
    head(){ return { title: this.$t('profile.ChangePassword').toString() }}, 
    middleware ({ redirect, $url,$auth }: Context) {
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        }
    } 
})
export default class Page extends Vue {
    form : IForm = {
        oldPassword : "",
        newPassword : "",
        confirmPassword : "",
    }
    isLoading : boolean | null = false
    validoldPassword : boolean | null = null
    validnewPassword : boolean | null = null
    validconfirmPassword : boolean | null = null
    msgoldPassword : string | null = "null"
    msgnewPassword : string | null = null
    msgconfirmPassword : string | null = null
    async savePassword() { 
        this.isLoading = true
        let res = await this.$store.dispatch('profile/savePassword',this.form)
        if(res){
            this.reset() 
        }else{
            this.validoldPassword = false
            this.validnewPassword = false
            this.validconfirmPassword = false
        }
        this.isLoading = false
    }
    reset(){
        this.form = {
            oldPassword : "",
            newPassword : "",
            confirmPassword : "",
        }
        this.validoldPassword = null
        this.validnewPassword = null
        this.validconfirmPassword = null
        this.msgoldPassword = null
        this.msgnewPassword = null
        this.msgconfirmPassword = null
    }
    validOldPassword() { 
        this.validoldPassword = this.form.oldPassword.length >= 8
        if(this.form.oldPassword.length == 0) this.msgoldPassword =  this.$t('profile.requiredPassword').toString()
        if(this.form.oldPassword.length <= 8) this.msgoldPassword =  this.$t('profile.MinPassword').toString()
    }
    validNewPassword() { 
        this.validnewPassword = this.form.newPassword.length >= 8 
        if(this.form.newPassword.length == 0) this.msgnewPassword = this.$t('profile.requiredPassword').toString()
        if(this.form.newPassword.length <= 8) this.msgnewPassword = this.$t('profile.MinPassword') .toString()
    }
    validConfirmPassword() { 
        this.validconfirmPassword = this.form.confirmPassword.length >= 8 && this.form.confirmPassword === this.form.newPassword
        if(this.form.confirmPassword.length == 0){
            this.msgconfirmPassword = this.$t('profile.requiredPassword').toString() 
        }
        if(this.form.confirmPassword !== this.form.newPassword) {
            this.msgconfirmPassword = this.$t('profile.confirmPassword').toString()
        } 
    } 
}

</script>
