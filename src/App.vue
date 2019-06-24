<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  beforeEnter(to, from, next){
    this.$router.push({name: 'home'})
  }
}
</script>
