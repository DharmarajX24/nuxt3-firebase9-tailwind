<script lang='ts' setup>
const user = unref(useUser());

const logout = async () => {
  await $fetch('/api/auth/logout', {
    method: 'DELETE',
  });
  window.location.reload();
};
</script>
<template>
  <div class='flex flex-col'>
    <div class='relative group'>
      <img
        :src="user.picture || '/default-user.svg'"
        class='flex h-12 w-12 my-2 mx-auto shadow-md rounded-3xl hover:rounded-2xl transition-all duration-100 ease-linear cursor-pointer'
        alt='user profile picture'
      />
      <div
        class='flex flex-col items-center absolute w-auto py-2 px-4 w-48 top-auto right-0 rounded-md shadow-2xl bg-white text-black text-xs font-bold transition-all duration-100 scale-0 origin-top-right group-hover:scale-100'
      >
        <img
          :src="user.picture || '/default-user.svg'"
          class='w-16 h-16 rounded-full'
          alt='user profile picture'/>
        <p class='text-center text-lg mt-2'>
          {{ user?.name || user?.email.split('@')[0] }}
        </p>

        <div class='bg-white rounded-lg w-full mt-3'>
          <NuxtLink to='/profile'
          ><p class='menu-option'>Profile</p>
          </NuxtLink>
        </div>
        <button class='btn-logout' @click='logout'>Logout</button>
      </div>
    </div>
  </div>
</template>

<style>
.menu-option {
  @apply block px-2 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100;
}

.btn-logout {
  @apply block mt-2 px-4 py-2 w-full text-sm rounded-lg text-gray-600 hover:text-white hover:bg-red-500;
}
</style>