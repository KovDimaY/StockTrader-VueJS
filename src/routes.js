import HomePage from './pages/Home.vue';
import PortfolioPage from './pages/Portfolio.vue';
import MarketPage from './pages/Stocks.vue';

import Config from './config';

const { home, portfolio, market } = Config.routes;

export const routes = [
    {
        path: home,
        component: HomePage
    },
    {
        path: portfolio,
        component: PortfolioPage
    },
    {
        path: market,
        component: MarketPage
    },
    {
        path: '*',
        redirect: home
    },
];