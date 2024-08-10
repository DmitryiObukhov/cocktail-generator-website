const starter = [
    "We recommend trying",
    "Your choice for this evening is",
    "The perfect drink for you is",
    "This evening will be especially good with",
    "Don't miss the chance to enjoy",
    "Your drink of the day is",
    "Meet the",
    "Allow yourself to enjoy",
    "This cocktail will definitely please you,"
];

const base = [
    "a cocktail with vodka",
    "a cocktail with gin",
    "a cocktail with tequila",
    "a cocktail with rum",
    "a cocktail with whiskey",
    "a cocktail with brandy",
    "a cocktail with calvados",
    "a cocktail with aperitif",
    "a cocktail with prosecco"
];

const flavor = [
    "apricot brandy",
    "hints of lime",
    "vanilla liquer",
    "mixed berries",
    "citrus undertones",
    "raspberry syrup",
    "ginger syrup",
    "coffee liquer",
    "spicy cardamom",
    "white chocolate",
    "kiwi liquer",
    "apple liquer"
];

const additionalFlavor = [
    "a refreshing mint flavor",
    "notes of cocoa",
    "hints of coconut",
    "cinnamon",
    "a pop corn aroma",
    "exotic mango",
    "goji berries",
    "salted caramel",
    "the scent of jasmine",
    "demerara sugar",
    "tropical fruits",
    "spicy cinnamon and honey"
];

const classicCocktails = [
    "Mojito",
    "Margarita",
    "Manhattan",
    "Cosmopolitan",
    "Martini",
    "Pina Colada",
    "Sangria",
    "Whiskey Sour",
    "Negroni",
    "Daiquiri",
    "Porn Star Martini",
    "Cuba Libre",
    "Mai Tai",
    "Bellini",
    "Tom Collins"
];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateCocktail() {
    const randomStarter = starter[getRandomIndex(starter)];
    const isClassic = Math.random() < 0.4;

    if (isClassic) {
        const randomClassic = classicCocktails[getRandomIndex(classicCocktails)];
        return `${randomStarter} ${randomClassic}!`;
    } else {
        const randomBase = base[getRandomIndex(base)];
        const randomFlavor = flavor[getRandomIndex(flavor)];
        const randomAdditionalFlavor = additionalFlavor[getRandomIndex(additionalFlavor)];
        return `${randomStarter} ${randomBase}, ${randomFlavor} and ${randomAdditionalFlavor}!`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-cocktail');
    const resultDiv = document.getElementById('cocktail-result');

    generateButton.addEventListener('click', () => {
        resultDiv.textContent = generateCocktail();
    });
});
