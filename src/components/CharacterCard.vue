  
  <script>
  export default {
  name: 'CharacterCard',
  props: {
      character: Object
    }
  }
  </script>
  <!-- name status species image  -->
  <template>
    <div class="sc-card col-3">
      <img :src="character.image" :alt="character.name">
      <h4>{{character.name}}</h4>
      <p>{{character.status}}</p>
      <p>{{character.species}}</p>
    </div>
  </template>
  
  
  <style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
    .sc-card {
      text-align: center;
      margin-bottom: 50px;
      img{
        max-width: 100%;
        border-radius: 50%;
        box-shadow: 0 0 5px 3px rgba($color: #000000, $alpha: 0.15);
        transition: all .2s;
        margin-bottom: 20px;
        &:hover {
          transform: scale(1.1);
        }
      }
      h4 {
        text-transform: capitalize;
        &::after {
          content: '';
          display: block;
          border-bottom: 1px solid $primary-color;
          width: 50px;
          margin: 1rem auto;
        }
      }
    }
  </style>