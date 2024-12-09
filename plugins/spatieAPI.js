export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = $fetch.create({
    baseURL: 'https://jouw-backend-url/api',
  });

  return {
    provide: {
      spatieApi: apiClient,
    },
  };
});
