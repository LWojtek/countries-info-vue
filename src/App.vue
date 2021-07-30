<template>
  <body id="app" :class="[{'dark-theme' : darkmode}, {'white' : this.$route.path !== '/'}]"  >
    <VHeader />
    <router-view/>
    <VLoader v-if="this.$store.state.loading"/>
    <VNoResults v-if="this.$store.state.filteredCountries.length < 1 && this.$store.state.loading === false"/>
  </body>
</template>

<script>

import { mapState } from 'vuex';
import VLoader from '@/components/VLoader.vue';
import VNoResults from '@/components/VNoResults.vue';
import VHeader from '@/components/VHeader.vue';

export default {
  data(){
    return {
      darkmode: false,
      white: true
    }
  },
  components: {
    VLoader,
    VNoResults,
    VHeader
  },
  computed: {
    ...mapState([
      'countries'
    ])
  },
  created () {
    this.bus.$on('darkmode', (on) => {
      this.darkmode = on;
    });
      this.darkmode = JSON.parse(localStorage.getItem('darkmode'))
      this.$store.dispatch('fetchCountries')
  },  
  
  watch: {
    darkmode(newVal) {
      localStorage.setItem("darkmode", JSON.stringify(this.darkmode))      
      this.bus.$emit('darkmode', newVal);
      }, 
    } 

}


</script>

<style lang="scss">

@import '@/assets/scss/global.scss';
@import '@/assets/scss/variables.scss';


body {
  background-color: $very-light-grey;
  height: 100vh;
  overflow-x: hidden; 

  &.white {
    background: #fff;
  }

  &.dark-theme {
      background-color: $very-dark-blue;
  }

  @media (prefers-color-scheme: dark) {
      background-color: $very-dark-blue;
  }
}


</style>
