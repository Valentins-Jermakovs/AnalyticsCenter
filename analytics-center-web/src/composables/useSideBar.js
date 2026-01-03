import { ref } from 'vue'

const isSideBarOpen = ref(true)

const toggleSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value
}

export function useSideBar() {
  return { isSideBarOpen, toggleSideBar }
}
