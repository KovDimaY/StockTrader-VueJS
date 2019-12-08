import { getStocksById } from '../../data/stocks';

const state = {
    funds: 10000,
    daysTrading: 0,
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
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio || [];
    },
    'INCREASE_DAYS_COUNT' (state) {
        state.daysTrading += 1;
        state.funds -= 100;
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    },
    finishDay({ commit }) {
        commit('INCREASE_DAYS_COUNT');
    }
};

const getters = {
    funds: state => state.funds,
    daysTrading: state => state.daysTrading,
    stockPortfolio: state => (
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