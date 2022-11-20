<script>
import {store} from '../data/store'
  export default {
  name: 'ResultSearch',
  data() {
    return {
      store
    }
  },
  computed: {
    outputResult() {
      if (store.characterListData.length > 0) {
        return 'Risultati trovati: ' + store.characterListData.length;
      }
      return "Nessun risultato"
    }
  }
  }
</script>

<template>
  <div class="container">
    <p class="text-center py5">{{outputResult}}</p>
  </div>
</template>


<style>

</style>