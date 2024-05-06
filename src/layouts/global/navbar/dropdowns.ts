import { ref, onMounted, onUnmounted } from 'vue'

export default function useDropdowns(): any {
  const options = ref<boolean>()
  const optionsElement = ref<HTMLElement | null>()

  const toggleDropdown = (): void => {
    options.value = !options.value
  }

  const handleClickOutSide = (event: Event): void => {
    if (optionsElement.value && !optionsElement.value.contains(event.target as Node)) {
      options.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutSide)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutSide)
  })

  return {
    options,
    optionsElement,
    toggleDropdown
  }
}
