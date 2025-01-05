<!-- components/ColorPicker.vue -->
<template>
  <transition name="fade-scale">
    <div class="grid" v-if="show">
      <label v-for="color in colors" :key="color" :style="{ backgroundColor: color }" class="color-cell">
        <input type="radio" :value="color" v-model="selectedColor" @change="changeTheme" />
      </label>
    </div>
  </transition>
</template>

<script setup>
// import { useColorMode } from '@nuxtjs/color-mode'
// import { ref, defineEmits } from 'vue'

const colorMode = useColorMode()
const colors = [
  '#FF0000', '#FF4000', '#FF8000', '#FFBF00', '#FFFF00',
  '#BFFF00', '#80FF00', '#40FF00', '#00FF00', '#00FF40',
  '#00FF80', '#00FFBF', '#00FFFF', '#00BFFF', '#0080FF',
  '#0040FF', '#0000FF', '#4000FF', '#8000FF', '#BF00FF',
  '#FF00FF', '#FF00BF', '#FF0080', '#FF0040', '#FF0000'
]
const selectedColor = ref(colorMode.preference)
const emit = defineEmits(['colorChanged'])
const show = ref(true)

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
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
  background-color: transparent;
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
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.5s ease;
}
.fade-scale-enter, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>