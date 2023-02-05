export default defineNuxtRouteMiddleware(async (event) => {
  const authenticatedRoutes = ['/auth1', '/auth2'];
  const user = unref(useUser());

  // Redirect to login page if user is not authenticated and route is protected
  if (!user && authenticatedRoutes.includes(event.path)) {
    return navigateTo({
      path: '/login',
      query: {
        redirect: event.path,
      },
    });
  }
});
