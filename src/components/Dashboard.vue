<template>
  <div class="resources-list">
    <item-card
      resource="gold"
    />
    <item-card
      resource="silver"
    />
    <item-card
      resource="copper"
    />
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
  components: { ItemCard },
  name: 'Dashboard'
}
</script>

<style scoped>
.resources-list {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3 ,1fr)
}
</style>
