// filepath: /Users/xenox/Projects/nirex.dev/app.vue
<template>
  <NuxtLayout>
    <NuxtPage />
    <div class="color-picker-container" v-if="showColorPicker" ref="colorPickerContainer">
      <ColorPicker @colorChanged="handleColorChanged" />
    </div>
    <button class="toggle-button" @click.stop="toggleColorPicker">
      <!-- Use a font-awesome icon here that represents a color picker -->
      <font-awesome icon="palette" />   
     </button>
  </NuxtLayout>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'
import ColorPicker from '~/components/ColorPicker.vue'

const showColorPicker = ref(false)
const colorPickerContainer = ref(null)

const getContrastingColor = (color) => {
  const r = parseInt(color.substr(1, 2), 16)
  const g = parseInt(color.substr(3, 2), 16)
  const b = parseInt(color.substr(5, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#000000' : '#FFFFFF'
}

const updateColors = () => {
  document.documentElement.style.setProperty('--color-custom-text', getContrastingColor(selectedColor.value))
}

const handleColorChanged = (color) => {
  selectedColor.value = color
  updateColors()
}

const toggleColorPicker = () => {
  showColorPicker.value = !showColorPicker.value
}

const handleClickOutside = (event) => {
  if (colorPickerContainer.value && !colorPickerContainer.value.contains(event.target)) {
    showColorPicker.value = false
  }
}
onBeforeMount(() => {
  document.documentElement.style.setProperty('--color-custom-bg', '#12151E')
  document.documentElement.style.setProperty('--color-custom-text', "#1ced93")
})

onMounted(() => {

  document.addEventListener('click', handleClickOutside)
  document.documentElement.style.setProperty('--color-custom-bg', '#12151E')
  document.documentElement.style.setProperty('--color-custom-text', "#1ced93")


})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})


</script>

<style>
  :root {
    --color-custom-bg: #12151E;
    --color-custom-text: #1ced93;
  }

html,
body {
  margin: 0;
  padding: 0;
  background-color: var(--color-custom-bg, #0C0C0C);
  color: var(--color-custom-text, white);
}

.dark {
  --color-custom-bg: #0C0C0C;
  --color-custom-text: white;
}

.light {
  --color-custom-bg: white;
  --color-custom-text: black;
}

.color-picker-container {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: #12151e;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.toggle-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: var(--color-custom-bg, #0C0C0C);
  color: var(--color-custom-text, white);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.toggle-button:hover {
  opacity: 0.8;
}
</style>