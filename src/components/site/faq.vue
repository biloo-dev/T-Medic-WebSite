<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 typography" v-for="(ask,i) in questions" :key="i">
      <b-card-header header-tag="header" class="p-1"  role="tab"> 
        <b-button block v-b-toggle :href="'#'+slug+'-'+i" :class="$i18n.locale == 'ar' ? 'text-right' : 'text-left'" @click.prevent variant="info">
          <i class="fas fa-question-circle" :class="$i18n.locale == 'ar' ? 'ml-2' : 'mr-2'" style="font-size: 18px;"></i> 
          {{ ask['ask_'+$i18n.locale] }} 
        </b-button> 
      </b-card-header>
      <b-collapse :id="slug+'-'+i" visible accordion="my-accordion" role="tabpanel">
        <b-card-body> 
          <b-card-text>   
            <p> {{ ask['answer_'+$i18n.locale] }} </p>  
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> 
  </div>
</template>

<script lang="ts">

import { Vue, Component,Prop } from 'vue-property-decorator' 
import { Getter } from 'vuex-class' 
import { ISettings } from '~/interfaces/Settings' 
interface IFaq {
  ask_fr? : string;
  ask_ar? : string;
  answer_fr? : string;
  answer_ar? : string;
}
@Component 
export default class SitePageFaq extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly questions!: IFaq[] 
  @Prop({ type: String, default: () => "" }) readonly slug! : String
 }

</script>