<template>
  <div class="cards-wrapper">
    <div class="card-container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Profile Data</h3>
        </div>
        <div class="panel-body text-center">
          <img src="../assets/user_avatar.png" alt="avatar" class="img-rounded user-avatar">
          <h2>Jordan Belfort<br/><small>Stratton Oakmont</small></h2>
          <p>The Bronx, New York City</p>
          <p class="text-muted">July 9, 1962</p>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Progress Data</h3>
        </div>
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Initial capital:</strong> {{ 10000 | currency }}
            </li>
            <li class="list-group-item">
              <strong>Current funds:</strong> {{ 5000 | currency }}
              <span class="label label-danger">
                <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> 50%
              </span>
            </li>
            <li class="list-group-item">
              <strong>Days trading:</strong> {{ daysTrading }}
            </li>
          </ul>
          <div class="text-center">
            <h4 class="title-margin">Save your progress:</h4>
          </div>
          <div class="row text-center">
            <div class="col-xs-6">
              <button type="button" class="btn btn-primary">Save</button>
              <button type="button" class="btn btn-warning">Reset</button>
            </div>
            <div class="col-xs-6">
              <button type="button" class="btn btn-primary">Export</button>
              <button type="button" class="btn btn-warning">Import</button>
            </div>
          </div>
          <div class="text-center">
            <h4 class="title-margin">Your portfolio:</h4>
            <div v-if="portfolio.length" class="portfolio-wrapper">
              <div
                v-for="stock in portfolio"
                :key="stock.id"
                class="stock-container"
              >
                <img
                  :src="getImageUrl(stock.image)"
                  alt="logo"
                  :title="stock.name"
                  class="img-rounded stock-image"
                >
              </div>
            </div>
            <div v-else>
              <span class="glyphicon glyphicon-briefcase mb-medium" aria-hidden="true"></span>
              <p>You do not have any stocks yet.</p>
              <router-link :to="marketUrl" class="btn btn-success buy-stocks-button">
                Buy Stocks!
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Config from '../config';

  export default {
    data() {
      return {
        daysTrading: 200,
        marketUrl: Config.routes.market,
      };
    },
    computed: {
      portfolio() {
        return this.$store.getters.stockPortfolio;
      }
    },
    methods: {
      getImageUrl(filename) {
        return require(`../assets/stocks/${filename}`);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .cards-wrapper {
    display: flex;
    flex-direction: column;
    margin: 30px -15px 0;

    .card-container {
      margin: 0 15px;

      .panel {
        height: 100%;
      }
    }

    .btn {
      display: block;
      width: 100%;
      margin: 5px auto;
      max-width: 150px;
    }

    .user-avatar {
      display: block;
      margin: auto;
      width: 100%;
      max-width: 300px;
    }

    .stock-image {
      width: 100%;
      max-width: 80px;
      min-width: 80px;
    }

    .portfolio-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .stock-container {
        margin: 0 15px 15px;
      }
    }

    .glyphicon-briefcase {
      font-size: 50px;
      color: lightgray;
    }

    .buy-stocks-button {
      margin-top: 15px;
    }
  }
  .title-margin {
    margin: 30px 0 20px;
  }

  @media (min-width: 768px) {
    .cards-wrapper {
      flex-direction: row;

      .card-container {
        width: calc(50% - 30px);
        margin: 0 15px;
      }
    }
  }
</style>