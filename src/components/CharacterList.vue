<script>
import { store } from '../data/store'
import CharacterCard from './CharacterCard.vue'
export default {
  name: 'CharacterList',
  components: {
    CharacterCard
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="container"> 
    <div v-if="store.isLoaded" class="row">
         <CharacterCard 
        v-for="character in store.characterListData" 
        v-show="character.image != ''"
        :key="character.id"
        :character="character"
        />
    </div>
    <div v-else>
      ...Loading
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>