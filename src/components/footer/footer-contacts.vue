<template>
    <div class="site-footer__widget footer-contacts">
        <h5 class="footer-contacts__title">
            Contact Us
        </h5>

        <div class="footer-contacts__text">
           Ecoute, confiance, coopération, expertise et innovation sont nos maîtres mots.
            Notre objectif est de vous accompagner au quotidien, dans toutes les dimensions de votre exercice, que ce soit au moment de l’installation de votre cabinet médical ou dans votre vie quotidienne .
        </div>

        <ul class="footer-contacts__contacts">
            <li>
                <i class="footer-contacts__icon fas fa-globe-americas" />
                {{ theme.contacts.address }}
            </li>
            <li>
                <i class="footer-contacts__icon far fa-envelope" />
                {{ theme.contacts.email }}
            </li>
            <li>
                <i class="footer-contacts__icon fas fa-mobile-alt" />
                {{ theme.contacts.phone }}, {{ theme.contacts.phone }}
            </li>
            <li>
                <i class="footer-contacts__icon far fa-clock" />
                Mon-Sat 10:00pm - 7:00pm
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import theme from '~/data/theme'

@Component
export default class FooterContacts extends Vue {
    theme = theme
}

</script>
