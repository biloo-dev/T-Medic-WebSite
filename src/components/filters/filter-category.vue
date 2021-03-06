<template>
    <div class="filter-categories">
        <ul class="filter-categories__list"> 
            <li
                v-if="filter.value"
                :key="'[shop]'"
                class="filter-categories__item filter-categories__item--parent"
            >
                <ArrowRoundedLeft6x9Svg class="filter-categories__arrow" />
                <AppLink :to="$url.catalog()" :class="$url.currentSlug($route.params, filter)" > 
                     {{ $t('shop.productsView.AllProducts') }}
                </AppLink>
            </li>

            <template v-for="category in filter.items">
                <li v-if="!category.parent_id" :key="category.id"
                    class="filter-categories__item filter-categories__item--parent"
                >
                    <ArrowRoundedLeft6x9Svg class="filter-categories__arrow" />
                    <AppLink :to="$url.category(category)"  :class="$url.currentSlug($route.params, category)" >
                        {{ category['name_'+$i18n.locale] }}
                    </AppLink>
                </li>
                <li v-else
                    :key="category.id"
                    :class="[
                        'filter-categories__item',
                        {'filter-categories__item--current': filter.value === category.slug}
                    ]"
                > 
                    <AppLink :to="$url.category(category)"  :class="$url.currentSlug($route.params, category)" >
                       {{ category['name_'+$i18n.locale] }}
                    </AppLink>
                </li>
                <li
                    v-for="child in category.children"
                    :key="child.id"
                    class="filter-categories__item filter-categories__item--child"
                >
                    <AppLink :to="$url.category(child)"  :class="$url.currentSlug($route.params, child)">
                         {{ child['name_'+$i18n.locale] }}
                    </AppLink>
                </li>
            </template>
        </ul>
    </div>
</template>

<script lang="ts"> 
import { Getter } from 'vuex-class' 
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { ICategoryFilter } from '~/interfaces/filter'
import { getCategoryParents } from '~/services/helpers'
import AppLink from '~/components/shared/app-link.vue'
import ArrowRoundedLeft6x9Svg from '~/svg/arrow-rounded-left-6x9.svg'

@Component({
    components: { AppLink, ArrowRoundedLeft6x9Svg }
})
export default class FilterCategory extends Vue {
    @Prop({ type: Object, required: true }) readonly filter!: ICategoryFilter
    
    @Getter('shop/query') query!: string
    // getCategoryParents = getCategoryParents
    @Watch('query')
    onQueryChange (query: string) {
       console.log('query => query =>query =>',query)
    } 
}

</script>
 
