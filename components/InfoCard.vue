<script lang='ts' setup>
const props = defineProps<{
  tech: {
    title: string;
    description: string;
    link: string;
  }
}>();
</script>

<template>
  <NuxtLink :to='props.tech.link' target='_blank'>
    <div
      class='bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-500 hover:bg-indigo-100 transition-all duration-300 ease-in-out'>
      <h2 class='text-2xl font-medium text-indigo-600'>{{ props.tech.title }}</h2>
      <p class='mt-2 text-base text-gray-600'>{{ props.tech.description }}</p>
    </div>
  </NuxtLink>
</template>