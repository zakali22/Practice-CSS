<template>
  <div class="home">
    <header class="home__banner">
      <router-link to="/" class="home__banner--logo">
        <img src="../assets/img/logo-white.png"/>
      </router-link>
      <div class="home__banner--text">
        <h1>Outdoors</h1>
        <p>is where life happens</p>
        <button>Discover our tours</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
