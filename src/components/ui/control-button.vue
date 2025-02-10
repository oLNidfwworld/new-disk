<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface IProps {
  preference?: 'round'
  to?: string
  wrapperClass?: string
}
defineProps<IProps>()
</script>
<template>
  <component
    :is="to ? RouterLink : 'button'"
    class="control-button"
    :class="preference"
    v-bind="{ to }"
  >
    <div :class="wrapperClass" class="control-button__wrapper">
      <slot />
    </div>
  </component>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/base/vars.scss';
@import '/src/assets/styles/base/mixins.scss';
.control-button {
  display: block;
  width: fit-content;
  background-color: $green-light;
  padding: 12px 24px;
  border-radius: 32px;
  font-size: 20px;
  line-height: 1.6;
  color: $white;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition-timing-function: ease-in-out;
  transition-duration: $transition-durtaion-fast;
  transition-property: background-color, color;

  &__wrapper {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  @media (hover: hover) {
    &:hover {
      background-color: $green-middle;
      color: $white;
    }
  }
  &:active {
    background-color: $green-dark;
  }
  &:disabled {
    background-color: $gray;
  }
  &.round {
    padding: 20px;
  }
}
</style>
