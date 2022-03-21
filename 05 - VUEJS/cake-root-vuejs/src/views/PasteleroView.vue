<template>
  <main class="wrapper__main container">
      <h1 class="title-pastelero">Pastelero</h1>
      <h2 class="title-table">Sabores</h2>
      <table class="table">
        <thead class="thhead">
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getSabores" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.unit}}</td>
          </tr>
        </tbody>
      </table>
      <h2 class="title-table">Adornos</h2>
      <table class="table">
        <thead class="thhead">
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getAdornos" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.unit}}</td>
          </tr>
        </tbody>
      </table>
      <h2 class="title-table">Pedidos</h2>
      <table class="table">
        <thead class="thhead">
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
            <th>Descripción</th>
            <th>Sabores</th>
            <th>Adornos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getPedidos" :key="item.id">
            <td>{{item.nombre}}</td>
            <td>{{item.telefono}}</td>
            <td>{{item.correo}}</td>
            <td>{{item.descripcion}}</td>
            <td>{{item.sabores.join(", ")}}</td>
            <td>{{item.adornos.join(", ")}}</td>
          </tr>
        </tbody>
      </table>
    </main>
</template>


<script>
import { mapState } from 'vuex'


export default {
  name: "GridSabores",
  computed: mapState({
    getAdornos: state => state.adornosChef,
    getSabores: state => state.saboresChef,
    getPedidos: state => state.pedidos,
  }),
};
</script>


