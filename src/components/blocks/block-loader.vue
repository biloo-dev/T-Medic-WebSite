<template>
    <div class="block-loader" :style="'min-height:'+minHeight+'px'">
        <div class="block-loader__spinner" />
    </div>
</template>

<script lang="ts">

import { Vue, Component,Prop } from 'vue-property-decorator'
//
@Component
export default class BlockLoader extends Vue { 
     @Prop({ type: Number, default: () => 820 }) readonly minHeight!: Number
}

</script>
