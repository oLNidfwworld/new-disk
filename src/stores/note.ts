import type { NoteFields, NoteRecord } from '@/assets/types/note'
import { myFetch } from '@/utils/fetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notesData = ref<NoteRecord[]>([])
  async function getUserNotes(accessToken: string) {
    const response = await myFetch<NoteRecord[]>('/notes', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!response) return
    if ('statusCode' in response) return

    notesData.value = response
  }
  async function addNote(data: NoteFields, accessToken: string) {
    const response = await myFetch<NoteRecord>('/notes', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    })

    if (!response) return false
    if ('statusCode' in response) return false

    notesData.value.push(response)
    return true
  }
  async function removeNote(id: string | number, accessToken: string) {
    const response = await myFetch<number>(`/notes/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    if (!response || response !== 200) return false
    const indexToDelete = notesData.value.findIndex((item) => item.id == id)

    if (indexToDelete != -1) notesData.value.splice(indexToDelete, 1)

    return true
  }

  return {
    notesData,
    getUserNotes,
    removeNote,
    addNote,
  }
})
