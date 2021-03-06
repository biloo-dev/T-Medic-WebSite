<template>
    <div>
        <PageHeader
            :title="Settings('frequently_asked_questions')['name_' + $i18n.locale]"
            :breadcrumb="[
                { title: $t('header.Home'), url: '/' },
                { title: Settings('frequently_asked_questions')['name_' + $i18n.locale], url: '' },
            ]"/> 
                     
        <div class="block faq">
            <div class="container">
                <div class="faq__section" v-for="item in JSON.parse(Settings('frequently_asked_questions').values)" :key="item.slug">
                    <div class="faq__section-title"> 
                        <h3>
                            <i class="fas fa-star" :class="$i18n.locale == 'ar' ? 'ml-2' : 'mr-2'" style="font-size: 18px;"></i> 
                            {{ item['title_' + $i18n.locale] }}<b-badge pill variant="light" style="padding: 0;position: relative;bottom: 10px;border-radius: 50%;" >({{ item.values.length }})</b-badge>
                        </h3> 
                    </div>
                    <!-- <div class="faq__section-body">  -->
                        <faq :questions="item.values" :slug="item.slug"/>  
                    <!-- </div> -->
                </div> 
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import faq from '~/components/site/faq.vue'
import { Getter } from 'vuex-class' 
import { ISettings } from '~/interfaces/Settings' 

@Component({
    components: { PageHeader,faq },
    async asyncData ({ store, query }): Promise<object | void> {
        await store.dispatch('settings/fetchSettings')
    },
    head () {
        return {
            title: this.Settings("frequently_asked_questions")['name_' + this.$i18n.locale]
        }
    }
})
export default class SitePageFaq extends Vue {

    @Getter('settings/getSettingBySlug') Settings! : (slug: string) => ISettings[]

    mounted(){
        console.log('this.Settings("frequently_asked_questions") =>>>>>>>>>',this.Settings("frequently_asked_questions"))
    }
 }

</script>
