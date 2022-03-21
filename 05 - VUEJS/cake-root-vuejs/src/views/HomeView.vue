<script>
import AboutComponent from '../components/AboutComponent.vue'
import GridSabores from '../components/GridSabores.vue'
import FormComponent from '../components/FormComponent.vue'

export default {
  name: 'HomeView',
  components: {
    AboutComponent,
    GridSabores,
    FormComponent
  },
}

</script>

<template>
  <main>
    <AboutComponent />
    <GridSabores />

    <FormComponent />
    
  </main>
</template>
