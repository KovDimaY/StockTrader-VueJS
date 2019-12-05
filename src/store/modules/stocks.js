import stocks from '../../data/stocks';

const state = {
    stocks,
};

const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    },
    'RANDOMIZE_STOCKS': state => (
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (0.5 + Math.random()));
        })
    ),
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    randomizeStocks: ({ commit }) => {
        commit('RANDOMIZE_STOCKS');
    }
};

const getters = {
    stocks: state => state.stocks
};

export default {
    actions,
    getters,
    mutations,
    state,
}