export default defineEventHandler(async (event) => {
  return `Hello ${event.context.userId || 'anonymous'}!`;
});
