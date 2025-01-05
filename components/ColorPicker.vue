<!-- components/ColorPicker.vue -->
<template>
  <div class="color-picker" :style="{ backgroundColor: '#12151e' }">
    <div class="grid">
      <label v-for="color in colors" :key="color" :style="{ backgroundColor: color }" class="color-cell">
        <input type="radio" :value="color" v-model="selectedColor" @change="changeTheme" />
      </label>
    </div>
  </div>
</template>

<script setup>
// import { useColorMode } from '@nuxtjs/color-mode'
// import { ref, defineEmits } from 'vue'

const colorMode = useColorMode()
const colors = ['#FFB800', '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#F5FF33', '#FF8C33', '#8CFF33', '#338CFF', '#FF338C', '#8C33FF', '#33FF8C', '#FF338C', '#FF8C33', '#8CFF33', '#338CFF', '#FF338C', '#8C33FF']
const selectedColor = ref(colorMode.preference)
const emit = defineEmits(['colorChanged'])

const changeTheme = () => {
  colorMode.preference = 'custom'
  document.documentElement.style.setProperty('--color-custom-bg', '#12151E')
  document.documentElement.style.setProperty('--color-custom-text', selectedColor.value)
  emit('colorChanged', selectedColor.value)
}

const getContrastingColor = (color) => {
  const r = parseInt(color.substr(1, 2), 16)
  const g = parseInt(color.substr(3, 2), 16)
  const b = parseInt(color.substr(5, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#000000' : '#FFFFFF'
}

</script>

<style scoped>
.color-picker {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
.color-cell { 
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}
.color-cell input {
  display: none;
}
</style>