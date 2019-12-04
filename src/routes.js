import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';
import Stocks from './pages/Stocks.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '*', redirect: '/' },
];