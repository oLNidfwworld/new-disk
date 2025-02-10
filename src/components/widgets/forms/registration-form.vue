<script setup lang="ts">
import ControlButton from '@/components/ui/control-button.vue'
import ControlInput from '@/components/ui/control-input.vue'
</script>

<template>
  <form class="registration-form">
    <h2 class="text-heading-lg">Регистрация</h2>
    <div class="registration-form__inputs">
      <ControlInput title="Email" type="email" placeholder="Введите Email" />
      <ControlInput title="Пароль" type="password" placeholder="Введите пароль" />
      <ControlInput title="Пароль ещё раз" type="password" placeholder="Пароль ещё раз" />
    </div>
    <div class="registration-form__footer">
      <ControlButton class="registration-form__submit">Войти</ControlButton>
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
@import '/src/assets/styles/helpers.scss';
@import '/src/assets/styles/base/vars.scss';
@import '/src/assets/styles/base/mixins.scss';
.registration-form {
  display: flex;
  flex-direction: column;
  gap: 28px;
  &__inputs {
    display: flex;
    gap: 16px;
    flex-direction: column;
  }
  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 18px;

    @include bp($md) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
}
</style>
