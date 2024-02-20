<template>
  <div class="container">
    <h1 class="text-center py-5"> Mes pokémon préférés</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Nom</th>
          <th scope="col">Fiche</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in favoritePokemon" :key="pokemon.id">
          <th scope="row"><img :src="pokemon.sprites.front_default" class="img-fluid rounded-start larger-image w-100 h-100" alt="imge pokemon"></th>
          <td>{{ pokemon.name.toUpperCase() }}</td>
          <td><router-link :to="{ name: 'detailspokemon', params: { id: pokemon.id } }">
            <button class="btn btn-outline-danger">Voir Détails</button></router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '../store/FavoritesStore';

// Get favorite pokemons from store
const { favoritePokemon } = FavoritesStore();
</script>

<style>

</style>