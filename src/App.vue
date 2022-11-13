<template>
  <Start v-if="statusMath === 'default'" @onStart="start"/>
  <OverView v-else-if="statusMath === 'start'" @onBegin="begin"/>
  <Step1 v-else-if="statusMath === 'begin'" 
    @onBack="start"
    @onGhinho="memorize"
    @mien="mien"
  />
  <Step2 v-else-if="statusMath === 'memorize'"
    @onBack="begin"
    @onNext="next"
    @dataBack="dataBack"
    :dataSend="dataSend"
    :miendl="miendl"
  />
  <Step3 v-else-if="statusMath === 'next'"
    @onBack="dlback"
    @onFinal="final"
    :describe="describe"
    :databack="databack"
  />

  <Final v-else-if="statusMath === 'final'"
    :message="message"
    @onBack="begin"
  />

</template>

<script>
import Final from './components/Final.vue';
import OverView from './components/OverView.vue';
import Start from './components/Start.vue';
import Step1 from './components/Step1.vue';
import Step2 from './components/Step2.vue';
import Step3 from './components/Step3.vue';



export default {
  name: 'App',
  components: {
    Start,
    OverView,
    Step1,
    Step2,
    Step3,
    Final
},

  data() {
    return {
      statusMath: "default",
      describe: this.describe,
      message: this.message,
      databack: this.databack,
      dataSend: this.dataSend,
      miendl: this.miendl,
    }
  },

  methods: {

    dlback(data){
      if(data=="memorize")
        this.statusMath="memorize"
      // else if(data=="knowledge")
      //   this.statusMath="knowledge"
      // else if(data=="evaluate")
      //   this.statusMath="evaluate"
      // else if(data=="creation")
      //   this.statusMath="creation"
      // else if(data=="application")
      //   this.statusMath="application"
      // else
      //   this.statusMath="analysis"
    },

    dataBack(data) {
      this.databack = data
    },

    final(data) {
      this.statusMath = "final"
      this.message = data
    },

    next(data) {
      this.statusMath = "next"
      this.describe = data
    },

    memorize(data) {
      this.statusMath = "memorize"
      this.dataSend = data
      console.log(this.dataSend)
    },

    mien(data) {
      this.miendl = data
    },

    start() {
      this.statusMath = "start"
    },

    begin() {
      this.statusMath = "begin"
    },
  },
};
</script>
