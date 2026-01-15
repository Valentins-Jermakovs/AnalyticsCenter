<template>
    <div class="w-full flex p-3 justify-between items-center
    bg-base-200 border border-base-300 flex-col gap-5 lg:flex-row">
        <!-- Title -->
        <div class="w-full flex items-center justify-start">
            <h1 class="text-2xl font-bold">Projects</h1>
        </div>
        <!-- Create project button -->
        <div class="w-full lg:w-auto flex gap-5 justify-around items-center">
            <button class="btn btn-primary text-nowrap" @click="editOpen = true">Edit Project</button>
            <button class="btn btn-primary text-nowrap" @click="createOpen = true">Create Tasks</button>
        </div>
    </div>
    <!-- Edit project modal -->
    <BaseDialog v-model="editOpen" title="Edit project" :confirm-text="t('common.edit')"
        :cancel-text="t('common.cancel')">
        <!-- project title input -->
        <div class="flex flex-col gap-2 w-full">
            <label class="label">
                <span class="label-text">Edit Project title</span>
            </label>
            <input type="text" placeholder="Project title" class="input input-bordered w-full" />
        </div>
    </BaseDialog>
    <!-- Create project modal -->
    <!-- Create task modal -->
    <BaseDialog title="Create task" v-model="createOpen" :confirm-text="t('common.create')"
        :cancel-text="t('common.cancel')">
        <div class="flex flex-col gap-4 w-full">

            <!-- Task title -->
            <div class="flex flex-col gap-1">
                <label class="label p-0">
                    <span class="label-text">Task title</span>
                </label>
                <input type="text" placeholder="Task title" class="input input-bordered w-full" />
            </div>

            <!-- Dates -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1">
                    <label class="label p-0">
                        <span class="label-text">Start date</span>
                    </label>
                    <input type="date" class="input input-bordered w-full" />
                </div>

                <div class="flex flex-col gap-1">
                    <label class="label p-0">
                        <span class="label-text">End date</span>
                    </label>
                    <input type="date" class="input input-bordered w-full" />
                </div>
            </div>

            <!-- Selects -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1">
                    <label class="label p-0">
                        <span class="label-text">Priority</span>
                    </label>
                    <select class="select select-bordered w-full">
                        <option disabled selected>Select priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>

                <div class="flex flex-col gap-1">
                    <label class="label p-0">
                        <span class="label-text">Status</span>
                    </label>
                    <select class="select select-bordered w-full">
                        <option disabled selected>Select status</option>
                        <option>Pending</option>
                        <option>In progress</option>
                        <option>Done</option>
                    </select>
                </div>
            </div>

        </div>
    </BaseDialog>

</template>

<script setup>
import BaseDialog from '@/components/ui/BaseDialog.vue';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from 'vue'

const editOpen = ref(false)
const createOpen = ref(false)
</script>

<style scoped></style>