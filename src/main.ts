import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import '@/assets/font'

import SvgIcon from '@/components/svg-icon.vue'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.config.unwrapInjectedRef = true
app.mount('#app')
