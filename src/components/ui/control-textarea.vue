<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue'

const model = defineModel<string | number>({
  required: false,
})
defineOptions({
  inheritAttrs: false,
})
const modelLength = computed(() => model.value?.toString().length.toString())
const uid = useId()
const attrs = useAttrs()
const elementId = computed<string>(() => (attrs.id ? (attrs.id as string) : uid))
</script>
<template>
  <div class="control-input">
    <label v-if="$attrs.title" class="control-input__label" :for="elementId">
      {{ $attrs.title }}
    </label>
    <textarea v-bind="$attrs" :id="elementId" v-model="model" class="control-input__input" />
    <div v-if="$attrs.maxlength" class="control-input__additional-row">
      <span />
      <span v-if="modelLength && $attrs.maxlength" class="text-sm control-input__max">
        {{ modelLength }} / {{ $attrs.maxlength }}</span
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '/src/assets/styles/shared/input.scss';
textarea {
  resize: none;
  height: 280px;
}
</style>
