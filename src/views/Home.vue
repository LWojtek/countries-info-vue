<template>
  <main>

      <VFilters />
      <VContent />
  </main>
</template>

<script>
// @ is an alias to /src


import VContent from '@/components/VContent.vue';
import VFilters from '@/components/VFilters.vue';

export default {
  components: {

    VContent,
    VFilters
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';


</style>
