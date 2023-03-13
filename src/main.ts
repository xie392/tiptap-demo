import { createApp } from 'vue'
import '@/assets/reset.less'
import './style.less'
import App from './App.vue'
import '@/assets/font'

import SvgIcon from '@/components/svg-icon.vue'

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.mount('#app')
