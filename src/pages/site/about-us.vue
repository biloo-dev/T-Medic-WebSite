<template>
    <div class="block about-us">
        <div class="about-us__image" :style="imageStyle" />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-10">
                    <div class="about-us__body">
                        <div class="about_logo">
                            <img :src="$url.img('/images/logo.png')" /> 
                        </div>
                        <h1 class="about-us__title">
                            Tiaret Medical Equipement
                        </h1>
                        <div class="about-us__text typography">
                            <h4 class="about-us__title">
                                L'histoire derrière notre marque internationale d'équipement medical
                            </h4>
                            <p>
                                La création de notre marque en 2015 à toujours eu pour but de 
                                combler un manque évident à l’échelle nationale dans le domaine de 
                                la commercialisation d’articles médicaux. Au cours des années, 
                                nous avons pu constater une demande toujours croissante et exigeante 
                                sur le marché que nous satisfaisons en offrant principalement des produits 
                                issus d’une fabrication conforme aux normes internationales en vigueur et 
                                moyennant un réseau de distribution solide couvrant la totalité du territoire national.
                            </p>
                        </div>
                        <div class="about-us__team">
                            <h4 class="about-us__title">
                                Une nouvelle stratégie, Vers le marché international !
                            </h4>
                            <p>
                                Après quelques années d’activité dans le domaine de la distribution local, Star Care s’est fixée l’objectif ambitieux 
                                de passer au stade international pour l'exportation d’équipements médico répondant aux normes international.
                            </p>
                                <img :src="$url.img('/images/worldwide-sourcing_STS.jpg')" width="100%"/>    
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { SwiperOptions } from 'swiper/types/swiper-options'
import AppLink from '~/components/shared/app-link.vue'
import Carousel from '~/components/shared/carousel.vue'
import CarouselSlide from '~/components/shared/carousel-slide.vue'

@Component({
    components: { AppLink, Carousel, CarouselSlide },
    head () {
        return {
            title: 'About Us'
        }
    }
})
export default class SitePageAboutUs extends Vue {
    imageStyle = {
        backgroundImage: `url("${this.$url.img('/images/aboutus.jpg')}")`
    }

    teammates = [
        {
            avatar: '/images/teammates/teammate-1.jpg',
            name: 'Michael Russo',
            position: 'Chief Executive Officer'
        },
        {
            avatar: '/images/teammates/teammate-2.jpg',
            name: 'Katherine Miller',
            position: 'Marketing Officer'
        },
        {
            avatar: '/images/teammates/teammate-3.jpg',
            name: 'Anthony Harris',
            position: 'Finance Director'
        }
    ]

    carouselOptions: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 32 },
            380: { slidesPerView: 2, spaceBetween: 24 }
        }
    }
}

</script>
