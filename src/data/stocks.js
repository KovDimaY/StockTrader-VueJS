const adidas = {
    id: 1,
    name: 'Adidas',
    price: 280,
    image: 'adidas.png',
    description: 'Adidas is a multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.',
    link: 'https://en.wikipedia.org/wiki/Adidas',
};

const alibaba = {
    id: 2,
    name: 'Alibaba',
    price: 205,
    image: 'alibaba.png',
    description: 'Alibaba Group Holding Limited, is a Chinese multinational conglomerate holding company specializing in e-commerce, retail, Internet, and technology.',
    link: 'https://en.wikipedia.org/wiki/Alibaba_Group',
};

const alphabet = {
    id: 3,
    name: 'Alphabet (Google)',
    price: 1350,
    image: 'google.png',
    description: 'Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a corporate restructuring of Google on October 2, 2015, and became the parent company of Google and several former Google subsidiaries.',
    link: 'https://en.wikipedia.org/wiki/Alphabet_Inc.',
};

const amazon = {
    id: 4,
    name: 'Amazon',
    price: 1760,
    image: 'amazon.png',
    description: 'Amazon.com, Inc., is an American multinational technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Four tech companies, along with Google, Apple, and Facebook.',
    link: 'https://en.wikipedia.org/wiki/Amazon_(company)',
};

const apple = {
    id: 5,
    name: 'Apple',
    price: 275,
    image: 'apple.png',
    description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Four tech companies along with Amazon, Google, and Facebook.',
    link: 'https://en.wikipedia.org/wiki/Apple_Inc.',
};

const bmw = {
    id: 6,
    name: 'BMW',
    price: 75,
    image: 'bmw.png',
    description: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.',
    link: 'https://en.wikipedia.org/wiki/BMW',
};

const cocacola = {
    id: 7,
    name: 'Coca-Cola',
    price: 55,
    image: 'cocacola.png',
    description: 'The Coca-Cola Company is an American multinational corporation, and manufacturer, retailer, and marketer of nonalcoholic beverage concentrates and syrups. The company is best known for its flagship product Coca-Cola, invented in 1886 by pharmacist John Stith Pemberton in Atlanta, Georgia.',
    link: 'https://en.wikipedia.org/wiki/The_Coca-Cola_Company',
};

const facebook = {
    id: 8,
    name: 'Facebook',
    price: 195,
    image: 'facebook.png',
    description: 'Facebook is an American online social media and social networking service based in Menlo Park, California and a flagship service of the namesake company Facebook, Inc.',
    link: 'https://en.wikipedia.org/wiki/Facebook',
};

const mcdonalds = {
    id: 9,
    name: 'McDonald\'s',
    price: 195,
    image: 'mcdonalds.png',
    description: 'McDonald\'s Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.',
    link: 'https://en.wikipedia.org/wiki/McDonald\'s',
};

const mercedes = {
    id: 10,
    name: 'Mercedes-Benz',
    price: 50,
    image: 'mercedes.png',
    description: 'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. Mercedes-Benz is known for luxury vehicles, buses, coaches, ambulances and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz.',
    link: 'https://en.wikipedia.org/wiki/Mercedes-Benz',
};

const stocks = [
    adidas,
    alibaba,
    alphabet,
    amazon,
    apple,
    bmw,
    cocacola,
    facebook,
    mcdonalds,
    mercedes,
];

export const getStocksById = id => stocks.find(stock => stock.id === id);

export default stocks;