<template>
  <nav class="pl-2 pr-4 border-b border-base-300  py-2 flex items-center justify-between md:justify-between">
    <!-- LEFT: burger + logo -->
    <div class="flex items-center gap-4">
      <!-- burger -->
      <label class="swap swap-rotate md:w-12" >
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" @click="toggleSideBar"/>

        <!-- hamburger icon -->
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
          viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <!-- close icon -->
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
          viewBox="0 0 512 512">
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      <!-- logo -->
      <h1 class="hidden md:flex text-xl sm:text-2xl font-bold">AC [0.1]</h1>
    </div>

    <!-- RIGHT: buttons -->
    <div class="flex items-center gap-2">
      <!-- search -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom btn-lg md:btn-md" data-tip="Search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
      <!-- language -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom btn-lg md:btn-md" data-tip="Language">
        <font-awesome-icon icon="fa-solid fa-globe" />
      </button>

      <!-- support -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom btn-lg md:btn-md" data-tip="Support">
        <font-awesome-icon icon="fa-solid fa-question-circle" />
      </button>

      <!-- user profile -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom btn-lg md:btn-md" data-tip="Settings">
        <font-awesome-icon icon="fa-solid fa-gear" />
      </button>

      <!-- logout -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom btn-lg md:btn-md" data-tip="Logout">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useSideBar } from '@/composables/useSideBar';

const { toggleSideBar } = useSideBar();
</script>

<style scoped></style>
