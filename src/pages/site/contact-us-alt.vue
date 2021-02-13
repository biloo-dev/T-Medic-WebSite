<template>
    <div>
        <PageHeader
            title="Contact Us"
            :breadcrumb="[
                { title: 'Home', url: '' },
                { title: 'Contact Us', url: '' },
            ]"
        />

        <div class="block">
            <div class="container">
                <div class="card mb-0 contact-us">
                    <div class="contact-us__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.6903456616546!2d1.3182262145952606!3d35.363330354949476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1286d1b63d12da83%3A0xbadc1ed2691abd24!2zaMO0cGl0YWwgaMOpbW9kaWFseXNl!5e0!3m2!1sfr!2sdz!4v1613077445060!5m2!1sfr!2sdz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div class="card-body">
                        <div class="contact-us__container">
                            <div class="row">
                                <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <h4 class="contact-us__header card-title">
                                        Our Address
                                    </h4>

                                    <div class="contact-us__address">
                                        <p>
                                            715 Fake Ave, Apt. 34, New York, NY 10021 USA
                                            <br>
                                            Email: stroyka@example.com
                                            <br>
                                            Phone Number: +1 754 000-00-00
                                        </p>

                                        <p>
                                            <strong>Opening Hours</strong>
                                            <br>
                                            Monday to Friday: 8am-8pm
                                            <br>
                                            Saturday: 8am-6pm
                                            <br>
                                            Sunday: 10am-4pm
                                        </p>

                                        <p>
                                            <strong>Comment</strong>
                                            <br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Curabitur suscipit suscipit mi, non tempor
                                            nulla finibus eget. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-6">
                                    <h4 class="contact-us__header card-title">
                                        Leave us a Message
                                    </h4>

                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="form-name">Your Name</label>
                                                <input
                                                    id="form-name"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Your Name"
                                                >
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="form-email">Email</label>
                                                <input
                                                    id="form-email"
                                                    class="form-control"
                                                    type="email"
                                                    placeholder="Email Address"
                                                >
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="form-subject">Subject</label>
                                            <input
                                                id="form-subject"
                                                class="form-control"
                                                type="text"
                                                placeholder="Subject"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label for="form-message">Message</label>
                                            <textarea id="form-message" class="form-control" :rows="4" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Send Message
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

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'

@Component({
    components: { PageHeader },
    head () {
        return {
            title: 'Contact Us Alt'
        }
    }
})
export default class SitePageContactUsAlt extends Vue { }

</script>
