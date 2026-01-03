import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/landing/LandingView.vue' // landing page
import LoginView from '@/views/auth/LoginView.vue' // login
import RegisterView from '@/views/auth/RegisterView.vue' // register
import SystemLayout from '@/components/layout/SystemLayout.vue' // system layout

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/system',
      name: 'system',
      component: SystemLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/system/DashboardView.vue'),
          meta: {
            title: 'Dashboard',
          },
        },
        {
          path: 'analytics',
          name: 'analytics',
          component: () => import('@/views/system/AnalyticsView.vue'),
          meta: {
            title: 'Analytics',
          },
        },
        {
          path: 'notes',
          name: 'notes',
          component: () => import('@/views/system/NotesView.vue'),
          meta: {
            title: 'Notes',
          },
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('@/views/system/SettingsView.vue'),
          meta: {
            title: 'Settings',
          },
        },
        {
          path: 'dataAnalyzer',
          name: 'dataAnalyzer',
          component: () => import('@/views/system/DataAnalyzerView.vue'),
          meta: {
            title: 'Data Analyzer',
          },
        },
        {
          path: 'dataCompare',
          name: 'dataCompare',
          component: () => import('@/views/system/DataCompareView.vue'),
          meta: {
            title: 'Data Compare',
          },
        },
        {
          path: 'calendar',
          name: 'calendar',
          component: () => import('@/views/system/CalendarView.vue'),
          meta: {
            title: 'Calendar',
          },
        },
        {
          path: 'archive',
          name: 'archive',
          component: () => import('@/views/system/ArchiveView.vue'),
          meta: {
            title: 'Archive',
          },
        },
        {
          path: 'library',
          name: 'library',
          component: () => import('@/views/system/LibraryView.vue'),
          meta: {
            title: 'Library',
          },
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/system/NewsView.vue'),
          meta: {
            title: 'News',
          },
        }
      ],
    },
  ],
})

export default router
