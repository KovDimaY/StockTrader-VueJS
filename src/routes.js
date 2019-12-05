import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';
import Market from './pages/Stocks.vue';

import Config from './config';

const { home, portfolio, market } = Config.routes;

export const routes = [
    {
        path: home,
        component: Home
    },
    {
        path: portfolio,
        component: Portfolio
    },
    {
        path: market,
        component: Market
    },
    {
        path: '*',
        redirect: home
    },
];