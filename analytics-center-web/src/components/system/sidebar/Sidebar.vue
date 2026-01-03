<template>
    <aside class="h-full border-r border-base-300 flex flex-col items-center p-2">
        <!-- Menu -->
        <ul class="menu gap-2">
            <SidebarItem v-for="(item, index) in menu" :key="index" :title="item.title" :icon="item.icon" :toName="item.routeName">
            </SidebarItem>
        </ul>
    </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()

const menu = [
    {
        title: 'Dashboard',
        icon: 'fa-solid fa-cube',
        routeName: 'dashboard'
    },
    {
        title: 'News',
        icon: 'fa-solid fa-newspaper',
        routeName: 'news'
    },
    {
        title: 'Library',
        icon: 'fa-solid fa-book',
        routeName: 'library'
    },
    {
        title: 'Calendar',
        icon: 'fa-solid fa-calendar',
        routeName: 'calendar'
    },
    {
        title: 'Notes',
        icon: 'fa-solid fa-sticky-note',
        routeName: 'notes'
    },
    {
        title: 'Analytics',
        icon: 'fa-solid fa-chart-line',
        routeName: 'analytics'
    },
    {
        title: 'Archive',
        icon: 'fa-solid fa-archive',
        routeName: 'archive'
    },
    {
        title: 'dataAnalyzer',
        icon: 'fa-solid fa-chart-line',
        routeName: 'dataAnalyzer'
    },
    {
        title: 'dataCompare',
        icon: 'fa-solid fa-chart-line',
        routeName: 'dataCompare'
    },
]
</script>
