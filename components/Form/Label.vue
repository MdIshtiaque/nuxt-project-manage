<template>
  <label v-bind="$attrs" :for="LabelFor" class="block text-sm font-medium leading-6 text-gray-900" :class="Class">
    <slot></slot>
  </label>
</template>

<script setup>
  defineProps({
    Class: {
      type: String,
      default: ''
    },
    LabelFor: {
      type: String,
      required: true
    }
  })
</script>