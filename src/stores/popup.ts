import { defineStore } from 'pinia'
import { ref, shallowRef, triggerRef, watch, type DefineComponent } from 'vue'

export const usePopupStore = defineStore('popup', () => {
  const component =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shallowRef<DefineComponent<Record<string, unknown>, Record<string, unknown>, any>>()
  const visibility = ref(false)

  const componentVariables = ref<unknown>()
  function setComponentVariables(data: unknown) {
    componentVariables.value = data
  }

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
    document.body.style.overflow = val ? 'hidden' : 'initial'
  })

  return {
    component,
    visibility,
    componentVariables,
    setComponentVariables,

    setComponent,
    setVisibility,
  }
})
