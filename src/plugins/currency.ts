import Vue from 'vue'
import { Plugin } from '@nuxt/types'

function price (this: Vue, value: number): string {
    const symbol = this.$store.state.currency.current.symbol
     
    // if (this.$store.state.locale.current == 'ar') {
    //     return ` ${this.$t(symbol)} ${value.toFixed(2)}` 
    // }
    return `${value.toFixed(2)} ${this.$t(symbol)}`
}

declare module 'vue/types/vue' {
    interface Vue {
        $price: typeof price
    }
}

const plugin: Plugin = (_context, inject) => {
    inject('price', price)
}

export default plugin
