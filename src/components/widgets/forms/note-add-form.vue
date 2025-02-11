<script setup lang="ts">
import type { NoteFields } from '@/assets/types/note'
import ControlButton from '@/components/ui/control-button.vue'
import ControlInput from '@/components/ui/control-input.vue'
import ControlTextarea from '@/components/ui/control-textarea.vue'
import { useNotesStore } from '@/stores/note'
import { useUserStore } from '@/stores/user'
import { getCookie } from '@/utils/cookie'
import { hideForm } from '@/utils/popup-contorl'
import { reactive } from 'vue'

const newNoteData = reactive<NoteFields>({
  title: '',
  content: '',
})

const notesStore = useNotesStore()
const { addNote } = notesStore

const userStore = useUserStore()

async function submit() {
  if (userStore.accessToken) {
    const isAdded = await addNote(newNoteData, userStore.accessToken)
    if (isAdded) hideForm()
  }
}
</script>

<template>
  <form class="registration-form" @submit.prevent="submit">
    <h2 class="text-heading-lg">Добавление заметки</h2>
    <div class="registration-form__inputs">
      <ControlInput
        v-model="newNoteData.title"
        required
        name="title"
        type="text"
        title="Название заметки"
        maxlength="100"
        placeholder="Введите название"
      />
      <ControlTextarea
        v-model="newNoteData.content"
        required
        name="content"
        title="Текст заметки"
        type="text"
        maxlength="500"
        placeholder="Введите текст"
      />
    </div>
    <div class="registration-form__footer">
      <ControlButton class="registration-form__submit">Добавить</ControlButton>
    </div>
  </form>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/shared/form.scss';
</style>
