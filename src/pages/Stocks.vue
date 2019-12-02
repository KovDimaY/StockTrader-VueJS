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
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 110 },
          { id: 2, name: 'Apple', price: 250 },
          { id: 3, name: 'Google', price: 140 },
          { id: 4, name: 'Mercedes', price: 80 },
          { id: 5, name: 'Microsoft', price: 130 },
        ]
      }
    },
    components: {
      appStockItem: StockItem,
    }
  }
</script>