
<template>
  <div class="grid-sabores">
    <h2 class="subtitle">Sabores</h2>
    <ul class="wrapper_sabores">
        <li class="items-sabores" v-for="item in getAdornos" :key="item.id">
            <CardComponent
            :title="item.title"
            :price="item.price"
            :image="item.image"
            />
        </li>
    </ul>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import CardComponent from "./CardComponent.vue";


export default {
  name: "GridSabores",
  computed: mapState({
    getAdornos: state => state.adornos
  }),
  components: {
    CardComponent,
  },
};
</script>