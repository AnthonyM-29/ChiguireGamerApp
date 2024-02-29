<template>
<div>
  <h1>Play Station</h1>
  <div class="container">
    <div class="cuadrado letra">
      <img class="letrasPs" src="../assets/cuadradoBlanco.png" alt="">
    <CounterDouwView />
  </div>
    <div class="triagulo letra">
      <img class="letrasPs" src="../assets/trianguloBlanco.png" alt="">
      <CounterDouwView />
    </div>
    <div class="circulo letra">
      <img class="letrasPs" src="../assets/circuloBlanco.png" alt="">
      <CounterDouwView />
    </div>
    <div class="exis letra">
      <img class="letrasPs" src="../assets/ExisBlanco.png" alt="">
      <CounterDouwView />
    </div>
  </div><br><br><br><br><br><br><br><br><br><br><br>
  <h1>Nitendo swish</h1>
  <div class="container nintendo">    
    <div class="S letra">
      <img class="letrasPs" src="../assets/nintendo.png" alt="">
      <CounterDouwView />
    </div>
  </div>
  <div class="price">
    <h2>Precio X Hora = {{ storePrice.price }} $</h2>
    <br>
  </div>
</div>

</template>

<script setup>
import { usePrecioXHora } from '@/store/usePrecioXHora';
import CounterDouwView from './CounterDouwView.vue';
const storePrice = usePrecioXHora()

</script>

<style>
.container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateY(100px);
}

.letra {
  margin: -60px;
  display: inline;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: rgb(39, 116, 251);
  border-radius: 10px;
}
.letrasPs {
  display: inline;
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: -100px;
}
.S {
  display: inline;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: rgb(255, 31, 31);
  border-radius: 10px;
}

.price {
  background-color: rgb(32, 37, 37);
  color: white;
  display: flex;
  width: 15%;
  border-radius: 10px;
  margin: auto;
  justify-content: center;
  transform: translateY(100px);
  margin-right: 0;
}
</style>@/store/usePrecioXHora