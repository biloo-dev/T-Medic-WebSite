<template>
    <ul :class="`mobile-links mobile-links--level--${level}`">
        <template v-for="(link, index) in links">
            <Collapse
                :key="index"
                v-slot:default="{ itemClasses, contentClasses, toggle }"
                item-open-class="mobile-links__item--open"
            >
                <li
                    v-if="link.type === 'link' || link.type === 'button'"
                    :class="[
                        'mobile-links__item',
                        itemClasses
                    ]"
                >
                    <div class="mobile-links__item-title">
                        <AppLink
                            v-if="link.type === 'link'"
                            :to="link.url"
                            class="mobile-links__item-link"
                            @click.native="onItemClick(link)"
                        >
                            <i v-if="link.icon" :class="link.icon" class="px-2"></i>
                            {{ link.title }}
                        </AppLink>

                        <button
                            v-if="link.type === 'button'"
                            type="button"
                            class="mobile-links__item-link"
                            @click="toggle; onItemClick(link)"
                        >
                            <i v-if="link.icon" :class="link.icon"></i>
                            
                            {{ link.title }}
                            <img v-if="link.img" class="mobile-img" :src="$url.img(link.img)" />
                             <CircleRegular v-if="link.locale && link.locale != $i18n.locale" class="mobile-chack-lang  text--success" />
                             <CheckCircleRegular v-else-if="link.locale && link.locale == $i18n.locale" class="mobile-un-chack-lang " />
                        </button>

                        <button
                            v-if="link.children && link.children.length > 0"
                            class="mobile-links__item-toggle"
                            type="button"
                            @click="toggle"
                        >
                            <ArrowRoundedDown12x7Svg class="mobile-links__item-arrow" />
                        </button>
                    </div>
                    <div
                        v-if="link.children && link.children.length > 0"
                        :class="['mobile-links__item-sub-links', contentClasses]"
                    >
                        <div>
                            <MobileLinks :class="$i18n.locale =='ar' ? 'mr-5' : 'ml-5'" :links="link.children"  :level="level + 1" @itemClick="onItemClick" /> 
                        </div>
                    </div>
                </li>
            </Collapse>
            <li v-if="link.type === 'divider'" :key="index" class="mobile-links__divider" />
        </template>
    </ul>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import { IMobileMenuLink } from '~/interfaces/menus/mobile-menu'
import AppLink from '~/components/shared/app-link.vue'
import Collapse from '~/components/shared/collapse.vue'
import ArrowRoundedDown12x7Svg from '~/svg/arrow-rounded-down-12x7.svg'
import CircleRegular from '~/svg/circle-regular.svg'
import CheckCircleRegular from '~/svg/check-circle-regular.svg'

@Component({
    name: 'MobileLinks',
    components: { AppLink, Collapse, ArrowRoundedDown12x7Svg,CircleRegular, CheckCircleRegular,}

})
export default class MobileLinks extends Vue {
    @Prop({ type: Number, default: () => 0 }) readonly level!: number
    @Prop({ type: Array, default: () => [] }) readonly links!: IMobileMenuLink[]

    onItemClick (item: IMobileMenuLink) {
        this.$emit('itemClick', item)
    }
}

</script>
