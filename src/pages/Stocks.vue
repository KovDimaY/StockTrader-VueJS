<template>
  <div class="row">
    <app-stock-item
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock-item>
  </div>
</template>

<script>
  import StockItem from '../components/StockItem';

  export default {
    components: {
      appStockItem: StockItem,
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>