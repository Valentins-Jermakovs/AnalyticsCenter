import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/landing/LandingView.vue' // landing page
import LoginView from '@/views/auth/LoginView.vue' // login
import RegisterView from '@/views/auth/RegisterView.vue' // register
import SystemLayout from '@/components/layout/SystemLayout.vue' // system layout
import LogoutView from '@/views/logout/LogoutView.vue' // logout

import NotFound from '@/views/errors/NotFound.vue' // 404 error
import EmailRedirect from '@/components/common/EmailRedirect.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 404 error page
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    // Email redirect
    {
      path: '/email-redirect',
      name: 'email-redirect',
      component: EmailRedirect,
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
      path: '/logout',
      name: 'logout',
      component: LogoutView,
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
          path: 'dataAnalyzer',
          name: 'dataAnalyzer',
          component: () => import('@/views/system/DataAnalyzerView.vue'),
          meta: {
            title: 'Data Analyzer',
          },
          redirect: { name: 'dataAnalyzerPage' },
          children: [
            {
              path: '',
              name: 'dataAnalyzerPage',
              component: () => import('@/components/pages/dataAnalyzer/analyzerPage.vue'),
            },
            {
              path: 'visualization',
              name: 'visualization',
              component: () => import('@/components/pages/dataAnalyzer/visualisationPage.vue'),
            },
          ],
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
          path: 'notifications',
          name: 'notifications',
          component: () => import('@/views/system/NotificationsView.vue'),
          meta: {
            title: 'Notifications',
          },
        },
        {
          path: 'pomodoro',
          name: 'pomodoro',
          component: () => import('@/views/system/PomodoroView.vue'),
          meta: {
            title: 'Pomodoro',
          },
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/system/NewsView.vue'),
          redirect: { name: 'newsList' },
          children: [
            {
              path: '',
              name: 'newsList',
              component: () => import('@/components/pages/news/newsListPage.vue'),
            },
            {
              path: ':id',
              name: 'newsDetails',
              component: () => import('@/components/pages/news/newsDetailsPage.vue'),
              props: true,
            },
          ],
        },
        {
          path: 'work',
          name: 'work',
          component: () => import('@/views/system/WorkView.vue'),
          meta: {
            title: 'Work',
          },
        },
      ],
    },
  ],
})

export default router
