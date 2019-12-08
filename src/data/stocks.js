const stocks = [
    {
        id: 1,
        name: 'BMW',
        price: 110,
        image: 'bmw.png',
    },
    {
        id: 2,
        name: 'Apple',
        price: 250,
        image: 'apple.png',
    },
    {
        id: 3,
        name: 'Google',
        price: 140,
        image: 'bmw.png',
    },
    {
        id: 4,
        name: 'Mercedes',
        price: 80,
        image: 'bmw.png',
    },
    {
        id: 5,
        name: 'Microsoft',
        price: 130,
        image: 'bmw.png',
    },
];

export const getStocksById = id => stocks.find(stock => stock.id === id);

export default stocks;