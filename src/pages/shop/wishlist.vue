<template>
    <div>
        <PageHeader
            title="Wishlist"
            :breadcrumb="[
                { title: 'Home', url: '' },
                { title: 'Wishlist', url: '' },
            ]"
        />

        <client-only>
            <div v-if="!items.length" class="block block-empty">
                <div class="container">
                    <div class="block-empty__body">
                        <div class="block-empty__message">
                            {{ $t('wishlist.wishEmpty') }}
                        </div>
                        <div class="block-empty__actions">
                            <AppLink to="/" class="btn btn-primary btn-sm">
                               {{ $t('wishlist.Continue') }}
                            </AppLink>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="items.length" class="block">
                <div class="container">
                    <table class="wishlist">
                        <thead class="wishlist__head">
                            <tr class="wishlist__row">
                                <th class="wishlist__column wishlist__column--image">
                                    {{ $t('wishlist.Image') }}
                                </th>
                                <th class="wishlist__column wishlist__column--product">
                                    {{ $t('wishlist.Product') }}
                                </th>
                                <th class="wishlist__column wishlist__column--stock">
                                    {{ $t('wishlist.StockStatus') }}
                                </th>
                                <th class="wishlist__column wishlist__column--price">
                                    {{ $t('wishlist.Price') }}
                                </th>
                                <th class="wishlist__column wishlist__column--tocart" :aria-label="$t('btns.AddToCart')" />
                                <th class="wishlist__column wishlist__column--remove" aria-label="Remove" />
                            </tr>
                        </thead>
                        <tbody class="wishlist__body">
                            <tr v-for="item in items" :key="item.id" class="wishlist__row">
                                <td class="wishlist__column wishlist__column--image">
                                    <div v-if="item.images.length > 0" class="product-image">
                                        <AppLink :to="$url.product(item)" class="product-image__body">
                                            <!--suppress HtmlUnknownTarget -->
                                            <img class="product-image__img" :src="$url.img($url.parse(item.images))" alt="">
                                        </AppLink>
                                    </div>
                                </td>
                                <td class="wishlist__column wishlist__column--product">
                                    <AppLink :to="$url.product(item)" class="wishlist__product-name">
                                        {{ item.name }}
                                    </AppLink>
                                    <div class="wishlist__product-rating">
                                        <Rating :value="item.rating" />
                                        <div class="wishlist__product-rating-legend">
                                            {{ item.reviews }}  {{ $t('shop.productsView.Reviews') }}
                                        </div>
                                    </div>
                                </td>
                                <td class="wishlist__column wishlist__column--stock">
                                    <div class="badge badge-success">
                                        {{ $t('wishlist.InStock') }}
                                    </div>
                                </td>
                                <td class="wishlist__column wishlist__column--price">
                                    {{ $price(item.price) }}
                                </td>
                                <td class="wishlist__column wishlist__column--tocart">
                                    <AsyncAction
                                        v-slot:default="{ run, isLoading }"
                                        :action="() => $store.dispatch('cart/add', { product: item })"
                                    >
                                        <button v-b-tooltip.hover :title="$t('general.ToolTips.TooltipAddToCart')" 
                                            type="button"
                                            :class="[
                                                'btn btn-primary btn-sm',
                                                {'btn-loading': isLoading}
                                            ]"
                                            @click="run"
                                        >
                                            {{ $t('btns.AddToCart') }}
                                        </button>
                                    </AsyncAction>
                                </td>
                                <td class="wishlist__column wishlist__column--remove">
                                    <AsyncAction
                                        v-slot:default="{ run, isLoading }"
                                        :action="() => $store.dispatch('wishlist/remove', { productId: item.id })"
                                    >
                                        <button
                                        v-b-tooltip.hover :title="$t('general.ToolTips.TooltipRemoveWishlist')" 
                                            type="button"
                                            :class="[
                                                'btn btn-light btn-sm btn-svg-icon',
                                                {'btn-loading': isLoading}
                                            ]"
                                            aria-label="Remove"
                                            @click="run"
                                        >
                                            <Cross12Svg />
                                        </button>
                                    </AsyncAction>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { RootState } from '~/store'
import { IProduct } from '~/interfaces/product'
import PageHeader from '~/components/shared/page-header.vue'
import AppLink from '~/components/shared/app-link.vue'
import Rating from '~/components/shared/rating.vue'
import AsyncAction from '~/components/shared/async-action.vue'
import Cross12Svg from '~/svg/cross-12.svg'

@Component({
    components: { PageHeader, AppLink, Rating, AsyncAction, Cross12Svg },
    head () {
        return {
            title: 'Wish List'
        }
    }
})
export default class Page extends Vue {
    @State((state: RootState) => state.wishlist.items) items!: IProduct[]
}

</script>
