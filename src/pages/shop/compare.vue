<template>
    <div>
        <PageHeader
            :title="$t('header.Comparison')"
            :breadcrumb="[
                { title: $t('header.Home') , url: '/' },
                { title: $t('header.Comparison') , url: '' },
            ]"
        />

        <client-only>
            <div v-if="!items.length" class="block block-empty">
                <div class="container">
                    <div class="block-empty__body">
                        <div class="block-empty__message">
                             {{ $t('shop.compare.compareEmpty') }}
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
                    <div class="table-responsive">
                        <table class="compare-table">
                            <tbody>
                                <tr>
                                    <th> {{ $t('wishlist.Product') }} </th>
                                    <td v-for="product in items" :key="product.id">
                                        <AppLink :to="$url.product(product)" class="compare-table__product-link">
                                            <div
                                                v-if="product.images.length > 0"
                                                class="compare-table__product-image product-image"
                                            >
                                                <div class="product-image__body">
                                                    <!--suppress HtmlUnknownTarget -->
                                                    <img class="product-image__img" :src="$url.img($url.parse(product.images))" alt="">
                                                </div>
                                            </div>
                                            <div class="compare-table__product-name">
                                                {{ product['name_'+$i18n.locale] }}
                                            </div>
                                        </AppLink>
                                    </td>
                                </tr>
                                <tr>
                                    <th>{{ $t('shop.compare.Rating') }}</th>
                                    <td v-for="product in items" :key="product.id">
                                        <div class="compare-table__product-rating">
                                            <Rating :value="product.rating" />
                                        </div>
                                        <div class=" compare-table__product-rating-legend">
                                            {{ product.reviews }}  {{ $t('shop.productsView.Reviews') }}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th> {{ $t('shop.compare.Availability') }}</th>
                                    <td v-for="product in items" :key="product.id">
                                        <span
                                            v-if="product.availability === 'in-stock'"
                                            class="compare-table__product-badge badge badge-success"
                                        >
                                            {{ $t('wishlist.InStock') }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>{{ $t('general.Price') }} </th>
                                    <td v-for="product in items" :key="product.id">
                                        {{ $price(product.price) }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>{{ $t('btns.AddToCart') }}</th>
                                    <td v-for="product in items" :key="product.id">
                                        <AsyncAction
                                            v-slot:default="{ run, isLoading }"
                                            :action="() => $store.dispatch('cart/add', { product })"
                                        >
                                            <button v-b-tooltip.hover :title="$t('general.ToolTips.TooltipAddToCart')" 
                                                type="button"
                                                :class="[
                                                    'btn btn-primary',
                                                    {'btn-loading': isLoading}
                                                ]"
                                                @click="run"
                                            >
                                                {{ $t('btns.AddToCart') }}
                                            </button>
                                        </AsyncAction>
                                    </td>
                                </tr>
                                <tr v-for="(feature, index) in attributes" :key="index">
                                    <th>{{ feature['name_'+$i18n.locale] }}</th>
                                    <td v-for="product in items" :key="product.id">
                                        {{ feature.values[product.id] }}
                                    </td>
                                </tr>
                                <tr>
                                    <th aria-label="Remove" />
                                    <td v-for="product in items" :key="product.id">
                                        <AsyncAction
                                            v-slot:default="{ run, isLoading }"
                                            :action="() => $store.dispatch('compare/remove', { productId: product.id })"
                                        >
                                            <button v-b-tooltip.hover :title="$t('general.ToolTips.TooltipRemoveCompare')" 
                                                type="button"
                                                :class="[
                                                    'btn btn-secondary btn-sm',
                                                    {'btn-loading': isLoading}
                                                ]"
                                                @click="run"
                                            >
                                                {{ $t('general.Remove') }}
                                            </button>
                                        </AsyncAction>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { IProduct } from '~/interfaces/product'
import PageHeader from '~/components/shared/page-header.vue'
import AppLink from '~/components/shared/app-link.vue'
import Rating from '~/components/shared/rating.vue'
import AsyncAction from '~/components/shared/async-action.vue'

export type Attributes = Array<{
    name_ar: string | undefined;
    name_fr: string | undefined;
    slug: string;
    values: {[productId: number]: string};
}>

@Component({
    components: { PageHeader, AppLink, Rating, AsyncAction },
    head () {
        return {
            title: 'Compare Products Page '
        }
    }
})
export default class Page extends Vue {
    @Getter('compare/items') items!: IProduct[] 
    get attributes (): Attributes {
        const attributes: Attributes = [] 
        this.items.forEach(product => product.attributes.forEach((productAttribute) => {
            let attribute = attributes.find(x => x.slug === productAttribute.slug) 
            if (!attribute) {
                attribute = {
                    name_ar: productAttribute.name_ar,
                    name_fr: productAttribute.name_fr,
                    slug: productAttribute.slug,
                    values: {}
                }
                attributes.push(attribute)
            }
            
            attribute.values[product.id] = JSON.parse(productAttribute.pivot.values).map((x:any) => {
                let name = this.$url.getName(this.$i18n.locale,x)
                return name
            }).join(', ')
        }))

        return attributes
    }
}

</script>
