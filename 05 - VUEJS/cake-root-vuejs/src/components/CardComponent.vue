<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgPreUrl : function() {
        return "./img/" + this.image;
    }
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <img
        :src="imgPreUrl()" 
        alt="image straberry"
        class="image-select"
      />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <div class="adornos">
        <h2>Adornos</h2>
        <table class="table-sabores">
          <tr>
            <td class="items-table-sabores">
              <span>Uvas</span>
            </td>
            <td class="items-table-sabores">
              <span>5$</span>
            </td>
          </tr>
          <tr>
            <td class="items-table-sabores">
              <span>Naranjas</span>
            </td>
            <td class="items-table-sabores">
              <span>5$</span>
            </td>
          </tr>
          <tr>
            <td class="items-table-sabores">
              <span>Dulces</span>
            </td>
            <td class="items-table-sabores">
              <span>5$</span>
            </td>
          </tr>
        </table>
        <div class="wrapper_precio">
          <h3>Precio pastel: {{ price }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
