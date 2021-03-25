<template>
    <div class="account-menu">   
        <blockLoader :minHeight="293" v-if="isLoading" /> 
        <div v-else> 
            <div v-if="!$auth.loggedIn">
                <form class="account-menu__form" @submit.prevent="userLogin">
                    <div class="account-menu__form-title">
                        {{ $t('profile.LogIntoYourAccount') }}
                    </div>
                    <div class="form-group">
                        <label for="header-signin-email" class="sr-only">{{ $t('profile.EmailAddress') }}</label>
                        <input id="header-signin-email" v-model="form.email" type="email" class="form-control form-control-sm" :placeholder="$t('profile.EmailAddress')">
                    </div>
                    <div class="form-group">
                        <label for="header-signin-password" class="sr-only">{{ $t('profile.password') }}</label>
                        <div class="account-menu__form-forgot">
                            <input id="header-signin-password" v-model="form.password" type="password" class="form-control form-control-sm" :placeholder="$t('profile.password')">
                            <a href="" class="account-menu__form-forgot-link">{{ $t('profile.Forgot') }}</a>
                        </div>
                    </div>
                    <div class="form-group account-menu__form-button">
                        <button type="submit" class="btn btn-primary btn-sm">
                            {{ $t('profile.Login') }}
                        </button>
                    </div>
                    <!-- <div class="account-menu__form-link">
                        <AppLink :to="$url.signUp()">
                            {{ $t('profile.CreateAnAccount') }}
                        </AppLink>
                    </div> -->
                </form>
                <div class="account-menu__divider" />
            </div>
            <div v-else>
                <AppLink :to="$url.account()" class="account-menu__user">
                    <div class="account-menu__user-avatar"> 
                        <img v-if="$auth.user.img" :src="$url.img($auth.user.img)" alt="">
                        <img v-else :src="$url.img('/images/avatars/avatar-1.png')" alt="">
                    </div>
                    <div class="account-menu__user-info">
                        <div class="account-menu__user-name">
                            {{ $auth.user['firstName_'+$i18n.locale] + ' ' + $auth.user['lastName_'+$i18n.locale] }}
                        </div>
                        <div class="account-menu__user-email">
                            {{ $auth.user.email }}
                        </div>
                    </div>
                </AppLink>
                
                <div class="account-menu__divider" />
                <ul class="account-menu__links"> 
                    <li>
                        <AppLink :to="$url.accountProfile()">
                            {{ $t('profile.EditProfile') }}
                        </AppLink>
                    </li>
                    <li>
                        <AppLink :to="$url.accountOrders()">
                            {{ $t('profile.OrderHistory') }}
                        </AppLink>
                    </li>
                    <li>
                        <AppLink :to="$url.accountAddresses()">
                            {{ $t('profile.addresses') }}
                        </AppLink>
                    </li>
                    <li>
                        <AppLink :to="$url.accountPassword()">
                            {{ $t('profile.password') }}
                        </AppLink>
                    </li>
                </ul>
                <div class="account-menu__divider" />
                <ul class="account-menu__links">
                    <li>
                        <b-button variant="link"  @click="$Swal.logout()">
                            {{ $t('profile.Logout') }} 
                        </b-button> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types' 
import { IUser, IData,IProfile } from '~/interfaces/User' 
import { Vue, Component } from 'vue-property-decorator'
import AppLink from '~/components/shared/app-link.vue'
import blockLoader from '~/components/blocks/block-loader.vue'
import { Getter } from 'vuex-class' 
@Component({
    components: { AppLink,blockLoader }, 
})
export default class AccountMenu extends Vue { 
    @Getter('prodile/getProdile') profile! : IProfile
    form = {
        email : 'billal.20113@gmail.com',
        password : 'admin123'
    }  
    isLoading : boolean = false
    async userLogin() {
      try {
          this.isLoading = true
        let response = await this.$auth.loginWith('local', {data : this.form} ) 
        this.isLoading = false
      } catch (err) {
          this.isLoading = false
          console.log(err)
      }
    } 
}


</script>
