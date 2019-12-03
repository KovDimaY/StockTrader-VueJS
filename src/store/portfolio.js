import { getStocksById } from '../data/stocks';

const state = {
    funds: 10000,
    stocks: [],
};

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity }) {
        const stockData = getStocksById(stockId);
        const record = state.stocks.find(stock => stock.id === stockId);

        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity,
            });
        }
        state.funds -= stockData.price * quantity;
    },
    'SELL_STOCK'(state, { stockId, quantity }) {
        const stockData = getStocksById(stockId);
        const record = state.stocks.find(stock => stock.id === stockId);

        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockData.price * quantity;
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    funds: state => state.funds,
    stockPortfolio: (state) => (
        state.stocks.map(stock => ({
            ...getStocksById(stock.id),
            quantity: stock.quantity,
        })
    )),
};

export default {
    actions,
    getters,
    mutations,
    state,
};