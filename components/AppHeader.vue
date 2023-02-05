<script lang="ts" setup>
const props = defineProps({
  login: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const user = useUser();
</script>

<template>
  <div
    class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600 fixed w-full top-0 z-10 max-h-[4.5rem]"
  >
    <NuxtLink class="flex items-center" to="/">
      <div class="flex cursor-pointer">
        <h1 class="text-2xl font-bold text-indigo-600">Nuxt 3&ensp;+&ensp;</h1>
        <h1 class="text-2xl font-bold text-gray-600">Firebase 9</h1>
      </div>
    </NuxtLink>
    <div class="flex">
      <NuxtLink v-if="props.login" to="/">
        <button class="btn-indigo flex">Home</button>
      </NuxtLink>
      <div v-else class="flex items-center">
        <UserProfile v-if="user" />
        <button
          v-else
          class="btn-indigo"
          @click="
            $router.push({
              name: 'login',
              query: { redirect: $route.path },
            })
          "
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>