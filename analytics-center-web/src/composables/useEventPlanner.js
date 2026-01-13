import { ref, computed, watch } from 'vue'

// Array of events
const events = ref([])
// New event object
const newEvent = ref({
  title: '',
  description: '',
  time: 5,
  timeRemaining: 0,
  timeString: '',
  status: false,
  selected: false,
})
// Modal windows state
const newModal = ref(false)
const deleteModal = ref(false)
const readModal = ref(false)
const NotificationWindow = ref(false)
// current event
const currentEvent = ref({
  title: '',
  description: '',
  timeString: '',
})

// Methods
const addEvent = () => {
  // Add new event
  if (events.value.length === 0) {
    newEvent.value.status = true
  }
  events.value.push(newEvent.value)
  // Write time in time string
  newEvent.value.timeString = newEvent.value.time + ' min'
  // Write remaining time in seconds
  newEvent.value.timeRemaining = newEvent.value.time * 60
  newEvent.value = {
    title: '',
    description: '',
    time: 5,
    timeRemaining: 0,
    timeString: '',
    status: false,
    selected: false,
  }
  newEventModal()
}
const deleteSelectedEvent = (index) => {
  // Delete selected event
  events.value.splice(index, 1)
}
const isActiveEvent = () => {
  // If event have a position in array == 0 then it is active
  if (events.value.length > 0) {
    events.value[0].status = true
  }
}

// === Computed ===
// formatted time for current event
const formattedTime = computed(() => {
  // if events array is empty
  if (events.value.length === 0) {
    return '00:00'
  }
  // format the object time to seconds
  const fullTime = events.value[0].timeRemaining
  const minutes = Math.floor(fullTime / 60)
  const seconds = fullTime % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

// === Timer ===
let timer = null
// Button launch timer for events[value][0]
const launchTimer = () => {
  if (timer || events.value.length === 0) return
  timer = setInterval(() => {
    if (events.value[0].timeRemaining > 0) {
      events.value[0].timeRemaining -= 1
    } else {
      clearInterval(timer)
      timer = null
      openNotificationWindow()
    }
  }, 1000)
}
// Button pause timer for events[value][0]
const pauseTimer = () => {
  clearInterval(timer)
  timer = null
}

// === Delete events with selected status ===
const deleteSelectedEvents = () => {
  // Stop current timer
  if (timer) {
    clearInterval(timer)
    timer = null
  }

  // Delete selected event
  events.value = events.value.filter((event) => !event.selected)

  events.value.forEach((event) => {
    event.status = false
    event.selected = false
  })

  // Set first event status to active, if it exist
  if (events.value.length > 0) {
    events.value[0].status = true
  }

  deleteEventModal()
}
// When launch delete events, change selected status to true
const launchDeleteEvents = (index) => {
  deleteEventModal()
  events.value[index].selected = true
}
const abortDelete = () => {
  for (let i = 0; i < events.value.length; i++) {
    events.value[i].selected = false
  }
  deleteEventModal()
}
// === Read event ===
const readEvent = (index) => {
  currentEvent.value.title = events.value[index].title
  currentEvent.value.description = events.value[index].description
  currentEvent.value.timeString = events.value[index].timeString
  readEventModal()
}

// === Modal windows switchers ===
const newEventModal = () => (newModal.value = !newModal.value)
const deleteEventModal = () => (deleteModal.value = !deleteModal.value)
const readEventModal = () => (readModal.value = !readModal.value)

const openNotificationWindow = () => {
  NotificationWindow.value = true
  playSound()
}

// Create timer sound effect
import timerSound from '@/assets/sounds/timer.mp3' // Import Timer sound
const audio = new Audio(timerSound) // Create audio object
audio.volume = 0.7 // Set volume

// Function that play timer sound
function playSound() {
  audio.currentTime = 0 // Reset audio - if it was already played
  audio.play().catch((err) => {
    // Play audio - catch error
    alert("Your browser doesn't support audio or it is disabled. Please enable it and try again.")
  })
}

const closeNotificationWindow = () => {
  NotificationWindow.value = false

  events.value.splice(0, 1)

  if (events.value.length > 0) {
    events.value[0].status = true
    launchTimer()
  }
}

// Export all functions and variables
export function useEventPlanner() {
  return {
    events,
    newEvent,
    newModal,
    deleteModal,
    addEvent,
    deleteSelectedEvent,
    isActiveEvent,
    newEventModal,
    deleteEventModal,
    formattedTime,
    launchTimer,
    pauseTimer,
    deleteSelectedEvents,
    launchDeleteEvents,
    abortDelete,
    readEvent,
    readModal,
    readEventModal,
    currentEvent,
    NotificationWindow,
    openNotificationWindow,
    closeNotificationWindow,
    playSound,
  }
}
