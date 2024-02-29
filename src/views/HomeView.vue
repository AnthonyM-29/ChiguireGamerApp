<template>
  <div class="home">
    <img class="chuguireLogo" alt="Chiguire Logo" src="../assets/Captura de pantalla 2023-12-19 153538.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.chuguireLogo{
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>
