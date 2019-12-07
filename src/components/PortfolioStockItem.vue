<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>({{ stock.price | currency }} | #{{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        :class="{ danger: insufficientQuantity }"
                    >
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-success"
                        @click="sellStock"
                        :disabled="insufficientQuantity || invalidNumber"
                        :title="insufficientQuantity ? 'You do not have enough stocks' : ''"
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data: () => ({
            quantity: 0
        }),
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            },
            invalidNumber() {
                return this.quantity < 1 || !Number.isInteger(this.quantity);
            }
        },
        methods: {
            sellStock() {
                if (this.quantity > 0) {
                    const order = {
                        stockId: this.stock.id,
                        quantity: this.quantity,
                    };

                    console.log("Order: ", order);
                    this.$store.dispatch('sellStock', order);
                    this.quantity = 0;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .danger {
        border: 1px solid red;
    }
</style>