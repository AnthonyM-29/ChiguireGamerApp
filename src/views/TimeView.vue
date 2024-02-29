<template>
    <div>
        <h2><input type="text" v-model="value" @change="changeValue"></h2>
    </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps  } from 'vue';

const props = defineProps({
    t: Number
})
const emit = defineEmits(['changeValue'])
const value = ref(props.t)

watch(value, (newValue) => {
    emit('changeValue', newValue)
})

watch(() => props.t, (newValue) => {
    console.log("new value", newValue)
})

const changeValue = ({target}) => {
    value.value = parseInt(target.value)
}
</script>

<style>

</style>
  