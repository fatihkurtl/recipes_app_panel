import { ref, onMounted, onUnmounted } from 'vue'

export default function usMobileMenu(): any {
  const mobileMenu = ref<boolean>()
  const mobileMenuElement = ref<HTMLElement | null>()

  const toggleMobileDropdown = (): void => {
    mobileMenu.value = !mobileMenu.value
  }

  const handleClickOutSide = (event: Event): void => {
    if (mobileMenuElement.value && !mobileMenuElement.value.contains(event.target as Node)) {
      mobileMenu.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutSide)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutSide)
  })

  return {
    mobileMenu,
    mobileMenuElement,
    toggleMobileDropdown
  }
}
