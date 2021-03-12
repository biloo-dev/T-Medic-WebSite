<template>
    <div class="account-menu">
        <blockLoader :minHeight="293" v-if="isLoading" /> 
        <template v-if="!isLoading"> 
            <div v-if="!isLogin">
                <form class="account-menu__form" @submit.prevent="$store.dispatch('auth/login', form)">
                    <div class="account-menu__form-title">
                        {{ $t('profile.LogIntoYourAccount') }}
                    </div>
                    <div class="form-group">
                        <label for="header-signin-email" class="sr-only">{{ $t('profile.Emailaddress') }}</label>
                        <input id="header-signin-email" v-model="form.email" type="email" class="form-control form-control-sm" :placeholder="$t('profile.Emailaddress')">
                    </div>
                    <div class="form-group">
                        <label for="header-signin-password" class="sr-only">{{ $t('profile.Password') }}</label>
                        <div class="account-menu__form-forgot">
                            <input id="header-signin-password" v-model="form.password" type="password" class="form-control form-control-sm" :placeholder="$t('profile.Password')">
                            <a href="" class="account-menu__form-forgot-link">{{ $t('profile.Forgot') }}</a>
                        </div>
                    </div>
                    <div class="form-group account-menu__form-button">
                        <button type="submit" class="btn btn-primary btn-sm">
                            {{ $t('profile.Login') }}
                        </button>
                    </div>
                    <div class="account-menu__form-link">
                        <AppLink :to="$url.signUp()">
                            {{ $t('profile.CreateAnAccount') }}
                        </AppLink>
                    </div>
                </form>
                <div class="account-menu__divider" />
            </div>
            <div v-else>
                <AppLink :to="$url.account()" class="account-menu__user">
                    <div class="account-menu__user-avatar">
                        <img :src="$url.img(User().img || '/images/avatars/avatar-1.png')" alt="">
                    </div>
                    <div class="account-menu__user-info">
                        <div class="account-menu__user-name">
                            {{ User().firstName + ' ' + User().lastName }}
                        </div>
                        <div class="account-menu__user-email">
                            {{ User().email }}
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
                            {{ $t('profile.Addresses') }}
                        </AppLink>
                    </li>
                    <li>
                        <AppLink :to="$url.accountPassword()">
                            {{ $t('profile.Password') }}
                        </AppLink>
                    </li>
                </ul>
                <div class="account-menu__divider" />
                <ul class="account-menu__links">
                    <li>
                        <b-button variant="link"  @click="() => $store.dispatch('auth/logout')">
                            {{ $t('profile.Logout') }} 
                        </b-button> 
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { IUser, IData } from '~/interfaces/User' 
import { Vue, Component } from 'vue-property-decorator'
import AppLink from '~/components/shared/app-link.vue'
import blockLoader from '~/components/blocks/block-loader.vue'
import { Getter } from 'vuex-class' 
@Component({
    components: { AppLink,blockLoader },
    async asyncData ({ store, query }): Promise<object | void> {
        // await store.dispatch('settings/fetchSettings')
    },
})
export default class AccountMenu extends Vue {
    @Getter('auth/isLoading') isLoading! : boolean
    @Getter('auth/isLogin') isLogin! : boolean
    @Getter('auth/getUser') User! : IUser
    form = {
        email : 'T-Medic-admin@gmail.com',
        password : 'admin123'
    } 
}


</script>
