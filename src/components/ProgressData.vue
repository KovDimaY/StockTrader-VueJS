<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Progress Data</h3>
        </div>
        <div class="panel-body">
            <ul class="list-group">
                <li class="list-group-item">
                    <strong>Initial capital:</strong> {{ initialFunds | currency }}
                </li>
                <li class="list-group-item">
                    <strong>Current funds:</strong> {{ funds | currency }}
                    <app-progress-label :previous="initialFunds" :current="funds">
                    </app-progress-label>
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
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="handleSaveProgress"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        class="btn btn-warning"
                        @click="handleLoadProgress"
                    >
                        Load
                    </button>
                </div>
                <div class="col-xs-6">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="handleExportProgress"
                    >
                        Export
                    </button>
                    <button
                        type="button"
                        class="btn btn-warning"
                        @click="handleImportProgress"
                    >
                        Import
                    </button>
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
                    <p>You do not have any stocks at the moment.</p>
                    <router-link :to="marketUrl" class="btn btn-success buy-stocks-button">
                        Buy Stocks!
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Config from '../config';
    import ProgressLabelComponent from './Common/ProgressLabel';

    export default {
        data() {
            return {
                marketUrl: Config.routes.market,
                initialFunds: Config.gameBalance.initialFunds,
            };
        },
        computed: {
            portfolio() {
                return this.$store.getters.stockPortfolio;
            },
            funds() {
                return this.$store.getters.funds;
            },
            daysTrading() {
                return this.$store.getters.daysTrading;
            },
        },
        methods: {
            ...mapActions(['importProgress', 'loadProgress']),
            getProgress() {
                return {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks,
                };
            },
            getImageUrl(filename) {
                return require(`../assets/stocks/${filename}`);
            },
            handleImportProgress() {
                this.importProgress();
            },
            handleLoadProgress() {
                this.loadProgress();
            },
            handleSaveProgress() {
                const progress = this.getProgress();

                localStorage.setItem('progress', JSON.stringify(progress));
                alert('Your progress is saved');
                console.log("handleSaveProgress", progress);
            },
            handleExportProgress() {
                const progress = this.getProgress();

                this.$http.put('progress.json', progress);
            },
        },
        components: {
            appProgressLabel: ProgressLabelComponent,
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
      display: block;
      width: 100%;
      margin: 5px auto;
      max-width: 150px;
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

    .title-margin {
      margin: 30px 0 20px;
    }
</style>