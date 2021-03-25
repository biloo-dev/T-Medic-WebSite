<template>
    <div>
        <!-- <loading v-if="cart.isLoading" /> -->
        <client-only  >
            <PageHeader
                :title="$t('shop.cart.ShoppingCart')"
                :breadcrumb="[
                    { title: $t('header.Home'), url: $url.lang('/') },
                    { title: $t('shop.cart.ShoppingCart'), url: $url.lang('shop/cart') },
                ]"
            />
            <b-card  v-if="cart.quantity" no-body class="text-center mx-3 mb-2 py-2"> 
                <b-form-checkbox v-model="checked" @input="updateIsFacture()" name="check-button" switch>
                    {{ checked ? $t('shop.cart.isFucteur') : $t('shop.cart.isOrder')  }}<strong>{{ checked ? $t('profile.facteur') : $t('profile.order')  }}</strong>
                </b-form-checkbox>
            </b-card>
            <div v-if="!cart.quantity" class="block block-empty">
                <div class="container">
                    <div class="block-empty__body">
                        <div class="block-empty__message">
                            {{ $t('shop.cart.empty') }}
                        </div>
                        <div class="block-empty__actions">
                            <AppLink to="/" class="btn btn-primary btn-sm">
                                {{ $t('shop.cart.continue') }}
                            </AppLink>
                        </div> 
                    </div>
                </div>
            </div>

            <div v-if="cart.quantity" class="cart block">
                <div class="container">
                    <table class="cart__table cart-table table-bordered">
                        <thead class="cart-table__head">
                            <tr class="cart-table__row">
                                <th class="cart-table__column cart-table__column--image">
                                   {{ $t('wishlist.Image') }}
                                </th>
                                <th width="300" class="cart-table__column cart-table__column--product">
                                    {{ $t('general.product') }}
                                </th>
                                <th class="cart-table__column cart-table__column--price">
                                    {{ $t('general.Price') }}
                                </th>
                                <th width="100" class="cart-table__column cart-table__column--quantity">
                                   {{ $t('shop.product.Quantity') }}
                                </th>
                                <th class="cart-table__column cart-table__column--total">
                                    {{ $t('profile.totalHt') }}
                                </th>
                                <th class="cart-table__column cart-table__column--total">
                                    {{ $t('profile.totalTva') }}
                                </th>
                                <th class="cart-table__column cart-table__column--total">
                                    {{ $t('profile.totalTtc') }}
                                </th>
                                <th class="cart-table__column cart-table__column--remove" aria-label="Remove" />
                            </tr>
                        </thead>
                        <tbody class="cart-table__body">
                            <tr v-for="item in cart.items" :key="item.id" class="cart-table__row">
                                <td class="cart-table__column cart-table__column--image">
                                    <div v-if="item.product.images.length > 0" class="product-image">
                                        <AppLink :to="$url.product(item.product)" class="product-image__body">
                                            <!--suppress HtmlUnknownTarget -->
                                            <img class="product-image__img" :src="$url.img($url.parse(item.product.images))" alt="">
                                        </AppLink>
                                    </div>
                                </td>
                                <td class="cart-table__column cart-table__column--product">
                                    <AppLink :to="$url.product(item.product)" class="cart-table__product-name">
                                        {{ item.product['name_'+$i18n.locale] }}
                                    </AppLink>
                                    <!-- <ul v-if="item.options.length > 0" class="cart-table__options">
                                        <li v-for="(option, index) in item.options" :key="index">
                                            {{ option.optionTitle }}: {{ option.valueTitle }}
                                        </li>
                                    </ul> -->
                                </td>
                                <td class="cart-table__column cart-table__column--price" data-title="Price">
                                    {{ $price(item.price) }}
                                </td>
                                <td class="cart-table__column cart-table__column--quantity" data-title="Quantity">
                                    <InputNumber
                                        :value="getItemQuantity(item)"
                                        :min="1"
                                        @input="handleChangeQuantity(item, $event)"
                                    />
                                </td>
                                <td class="cart-table__column cart-table__column--total" data-title="Total">
                                    {{ $price(item.totalHt) }}
                                </td>
                                <td class="cart-table__column cart-table__column--total" data-title="Total">
                                    {{ $price(item.totalTva) }}
                                </td>
                                <td class="cart-table__column cart-table__column--total" data-title="Total">
                                    {{ $price(item.totalTtc) }}
                                </td>
                                <td class="cart-table__column cart-table__column--remove">
                                    <AsyncAction
                                        v-slot:default="{ run, isLoading }"
                                        :action="() => $store.dispatch('cart/remove', { itemId: item.id })"
                                    >
                                        <button
                                            type="button"
                                            :class="[
                                                'btn btn-light btn-sm btn-svg-icon',
                                                {'btn-loading': isLoading}
                                            ]"
                                            @click="run"
                                        >
                                            <Cross12Svg />
                                        </button>
                                    </AsyncAction>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- <div class="cart__actions">
                          <form class="cart__coupon-form">
                            <label for="input-coupon-code" class="sr-only">Password</label>
                            <input
                                id="input-coupon-code"
                                class="form-control"
                                type="text"
                                placeholder="Coupon Code"
                            >
                            <button type="submit" class="btn btn-primary">
                                Apply Coupon
                            </button>
                        </form> 
                        <div class="cart__buttons">
                            <AppLink href="/" class="btn btn-light">
                                Continue Shopping
                            </AppLink> 
                        </div>
                    </div> -->
                    <b-row align-h="between" class="pt-md-5 pt-4">
                        <b-col cols="12" md="7" lg="6" xl="5">
                            <b-card  v-if="cart.quantity" no-body class="mx-3 mb-2 py-2"> 
                                <b-form-checkbox v-model="withShopping" @input="updateWithShop()" name="check-button" switch>
                                   <strong>{{ $t('shop.cart.withShopping') }}</strong>
                                </b-form-checkbox>
                                <br/> 
                                 <b-form-select
                                    :disabled="!withShopping"
                                    v-model="selected"
                                    :options="$auth.user.addresse"
                                    class="mb-3"
                                    value-field="id"
                                    :text-field="'address_'+$i18n.locale"
                                    disabled-field="notEnabled"
                                    @input="inputSelect" 
                                >
                                     <template #first>
                                        <b-form-select-option :value="null" disabled> -- {{ $t('shop.cart.PleaseSelectAddress') }} -- </b-form-select-option>
                                    </template>
                                </b-form-select>
                                <AddressCard  
                                    v-if="selected"
                                    :address="address" 
                                    featured
                                    :badge="address.default ? $t('profile.DefaultAddress') : ''"
                                >
                                    <AppLink :to="$url.accountAddress({ id: address.id })">
                                        {{ $t('profile.EditAddress') }}
                                    </AppLink>
                                </AddressCard> 
                            </b-card>
                        </b-col>
                        <b-col cols="12" md="7" lg="6" xl="5">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">
                                        {{ $t('shop.cart.CartTotals') }}
                                    </h3>
                                    <table class="cart__totals">
                                        <template>
                                            <thead class="cart__totals-header">
                                                <tr>
                                                    <th>{{ $t('profile.totalHt') }}</th>
                                                    <td>{{ $price(cart.totalHt) }}</td>
                                                </tr>
                                            </thead>
                                            <tbody class="cart__totals-body">
                                                <tr>
                                                    <th>{{ $t('profile.totalTva') }}</th>
                                                    <td>{{ $price(cart.totalTva) }}</td>
                                                </tr> 
                                                <!-- <tr v-for="(extraLine, index) in cart.totals" :key="index">
                                                    <th>{{ extraLine.title }}</th>
                                                    <td>
                                                        {{ $price(extraLine.price) }}
                                                        <div v-if="extraLine.type === 'shipping'" class="cart__calc-shipping">
                                                            <AppLink to="/">
                                                                Calculate Shipping
                                                            </AppLink>
                                                        </div>
                                                    </td>
                                                </tr> -->
                                            </tbody>
                                        </template>
                                        <tfoot class="cart__totals-footer">
                                            <tr>
                                                <th>{{ $t('profile.totalTtc') }}</th>
                                                <td>{{ $price(cart.totalTtc) }}</td>
                                            </tr>
                                        </tfoot>
                                    </table> 
                                     <b-button :disabled="!$auth.loggedIn" variant="outline-primary" @click="ProceedToCheckout" class=" btn-xl px-5 btn-block cart__checkout-button d-flex justify-content-between">
                                          <span>{{ $t('shop.cart.ProceedToCheckout') }}  </span>
                                        <img src="~/static/images/online-purchase.png" style="position:relative;top:-5px" /> 
                                     </b-button>
                                    <!-- <AppLink :disabled="true" :to="$url.checkout()" class="btn btn-primary">
                                        {{ $t('shop.cart.ProceedToCheckout') }} 
                                    </AppLink> -->
                                </div>
                            </div>
                        </b-col>
                    </b-row> 
                </div>
            </div>
        </client-only>
    </div>
