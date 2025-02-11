<script setup lang="ts">
import AppHeader from '@/components/widgets/app/app-header.vue'
import AppPopup from '@/components/widgets/app/app-popup.vue'
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import { onMounted } from 'vue'

const userStore = useUserStore()
const { initUser } = userStore
onMounted(async () => {
  await initUser()
})
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppPopup />
</template>

<style scoped lang="scss"></style>
