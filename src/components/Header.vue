<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="navbar-collapse">
        <ul class="nav navbar-nav">
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
            <a class="nav-link">Market</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions(['randomizeStocks', 'finishDay']),
      endDay() {
        this.randomizeStocks();
        this.finishDay();
      }
    },
  }
</script>

<style lang="scss" scoped>
  .navbar {
    margin-top: 20px;
  }
</style>