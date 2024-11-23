import { createRouter, createWebHistory } from 'vue-router'
import { bottomAlert } from '@/store/bottomAlert'
import { userState } from '@/store/userStore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/Settings.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
        meta: {
          redirectIfSignedIn: true
        }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue'),
        meta: {
          redirectIfSignedIn: true
        }
      }
    ]
  }
]

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  if (to.matched.some((record) => record.meta.redirectIfSignedIn)) {
    if (await getCurrentUser()) {
      setTimeout(() => {
        bottomAlert.openAsSuccess(`Signed in automatically`)
      }, 300)
      return { name: 'home' }
    }
  }

  // KICK USER OUT IF NOT SIGNED IN
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!(await getCurrentUser())) {
      setTimeout(() => {
        bottomAlert.openAsError(
          `Please sign in to access the "${to.name}" page`
        )
      }, 300)
      return { name: 'login' }
    }
  }
})
export default router
