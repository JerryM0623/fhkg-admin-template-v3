import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/home',
      component: () => import('@/layout/PageLayout/PageLayout.vue'),
      meta: {
        breadName: '会议入场证', // 面包屑名称
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/HomePage/HomePage.vue'),
          meta: {
            breadName: '首页',
          },
        },
        {
          path: 'meeting',
          name: 'Meeting',
          component: () => import('@/views/MeetingPage/MeetingPage.vue'),
          meta: {
            breadName: '会议列表',
          },
        },
        {
          path: 'enrolled',
          name: 'Enrolled',
          component: () => import('@/views/EnrolledPage/EnrolledPage.vue'),
          meta: {
            breadName: '报名列表',
          },
        },
        {
          path: 'write-off',
          name: 'WriteOff',
          component: () => import('@/views/WriteOffPage/WriteOffPage.vue'),
          meta: {
            breadName: '核销记录',
          },
        },
        {
          path: 'accounts',
          name: 'Accounts',
          component: () => import('@/views/AccountsPage/AccountsPage.vue'),
          meta: {
            breadName: '账号管理',
          },
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginPage/LoginPage.vue')
    }
  ]
})

export default router