</template>

<script lang="ts">
import loading from '~/components/blocks/block-loader.vue'
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { RootState } from '~/store'
import { Cart, CartItem } from '~/interfaces/cart'
import PageHeader from '~/components/shared/page-header.vue'
import AppLink from '~/components/shared/app-link.vue'
import InputNumber from '~/components/shared/input-number.vue'
import AsyncAction from '~/components/shared/async-action.vue'
import Cross12Svg from '~/svg/cross-12.svg'
import onlinePurchase from '~/svg/online-purchase.svg'
import AddressCard from '~/components/shared/address-card.vue'
export interface Quantity {
    itemId: number;
    value: string | number;
}

@Component({
    components: { PageHeader, AppLink, AddressCard,onlinePurchase, InputNumber, AsyncAction, Cross12Svg,loading },
    head () {

        return {
            title: this.$t('shop.cart.ShoppingCart').toString()
        }
    }
})
export default class Page extends Vue {
    @State((state: RootState) => state.cart) cart!: Cart; 
    quantities: Quantity[] = []
    checked : boolean = false
    withShopping : boolean = false
    selected : number | null = null
    address : any = {}
    handleChangeQuantity (item: CartItem, quantity: number) {
        const itemQuantity = this.quantities.find(x => x.itemId === item.id)
        this.updateQuantitie(item.id,quantity)
        if (itemQuantity) {
            itemQuantity.value = quantity
        } else {
            this.quantities.push({
                itemId: item.id,
                value: quantity
            })
        }
    }
    mounted(){
        this.checked = this.cart.isFacture
    }
    inputSelect () {
        if(this.$auth.user && this.$auth.user.addresse){
            this.address =  this.$auth.user.addresse.find((item :any) => item.id === this.selected) 
        }
    }
    getItemQuantity (item: CartItem) { 
        const quantity = this.quantities.find(x => x.itemId === item.id) 
        return quantity ? quantity.value : item.quantity
    }
    async ProceedToCheckout(){
        await this.$store.dispatch('cart/proceedToCheckout', {withShopping :this.withShopping , selected :this.selected })
    }
    async updateQuantitie (id :number , quantity :number) { 
        await this.$store.dispatch('cart/updateQuantitie', {id , quantity })
    } 
    async updateWithShop () { 
        await this.$store.dispatch('cart/updateWithShop', this.withShopping)
    } 
    async updateIsFacture () {
        if(this.cart.isFacture == this.checked) return
        await this.$store.dispatch('cart/updateIsFacture', this.checked)
    }
 
}

</script>
