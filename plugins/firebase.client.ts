import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { inMemoryPersistence, setPersistence } from '@firebase/auth';

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  const app = initializeApp(config.public.firebase);
  const auth = getAuth(app);

  // This is to ensure that user is logged out when the page is refreshed
  // A session cookie can be used to persist the user's login state
  // Reference: https://firebase.google.com/docs/auth/admin/manage-cookies
  await setPersistence(auth, inMemoryPersistence);

  return {
    provide: {
      auth,
    },
  };
});
