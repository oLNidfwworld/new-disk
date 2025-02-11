<script setup lang="ts">
import IEnter from '@/components/svg/i-enter.vue'
import ILogo from '@/components/svg/i-logo.vue'
import IUser from '@/components/svg/i-user.vue'
import ControlButton from '@/components/ui/control-button.vue'
import { useUserStore } from '@/stores/user'
import { openForm } from '@/utils/popup-contorl'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import RegistrationForm from '../forms/registration-form.vue'

const userStore = useUserStore()
const { isLoggedIn, userData } = storeToRefs(userStore)
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <RouterLink class="flex items-center" to="/">
          <ILogo class="header__logo" />
        </RouterLink>
        <ControlButton v-if="!isLoggedIn" @click="() => openForm(RegistrationForm)">
          <IEnter />
          <span>Вход</span>
        </ControlButton>
        <RouterLink v-else to="/notes" class="items-center flex gap-3 text-white">
          <span class="header__header-uname text-sm">
            {{ userData?.email }}
          </span>
          <IUser />
        </RouterLink>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/helpers.scss';
@import '/src/assets/styles/base/vars.scss';
@import '/src/assets/styles/base/mixins.scss';
.header {
  &__wrapper {
    padding: 40px 0;
    justify-content: space-between;
    display: flex;
  }
  &__logo {
    max-width: 154px;
    display: block;
    @include bp($md) {
      max-width: unset;
    }
  }
  &__header-uname {
    display: none;
    @include bp($md) {
      display: block;
    }
  }
}
</style>
