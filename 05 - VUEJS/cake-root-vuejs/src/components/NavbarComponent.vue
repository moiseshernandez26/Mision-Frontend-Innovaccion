<template>
    <header class="wrapper__header">
      <nav class="navigation">
        <ul class="list-items">
          <li class="items">
            <RouterLink to="/" class="link"><span>Inicio</span></RouterLink>
          </li>
          <li class="items"> 
            <RouterLink to="/pastelero" class="link"><span>Pastelero</span></RouterLink>
          </li>
        </ul>
      </nav>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'

</script>
