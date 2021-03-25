<template>
    <!-- .block-slideshow -->
    <div
        :class="[
            'block-slideshow',
            `block-slideshow--layout--${layout}`,
            'block'
        ]"
    >
        <div class="container">
            <div class="row">
                <div v-if="layout === 'with-departments'" class="col-lg-3 d-none d-lg-block" />
                <div
                    :class="[
                        'col-12',
                        {'col-lg-9': layout === 'with-departments'}
                    ]"
                >
                    <div class="block-slideshow__body">
                        <Carousel>
                            <CarouselSlide v-for="(slide, index) in slides" :key="index">
                                <AppLink class="block-slideshow__slide" to="/">
                                    <div
                                        class="block-slideshow__slide-image block-slideshow__slide-image--desktop"
                                        :style="{ backgroundImage: getDesktopImage(slide) }"
                                    />
                                    <div
                                        class="block-slideshow__slide-image block-slideshow__slide-image--mobile"
                                        :style="{ backgroundImage: getMobileImage(slide) }"
                                    />
                                    <div class="block-slideshow__slide-content">
                                        <!-- eslint-disable-next-line vue/no-v-html -->
                                        <div class="block-slideshow__slide-title" v-html="slide['title_'+$i18n.locale]" />
                                        <!-- eslint-disable-next-line vue/no-v-html -->
                                        <div class="block-slideshow__slide-text" v-html="slide['text_'+$i18n.locale]" />
                                        <div class="block-slideshow__slide-button">
                                            <span class="btn btn-primary btn-lg">{{ $t('btns.ShopNow') }}</span>
                                        </div>
                                    </div>
                                </AppLink>
                            </CarouselSlide>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- .block-slideshow / end -->
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import { Getter,State,Action } from 'vuex-class' 
import { ILanguage } from '~/interfaces/language'
import departments from '~/services/departments'
import Carousel from '~/components/shared/carousel.vue'
import CarouselSlide from '~/components/shared/carousel-slide.vue'
import AppLink from '~/components/shared/app-link.vue' 
import apiConfig from '~/api/config'
import { ICarousel } from '~/interfaces/menus/config'  

type BlockSlideshowLayout = 'full' | 'with-departments';
 
@Component({
    components: { CarouselSlide, Carousel, AppLink },
    
})
export default class BlockSlideshow extends Vue {
    @Prop({ type: String, default: () => 'full' }) readonly layout!: BlockSlideshowLayout 
    @Prop({ type: Array, default: () => []  }) readonly slides!: ICarousel[] 
    @Getter('locale/language') language!: ILanguage  
    
    // slides:ICarousel[] = []

    get direction () { 
        return this.language.direction
    } 
    async created(){   
    }
    mounted () { 
        departments.set(this.$el) // this code for open shop by categories 
    }

    beforeDestroy () {
        departments.set(null)
    }

    getDesktopImage (slide: ICarousel): string {
        const url = (this.layout === 'with-departments' ? slide.imageClassic : slide.imageFull)[this.direction]

        return `url(${this.$url.img(url)})`
    }

    getMobileImage (slide: ICarousel): string {
        return `url(${this.$url.img(slide.imageMobile[this.direction])})`
    }
}

</script>
