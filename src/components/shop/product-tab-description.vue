<template>
    <div class="typography">
        <h3>{{ $t('shop.product.ProductFullDescription') }}</h3>
        <div v-html="product['description_long_'+ $i18n.locale]">

        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component , Prop} from 'vue-property-decorator'
import { IProduct } from '~/interfaces/product'
@Component
export default class ProductTabDescription extends Vue { 
    @Prop({ type: Object, required: true }) product!: IProduct 
}

</script>
