<template>
    <div class="account-menu">
        <form class="account-menu__form" v-if="!isLogin">
            <div class="account-menu__form-title">
                {{ $t('header.login.LogIntoYourAccount') }}
            </div>
            <div class="form-group">
                <label for="header-signin-email" class="sr-only">{{ $t('header.login.Emailaddress') }}</label>
                <input id="header-signin-email" type="email" class="form-control form-control-sm" placeholder="Email address">
            </div>
            <div class="form-group">
                <label for="header-signin-password" class="sr-only">{{ $t('header.login.Password') }}</label>
                <div class="account-menu__form-forgot">
                    <input id="header-signin-password" type="password" class="form-control form-control-sm" placeholder="Password">
                    <a href="" class="account-menu__form-forgot-link">{{ $t('header.login.Forgot') }}</a>
                </div>
            </div>
            <div class="form-group account-menu__form-button">
                <button type="submit" class="btn btn-primary btn-sm">
                    {{ $t('header.login.Login') }}
                </button>
            </div>
            <div class="account-menu__form-link">
                <AppLink :to="$url.signUp()">
                    {{ $t('header.login.CreateAnAccount') }}
                </AppLink>
            </div>
        </form>
        <div class="account-menu__divider" />
        <div v-if="isLogin">
            <AppLink :to="$url.account()" class="account-menu__user">
                <div class="account-menu__user-avatar">
                    <img :src="$url.img('/images/avatars/avatar-3.jpg')" alt="">
                </div>
                <div class="account-menu__user-info">
                    <div class="account-menu__user-name">
                        Helena Garcia
                    </div>
                    <div class="account-menu__user-email">
                        stroyka@example.com
                    </div>
                </div>
            </AppLink>
            <div class="account-menu__divider" />
            <ul class="account-menu__links">
                <li>
                    <AppLink :to="$url.accountProfile()">
                        {{ $t('header.login.EditProfile') }}
                    </AppLink>
                </li>
                <li>
                    <AppLink :to="$url.accountOrders()">
                        {{ $t('header.login.OrderHistory') }}
                    </AppLink>
                </li>
                <li>
                    <AppLink :to="$url.accountAddresses()">
                        {{ $t('header.login.Addresses') }}
                    </AppLink>
                </li>
                <li>
                    <AppLink :to="$url.accountPassword()">
                        {{ $t('header.login.Password') }}
                    </AppLink>
                </li>
            </ul>
            <div class="account-menu__divider" />
            <ul class="account-menu__links">
                <li>
                    <AppLink :to="$url.signOut()">
                        {{ $t('header.login.Logout') }}
                    </AppLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AppLink from '~/components/shared/app-link.vue'
import { Getter } from 'vuex-class' 
@Component({
    components: { AppLink },
    async asyncData ({ store, query }): Promise<object | void> {
        // await store.dispatch('settings/fetchSettings')
    },
})
export default class AccountMenu extends Vue {
    @Getter('auth/isLogin') isLogin! : boolean
}


</script>
