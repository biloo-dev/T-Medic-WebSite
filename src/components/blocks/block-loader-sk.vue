<template>
    <div class="block-loader">
        <b-card>
            <b-skeleton animation="throb" width="85%"></b-skeleton>
            <b-skeleton animation="throb" width="55%"></b-skeleton>
            <b-skeleton animation="throb" width="70%"></b-skeleton>
        </b-card>
        <!-- <div class="block-loader__spinner" /> -->
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlockLoader extends Vue { }

</script>
