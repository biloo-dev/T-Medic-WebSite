<template>
    <div class="site-footer__widget footer-newsletter">
        <h5 class="footer-newsletter__title">
            {{ $t('profile.newsletter')}}
        </h5>
        <div class="footer-newsletter__text">
             {{ $t('profile.newsletterText')}}
        </div>

        <form action="" class="footer-newsletter__form">
            <label class="sr-only" for="footer-newsletter-address">{{ $t('profile.EmailAddress') }}</label>
            <input
                id="footer-newsletter-address"
                v-model="email"
                class="footer-newsletter__form-input form-control"
                type="text"
                :placeholder="$t('profile.EmailAddress')+'...'"
            >

            <button class="footer-newsletter__form-button btn btn-primary" @click.prevent="sendNewsLetter">
                Subscribe
            </button>
        </form>

        <div class="footer-newsletter__text footer-newsletter__text--social">
            Follow us on social networks
        </div>

        <social-links class="footer-newsletter__social-links" shape="circle" />
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import SocialLinks from '~/components/shared/social-links.vue'
import shopApi from '~/api/shop'
//newsletter
@Component({
    components: { SocialLinks }
})
export default class FooterNewsletter extends Vue {
    email : string = ""
    async sendNewsLetter(){
        if(this.email == "") return 
        let isSend = await shopApi.newsletter(this.email)
        if(isSend) this.email = ""
    }
}

</script>
