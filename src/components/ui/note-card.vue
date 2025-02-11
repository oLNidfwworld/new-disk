<script setup lang="ts">
import type { NoteRecord } from '@/assets/types/note'
import ICross from '../svg/i-cross.vue'
import { getCookie } from '@/utils/cookie'
import { useNotesStore } from '@/stores/note'
import { useUserStore } from '@/stores/user'
interface IProps {
  item: NoteRecord
}
const props = defineProps<IProps>()

const userStore = useUserStore()
const notesStore = useNotesStore()

async function removeThis() {
  if (!userStore.accessToken) return
  await notesStore.removeNote(props.item.id, userStore.accessToken)
}
</script>

<template>
  <div class="note-card">
    <div class="note-card__header">
      <div class="note-card__title text-heading-sm">
        {{ item.title }}
      </div>
    </div>
    <div class="note-card__content">
      <p class="text-xl">
        {{ item.content }}
      </p>
    </div>
    <div class="note-card__footer">
      <button class="note-card__del" @click="removeThis">
        <ICross />
        <span class="text-xl">Удалить</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/base/vars.scss';
.note-card {
  background-color: $green-light;
  border-radius: 12px;
  overflow: hidden;
  &__header,
  &__content {
    padding: 20px 28px;
  }
  &__footer {
    padding: 8px;
    display: flex;
    justify-content: end;
  }
  &__header {
    border-bottom: 1px solid $gray;
  }
  &__del {
    background-color: transparent;
    appearance: unset;
    padding: 12px 24px;
    display: flex;
    gap: 12px;
    align-items: center;
    cursor: pointer;
  }
}
</style>
