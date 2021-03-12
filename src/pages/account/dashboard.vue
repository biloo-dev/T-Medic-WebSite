<template>
    <AccountLayout>
        <div class="dashboard">
            <div class="dashboard__profile card profile-card">
                <div class="card-body profile-card__body">
                    <div class="profile-card__avatar">
                        <img :src="$url.img(User().img)" alt="">
                    </div>
                    <div class="profile-card__name">
                        {{ User().firstName }}
                    </div>
                    <div class="profile-card__email">
                        {{ User().lastName }}
                    </div>
                    <div class="profile-card__edit">
                        <AppLink :to="$url.accountProfile()" class="btn btn-secondary btn-sm">
                            {{ $t('profile.EditProfile') }}
                        </AppLink>
                    </div>
                </div>
            </div>

            <AddressCard
                :address="address"
                class="dashboard__address"
                featured
                :badge="address.default ? $t('profile.DefaultAddress') : ''"
            >
                <AppLink :to="$url.accountAddress({ id: 5 })">
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
                                <tr v-for="order in orders" :key="order.id">
                                    <td>
                                        <AppLink :to="$url.accountOrder({ id: 5 })">
                                            #{{ order.id }}
                                        </AppLink>
                                    </td>
                                    <td>{{ order.date }}</td>
                                    <td>{{ order.status }}</td>
                                    <td>
                                        {{ $price(order.total) }}
                                        {{ $t('general.for') }}
                                        {{ order.quantity }}
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
</template>

<script lang="ts">
import { IUser, IData } from '~/interfaces/User' 
import { Vue, Component } from 'vue-property-decorator'
import { IUserAddress } from '~/interfaces/address'
import { IOrderSummary } from '~/interfaces/order'
import AppLink from '~/components/shared/app-link.vue'
import AddressCard from '~/components/shared/address-card.vue'
import AccountLayout from '~/components/account/account-layout.vue'
import dataAccountAddresses from '~/data/accountAddresses'
import dataAccountOrders from '~/data/accountOrders'
import { Getter } from 'vuex-class' 
@Component({
    components: { AppLink, AddressCard, AccountLayout },
    head: { title: 'My Account' }
})
export default class Page extends Vue {
    address: IUserAddress = dataAccountAddresses[0]
    @Getter('auth/getUser') User! : IUser
    orders: IOrderSummary[] = dataAccountOrders.slice(0, 3)
}

</script>
