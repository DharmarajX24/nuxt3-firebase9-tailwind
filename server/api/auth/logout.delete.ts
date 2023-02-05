export default defineEventHandler(async (event) => {
  setCookie(event, 'fc_session', 'null', {
    httpOnly: true,
    path: '/',
  });
  return {};
});
