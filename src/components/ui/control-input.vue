<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue'

const model = defineModel<string | number>({
  required: false,
})
defineOptions({
  inheritAttrs: false,
})
const uid = useId()
const attrs = useAttrs()
const elementId = computed<string>(() => (attrs.id ? (attrs.id as string) : uid))
</script>
<template>
  <div class="control-input">
    <label v-if="$attrs.title" class="control-input__label" :for="elementId">
      {{ $attrs.title }}
    </label>
    <input v-bind="$attrs" :id="elementId" v-model="model" class="control-input__input" />
  </div>
</template>
<style scoped lang="scss">
@import '/src/assets/styles/base/mixins.scss';
@import '/src/assets/styles/base/vars.scss';

.control-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  &__label {
    color: $gray;
    padding: 0 24px;
  }

  &__input {
    background-color: $white;
    width: auto;
    font-size: inherit;
    border-radius: 36px;
    padding: 22.5px 28px;
    width: auto;
    border: 2px solid transparent;
    font-family: inherit;
    transition-timing-function: ease-in-out;
    transition-duration: $transition-durtaion-fast;
    transition-property: border-color;

    &::placeholder {
      color: $gray;
    }

    @media (hover: hover) {
      &:hover {
        border-color: $green-light;
      }
    }
  }
}
</style>
