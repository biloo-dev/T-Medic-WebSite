<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import { VNode, CreateElement } from 'vue'

@Component
export default class AppLink extends Vue {
    @Prop({ type: String, default: () => '' }) readonly to!: string
    @Prop({ type: Boolean, default: () => false }) readonly disabled!: boolean

    render (createElement: CreateElement): VNode {
        if (this.$url.isExternal(this.to)) {
            return createElement('a', {
                attrs: {
                    href: this.to,
                    disabled: this.disabled
                }
            }, this.$slots.default)
        } else {
            return createElement(Vue.component('NuxtLink'), {
                props: {
                    to: this.$url.lang(this.to)
                }
            }, this.$slots.default)
        }
    }
}

</script>
