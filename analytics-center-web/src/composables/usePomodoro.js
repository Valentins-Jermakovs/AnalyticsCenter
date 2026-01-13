import { ref, reactive, watch } from 'vue'

// Create timer sound effect
import timerSound from '@/assets/sounds/timer.mp3' // Import Timer sound
const audio = new Audio(timerSound) // Create audio object
audio.volume = 1.0 // Set volume

// Function that play timer sound
function playSound(t) {
  audio.currentTime = 0
  audio.play().catch(() => {
    if (t) alert(t('system.pomodoro.notifications.error'))
  })
}

// Request notification permission
function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission()
  }
}

// Show notification
function showNotification(t) {
  if (!t) return

  const title =
    timerObj.status === 'work'
      ? t('system.pomodoro.notifications.work_time_title')
      : t('system.pomodoro.notifications.break_time_title')
  const body =
    timerObj.status === 'work'
      ? t('system.pomodoro.notifications.work_time_body')
      : t('system.pomodoro.notifications.break_time_body')

  if ('Notification' in window) {
    new Notification(title, { body })
  }
}

// Settings and Timer switcher
const timer = ref(true)
const settings = ref(false)

// Timer settings
const selectedSession = ref(4)
const selectedWork = ref(25)
const selectedBreak = ref(5)

// Temp timer settings
const tempSelectedSession = ref(4)
const tempSelectedWork = ref(25)
const tempSelectedBreak = ref(5)

// Timer object
const timerObj = reactive({
  status: 'work', // work || break
  currentSession: 1,
  currentTime: selectedWork.value * 60,
})

// Watchers - update timer on settings changes
watch(selectedWork, (newVal) => {
  if (timerObj.status === 'work') {
    timerObj.currentTime = newVal * 60
  }
})
watch(selectedBreak, (newVal) => {
  if (timerObj.status === 'break') {
    timerObj.currentTime = newVal * 60
  }
})

// Session switcher
function switchSession(direction) {
  if (direction == 'next' && timerObj.currentSession < selectedSession.value) {
    if (timerObj.status == 'work') {
      timerObj.status = 'break'
      timerObj.currentSession += 1
      timerObj.currentTime = selectedBreak.value * 60
    } else if (timerObj.status == 'break') {
      timerObj.status = 'work'
      timerObj.currentSession += 1
      timerObj.currentTime = selectedWork.value * 60
    }
  } else if (direction == 'prev' && timerObj.currentSession > 1) {
    if (timerObj.status == 'work') {
      timerObj.status = 'break'
      timerObj.currentSession -= 1
      timerObj.currentTime = selectedBreak.value * 60
    } else if (timerObj.status == 'break') {
      timerObj.status = 'work'
      timerObj.currentSession -= 1
      timerObj.currentTime = selectedWork.value * 60
    }
  }
}

let timerInterval = false

// Launch timer
function launchTimer(t) {
  requestNotificationPermission()
  if (timerInterval) return
  timer.value = true

  timerInterval = setInterval(() => {
    if (timerObj.currentTime > 0) {
      timerObj.currentTime -= 1
    } else {
      showNotification(t) //
      playSound(t) //
      stopTimer()
    }
  }, 1000)
}

// Next launch
function nextLaunch(t) {
  if (timerObj.currentTime === 0) {
    switchSession('next')
  }
  launchTimer(t)
}

// Stop timer
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = false
  }
}

// Reset timer
function resetTimer() {
  stopTimer()
  timerObj.status = 'work'
  timerObj.currentSession = 1
  timerObj.currentTime = selectedWork.value * 60
}

// Export functions
export function useTimerLogic(t) {
  return {
    selectedSession,
    selectedWork,
    selectedBreak,
    timer,
    settings,
    timerObj,
    switchSession,
    launchTimer,
    stopTimer,
    resetTimer,
    nextLaunch,
    tempSelectedSession,
    tempSelectedWork,
    tempSelectedBreak,
  }
}
