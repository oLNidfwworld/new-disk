import { type RegistrationOutput } from '@/assets/types/user';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('user', () => {

  const accessToken = ref<string | undefined>();
  const userData = ref<RegistrationOutput | undefined>();


  function setUserData( data: RegistrationOutput ) {
    userData.value = data;
  }
  function setAccessToken( data: string ) {
    accessToken.value = data;
  }

  const isLoggedIn = computed( ( ) => accessToken.value && userData.value?.id && userData.value?.email)

  return {
    isLoggedIn,

    accessToken,
    setAccessToken,

    setUserData,
    userData
  }
})
