<script setup lang="ts">
import type { RegistrationInput } from '@/assets/types/user';
import ControlButton from '@/components/ui/control-button.vue'
import ControlInput from '@/components/ui/control-input.vue'
import { useUserStore } from '@/stores/user';
import { login, register } from '@/utils/auth';
import { hideForm } from '@/utils/popup-contorl';
import { nextTick, reactive } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const { setAccessToken, setUserData } = userStore

const userData = reactive<RegistrationInput>({
  confirm_password: '',
  email: '',
  password: ''
})

async function submit( ) {
  const data =  await register(userData);
  if (!data) return;
  if ( 'statusCode' in data ) {
    return;
  }
  setUserData(data);
  const authData = await login(userData);
  if ( !authData ) return;
  if ( !('statusCode' in authData) ) {
    setAccessToken(authData.accessToken);
    hideForm();
    await nextTick();
    useRouter().push('/notes')
  }
}
</script>

<template>
  <form class="registration-form" @submit.prevent="submit">
    <h2 class="text-heading-lg">Регистрация</h2>
    <div class="registration-form__inputs">
      <ControlInput v-model="userData.email" required title="Email" type="email" name="email" placeholder="Введите Email" />
      <ControlInput v-model="userData.password" required title="Пароль" type="password" name="password" placeholder="Введите пароль" />
      <ControlInput v-model="userData.confirm_password" required title="Пароль ещё раз" type="password" name="confirm_password" placeholder="Пароль ещё раз" />
    </div>
    <div class="registration-form__footer">
      <ControlButton type="submit" class="registration-form__submit">Войти</ControlButton>
      <span>У вас есть аккаунт? <RouterLink to="/login">Войдите!</RouterLink> </span>
    </div>
  </form>
</template>
<style lang="scss">
@import '/src/assets/styles/base/mixins.scss';
@import '/src/assets/styles/base/vars.scss';
.registration-form {
  &__submit {
    width: 100% !important;

    .control-button__wrapper {
      justify-content: center;
    }

    @include bp($md) {
      width: auto !important;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '/src/assets/styles/shared/form.scss';
</style>
