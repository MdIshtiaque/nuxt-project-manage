<template>
  <input v-bind="$attrs" v-model="model"
         class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         :class="Class"
  />
</template>

<script setup>
  defineProps({
    Class: {
      type: String,
      default: ''
    }
  })
  const model = defineModel()
</script>