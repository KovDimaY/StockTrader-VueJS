import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';

import portfolio from './portfolio';
import stocks from './stocks';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        portfolio,
        stocks,
    }
});