import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  characterListData: [],
  isLoaded: false,
  characterToSearch: '',
  statusToSearch: ''
});