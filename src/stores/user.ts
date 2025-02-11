import { type RegistrationOutput } from '@/assets/types/user'
import { getUserData } from '@/utils/auth'
import { getCookie } from '@/utils/cookie'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userData = ref<RegistrationOutput | undefined>()
  const accessToken = ref<string>()
  function setAccessToken(token: string) {
    accessToken.value = token
  }

  let resolver: (b: boolean) => void
  const userDataIsPending = new Promise((resolve) => {
    resolver = resolve
  })

  function setUserData(data: RegistrationOutput) {
    userData.value = data
  }
  const isLoggedIn = computed(
    () => accessToken.value && userData.value?.id && userData.value?.email,
  )

  async function initUser() {
    const token = getCookie('access_token')
    if (!token) {
      resolver(false)
      return false
    }
    const userData = await getUserData(token)
    if (!userData || 'statusCode' in userData) {
      resolver(false)
      return false
    }
    setUserData(userData)
    accessToken.value = token

    resolver(true)
    return true
  }

  return {
    initUser,
    userDataIsPending,
    accessToken,
    setAccessToken,

    isLoggedIn,

    setUserData,
    userData,
  }
})
