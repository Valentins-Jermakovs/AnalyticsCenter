<template>
    <div class="flex flex-col gap-4 w-full p-5 bg-base-200 border border-base-300
           lg:flex-row lg:items-center lg:justify-between">
        <!-- Search -->
        <div class="flex w-full gap-2 lg:max-w-md">
            <input type="text" placeholder="Search" class="input input-bordered w-full" />
            <button class="btn btn-secondary shrink-0">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>

        <!-- Action -->
        <div class="w-full lg:w-auto">
            <button class="btn btn-primary w-full lg:w-auto whitespace-nowrap" @click="dialogOpen = true">
                Create Project
            </button>
        </div>

        <!-- Create project modal -->
        <BaseDialog title="Create project" v-model="dialogOpen" :confirm-text="t('common.create')"
            :cancel-text="t('common.cancel')">
            <!-- project title input -->
            <div class="flex flex-col gap-2 w-full">
                <label class="label">
                    <span class="label-text">Project title</span>
                </label>
                <input type="text" placeholder="Project title" class="input input-bordered w-full" />
            </div>
        </BaseDialog>
    </div>
</template>

<script setup>
import BaseDialog from '@/components/ui/BaseDialog.vue';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from 'vue'

const dialogOpen = ref(false)
</script>

<style scoped></style>