<template>
    <div class="spec">
        <h3 class="spec__header">
            {{ $t('shop.product.Specification')}}
        </h3>
        <div v-for="(section, index) in product.attributes" :key="index" class="spec__section">
            <h4 class="spec__section-title" v-if="!check.includes(section.specification_id)" > 
                {{ section.specifications['name_' + $i18n.locale] }}
                {{ check.push(section.specification_id) }}
            </h4> 
            <div class="spec__row">
                <div class="spec__name">
                    {{ section['name_' + $i18n.locale] }}
                </div>
                <div class="spec__value" v-for="(attribute, i) in typeof section.pivot.values == 'string' ? JSON.parse(section.pivot.values) : []" :key="i" >
                        {{ attribute['name_' + $i18n.locale]  + ' ' }}
                   <template v-if="JSON.parse(section.pivot.values).length != (i + 1)">,</template> 
                </div>
            </div>
        </div>
      
        <!-- <div v-for="(section, index) in sections" :key="index" class="spec__section">
            <h4 class="spec__section-title">
                {{ section.name }}
            </h4>
            <div v-for="(attribute, attributeIndex) in section.attributes" :key="attributeIndex" class="spec__row">
                <div class="spec__name">
                    {{ attribute.name }}
                </div>
                <div class="spec__value">
                    {{ attribute.value }}
                </div>
            </div>
        </div> -->
        <div class="spec__disclaimer">
           {{ product['note_' + $i18n.locale] }}
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component ,Prop} from 'vue-property-decorator' 
import { IProduct } from '~/interfaces/product'
@Component
export default class ProductTabSpecification extends Vue {
  @Prop({ type: Object, required: true }) product!: IProduct 
  check = []
  created(){
      
  }
}

</script>
