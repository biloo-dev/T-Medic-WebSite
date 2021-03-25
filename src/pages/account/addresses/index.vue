<template>
    <AccountLayout>
        <div class="addresses-list">
            <AppLink :to="$url.accountAddressesadd()" class="addresses-list__item addresses-list__item--new">
                <div class="addresses-list__plus" />
                <div class="btn btn-secondary btn-sm">
                      {{ $t('general.addNew') }}
                </div> 
            </AppLink>

            <div class="addresses-list__divider" />
            <template v-for="address in $auth.user.addresse">
                <AddressCard
                    :key="address.id"
                    :address="address"
                    :badge="address.default ? 'Default' : ''"
                    class="addresses-list__item"
                >
                    <AppLink :to="$url.accountAddress(address)">
                        {{ $t('general.edit') }}
                    </AppLink>
                    &nbsp;&nbsp;
                    <b-button variant="link" @click="removeAddress(address.id)">
                        {{ $t('general.Remove') }}
                    </b-button>
                </AddressCard>
                <div :key="address.id + '-divider'" class="addresses-list__divider" />
            </template>
        </div>
    </AccountLayout>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

import { Vue, Component } from 'vue-property-decorator'
import { IUserAddress } from '~/interfaces/address'
import AppLink from '~/components/shared/app-link.vue'
import AddressCard from '~/components/shared/address-card.vue'
import AccountLayout from '~/components/account/account-layout.vue' 

@Component({
    components: { AppLink, AddressCard, AccountLayout }, 
    head(){ return { title: this.$t('profile.AddressList').toString() }}, 
     middleware ({ redirect, $url,$auth }: Context) {
        if(!$auth.loggedIn) {
            $auth.logout()
            return redirect($url.lang($url.signIn()))
        }
    }
})
export default class Page extends Vue { 
    removeAddress(id : number){
        this.$Swal.delete().then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('profile/deleteAddress',id)
                } 
            })
    }
}

</script>
