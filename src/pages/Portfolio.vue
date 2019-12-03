<template>
  <div class="row">
    <app-portfolio-item
      v-for="stock in stockPortfolio"
      :key="stock.id"
      :stock="stock"
    ></app-portfolio-item>
  </div>
</template>

<script>
  import PortfolioItem from '../components/PortfolioItem';

  export default {
    components: {
      appPortfolioItem: PortfolioItem,
    },
    computed: {
      stockPortfolio() {
        return this.$store.getters.stockPortfolio;
      }
    }
  }
</script>