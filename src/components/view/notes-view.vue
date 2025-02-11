<script setup lang="ts">
import { openForm } from '@/utils/popup-contorl'
import IPlus from '../svg/i-plus.vue'
import ControlButton from '../ui/control-button.vue'
import NoteCard from '../ui/note-card.vue'
import NoteAddForm from '../widgets/forms/note-add-form.vue'
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/note'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const notesStore = useNotesStore()
const { notesData } = storeToRefs(notesStore)
const { getUserNotes } = notesStore

const userStore = useUserStore()
const { accessToken, isLoggedIn } = storeToRefs(userStore)
const { userDataIsPending } = userStore

onMounted(async () => {
  if (!(await userDataIsPending)) return
  if (accessToken.value) await getUserNotes(accessToken.value)
})
</script>

<template>
  <div class="container">
    <div class="notes-list">
      <NoteCard v-for="item in notesData" :key="item.id" :item="item" />
    </div>
  </div>
  <ControlButton
    v-if="isLoggedIn"
    class="note-add"
    preference="round"
    @click="() => openForm(NoteAddForm)"
  >
    <IPlus />
  </ControlButton>
</template>
<style lang="scss">
@import '/src/assets/styles/base/vars.scss';
@import '/src/assets/styles/base/mixins.scss';
.notes-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @include bp($lg) {
    grid-template-columns: repeat(3, 1fr);
  }
  @include bp($xl) {
    gap: 40px;
  }
}
.note-add {
  position: fixed;
  right: 8px;
  bottom: 40px;

  @include bp($xl) {
    right: 40px;
  }
}
</style>
