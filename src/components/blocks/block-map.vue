<template>
    <div class="block-map block">
        <div class="block-map__body">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.6903456616546!2d1.3182262145952606!3d35.363330354949476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1286d1b63d12da83%3A0xbadc1ed2691abd24!2zaMO0cGl0YWwgaMOpbW9kaWFseXNl!5e0!3m2!1sfr!2sdz!4v1613077445060!5m2!1sfr!2sdz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlockMap extends Vue { }

</script>
