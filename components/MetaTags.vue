<template>
  <div>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:image" :content="image" />
      <Meta property="og:url" :content="url" />
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    description: String,
    image: {
      type: String,
      default: '/favicon.ico'
    },
    url: {
      type: String,
      default: 'http://localhost:3000'
    }
  })
</script>

<style lang="scss" scoped>

</style>