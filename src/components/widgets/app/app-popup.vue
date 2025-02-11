<script setup lang="ts">
import ICross from '@/components/svg/i-cross.vue'
import ControlButton from '@/components/ui/control-button.vue'
import { usePopupStore } from '@/stores/popup'
import { computed } from 'vue'

const popupStore = usePopupStore()

const visibility = computed(() => popupStore.visibility)
</script>
<template>
  <!-- <Transition name="popup-appear"> -->
  <div v-if="visibility" class="app-popup" @click="popupStore.visibility = false">
    <div class="app-popup__wrapper" @click.stop>
      <ControlButton
        class="app-popup__close"
        preference="round"
        @click="popupStore.visibility = false"
        ><ICross
      /></ControlButton>
      <component :is="popupStore.component" />
    </div>
    <div class="app-popup__overlay" />
  </div>
  <!-- </Transition> -->
</template>
<style lang="scss">
@import '/src/assets/styles/base/mixins.scss';
@import '/src/assets/styles/base/vars.scss';
.app-popup {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__close {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  &__wrapper {
    position: relative;
    max-width: 100%;
    padding: 42px 16px;
    height: fit-content;
    z-index: 2;
    background-color: $dark-light;
    border-radius: 40px;
    overflow: auto;

    @include bp($md) {
      padding: 56px;
      width: 576px;
    }
    @include bp($lg) {
      max-width: 594px;
    }
    @include bp($xl) {
      max-width: 780px;
      padding: 80px;
    }
  }
  &__overlay {
    background-color: transparentize($dark, 0.7);
    z-index: 1;
    position: absolute;
    inset: 0;
  }
}
</style>
