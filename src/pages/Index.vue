<template>
  <q-page
    padding
    class="index-page flex justify-center"
  >
    <template v-if="loading">
      <q-circular-progress
        indeterminate
        size="50px"
        color="primary"
        class="q-ma-md"
      />
    </template>
    <template v-else>
      <ListSimulation :simulations="simulations" />
    </template>
  </q-page>
</template>

<script>
import ListSimulation from 'src/components/Simulation/ListSimulation.vue';

export default {
  name: "PageIndex",
  components: { ListSimulation },

  data() {
    return {
      simulations: [],
      loading: true
    }
  }
}
</script>
