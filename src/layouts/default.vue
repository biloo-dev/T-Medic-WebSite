<template>
    <Layout>
        <nuxt /> 
    </Layout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import Layout from '~/components/layout.vue'
import { tsParticles } from "tsparticles";
@Component({
    components: { Layout },
    async asyncData ({ store, query }): Promise<object | void> { 
        console.log('hyhyhyhyh',query)
    }
})
export default class DefaultLayout extends Vue { 
    // mounted(){
    //     tsParticles.loadJSON(
    //     "tsparticles",
    //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/XjRprX_particles.json?"); 
    // }
}

</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>