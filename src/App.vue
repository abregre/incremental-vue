<template>
  <div class="container">
    <h1 class="header">Dashboard</h1>
    <monitor />
    <h1 class="header">Controls</h1>
    <dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import Monitor from '@/components/Monitor.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
    Monitor,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
* {
  font-family: 'Ubuntu', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
