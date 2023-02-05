import { authAdmin } from '~/server/utils/firebase';

export default defineEventHandler(async (event) => {
  const authenticatedRoutes = ['/api/route1', '/api/route2'];

  if (event.path && authenticatedRoutes.includes(event.path)) {
    try {
      const { fc_session } = parseCookies(event);
      const { uid } = await authAdmin.verifySessionCookie(fc_session);
      event.context.userId = uid;
    } catch (e) {
      console.error(e);
      throw createError({
        statusCode: 401,
        message: 'Unauthorized',
      });
    }
  }
});
