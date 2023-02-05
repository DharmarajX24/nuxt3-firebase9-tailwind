<script lang="ts" setup>
import { signInWithEmailAndPassword } from '@firebase/auth';
const { $auth } = useNuxtApp();

const userCredentials = reactive({
  email: '',
  password: '',
});
const error = ref<string | null>(null);
const loading = ref(false);

const login = async () => {
  error.value = null;
  loading.value = true;
  try {
    const { user } = await signInWithEmailAndPassword(
      $auth,
      userCredentials.email,
      userCredentials.password,
    );
    const token = await user.getIdToken();

    useUser().value = {
      name: user.displayName,
      email: user.email,
      picture: user.photoURL,
    };

    await $fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const { redirect } = useRouter().currentRoute.value.query;
    navigateTo((redirect as string) || '/');
  } catch (e: any) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

definePageMeta({
  layout: 'auth',
  middleware: () => {
    if (useUser().value) {
      useRouter().push({ name: 'index' });
    }
  },
});
</script>

<template>
  <div class="h-screen pt-[4.5rem]">
    <div class="flex justify-center mt-6">
      <div class="w-5/6 sm:w-2/3 md:w-3/5 max-w-lg shadow-lg rounded">
        <form class="bg-white px-6 sm:px-8 py-6">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              id="email"
              v-model="userCredentials.email"
              class="form-input"
              placeholder="Email"
              type="email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              id="password"
              v-model="userCredentials.password"
              :class="{ 'border-red-500': error }"
              class="form-input"
              placeholder="******"
              type="password"
            />
            <p v-if="error" class="text-red-500 text-xs italic mt-2.5">
              Please enter a valid email and password.
            </p>
          </div>

          <button
            :class="{ 'opacity-50 cursor-not-allowed': loading }"
            :disabled="loading"
            class="btn-indigo w-full mt-6"
            type="submit"
            @click.prevent="login"
          >
            {{ loading ? 'Please wait...' : 'Sign In' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>