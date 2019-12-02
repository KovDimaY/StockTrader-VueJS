<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <router-link
          to="/portfolio"
          class="nav-item"
          activeClass="active"
          tag="li"
        >
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link
          to="/stocks"
          class="nav-item"
          activeClass="active"
          tag="li"
        >
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    margin-top: 20px;
    border: solid lightgray 1px;
    border-radius: 4px;
  }
</style>