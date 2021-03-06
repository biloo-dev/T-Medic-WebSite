<template>
    <div :class="`product product--layout--${layout}`">
        <div class="product__content">
            <ProductGallery :layout="layout" :images="JSON.parse(product.images)" />

            <div class="product__info">
                <div class="product__wishlist-compare">
                    <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('wishlist/add', { product })">
                        <button
                            type="button"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Wishlist"
                            :class="[
                                'btn btn-sm btn-light btn-svg-icon',
                                {'btn-loading': isLoading}
                            ]"
                            @click="run"
                        >
                            <Wishlist16Svg />
                        </button>
                    </AsyncAction>

                    <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('compare/add', { product })">
                        <button
                            type="button"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Compare"
                            :class="[
                                'btn btn-sm btn-light btn-svg-icon',
                                {'btn-loading': isLoading}
                            ]"
                            @click="run"
                        >
                            <Compare16Svg />
                        </button>
                    </AsyncAction>
                </div>
                <h1 class="product__name">
                    {{ product['name_' + $i18n.locale] }}
                </h1>
                <div class="product__rating">
                    <div class="product__rating-stars">
                        <Rating :value="product.rating" />
                    </div>
                    <div class="product__rating-legend">
                        <AppLink to="/">
                            {{ product.reviews }}  {{ $t('shop.productsView.Reviews') }}
                        </AppLink>
                        <span>/</span>
                        <AppLink to="/">
                            {{ $t('shop.product.WriteReview') }}
                        </AppLink>
                    </div>
                </div>
                <div class="product__description">
                    {{ product['description_'+$i18n.locale] }}
                </div>
                <ul class="product__features">
                    <li v-for="(attr,i) in product.attributes" :key="'attr' + i">
                        {{ attr['name_'+$i18n.locale] }} : {{ attr.pivot.values['name_'+$i18n.locale] }}
                    </li> 
                </ul>
                <ul class="product__meta">
                    <li class="product__meta-availability">
                        {{ $t('shop.compare.Availability') }}
                        <span class="text-success"> {{ $t('wishlist.InStock') }}</span>
                    </li>
                    <li>
                           {{ $t('shop.product.Brand') }}:
                        <AppLink to="/">
                            {{ product.brand['name_' + $i18n.locale] }}
                        </AppLink>
                    </li> 
                </ul>
            </div>

            <div class="product__sidebar">
                <div class="product__availability">
                    Availability:
                    <span class="text-success">In Stock</span>
                </div>

                <div class="product__prices">
                    <template v-if="product.compareAtPrice">
                        <span class="product__new-price">
                            {{ $price(product.price) }}
                        </span>
                        <span class="product__old-price">
                            {{ $price(product.compareAtPrice) }}
                        </span>
                    </template>
                    <template v-if="!product.compareAtPrice">
                        {{ $price(product.price) }}
                    </template>
                </div>

                <form class="product__options"> 
                    <div class="form-group product__option">
                        <div class="product__option-label">
                            Material
                        </div>
                        <div class="input-radio-label">
                            <div class="input-radio-label__list">
                                <label>
                                    <input type="radio" name="material">
                                    <span>Metal</span>
                                </label>
                                <label>
                                    <input type="radio" name="material">
                                    <span>Wood</span>
                                </label>
                                <label>
                                    <input type="radio" name="material" disabled>
                                    <span>Plastic</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group product__option">
                        <!-- suppress XmlInvalidId -->
                        <label for="product-quantity" class="product__option-label"> {{ $t('shop.product.Quantity') }} </label>
                        <div class="product__actions">
                            <div class="product__actions-item">
                                <InputNumber
                                    id="product-quantity"
                                    v-model="quantity"
                                    aria-label="Quantity"
                                    class="product__quantity"
                                    size="lg"
                                    :min="1"
                                />
                            </div>
                          <div class="product__actions-item product__actions-item--addtocart">
                                <AsyncAction v-slot:default="{ run, isLoading }" :action="addToCart">
                                    <button v-b-tooltip.hover :title="$t('general.ToolTips.TooltipAddToCart')"
                                        type="button"
                                        :class="[
                                            'btn btn-primary btn-lg',
                                            {'btn-loading': isLoading}
                                        ]"
                                        :disabled="!quantity"
                                        @click="run"
                                    >
                                        {{ $t('btns.AddToCart') }}
                                    </button>
                                </AsyncAction>
                            </div> 
                            <br/>
                            <div class="product__actions-item product__actions-item--wishlist">
                                <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('wishlist/add', { product })">
                                    <button v-b-tooltip.hover :title="$t('general.ToolTips.TooltipWishlist')"
                                        type="button" 
                                        :class="[
                                            'btn btn-secondary btn-svg-icon btn-lg',
                                            {'btn-loading': isLoading}
                                        ]"
                                        @click="run"
                                    >
                                        <Wishlist16Svg />
                                    </button>
                                </AsyncAction>
                            </div>
                            <div class="product__actions-item product__actions-item--compare">
                                <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('compare/add', { product })">
                                    <button
                                        type="button"
                                        v-b-tooltip.hover :title="$t('general.ToolTips.TooltipCompare')"
                                        :class="[
                                            'btn btn-secondary btn-svg-icon btn-lg',
                                            {'btn-loading': isLoading}
                                        ]"
                                        @click="run"
                                    >
                                        <Compare16Svg />
                                    </button>
                                </AsyncAction>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="product__footer">
                <div class="product__tags tags">
                    <div class="tags__list">

                        <AppLink :to="`/shop/catalog?filter_tags=${tags.slug}`" v-for="(tags,i) in product.tags" :key="'tag_'+i" >
                            {{ tags['name_'+$i18n.locale] }}
                        </AppLink> 
                    </div>
                </div>

                <!-- <div class="product__share-links share-links">
                    <ul class="share-links__list">
                        <li class="share-links__item share-links__item--type--like">
                            <AppLink to="/">
                                Like
                            </AppLink>
                        </li>
                        <li class="share-links__item share-links__item--type--tweet">
                            <AppLink to="/">
                                Tweet
                            </AppLink>
                        </li>
                        <li class="share-links__item share-links__item--type--pin">
                            <AppLink to="/">
                                Pin It
                            </AppLink>
                        </li>
                        <li class="share-links__item share-links__item--type--counter">
                            <AppLink to="/">
                                4K
                            </AppLink>
                        </li>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import { IProduct } from '~/interfaces/product'
import Rating from '~/components/shared/rating.vue'
import ProductGallery from '~/components/shared/product-gallery.vue'
import AppLink from '~/components/shared/app-link.vue'
import AsyncAction from '~/components/shared/async-action.vue'
import InputNumber from '~/components/shared/input-number.vue'
import Wishlist16Svg from '~/svg/wishlist-16.svg'
import Compare16Svg from '~/svg/compare-16.svg'

export type ProductLayout = 'standard' | 'sidebar' | 'columnar' | 'quickview';
 
@Component({ 
    components: { Rating, AppLink, ProductGallery, AsyncAction, Wishlist16Svg, Compare16Svg, InputNumber }
})
export default class Product extends Vue {
    @Prop({ type: String, required: true }) readonly layout!: ProductLayout
    @Prop({ type: Object, required: true }) product!: IProduct

    quantity: number | string = 1
    created(){
        if(this.product){
            this.product.attributes.filter((e,i) => this.product.attributes[i].pivot.values = e.pivot.values )   
        }
    }
    addToCart (): Promise<void> {
        if (typeof this.quantity === 'string' || this.quantity < 1) {
            return Promise.resolve()
        }

        return this.$store.dispatch('cart/add', { product: this.product, quantity: this.quantity })
    }
}

</script>
