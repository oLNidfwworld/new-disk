import { defineStore } from 'pinia'
import { ref, shallowRef, triggerRef, watch, type DefineComponent } from 'vue'
import {  useRouter } from 'vue-router'

export const usePopupStore = defineStore('popup', () => {
  const component =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shallowRef<DefineComponent<Record<string, unknown>, Record<string, unknown>, any>>()
  const visibility = ref(false)

  const router = useRouter()

  const setComponent = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newComponent: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>,
  ) => {
    component.value = newComponent
    triggerRef(component)
  }

  const setVisibility = (newValue: boolean) => {
    visibility.value = newValue
  }
  watch(visibility, (val) => {
    if (!val) {
      if (router.options.history.state?.back) router.back()
      else router.push('/')
    }
  })

  watch(
    () => visibility.value,
    (newValue) => {
      document.body.style.overflow = newValue ? 'hidden' : 'initial'
    },
  )

  return {
    component,
    visibility,

    setComponent,
    setVisibility,
  }
})
