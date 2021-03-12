<template>
    <div>
        <PageHeader
            :title="$t('header.ContactUs')"
            :breadcrumb="[
                { title: $t('header.Home'), url: '/' },
                { title: $t('header.ContactUs'), url: '' },
            ]" 
        />

        <div class="block">
            <div class="container">
                <div class="card mb-0 contact-us">
                    <div class="contact-us__map" v-html="Settings('location_iframe').values"> </div>
                    <div class="card-body">
                        <div class="contact-us__container">
                            <div class="row">
                                <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <h4 class="contact-us__header card-title">
                                        {{ $t('Contact_Us.OurAddress') }}
                                    </h4>

                                    <div class="contact-us__address">
                                        <p>
                                            {{ Settings('address')['name_'+$i18n.locale] }} : {{ JSON.parse(Settings('address').values)['name_'+$i18n.locale] }}
                                            <br>
                                            {{ Settings('email')['name_'+$i18n.locale] }}  : {{ Settings('email').values }}
                                            <br>
                                            {{ Settings('phone')['name_'+$i18n.locale] }}  :  
                                             <li v-for="(val,i) in JSON.parse(Settings('phone').values)" :key="i"> {{ val }} </li>
                                        </p> 
                                        <p>
                                            <strong>{{ Settings('opening_hours')['name_'+$i18n.locale] }}</strong>
                                            <br>
                                            <template v-for="(val,i) in JSON.parse(Settings('opening_hours').values)"> 
                                                <span  :key="i"> {{ val['name_'+$i18n.locale]  }}<br> </span>
                                            </template>
                                        </p>

                                        <p>
                                            <strong>{{ Settings('note')['name_'+$i18n.locale] }}</strong>
                                            <br>
                                            {{ JSON.parse(Settings('note').values)['name_'+$i18n.locale] }}
                                        </p>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-6">
                                    <h4 class="contact-us__header card-title">
                                        {{ $t('Contact_Us.LeaveUsMessage') }}
                                    </h4>

                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="form-name">{{ $t('Contact_Us.YourName') }}</label>
                                                <input
                                                    id="form-name"
                                                    class="form-control"
                                                    type="text"
                                                    :placeholder="$t('Contact_Us.YourName')"
                                                >
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="form-email">{{ $t('Contact_Us.Email') }}</label>
                                                <input
                                                    id="form-email"
                                                    class="form-control"
                                                    type="email"
                                                    :placeholder="$t('Contact_Us.Email')"
                                                >
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="form-subject">{{ $t('Contact_Us.Subject') }}</label>
                                            <input
                                                id="form-subject"
                                                class="form-control"
                                                type="text"
                                                :placeholder="$t('Contact_Us.Subject')"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label for="form-message">{{ $t('Contact_Us.Message') }}</label>
                                            <textarea id="form-message" class="form-control" :rows="4" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            {{ $t('Contact_Us.SendMessage') }}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class' 
import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import { ISettings } from '~/interfaces/Settings' 

@Component({
    components: { PageHeader },
    async asyncData ({ store, query }): Promise<object | void> {
        await store.dispatch('settings/fetchSettings')
    },
    head () {
        return {
            title: 'Contact Us Alt'
        }
    }
})
export default class SitePageContactUsAlt extends Vue {
    @Getter('settings/getSettingBySlug') Settings! : (slug: string) => ISettings[]

    mounted(){
        console.log('Settings =>>>>>>>>>',this.Settings("location_iframe"))
    }
 }

</script>
