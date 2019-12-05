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
          <li
            class="dropdown"
            :class="{ open: isDropdownOpen }"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Progress
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="handleImportProgress">Import Progress</a></li>
              <li><a href="#" @click="handleExportProgress">Export Progress</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false,
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions([
        'randomizeStocks',
        'importProgress',
      ]),
      endDay() {
        this.randomizeStocks();
      },
      handleImportProgress() {
        this.importProgress();
      },
      handleExportProgress() {
        const progress = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
        };

        this.$http.put('progress.json', progress);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .navbar {
    margin-top: 20px;
  }
</style>