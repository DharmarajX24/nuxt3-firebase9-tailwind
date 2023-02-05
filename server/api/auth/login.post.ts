import { authAdmin } from '~/server/utils/firebase';
import { Duration } from 'luxon';

export default defineEventHandler(async (event) => {
  const authorization = getHeader(event, 'authorization');
  if (!authorization || authorization === 'null') {
    throw createError({
      statusCode: 401,
    });
  }

  const token = authorization.replace('Bearer ', '');
  const cookie = await authAdmin.createSessionCookie(token, {
    expiresIn: Duration.fromObject({ days: 7 }).as('milliseconds'),
  });

  setCookie(event, 'fc_session', cookie, {
    httpOnly: true,
    maxAge: Duration.fromObject({ days: 7 }).as('milliseconds'),
    path: '/',
  });

  return {};
});
