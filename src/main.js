import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebase/init'

initializeApp(firebaseConfig)

const app = createApp(App)

registerPlugins(app)

app.config.performance = true
app.mount('#app')
