import { createApp } from 'vue'
import { Quasar } from 'quasar'
import './style.css'
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, 
})
myApp.mount('#app')
