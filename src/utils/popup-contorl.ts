import { usePopupStore } from '@/stores/popup'
import type { DefineComponent } from 'vue'

export const openForm = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>,
) => {
  const popupStore = usePopupStore()
  popupStore.setComponent(component)
  popupStore.setVisibility(true)
}

export const showForm = () => {
  const popupStore = usePopupStore()
  popupStore.setVisibility(true)
}

export const hideForm = () => {
  const popupStore = usePopupStore()
  popupStore.setVisibility(false)
}
