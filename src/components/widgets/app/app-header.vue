<script setup lang="ts">
import IEnter from '@/components/svg/i-enter.vue'
import ILogo from '@/components/svg/i-logo.vue'
import IUser from '@/components/svg/i-user.vue';
import ControlButton from '@/components/ui/control-button.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { isLoggedIn, userData } = storeToRefs(userStore);
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <RouterLink class="flex items-center" to="/">
          <ILogo class="header__logo" />
        </RouterLink>
        <ControlButton v-if="!isLoggedIn" to="/registration">
          <IEnter />
          <span>Вход</span>
        </ControlButton>
        <div v-else class="items-center flex gap-3">
          <span class="text-sm">
            {{ userData?.email }}
          </span>
          <IUser/>
        </div>
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
}
</style>
