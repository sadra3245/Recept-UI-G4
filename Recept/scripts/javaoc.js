import { createApp, ref } from "vue";

const app = {
    setup() {

        const hasSearched = ref(false)

        const searchResults = ref([])

        const mockData = [
            {
                id: 1,
                title: "Skaldjursplatå",
                dish: "Buffé",
                headIngredientText: "Huvudingrediens:",
                headIngredients: "Fisk & skaldjur",
                typeImage: 'assets/fish.png',
                typeTitle: "fish",
                allergenText: "Uteslutna allergener:",
                cross: "assets/cross.png",
                allergen1: "Gluten",
                allergen2: "Laktos",
                ingredientText: "Ingredienser:",
                ingredients: "Musslor, kräftor, sjögurka, lax, vitfisk, sparris",
                bookmark: 'assets/bookmark.png',
                image: 'assets/seafoodplatter.png'
            },
            {
                id: 2,
                title: "Paella",
                dish: "Buffé",
                headIngredientText: "Huvudingrediens:",
                headIngredients: "Fisk & skaldjur",
                typeImage: 'assets/fish.png',
                typeTitle: "fish",
                allergenText: "Uteslutna allergener:",
                cross: "assets/cross.png",
                allergen1: "Gluten",
                allergen2: "Laktos",
                ingredientText: "Ingredienser:",
                ingredients: "Saffran, ris, räkor, kräftor, musslor, ärtor",
                bookmark: 'assets/bookmark.png',
                image: 'assets/paella.png'
            },
            {
                id: 3,
                title: "Klassisk räkmacka",
                dish: "Buffé",
                headIngredientText: "Huvudingrediens:",
                headIngredients: "Fisk & skaldjur",
                typeImage: 'assets/fish.png',
                typeTitle: "fish",
                allergenText: "Uteslutna allergener:",
                cross: "assets/cross.png",
                allergen1: "Gluten",
                allergen2: "Laktos",
                ingredientText: "Ingredienser:",
                ingredients: "Glutenfritt rågbröd, räkor, kräftstjärtar, citron, äggfrimajonäs, dill",
                bookmark: 'assets/bookmark.png',
                image: 'assets/shrimpsandwich.png'
            },
        ]

        const searchFunction = () => {
            hasSearched.value = true
            searchResults.value = [...mockData]
        }

        return { searchResults, hasSearched, searchFunction }
    }
}

createApp(app).mount("#app")

const slider = document.getElementById('slider');


noUiSlider.create(slider, {
    start: 0,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});