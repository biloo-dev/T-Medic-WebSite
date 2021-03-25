<template>
    <!-- .dropcart -->
    <client-only>
        <div
            :class="[
                'dropcart',
                `dropcart--style--${type}`,
                {'dropcart--open': isOpen}
            ]"
        >
            <div v-if="type === 'offcanvas'" class="dropcart__backdrop" @click="$store.commit('offcanvasCart/close')" />
            <div class="dropcart__body">
                <div v-if="type === 'offcanvas'" class="dropcart__header">
                    <div class="dropcart__title">
                        {{ $t('shop.cart.ShoppingCart')}}
                    </div>
                    <button class="dropcart__close" type="button" @click="$store.commit('offcanvasCart/close')">
                        <Cross12Svg />
                    </button>
                </div>

                <div class="dropcart__products-list">
                    <div v-for="item in cart.items" :key="item.id" class="dropcart__product">
                        <div class="product-image dropcart__product-image">
                            <AppLink :to="$url.product(item.product)" class="product-image__body">
                                <!--suppress HtmlUnknownTarget -->
                                <img class="product-image__img" :src="$url.img($url.parse(item.product.images))" alt="">
                            </AppLink>
                        </div>
                        <div class="dropcart__product-info">
                            <div class="dropcart__product-name">
                                <AppLink :to="$url.product(item.product)">
                                    {{ item.product['name_'+$i18n.locale] }}
                                </AppLink>
                            </div>
                            <ul v-if="item.options.length > 0" class="dropcart__product-options">
                                <li v-for="(option, index) in item.options" :key="index">
                                    {{ option.optionTitle }}: {{ option.valueTitle }}
                                </li>
                            </ul>
                            <div class="dropcart__product-meta" :class="$i18n.locale =='ar' ? 'float-left' : 'float-right'">
                                <span class="dropcart__product-quantity">({{ item.quantity }})</span> ×
                                <span class="dropcart__product-price">{{ $price(item.price) }}</span>
                            </div>
                        </div>

                        <AsyncAction
                            v-slot:default="{ run, isLoading }"
                            :action="() => $store.dispatch('cart/remove', { itemId: item.id })"
                        >
                            <button
                                type="button"
                                :class="[
                                    'dropcart__product-remove btn btn-light btn-sm btn-svg-icon',
                                    {'btn-loading': isLoading}
                                ]"
                                @click="run"
                            >
                                <Cross10Svg />
                            </button>
                        </AsyncAction>
                    </div>
                </div>
                 <b-card  v-if="cart.quantity" no-body class=" mx-3 mb-2 py-2"> 
                    <b-form-checkbox v-model="checked" @input="updateIsFacture()" name="check-button" switch>
                        <strong>{{ checked ? $t('profile.facteur') : $t('profile.order')  }}</strong>
                    </b-form-checkbox>
                </b-card>   
                <div class="dropcart__totals">
                    <table>
                        <tbody> 
                            <tr>
                                <th>{{ $t('profile.totalHt') }}</th>
                                <td>{{ $price(cart.totalHt) }}</td>
                            </tr>
                            <tr>
                                <th>{{ $t('profile.totalTva') }}</th>
                                <td>{{ $price(cart.totalTva) }}</td>
                            </tr>
                            <tr>
                                <th>{{ $t('profile.totalTtc') }}</th>
                                <td>{{ $price(cart.totalTtc) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="dropcart__buttons">
                    <AppLink :to="$url.cart()" class="btn btn-secondary">
                        {{ $t('shop.cart.ViewCart')}}
                    </AppLink>
                    <AppLink :to="$url.checkout()" class="btn btn-primary">
                        {{ $t('shop.cart.Checkout')}}
                    </AppLink>
                </div>
            </div>
        </div>
    </client-only>
    <!-- .dropcart / end -->
</template>

<script lang="ts">

import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { RootState } from '~/store'
import { Cart,CartItem, CartTotal } from '~/interfaces/cart'
import AppLink from '~/components/shared/app-link.vue'
import AsyncAction from '~/components/shared/async-action.vue'
import Cross10Svg from '~/svg/cross-10.svg'
import Cross12Svg from '~/svg/cross-12.svg' 
type Type = 'dropdown' | 'offcanvas'

@Component({
    components: { AppLink, Cross10Svg, Cross12Svg, AsyncAction }
})
export default class Dropcart extends Vue {
    @Prop({ type: String, default: () => 'dropdown' }) readonly type!: Type

    @State((state: RootState) => state.cart) cart!: Cart 
    @State((state: RootState) => state.offcanvasCart.isOpen) isOpen!: boolean

    bodyWidth = 0
    checked : boolean = false

    @Watch('isOpen') onIsOpenChange (newValue: boolean) {
        if (newValue) {
            this.open()
        } else {
            this.close()
        }
    }

    open (): void {
        this.hideScrollbar()
    }

    async updateIsFacture () {
        if(this.cart.isFacture == this.checked) return
        await this.$store.dispatch('cart/updateIsFacture', this.checked)
    }

    created(){
        this.checked = this.cart.isFacture
    }

    close (): void {
        this.showScrollbar()
    }

    hideScrollbar (): void {
        this.bodyWidth = document.body.clientWidth

        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = `${document.body.clientWidth - this.bodyWidth}px`
    }

    showScrollbar (): void {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
    }
}

</script>
