<template>
    <div :class="`block block-features block-features--layout--${layout}`">
        <div class="container">
            <div class="block-features__list">
                <div class="block-features__item">
                    <div class="block-features__icon">
                        <FiFreeDelivery48Svg />
                    </div>
                    <div class="block-features__content">
                        <div class="block-features__title">
                            {{ $t('home.blocks.features_title_1') }} 
                        </div>
                        <div class="block-features__subtitle">
                            {{ $t('home.blocks.features_subtitle_1') }} 
                        </div>
                    </div>
                </div>
                <div class="block-features__divider" />
                <div class="block-features__item">
                    <div class="block-features__icon">
                        <Fi24Hours48Svg />
                    </div>
                    <div class="block-features__content">
                        <div class="block-features__title">
                            {{ $t('home.blocks.features_title_2') }}
                        </div>
                        <div class="block-features__subtitle">
                            {{ $t('home.blocks.features_subtitle_2') }}
                        </div>
                    </div>
                </div>
                <div class="block-features__divider" />
                <div class="block-features__item">
                    <div class="block-features__icon">
                        <FiPaymentSecurity48Svg />
                    </div>
                    <div class="block-features__content">
                        <div class="block-features__title">
                            {{ $t('home.blocks.features_title_3') }}
                        </div>
                        <div class="block-features__subtitle">
                            {{ $t('home.blocks.features_subtitle_3') }}
                        </div>
                    </div>
                </div>
                <div class="block-features__divider" />
                <div class="block-features__item">
                    <div class="block-features__icon">
                        <FiTag48Svg />
                    </div>
                    <div class="block-features__content">
                        <div class="block-features__title">
                            {{ $t('home.blocks.features_title_4') }}
                        </div>
                        <div class="block-features__subtitle">
                            {{ $t('home.blocks.features_subtitle_4') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import FiFreeDelivery48Svg from '~/svg/fi-free-delivery-48.svg'
import Fi24Hours48Svg from '~/svg/fi-24-hours-48.svg'
import FiPaymentSecurity48Svg from '~/svg/fi-payment-security-48.svg'
import FiTag48Svg from '~/svg/fi-tag-48.svg'

type BlockFeaturesLayout = 'classic' | 'boxed'

@Component({
    components: { FiFreeDelivery48Svg, Fi24Hours48Svg, FiPaymentSecurity48Svg, FiTag48Svg }
})
export default class BlockFeatures extends Vue {
    @Prop({ type: String, default: () => 'classic' }) layout!: BlockFeaturesLayout
}

</script>
