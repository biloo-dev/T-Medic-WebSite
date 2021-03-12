import createPersistedState from 'vuex-persistedstate'
import { Plugin } from '@nuxt/types'

const plugin: Plugin = ({ store }) => {
    createPersistedState({
        key: 't-medic',
        paths: [
            'currency',
            'cart',
            'wishlist',
            'auth',
            'compare'
        ]
    })(store)
}

export default plugin
