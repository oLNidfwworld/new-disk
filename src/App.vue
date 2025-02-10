<script setup lang="ts">
import AppHeader from '@/components/widgets/app/app-header.vue'
import AppPopup from '@/components/widgets/app/app-popup.vue'
import { computed, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { hideForm, openForm } from './utils/popup-contorl'
import RegistrationForm from './components/widgets/forms/registration-form.vue'
import LoginForm from './components/widgets/forms/login-form.vue'

const route = useRoute()
const isRegistration = computed(() => route.path == '/registration')
const isLogin = computed(() => route.path == '/login')
watch([isRegistration, isLogin], ([isRegistrationVal, isLoginVal]) => {
  if (isRegistrationVal) openForm(RegistrationForm)
  else if (isLoginVal) openForm(LoginForm)
  else hideForm()
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
