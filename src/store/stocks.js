import stocks from '../data/stocks';

const state = {
    stocks,
};

const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    },
    'RANDOMIZE_STOCKS': (state) => {

    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit();
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