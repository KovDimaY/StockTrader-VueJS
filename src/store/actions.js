import Vue from 'vue';

export const importProgress = ({ commit }) => {
    Vue.http.get('progress.json')
        .then(response => response.json())
        .then(progress => {
            if (progress) {
                const { stocks, funds, stockPortfolio } = progress;
                const portfolio = { funds, stockPortfolio };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
};