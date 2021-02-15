<template>
  <div class="monitor">
      <progress-bar
        color="gold"
        label="Gold"
        :amount="getAmount('gold')"
      />
      <progress-bar
        color="silver"
        label="Silver"
        :amount="getAmount('silver')"
      />
      <progress-bar
        color="copper"
        label="Copper"
        :amount="getAmount('copper')"
      />
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
export default {
  components: { ProgressBar },
  methods: {
    getAmount(resource) {
      if (resource === 'gold') {
        return this.$store.getters.getGold
      } else if (resource === 'silver') {
        return this.$store.getters.getSilver
      } else if (resource === 'copper') {
        return this.$store.getters.getCopper
      }
    },
  }
}
</script>

<style scoped>
.monitor {
  width: 100%;
  height: 300px;
  border: 3px dashed black;
}

</style>
