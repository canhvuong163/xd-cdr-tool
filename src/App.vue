<template>
  <Start v-if="statusMath === 'default'" @onStart="start"/>
  <OverView v-else-if="statusMath === 'start'" @onBegin="begin"/>
  <Step1 v-else-if="statusMath === 'begin'" 
    @onBack="start"
    @onMemorize="memorize"
    @onKnowledge = "knowledge"
    @onApplication = "application"
    @onAnalysis = "analysis"
    @onEvaluate = "evaluate"
    @onCreation = "creation"
  />
  <Step2Memorize v-else-if="statusMath === 'memorize'"
    @onBack="begin"
    @onNext="next"
    @dataBack="dataBack"
  />
  <Step2Knowledge v-else-if="statusMath === 'knowledge'"
    @onBack="begin"
    @onNext="next"
    @dataBack="dataBack"
  />
  <Step2Application v-else-if="statusMath === 'application'"
    @onBack="begin"
    @onNext="next"
    @dataBack="dataBack"
  />
  <Step2Analysis v-else-if="statusMath === 'analysis'"
    @onBack="begin"
    @onNext="next"
    @dataBack="dataBack"
  />
  <Step2Evaluate v-else-if="statusMath === 'evaluate'"
    @onBack="begin"
    @onNext="next"
    @dataBack="dataBack"
  />
  <Step2Creation v-else-if="statusMath === 'creation'"
    @onBack="begin"
    @onNext="next"
    @dataBack="dataBack"
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
import Step2Analysis from './components/Step2Analysis.vue';
import Step2Application from './components/Step2Application.vue';
import Step2Evaluate from './components/Step2Evaluate.vue';
import Step2Knowledge from './components/Step2Knowledge.vue';
import Step2Memorize from './components/Step2Memorize.vue';
import Step2Creation from './components/Step2Creation.vue';
import Step3 from './components/Step3.vue';



export default {
  name: 'App',
  components: {
    Start,
    OverView,
    Step1,
    Step2Memorize,
    Step3,
    Final,
    Step2Knowledge,
    Step2Application,
    Step2Analysis,
    Step2Evaluate,
    Step2Creation
},

  data() {
    return {
      statusMath: "default",
      describe: this.describe,
      message: this.message,
      databack: this.databack
    }
  },

  methods: {

    dlback(data){
      if(data=="memorize")
        this.statusMath="memorize"
      else if(data=="knowledge")
        this.statusMath="knowledge"
      else if(data=="evaluate")
        this.statusMath="evaluate"
      else if(data=="creation")
        this.statusMath="creation"
      else if(data=="application")
        this.statusMath="application"
      else
        this.statusMath="analysis"
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

    memorize() {
      this.statusMath = "memorize"
    },

    knowledge() {
      this.statusMath = "knowledge"
    },

    application() {
      this.statusMath = "application"
    },

    analysis() {
      this.statusMath = "analysis"
    },

    evaluate() {
      this.statusMath = "evaluate"
    },

    creation() {
      this.statusMath = "creation"
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
