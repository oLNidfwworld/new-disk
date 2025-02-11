<script setup lang="ts">
import type { AuthInput } from '@/assets/types/user'
import ControlButton from '@/components/ui/control-button.vue'
import ControlInput from '@/components/ui/control-input.vue'
import { useUserStore } from '@/stores/user'
import { getUserData, login } from '@/utils/auth'
import { hideForm, openForm } from '@/utils/popup-contorl'
import { reactive } from 'vue'
import RegistrationForm from './registration-form.vue'
import { setCookie } from '@/utils/cookie'

const userStore = useUserStore()
const { setUserData, setAccessToken } = userStore

const userData = reactive<AuthInput>({
  email: '',
  password: '',
})

async function submit() {
  const authData = await login(userData)
  if (!authData) return
  if ('statusCode' in authData) {
    return
  }
  setCookie('access_token', authData.accessToken)
  setAccessToken(authData.accessToken)
  const userApiData = await getUserData(authData.accessToken)
  if (!userApiData) {
    return
  }
  if ('statusCode' in userApiData) {
    return
  }
  setUserData(userApiData)
  hideForm()
}
</script>

<template>
  <form class="registration-form" @submit.prevent="submit">
    <h2 class="text-heading-lg">Вход</h2>
    <div class="registration-form__inputs">
      <ControlInput
        v-model="userData.email"
        required
        name="email"
        title="Email"
        type="email"
        placeholder="Введите Email"
      />
      <ControlInput
        v-model="userData.password"
        required
        name="password"
        title="Пароль"
        type="password"
        placeholder="Введите пароль"
      />
    </div>
    <div class="registration-form__footer">
      <ControlButton type="submit" class="registration-form__submit">Войти</ControlButton>
      <span
        >У вас нет аккаунта? <br />
        <button type="button" class="like-link" @click="() => openForm(RegistrationForm)">
          Зарегистрируйтесь!
        </button>
      </span>
    </div>
  </form>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/shared/form.scss';
</style>
