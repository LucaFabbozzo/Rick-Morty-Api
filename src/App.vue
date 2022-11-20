  <script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue'
import CharacterList from './components/CharacterList.vue'
  
export default {
  name: 'App',
  data() {
    store
 },
  components: { AppHeader, AppSearch, CharacterList },
  methods: {
    getCharacters() {
      store.isLoaded = false;
      axios.get(store.apiUrl)
      .then(result => {
        store.characterListData = result.data
        store.isLoaded = true;
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted(){
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader title="Rick & Morty App" />
  <main>
    <AppSearch />
    <CharacterList />
  </main>
</template>


<style lang="scss">
  @use './styles/general.scss'

</style>