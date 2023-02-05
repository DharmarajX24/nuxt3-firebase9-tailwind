import { authAdmin } from '~/server/utils/firebase';

export default defineNuxtPlugin(async () => {
  const sessionCookie = useCookie('fc_session');
  if (!sessionCookie.value) return;

  try {
    const { name, email, picture } = await authAdmin.verifySessionCookie(
      sessionCookie.value,
    );
    useUser().value = { name, email, picture };
  } catch (error) {
    console.error(error);
  }
});
