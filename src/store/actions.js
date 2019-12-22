import Vue from 'vue';
import Config from '../config';

const updateStateWithNewProgress = (commit, progress) => {
    const { stocks, funds, stockPortfolio } = progress;
    const portfolio = { funds, stockPortfolio };

    commit('SET_STOCKS', stocks);
    commit('SET_PORTFOLIO', portfolio);
};

export const importProgress = ({ commit }) => {
    Vue.http.get(Config.firebase.progressEndpoint)
        .then(response => response.json())
        .then(progress => {
            if (progress) {
                updateStateWithNewProgress(commit, progress);
                alert('Your progress was successfully imported.');
            }
        })
        .catch(error => {
            alert('There is a problem importing your progress. Probably, the last exported progress was corrupted.');
            console.log("Error while importing progress: ", error);
        });
};

export const loadProgress = ({ commit }) => {
    const rawProgress = localStorage.getItem('progress');

    if (rawProgress) {
        try {
            const parsedProgress = JSON.parse(rawProgress);

            updateStateWithNewProgress(commit, parsedProgress);
            alert('Your progress was successfully loaded.');
        } catch(error) {
            alert('There is a problem loading your progress. Probably, the last saved progress was corrupted.');
            console.log("Error while loading progress: ", error);
        }
    } else {
        alert('There is no saved progress. Save your progress first to load it later.');
    }
};