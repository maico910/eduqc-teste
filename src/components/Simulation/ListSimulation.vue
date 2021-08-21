<template>
  <div class="simulations">
    <Simulation
      v-for="simulation in simulations"
      :key="simulation.simulation_id"
      class="simulation"
      :simulation="simulation"
    />
  </div>
</template>

<script>
import Simulation from './Simulation.vue'
export default {
  name: "ListSimulations",
  components: { Simulation },
  props: {
    simulations: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss">
.simulations > .simulation:not(:last-child) {
  margin-bottom: 16px;
}
</style>
