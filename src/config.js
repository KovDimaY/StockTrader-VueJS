export default {
    firebase: {
        rootUrl: 'https://stocktrading-vuejs.firebaseio.com/',
        progressEndpoint: 'progress.json',
    },
    routes: {
        home: '/',
        portfolio: '/portfolio',
        market: '/stocks',
    },
    gameBalance: {
        initialFunds: 10000,
        finishDayPrice: 100,
    }
};