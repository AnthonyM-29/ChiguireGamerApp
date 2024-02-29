<template>
  <div>
    <div class="Counter">
        <h2><input type="text" v-model="hour"></h2>
        <span>:</span>
        <h2><input type="text" v-model="minute"></h2>
        <span>:</span>
        <h2><input type="text" v-model="second"></h2>
    </div><br><br><br><br><br>
    <div class="buttons">
      <button @click="hour++, total++">+</button> -
      <button @click="countPause">Pause</button> -
      <button @click="Play">Play</button>
    </div>
  </div>
</template>

<script setup>
import { usePrecioXHora } from '@/store/usePrecioXHora';
const store = usePrecioXHora()
import { ref } from 'vue'

let total = ref(0)
let hour = ref(1)
let minute = ref(59);
let second = ref(60);
let timer



function Play(){
  total.value = hour.value
  timer = setInterval(()=>{
    second.value--;
    if(second.value == -1){
        // clearInterval(timer)
        minute.value--
        second.value = 59
    }
    if(minute.value == 59 && second.value == 59 && hour.value !== 0){
      hour.value--

    }
    if(hour.value !== 0 && minute.value == 0 && second.value == 0){
      hour.value--
      minute.value = 59
      second.value = 60
    }
    if(second.value == 0 && minute.value == 0 && hour.value == 0){
      hour.value = 1
      minute.value = 59
      second.value = 60
      let text = "Se acabo el Tiempo Consola, Serian " +  total.value * store.price + " dolares"
      speechSynthesis.speak(new SpeechSynthesisUtterance(text))
      clearInterval(timer)
      alert(text)
    }
},1000);
}

function countPause(){
    clearInterval(timer)
}

</script>

<style scoped lang="scss">
.Counter {
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  transform: translateY(100px);
}

buttons {
  padding: 10px 20px;
  background-color: rgb(117, 158, 255);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button{
  padding: 10px 20px;
  background-color: rgb(79, 79, 79);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(16, 26, 48);
}
button:active {
  background-color: rgb(147, 147, 147);
}
.Counter h2 {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 10px;
}

input {
  color: white;
  background-color: transparent;
  border-width: 0;
  width: 50px;
  text-align: center;
  font-size: xx-large;
}
span {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 4em;
  display: flex;
  padding-bottom: 20px;
}
</style>
  @/store/usePrecioXHora