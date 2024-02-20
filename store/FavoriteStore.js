import { ref } from 'vue'

export const FavoritesStore = defineStore('favorites', () => {
    const favoritePokemon = ref([]);

    const addToFavorites = (pokemon) => {
        favoritePokemon.value.push(pokemon);
    };


    return { favoritePokemon, addToFavorites };
});