<template>
  <div class="app-layout">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <router-link class="uk-navbar-item uk-logo" to="/">
          Logo
        </router-link>
      </div>
      <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>