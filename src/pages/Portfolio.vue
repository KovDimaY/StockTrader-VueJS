<template>
  <div v-if="portfolio.length" class="row">
    <app-portfolio-item
      v-for="stock in portfolio"
      :key="stock.id"
      :stock="stock"
    ></app-portfolio-item>
  </div>
  <div v-else class="row empty-view-container" >
    <div class="col-sm-12 text-center">
      <span class="icon glyphicon glyphicon-briefcase mb-medium" aria-hidden="true"></span>
      <p class="lead">
        You do not have any stocks in your portfolio yet!
      </p>
      <p class="lead mb-medium">
        Go to the market and buy some in order to earn a
        lot of money like the wolf of Wall Street!
      </p>
      <router-link :to="marketUrl" class="btn btn-primary btn-lg">
        Buy Stocks!
      </router-link>
    </div>
  </div>
</template>

<script>
  import PortfolioItem from '../components/PortfolioItem';
  import Config from '../config';

  export default {
    components: {
      appPortfolioItem: PortfolioItem,
    },
    data() {
      return {
        marketUrl: Config.routes.market,
      };
    },
    computed: {
      portfolio() {
        return this.$store.getters.stockPortfolio;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .empty-view-container {
    padding: 50px 25px;

    .icon {
      font-size: 100px;
      color: lightgray;
    }
  }

  .mb-medium {
    margin-bottom: 50px;
  }
</style>